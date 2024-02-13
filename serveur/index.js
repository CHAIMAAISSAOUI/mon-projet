const experess = require ('express'); 
const app = experess ();

const cors= require("cors")
const dotenv = require ('dotenv');
dotenv.config()
app.use(experess.json())
console.log(process.env.REACT)
app.use(cors({
    origin:`${process.env.REACT}`,
    credentials:true
}))
const db_connect = require("./config/db")
db_connect(process.env.MONGODB_URI)


app.use(require("./routes/auth.route"))

app.listen(3000,()=>{
    console.log("running on posrt 3000")
})