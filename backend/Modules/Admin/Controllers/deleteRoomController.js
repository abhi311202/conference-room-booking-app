import Room from "../Models/conferenceRoomModels.js";

export const deleteRoom = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedRoom = await Room.findByIdAndDelete(id);
    if (!deletedRoom) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json({ message: "Room deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting room", error });
  }
};
