'use client';
import { useState } from 'react';
import { useAppContext } from '@/context/AppContext';

export default function LicenseModal() {
    const { isModalOpen, setIsModalOpen, addLicense } = useAppContext();
    const [module, setModule] = useState('TimerActivated');
    const [key, setKey] = useState('');

    if (!isModalOpen) return null;

    const generateRandomKey = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let newKey = '';
        for (let i = 0; i < 3; i++) {
            let segment = '';
            for (let j = 0; j < 4; j++) segment += chars.charAt(Math.floor(Math.random() * chars.length));
            newKey += segment + (i < 2 ? '-' : '');
        }
        setKey('DMST-' + newKey);
    };

    const handleSave = () => {
        if (!key) return alert('Silakan generate kunci lisensi terlebih dahulu!');
        addLicense(key, module);
        setKey('');
    };

    return (
        <div className="modal" onClick={(e) => { if(e.target === e.currentTarget) setIsModalOpen(false); }}>
            <div className="modal-content">
                <h3>Generate Lisensi Baru</h3>
                <div className="form-group">
                    <label>Modul Plugin Target</label>
                    <select className="form-control" value={module} onChange={(e) => setModule(e.target.value)}>
                        <option value="TimerActivated">1. Plugin Timer</option>
                        <option value="PrompterActivated">2. Plugin Prompter</option>
                        <option value="Bundle1Activated">3. Bundle 1 (Timer & Prompter)</option>
                        <option value="Bundle2Activated">4. Bundle 2 (Prompter & Timer)</option>
                        <option value="LyricsActivated">5. Plugin Lirik</option>
                        <option value="UltimateBundleActivated">🔥 Ultimate Bundle</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Kunci Aktivasi (Key)</label>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <input type="text" className="form-control" readOnly placeholder="Klik Generate Key" value={key} />
                        <button className="btn-action" onClick={generateRandomKey}>Generate</button>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '25px' }}>
                    <button className="btn-cancel" onClick={() => setIsModalOpen(false)}>Batal</button>
                    <button className="btn-action" onClick={handleSave}>Simpan & Aktifkan</button>
                </div>
            </div>
            <style jsx>{`
                .modal { position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); backdrop-filter: blur(5px); display: flex; align-items: center; justify-content: center; }
                .modal-content { background: rgba(15, 2, 2, 0.95); padding: 30px; border: 1px solid var(--accent-red); border-radius: 10px; width: 100%; max-width: 400px; }
                .modal-content h3 { font-family: 'Orbitron', sans-serif; color: var(--accent-red); margin-top: 0; margin-bottom: 20px; }
                .btn-cancel { background: transparent; color: var(--text-muted); border: 1px solid var(--text-muted); padding: 8px 16px; border-radius: 4px; font-family: 'Orbitron', sans-serif; font-weight: 700; font-size: 0.85rem; cursor: pointer; }
                .btn-cancel:hover { background: rgba(255, 255, 255, 0.1); color: #fff; }
            `}</style>
        </div>
    );
}