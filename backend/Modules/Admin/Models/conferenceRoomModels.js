import mongoose from "mongoose";

// Each slot has a start time, end time, and user reference
const slotSchema = new mongoose.Schema({
  startTime: {
    type: String, // e.g., "09:00"
    required: true,
  },
  endTime: {
    type: String, // e.g., "10:00"
    required: true,
  },
  bookedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const bookingSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  slots: [slotSchema], // Array of slot objects for this date
});

const conferenceRoomSchema = new mongoose.Schema({
  roomname: {
    type: String,
    required: true,
  },
  roomsize: {
    type: String,
    required: true,
  },
  amenities: {
    type: String,
  },
  capacity: {
    type: Number,
    required: true,
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
  },
  bookings: [bookingSchema], // Array of bookings by date
});

const Room = mongoose.model("Room", conferenceRoomSchema);

export default Room;
