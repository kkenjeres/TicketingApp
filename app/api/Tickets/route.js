import { NextResponse } from "next/server";
import Ticket from "@/app/(models)/Ticket";


export async function POST(req) {
  console.log("POST RAN");
  try {
    const body = await req.json();
    const ticketData = body.formData;

    await Ticket.create(ticketData);

    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
