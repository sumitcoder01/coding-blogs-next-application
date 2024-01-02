import connectToMongo from "@/lib/db/db";
import Contact from "@/lib/models/Contact";
import { NextResponse } from "next/server";
export async function POST(req) {
    try {
        const {name,email,phone,message} = await req.json();
        connectToMongo();
        const user = new Contact({ name, email, phone, message });
        await user.save();
        return NextResponse.json({ success: true, message: "Contact details Successfully Stored"},{status:200});
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}