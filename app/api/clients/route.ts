import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const client = await prisma.client.create({ data: body });
    const mappedClient = { ...client, _id: client.id };
    return NextResponse.json({ success: true, data: mappedClient }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function GET() {
  try {
    const clients = await prisma.client.findMany({
      orderBy: { createdAt: 'desc' }
    });
    const mappedClients = clients.map(client => ({ ...client, _id: client.id }));
    return NextResponse.json({ success: true, data: mappedClients });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
