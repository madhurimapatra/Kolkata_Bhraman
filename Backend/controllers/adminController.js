import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin";

// admin register
export const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newAdmin = new Admin({
      adminname: req.body.adminname,
      email: req.body.email,
      password: hash,
    });

    await newAdmin.save();

    res.status(200).json({ success: true, message: "Successfully created!" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create! Try again." });
  }
};

// admin login
export const login = async (req, res) => {
  try {
    const email = req.body.email;
    const admin = await Admin.findOne({ email });

    // if admin doesn't exist
    if (!admin) {
      return res
        .status(404)
        .json({ success: false, message: "Admin not found!" });
    }

    // if admin exists then check the passord or compare the password
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      admin.password
    );

    // if password incorrect
    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ susccess: false, message: "Incorrect email or password!" });
    }

    const { password, role, ...rest } = admin._doc;

    // create jwt token
    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    // set token in the browser cookies and send the response to the client
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({ token, data: { ...rest }, role });
  } catch (error) {
    res.status(500).json({ susccess: false, message: "Failed to login" });
  }
};
