import connectToMongo from "@/lib/db/db";
import Blog from "@/lib/models/Blog";
import { NextResponse } from "next/server";
export async function GET(req) {
    try {
        connectToMongo();
        console.log("Connect to MongoDB Successfully");
        const searchParams = req.nextUrl.searchParams;
        const limit = Number(searchParams.get('limit')) || 0;
        const blogs = limit > 0 ? await Blog.find().limit(limit) : await Blog.find();
        return NextResponse.json({ success: true, blogs: blogs }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}
