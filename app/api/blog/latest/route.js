import connectToMongo from "@/lib/db/db";
import Blog from "@/lib/models/Blog";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        connectToMongo();
        const blogs =  await Blog.find().sort({'_id':'desc'}).limit(3);
        return NextResponse.json({ success: true, blogs: blogs }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}