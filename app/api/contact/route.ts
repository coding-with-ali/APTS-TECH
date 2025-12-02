import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const serverClient = createClient({
  projectId: "si2ayh8p",
  dataset: "production",
  token: process.env.SANITY_API_TOKEN, // 🔑 server-side write token
  useCdn: false,
  apiVersion: "2024-01-01",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const doc = {
      _type: "contactForm",
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      country: body.country,
      companyName: body.companyName,
      companyUrl: body.companyUrl,
      region: body.region,
      services: body.services,
      projectDetails: body.projectDetails,
      lookingForJob: body.lookingForJob,
      createdAt: new Date().toISOString(),
    };

    const res = await serverClient.create(doc);

    return NextResponse.json({ message: "Form submitted successfully!", data: res }, { status: 201 });
  } catch (err: any) {
    console.error("Sanity Submit Error:", err);
    return NextResponse.json({ error: "Failed to submit form", details: err.message }, { status: 500 });
  }
}
