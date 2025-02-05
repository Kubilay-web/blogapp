import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function POST(request) {
  const formData = await request.formData();
  const emailData = {
    email: `${formData.get("email")}`,
  };

  const existingEmail = await EmailModel.findOne({ email: emailData.email });

  if (existingEmail) {
    return NextResponse.json({
      success: false,
      msg: "This email is already subscribed",
    });
  }

  await EmailModel.create(emailData);
  return NextResponse.json({ success: true, msg: "Email subscribed" });
}

export async function GET(request) {
  const emails = await EmailModel.find({});
  return NextResponse.json({ emails });
}

export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, msg: "Email Deleted" });
}
