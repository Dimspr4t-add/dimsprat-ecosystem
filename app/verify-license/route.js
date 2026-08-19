// app/api/verify-license/route.js
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');
    const module = searchParams.get('module');

    if (!key || !module) {
        return NextResponse.json(
            { status: 'error', message: 'Key dan Module tidak boleh kosong.' }, 
            { status: 400 }
        );
    }

    try {
        // Cari lisensi di database berdasarkan key unik
        const license = await prisma.license.findUnique({
            where: { key: key }
        });

        // Validasi kecocokan modul dan status aktif
        if (license && license.module === module && license.status === 'AKTIF') {
            return NextResponse.json({
                status: 'success',
                message: 'Lisensi valid dan terverifikasi.',
                module: module
            }, { status: 200 });
        } else {
            return NextResponse.json({
                status: 'false',
                message: 'Lisensi tidak valid, sudah dicabut, atau tidak cocok.'
            }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json(
            { status: 'error', message: 'Terjadi kesalahan pada server.' }, 
            { status: 500 }
        );
    }
}