const mongoose = require('mongoose')

module.exports = async function db_connect(url){
mongoose
  .connect(url)
  .then((res) => console.log("mongodb connected"))
  .catch((error) => console.log("error connection the database : ",error));
}


