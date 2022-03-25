import { Router } from "express";
export const router = Router();

router.use((req, res, next) => {
    console.log("Hello World!");
    next();
});

router.get("/", (req, res) => {
    res.send("Tasks");
});

router.get("/get", (req, res) => {
    res.send([
        {
            description: "Complete online JavaScript course",
            id: 1,
            complete: false
        },
        {
            description: "Jog around the park 3x",
            id: 2,
            complete: false
        },
        {
            description: "10 minutes meditation",
            id: 3,
            complete: false
        },
        {
            description: "Read for 1 hour",
            id: 4,
            complete: false
        },
        {
            description: "Pick up groceries",
            id: 5,
            complete: false
        },
        {
            description: "Complete Todo App on Frontend Mentor",
            id: 6,
            complete: false
        }
    ]);
});

router.get("/post", (req, res) => {
    res.send("POST TASKS");
});