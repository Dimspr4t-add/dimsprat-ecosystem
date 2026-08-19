'use client';

export default function Topbar() {
    return (
        <header className="topbar">
            <h1 className="page-title">MARKETPLACE OVERVIEW</h1>
            <div className="admin-profile">
                <span className="admin-name">Dimas</span>
                <button className="btn-logout">LOGOUT</button>
            </div>
            <style jsx>{`
                .topbar { height: 70px; background: var(--bg-panel); border-bottom: 1px solid var(--border-color); backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: space-between; padding: 0 30px; position: sticky; top: 0; z-index: 50; }
                .page-title { font-family: 'Orbitron', sans-serif; margin: 0; font-size: 1.2rem; letter-spacing: 1px; text-transform: uppercase; }
                .admin-profile { display: flex; align-items: center; gap: 15px; }
                .admin-name { font-weight: 700; font-size: 1.1rem; color: #fff; }
                .btn-logout { background: transparent; color: var(--accent-red); border: 1px solid var(--accent-red); padding: 6px 12px; border-radius: 4px; font-family: 'Orbitron', sans-serif; font-size: 0.8rem; cursor: pointer; transition: all 0.2s; }
                .btn-logout:hover { background: var(--accent-red); color: #000; }
            `}</style>
        </header>
    );
}