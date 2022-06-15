const dotenv = require("dotenv")
const app = require("./app")
// const connect  = require("./config/database")
const mongoose  = require("mongoose")




// config
dotenv.config({path:"backend/config.env"})
var PORT = 1000

// connect()



    mongoose.connect('mongodb+srv://Ahmed:ahmed123@cluster0.eakwn.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  mongoose.connection.on('connected',()=>{
      console.log('DataBase is connected')
  })
  mongoose.connection.on('error',(err)=>{
      console.log('error',err)
  })










app.get("/", (req, res) => {
    return res.send("Express Docker Heroku Container Registry JP Backend");
  });


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})