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

    return (
        <div className="modal" onClick={(e) => { if(e.target === e.currentTarget) setIsModalOpen(false); }}>
            <div className="modal-content">
                <h3>Generate Lisensi Baru</h3>
                <div className="form-group">
                    <label>Modul Plugin Target</label>
                    <select className="form-control" value={module} onChange={(e) => setModule(e.target.value)}>
                        <option value="TimerActivated">1. Plugin Timer</option>
                        <option value="PrompterActivated">2. Plugin Prompter</option>
                        <option value="UltimateBundleActivated">🔥 Ultimate Bundle</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Kunci Aktivasi (Key)</label>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <input type="text" className="form-control" readOnly value={key} placeholder="Klik Generate" />
                        <button className="btn-action" onClick={generateRandomKey}>Generate</button>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '25px' }}>
                    <button className="btn-cancel" onClick={() => setIsModalOpen(false)}>Batal</button>
                    <button className="btn-action" onClick={() => { if(!key) return alert('Generate dulu!'); addLicense(key, module); setKey(''); }}>Simpan</button>
                </div>
            </div>
        </div>
    );
}
