// app/api/licenses/route.js
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Mengambil semua data lisensi dari database
export async function GET() {
    try {
        const licenses = await prisma.license.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(licenses);
    } catch (error) {
        return NextResponse.json({ error: "Gagal mengambil data lisensi" }, { status: 500 });
    }
}

// Menyimpan lisensi baru ke database
export async function POST(request) {
    try {
        const body = await request.json();
        const { key, module } = body;
        
        const newLicense = await prisma.license.create({
            data: { 
                key: key, 
                module: module, 
                status: 'AKTIF' 
            }
        });
        
        return NextResponse.json({ status: 'success', data: newLicense });
    } catch (error) {
        return NextResponse.json({ error: "Gagal menyimpan lisensi" }, { status: 500 });
    }
}