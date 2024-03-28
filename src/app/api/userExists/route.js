import { connectMongoDB } from "../../lib/mongodb";
import User from "../../models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { username, email } = await req.json();
    const user =
      (await User.findOne({ username }).select("_id")) ||
      (await User.findOne({ email }).select("_id"));
    console.log("user", user);
    return NextResponse.json({
      user,
      message: "User With These Credentials Already Exists!",
    });
  } catch (error) {
    console.log(error);
  }
}
