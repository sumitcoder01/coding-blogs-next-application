import connectToMongo from "@/lib/db/db";
import Contact from "@/lib/models/Contact";
import { NextResponse } from "next/server";
export async function PUT(req) {
    try {
        const {name,email,phone,message} = await req.json();
        connectToMongo();
        console.log("Connect to MongoDB Successfully");
        const user = new Contact({ name, email, phone, message });
        const saveUser = await user.save();
        return NextResponse.json({ success: true, message: "Contact details Successfully Stored"},{status:200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}