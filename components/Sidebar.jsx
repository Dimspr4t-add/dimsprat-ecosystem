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
                <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Dashboard</Link></li>
                <li><Link href="/lisensi" className={pathname === '/lisensi' ? 'active' : ''}>Kelola Lisensi</Link></li>
                <li><Link href="/produk" className={pathname === '/produk' ? 'active' : ''}>Data Produk</Link></li>
            </ul>
            <style jsx>{`
                .sidebar { width: 260px; background: var(--bg-panel); border-right: 1px solid var(--border-color); backdrop-filter: blur(15px); display: flex; flex-direction: column; position: fixed; height: 100vh; z-index: 100; }
                .sidebar-header { padding: 24px; text-align: center; border-bottom: 1px solid var(--border-color); }
                .sidebar-header h2 { font-family: 'Orbitron', sans-serif; color: var(--accent-red); margin: 0; font-size: 1.2rem; letter-spacing: 2px; }
                .sidebar-header span { font-size: 0.8rem; color: var(--text-muted); }
                .nav-links { list-style: none; padding: 20px 0; margin: 0; flex: 1; }
                .nav-links li { padding: 0 20px; margin-bottom: 10px; }
                .nav-links a { display: block; color: var(--text-muted); text-decoration: none; padding: 12px 16px; border-radius: 6px; font-size: 1.1rem; font-weight: 600; transition: all 0.3s ease; border: 1px solid transparent; }
                .nav-links a:hover, .nav-links a.active { background: rgba(255, 26, 26, 0.1); color: #ffffff; border-color: var(--border-color); box-shadow: inset 4px 0 0 var(--accent-red); }
            `}</style>
        </aside>
    );
}