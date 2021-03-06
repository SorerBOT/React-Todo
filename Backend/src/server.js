import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { router } from "./Routes/task.js";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/tasks", router);

app.listen(3001, () => {
    console.log("Express is listening on port 3001!");
});