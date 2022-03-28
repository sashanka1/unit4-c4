const express= require("express");

const app =express();

const connect =require("./config/db");

usersonteoller =require("./controllers/user.controllers")
todocontroler =require("./controllers/todo.controllers")
logincontroller =require("./controllers/password.controller")
app.use(express.json());

app.use("/user",usersonteoller)
app.use("/todo",todocontroler);
app.use("/login",logincontroller)





app.listen(5100,async function(){
    try {
        await connect();
        console.log("listining at 5100")
    } catch (error) {
        console.log(error.message)
    }
});