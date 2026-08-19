export default function ProdukPage() {
    return (
        <div className="panel-section">
            <div className="panel-header">
                <h3>Katalog & Harga Modul</h3>
                <button className="btn-action">+ Tambah Modul Baru</button>
            </div>
            <table>
                <thead>
                    <tr><th>Nama Produk</th><th>Parameter API</th><th>Harga (IDR)</th><th>Status</th><th>Aksi</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Ultimate Creator Suite</strong></td><td>UltimateBundleActivated</td><td>Rp 150.000</td><td><span className="badge badge-active">PUBLISHED</span></td><td><button className="btn-action">Edit</button></td></tr>
                    <tr><td><strong>Plugin Timer</strong></td><td>TimerActivated</td><td>Rp 50.000</td><td><span className="badge badge-active">PUBLISHED</span></td><td><button className="btn-action">Edit</button></td></tr>
                </tbody>
            </table>
        </div>
    );
}
