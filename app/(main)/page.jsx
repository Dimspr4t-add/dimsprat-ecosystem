import Link from 'next/link';
export default function MainSite() {
    return (
        <div className="hero">
            <h1>DIMSPRAT.SITE</h1>
            <p>Official Website of Dimas Pratama (Music Producer, Developer, Creator)</p>
            <div>
                <Link href="/team" className="btn-nav">Admin Portal (Team)</Link>
                <Link href="/plugin" className="btn-nav">OBS Marketplace (Plugin)</Link>
                <Link href="/event" className="btn-nav">Event Management</Link>
            </div>
        </div>
    );
}
