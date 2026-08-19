'use client'; // <-- Tambahkan baris ini di paling atas

import Link from 'next/link';

export default function PluginMarketplace() {
    return (
        <>
            <header className="header"><Link href="/">DIMSPRAT.SITE</Link></header>
            <main className="marketplace-container">
                <h1 className="section-title">OBS PLUGIN MARKETPLACE</h1>
                <div className="product-grid">
                    <div className="product-card">
                        <div className="product-title">Ultimate Creator Suite</div>
                        <p>Semua Modul & Fitur Terpadu OBS</p>
                        <div className="product-price">Rp 150.000</div>
                        <button className="btn-buy" onClick={() => alert('Integrasi Midtrans di sini')}>Buy now</button>
                    </div>
                    <div className="product-card">
                        <div className="product-title">Plugin Timer</div>
                        <p>Mundur, Maju & Rundown</p>
                        <div className="product-price">Rp 50.000</div>
                        <button className="btn-buy" onClick={() => alert('Integrasi Midtrans di sini')}>Buy now</button>
                    </div>
                    <div className="product-card">
                        <div className="product-title">Plugin Prompter</div>
                        <p>Teleprompter Sinkron</p>
                        <div className="product-price">Rp 75.000</div>
                        <button className="btn-buy" onClick={() => alert('Integrasi Midtrans di sini')}>Buy now</button>
                    </div>
                </div>
            </main>
            <Link href="/" className="nav-back">← Back to Main</Link>
        </>
    );
}