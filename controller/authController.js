const authModel = require('../models/authModel')

let users =[]
authCreateUser = ( req, res ) => {
    if(req.body.name) {
        res.statusCode = 201;
        const newUser = users.length + 1;
        users.push({ 
            name:
            req.body.name , 
            id: newUser
        })
    
        res.send('<h1>User Created Successfully</h1>')
    } else {
        res.statusCode = 400;
        res.send('<h1>Name Field is Missing  asdasd</h1>')
    }

}

authGetAllUsers = (req,res)=>{

    res.statusCode = 200;
    res.json(users)
}


authSignUp=async(req,res)=>{
    try {
        console.log(req.body,'req.body.userData')
        const { email, pass } =await  req.body;

        const checkUser = await authModel.findOne({"email":email})
        
        if(checkUser){
    console.log(checkUser,'checkUsersdjksdhjk')
    return res.status(200).send({ success: false, message: "user already registered" });
}else{
    const userCreate = new authModel({email,pass})
    userCreate.save()
    .then((response)=>{
        return res.status(200).send({ success: true, message:"Successfully Registered",response})
    })
    .catch((err)=>{
        return res.status(400).send({ success: false, message:err.message})
    })
}
    }
    catch (e) {
    return res.status(401).send({ success: false, message: e.message });
  }
}


authLogin=async(req,res)=>{
    try {
console.log(req.body,'req.body')
let {email,pass} = await req.body;
const checkUser = await authModel.findOne({"email":email})

if(checkUser){
console.log(checkUser,'checkUser')
    
    if(checkUser.pass===pass){
        return res.status(200).send({
            message: "login successfull",
            success: true,
        data:{userId:checkUser._id,email:checkUser. email}})
    }else{
        return res.status(200).send({success:false,message:"Password Incorrect!"})
    }

}else{
    return res.status(200).send({ success: false, message:"Email Not Found"}) 
}

    }
    catch(e){
        console.log(e,'eeee')
        return res.status(401).send({ success: false, message: e.message });
    }
}

module.exports = {authCreateUser,authGetAllUsers,authSignUp,authLogin}

// module.exports = {login}