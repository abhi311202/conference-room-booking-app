import Room from "../Models/conferenceRoomModels.js";

export const addRoom = async (req, res) => {
  try {
    const { roomname, roomsize, amenities, capacity, ownerId } = req.body;

    // console.log(
    //   `Room Name: ${roomname}, Room Size: ${roomsize}, Amenities: ${amenities}, Capacity: ${capacity}`
    // );

    const room = await Room.findOne({ roomname: roomname });

    if (room) {
      return res
        .status(400)
        .json({ message: "Room with the same name already exists" });
    }
    // hasing password
    const createdRoom = new Room({
      roomname: roomname,
      roomsize: roomsize,
      amenities: amenities,
      capacity: capacity,
      ownerId: ownerId,
    });
    await createdRoom.save();
    res.status(201).json({ message: "Room added successfully" });
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({ message: "Internal Server error" });
  }
};
