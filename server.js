const express=require("express")
const mysql=require("mysql2")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())

const db=mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"staynear"
})

app.post("/signup",(req,res)=>{
const {name,email,password,phone}=req.body
db.query("INSERT INTO users(name,email,password,phone) VALUES(?,?,?,?)",
[name,email,password,phone],
(err)=>{
if(err) return res.json({message:"Error"})
res.json({message:"Signup successful"})
})
})

app.post("/login",(req,res)=>{
const {email,password}=req.body
db.query("SELECT * FROM users WHERE email=? AND password=?",
[email,password],
(err,result)=>{
if(result.length>0) res.json({message:"Login successful"})
else res.json({message:"Invalid credentials"})
})
})

app.listen(5500,()=>console.log("Server running"))
