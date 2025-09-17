import Admin from "../Models/adminModels.js";
import bcryptjs from "bcryptjs";

export const registerAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // console.log(`Username: ${username}, Password: ${password}`);

    const admin = await Admin.findOne({ username });

    if (admin) {
      return res.status(400).json({ message: "User already exists" });
    }
    // hasing password
    const hashPassword = await bcryptjs.hash(password, 10);
    const createdAdmin = new Admin({
      username: username,
      password: hashPassword,
    });
    await createdAdmin.save();
    res.status(201).json({ message: "Admin created successfully" });
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({ message: "Internal Server error" });
  }
};
