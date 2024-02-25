import connectToMongo from "@/lib/db/db";
import Blog from "@/lib/models/Blog";
import { NextResponse } from "next/server";

export async function GET(_req, { params }) {
  try {
    connectToMongo();
    const slug = params.slug;
    let blog = await Blog.findOne({ slug });
    return NextResponse.json({ success: true, blogs: blog }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, error: "Internal Server error" }, { status: 500 });
  }
}
