import { type NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

interface Data {
  name: string;
  email: string;
  phone: string;
  subject: string;
  hear: string;
  message: string;
}

const contactFormSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    subject: String,
    hear: String,
    message: String,
});


const MongoURI = process.env.NEXT_PUBLIC_MONGO_URI || "";
const connectMongo = async () => {
    try {
        await mongoose.connect(MongoURI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    console.log("---------------------------------------------------------------");
  try {
    const data: Data = await req.json();
    if(!data) {
        return NextResponse.json({message : "No data found"})
    }
    await connectMongo();
    let ContactForm = mongoose.models.ContactForm || mongoose.model("ContactForm", contactFormSchema);
    const newContactForm = new ContactForm(data);
    await newContactForm.save();
    return NextResponse.json({ message: "Email Sent" , data : newContactForm });
  
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
}
