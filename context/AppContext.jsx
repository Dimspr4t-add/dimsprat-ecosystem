'use client';
import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '' });
    const [stats, setStats] = useState({ revenue: '2.450.000', active: 128, sold: 45 });
    const [licenses, setLicenses] = useState([
        { id: '#TRX-0992', date: '16 Aug 2026', key: 'ULTIMATE-DIMSPRAT-X', module: 'UltimateBundleActivated', status: 'AKTIF' },
        { id: '#TRX-0991', date: '14 Aug 2026', key: 'TIMER-2026-X8F2', module: 'TimerActivated', status: 'AKTIF' }
    ]);
    const [trxCounter, setTrxCounter] = useState(993);

    const showToast = (message) => {
        setToast({ show: true, message });
        setTimeout(() => setToast({ show: false, message: '' }), 3000);
    };

    const addLicense = (newKey, selectedModule) => {
        const dateStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        const newLicense = { id: `#TRX-0${trxCounter}`, date: dateStr, key: newKey, module: selectedModule, status: 'AKTIF' };
        setLicenses([newLicense, ...licenses]);
        setTrxCounter(trxCounter + 1);
        setStats({ ...stats, active: stats.active + 1 });
        setIsModalOpen(false);
        showToast('Lisensi berhasil di-generate!');
    };

    return (
        <AppContext.Provider value={{ isModalOpen, setIsModalOpen, toast, showToast, stats, licenses, addLicense }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() { return useContext(AppContext); }
