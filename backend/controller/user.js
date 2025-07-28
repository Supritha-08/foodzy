const User=require("../models/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const userSignUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and Password are required" });
    }
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });
    const userObj = newUser.toObject();
    delete userObj.password;

    const token = jwt.sign(
      { email, id: newUser._id },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ token, user: userObj });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
const userlogin = async (req, res) => {

  const {email, password} = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password are required" });
  }
  let user = await User.findOne({email});
  if (user && await bcrypt.compare(password, user.password)) {
    let token=jwt.sign({email,id:user._id},process.env.SECRET_KEY,{expiresIn:"1h"});
    return res.status(200).json({ token,user:newUser});
  }
  else{
    return res.status(400).json({ message: "Invalid email or password" });
  }

}
const getUser=async(req,res)=>{
  const user=await User.findbyId(req.param.id)
  res.json({email:user.email})
  .catch(err => {
    console.error("Error fetching user:", err);
    res.status(500).json({ message: "Server error" });
  });
}

module.exports={userSignUp,userlogin,getUser}


