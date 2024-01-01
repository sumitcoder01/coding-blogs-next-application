import connectToMongo from "@/lib/db/db";
import Blog from "@/lib/models/Blog";
import { NextResponse } from "next/server";
import { useSearchParams } from 'next/navigation';
export async function GET(_req) {
    try {
        connectToMongo();
        console.log("Connect to MongoDB Successfully");
        const blogs = await Blog.find();
        return NextResponse.json({ success: true, blogs: blogs }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
    }
}
