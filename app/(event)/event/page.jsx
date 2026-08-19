import Link from 'next/link';

export default function EventSite() {
    return (
        <>
            <div className="event-hero">
                <div className="event-content">
                    <h1>Tease Me, Rock Me</h1>
                    <p>with ROY | OVY • Live Hardstyle & Pop Punk Event</p>
                    <a href="#" className="btn-ticket">Get QR Tickets</a>
                </div>
            </div>
            <Link href="/" className="nav-back">← Back to Main</Link>
        </>
    );
}
