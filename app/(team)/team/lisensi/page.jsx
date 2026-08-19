'use client';
import { useAppContext } from '@/context/AppContext';

export default function LisensiPage() {
    const { licenses, setIsModalOpen, showToast } = useAppContext();
    return (
        <div className="panel-section">
            <div className="panel-header">
                <h3>Database Lisensi Client</h3>
                <button className="btn-action" onClick={() => setIsModalOpen(true)}>+ Buat Lisensi Baru</button>
            </div>
            <table>
                <thead>
                    <tr><th>ID Transaksi</th><th>Tgl Dibuat</th><th>Kunci Aktivasi</th><th>Modul Target</th><th>Status</th><th>Aksi</th></tr>
                </thead>
                <tbody>
                    {licenses.map((log, i) => (
                        <tr key={i}>
                            <td>{log.id}</td><td>{log.date}</td><td><span className="license-code">{log.key}</span></td>
                            <td>{log.module}</td><td><span className="badge badge-active">{log.status}</span></td>
                            <td><button className="btn-action btn-danger" onClick={() => showToast('Lisensi dicabut!')}>Revoke</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
