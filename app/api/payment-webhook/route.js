import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        
        // Logika verifikasi settlement dari Payment Gateway
        if (body.transaction_status === 'settlement' || body.transaction_status === 'capture') {
            const licenseKey = 'DMST-' + Math.random().toString(36).substring(2, 10).toUpperCase();
            console.log('Lisensi baru terbuat:', licenseKey);
            
            // TODO: Insert ke Database & Kirim Email otomatis ke klien
            
            return NextResponse.json({ status: 'success', license: licenseKey });
        }
        return NextResponse.json({ status: 'ignored' });
    } catch (error) {
        return NextResponse.json({ status: 'error' }, { status: 500 });
    }
}
