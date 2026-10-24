function KartuFilm({ film }) {
  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', transition: 'transform 0.2s, box-shadow 0.2s' }}>
      <h3 style={{ color: '#2d1b4e', fontSize: '1.4rem', fontWeight: 600 }}>{film.judul}</h3>
      <p style={{ fontSize: '0.95rem', color: '#555' }}><strong>Sutradara:</strong> {film.sutradara}</p>
      <p style={{ fontSize: '0.95rem', color: '#555' }}><strong>Tahun:</strong> {film.tahun}</p>
      <p style={{ fontSize: '0.95rem', color: '#555' }}><strong>Genre:</strong> {film.genre}</p>
      <p style={{ fontSize: '0.95rem', color: '#e83e8c', fontWeight: 500 }}><strong>Rating:</strong> {film.rating} / 10</p>
    </div>
  )
}

export default KartuFilm