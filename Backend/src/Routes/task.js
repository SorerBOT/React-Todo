import { Router } from "express";
import { Task } from "../Mongo/Model/Task.js";
import connectDB from "../Mongo/mongodb.js";

connectDB();
export const router = Router();

router.use((req, res, next) => {
    console.log("Hello World!");
    next();
});

router.get("/", (req, res) => {
    res.send("Tasks");
});

router.get("/get", async (req, res) => {
    const tasks = [];
    (await Task.find()).forEach((task) => {
        tasks.push({
            description: task.description,
            complete: task.complete,
            id: task.id
        });
    });
    res.send(tasks);
});

router.post("/post", (req, res) => {
    const task = new Task({
        description: req.body.description,
        complete: req.body.complete,
        id: req.body.id
    });
    await Task.findOneAndReplace({ description: task.description }, task, {
        upsert: true
    });
    task.save();
    res.send("POST TASKS");
});