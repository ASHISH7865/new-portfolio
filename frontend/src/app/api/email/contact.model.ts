import mongoose from "mongoose";
let schema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    subject: String,
    hear: String,
    message: String,
});

export default mongoose.models.ContactForm || mongoose.model("ContactForm", schema);