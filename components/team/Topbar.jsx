'use client';
import { usePathname } from 'next/navigation';
export default function Topbar() {
    const pathname = usePathname();
    let title = "MARKETPLACE OVERVIEW";
    if (pathname === '/team/lisensi') title = "MANAJEMEN LISENSI";
    if (pathname === '/team/produk') title = "KATALOG PRODUK";
    return (
        <header className="topbar">
            <h1 className="page-title">{title}</h1>
            <div className="admin-profile">
                <span className="admin-name">Dimas Pratama</span>
                <button className="btn-logout">LOGOUT</button>
            </div>
        </header>
    );
}
