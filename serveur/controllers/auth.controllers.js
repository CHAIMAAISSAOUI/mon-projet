const User = require('../models/uesr shema')


const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt')
const register = async (req, res) => {
  try {
    const isUser = await User.findOne({ email: req.body.email })
    console.log(isUser)
    if (isUser) res.status(400).json({ massage: 'user already exist' })
    else {
      const hash = await bcrypt.hash(req.body.password, 10)
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hash
      })
    
    }
  } catch (error) {
    console.log(error)

    res.status(500).json({ massage: 'error' })
  }
}




const login = async (req,res)=>{
  console.log(req.body ) 
  try {
      const isUser =await User .findOne({email:req.body.email});
      console.log(isUser)
      if(!isUser){
return res.status(404).json ({message:"user  not found"});

      }
      
      else{
        
        const isMatch =await bcrypt.compare(req.body.password,isUser.password)
        console.log(isMatch)
        const exp = Date.now()+1000*60*60 ;
        const token=jwt.sign(
{id:isUser._id, exp, role: isUser.role},
"hgfhfghvfhghgfhf"

        )
        res.cookie("athorzation",token)
return res.status(200).json({
  massage: 'ok',
  data: {
    username: isUser.username,
    emaile: isUser.email,
    role: isUser.role
  }
})
      }
  } catch (error) {
    console.log(error);
    res.status (500).json({message:"error"})
  }

  }
module.exports = { register ,login}
