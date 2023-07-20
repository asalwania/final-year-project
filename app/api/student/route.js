import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const data = await prisma.student.findMany();
    return NextResponse.json(data);
  } catch (error) {
    return new Response("Somthing went wrong", {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    const payload = await req.json();
    const res = await prisma.student.create({
      data: { ...payload, nextFeeAmount: Number(payload.nextFeeAmount) },
    });
    return NextResponse.json(res);
  } catch (error) {
    return new Response(error.message, {
      status: 500,
    });
  }
}

export async function PATCH(req) {
  try {
    const payload = await req.json();
    const res = await prisma.student.update({
      where: { id: payload.id },
      data: { ...payload, nextFeeAmount: Number(payload.nextFeeAmount) },
    });
    return NextResponse.json(res);
  } catch (error) {
    return new Response(error.message, {
      status: 500,
    });
  }
}
