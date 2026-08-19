'use client';
import { useAppContext } from '@/context/AppContext';

export default function Toast() {
    const { toast } = useAppContext();
    return (
        <div id="toast" className={toast.show ? 'show' : ''}>
            {toast.message}
            <style jsx>{`
                #toast { visibility: hidden; min-width: 250px; background-color: var(--accent-red); color: #000; text-align: center; border-radius: 4px; padding: 16px; position: fixed; z-index: 2000; right: 30px; bottom: 30px; font-weight: bold; font-family: 'Orbitron', sans-serif; opacity: 0; transition: opacity 0.3s, bottom 0.3s; }
                #toast.show { visibility: visible; opacity: 1; bottom: 50px; }
            `}</style>
        </div>
    );
}