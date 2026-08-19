'use client';
import { useAppContext } from '@/context/AppContext';

export default function DashboardPage() {
    const { stats, licenses, setIsModalOpen } = useAppContext();
    const recentLogs = licenses.slice(0, 4); 

    return (
        <>
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-title">Total Pendapatan</div>
                    <p className="stat-value">Rp {stats.revenue}</p>
                </div>
                <div className="stat-card">
                    <div className="stat-title">Lisensi Aktif</div>
                    <p className="stat-value">{stats.active}</p>
                </div>
                <div className="stat-card">
                    <div className="stat-title">Produk Terjual</div>
                    <p className="stat-value">{stats.sold}</p>
                </div>
            </div>
            <div className="panel-section">
                <div className="panel-header">
                    <h3>Aktivitas Lisensi Terbaru</h3>
                    <button className="btn-action" onClick={() => setIsModalOpen(true)}>+ Generate Cepat</button>
                </div>
                <table>
                    <thead>
                        <tr><th>Tanggal</th><th>Kunci Aktivasi (Key)</th><th>Modul Plugin</th><th>Status</th></tr>
                    </thead>
                    <tbody>
                        {recentLogs.map((log, i) => (
                            <tr key={i}>
                                <td>{log.date}</td>
                                <td><span className="license-code">{log.key}</span></td>
                                <td>{log.module}</td>
                                <td><span className="badge badge-active">{log.status}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
