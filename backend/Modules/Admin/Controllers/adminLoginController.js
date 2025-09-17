import Admin from "../Models/adminModels.js";
import bcryptjs from "bcryptjs";

export const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    const isMatch = await bcryptjs.compare(password, admin.password);

    if (!admin || !isMatch) {
      return res.status(400).json({ message: "Invalid Credintials" });
    } else {
      res.status(200).json({
        message: "Login successful",
        admin: {
          id: admin._id,
          username: admin.username,
        },
      });
    }
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal Server error" });
  }
};
