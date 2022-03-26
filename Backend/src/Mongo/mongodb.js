import mongoose from "mongoose";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const config = require("../config.json");

const uri = `mongodb+srv://Sorer:${config.password}@tasks.xpuzn.mongodb.net/${config.database}?retryWrites=true&w=majority`;
export default function connectDB() {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => {
            console.log("Connected to DB");
        }).catch((err) => console.error(err));
}
