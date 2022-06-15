const express = require("express")
const app = express()
const cors = require('cors')



app.use(express.json())
app.use(cors())

// Router import

// const product = require("./routers/productRouters")
const Auth = require("./routes/authRoutes")  
const hotel = require("./routes/productroutes")
// const product = require("./routes/productroutes")


app.use("/api/v1",hotel,Auth)



module.exports = app