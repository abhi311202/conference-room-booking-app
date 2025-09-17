import mongoose from "mongoose";
import Room from "../../Admin/Models/conferenceRoomModels.js";

export const bookSlot = async (req, res) => {
  try {
    const { roomId } = req.params;
    const { date, startTime, endTime, userId } = req.body;

    if (!date || !startTime || !endTime || !userId) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Validate roomId
    if (!mongoose.Types.ObjectId.isValid(roomId)) {
      return res.status(400).json({ message: "Invalid roomId." });
    }

    // Find the room
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: "Room not found." });
    }

    // Find or create booking for the date
    let booking = room.bookings.find(
      (b) =>
        b.date.toISOString().slice(0, 10) ===
        new Date(date).toISOString().slice(0, 10)
    );

    // Check for slot overlap
    if (booking) {
      const overlap = booking.slots.some((slot) => {
        // Prevent any overlap: startA < endB && endA > startB
        return startTime < slot.endTime && endTime > slot.startTime;
      });
      if (overlap) {
        return res
          .status(409)
          .json({ message: "Slot already booked for this time." });
      }
    }

    // Add slot to booking
    const slot = { startTime, endTime, bookedBy: userId };
    if (booking) {
      booking.slots.push(slot);
    } else {
      room.bookings.push({
        date: new Date(date),
        slots: [slot],
      });
    }

    await room.save();
    res.status(200).json({ message: "Slot booked successfully." });
  } catch (error) {
    console.error("Error booking slot:", error);
    res
      .status(500)
      .json({ message: "Error booking slot.", error: error.message });
  }
};
