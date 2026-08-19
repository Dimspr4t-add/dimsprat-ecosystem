'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2>TEAM PORTAL</h2>
                <span>team.dimsprat.site</span>
            </div>
            <ul className="nav-links">
                <li><Link href="/team" className={pathname === '/team' ? 'active' : ''}>Dashboard</Link></li>
                <li><Link href="/team/lisensi" className={pathname === '/team/lisensi' ? 'active' : ''}>Kelola Lisensi</Link></li>
                <li><Link href="/team/produk" className={pathname === '/team/produk' ? 'active' : ''}>Data Produk</Link></li>
                <li><Link href="/">Kembali ke Main</Link></li>
            </ul>
        </aside>
    );
}
