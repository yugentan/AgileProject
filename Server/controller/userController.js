const mysql = require("mysql")
const dotenv = require("dotenv")
dotenv.config({path:"../config.env"})
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: "root",
    password: "jhHtX3Q3s8",
    database: "agile",
})
connection.connect()
exports.signUp = (req,res)=>{
    const username = req.body.userName
    const password = req.body.passWord
    const email = req.body.email

    connection.query("INSERT INTO accounts(username,password,email) VALUES (?,?,?)",[username, password, email], (error,result)=>{
        if(error) res.status(500).send("USER EXIST")
        else{
            res.status(200).send("SIGN UP SUCCESS")
        }
    })

}