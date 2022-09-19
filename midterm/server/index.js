const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root2022root2022",
    database: "midterm",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res)=> {
    const sqlSelect = "SELECT * FROM todos;";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/api/insert", (req, res) => {
    const task = req.body.task;
    const dueDate = req.body.dueDate;
    const sqlInsert = "INSERT INTO todos (task, dueDate) VALUES (?,?)"
    db.query(sqlInsert, [task, dueDate], (err, result)=> {
        console.log(result);
    });
});


app.delete("/api/delete/:task", (req, res) => {
    const task = req.params.task;
    const sqlDelete = 
      "DELETE FROM todos WHERE task = ?";

      db.query(sqlDelete, task, (err, result) => {
        if (err) console.log(err);
      });
});

app.put("/api/update", (req, res) => {
    const task = req.body.task;
    const dueDate = req.body.dueDate;
    const sqlUpdate = 
      "UPDATE todos SET dueDate = ? WHERE task = ?";

      db.query(sqlUpdate, [dueDate, task], (err, result) => {
        if (err) console.log(err);
      });
});


app.listen(3001, () => {
    console.log("running on port 3001");
});