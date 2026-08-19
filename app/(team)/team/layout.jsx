import './team.css';
import { AppProvider } from '@/context/AppContext';
import Sidebar from '@/components/team/Sidebar';
import Topbar from '@/components/team/Topbar';
import LicenseModal from '@/components/team/LicenseModal';
import Toast from '@/components/team/Toast';

export const metadata = { title: 'Admin Portal | Team Dimsprat' };

export default function TeamLayout({ children }) {
    return (
        <AppProvider>
            <div className="admin-layout">
                <Sidebar />
                <main className="main-content">
                    <Topbar />
                    <div className="content-area">
                        {children}
                    </div>
                </main>
            </div>
            <LicenseModal />
            <Toast />
        </AppProvider>
    );
}