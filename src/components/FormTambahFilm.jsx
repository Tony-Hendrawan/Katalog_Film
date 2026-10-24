function FormTambahFilm({ film, onInputChange, onTambah }) {
  return (
    <section style={{ background: 'linear-gradient(135deg, #f8f9fa, #eef2f3)', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
      <h2 style={{ marginBottom: '1rem', color: '#2d1b4e', borderBottom: '2px solid #1a1a2e', paddingBottom: '0.5rem' }}>Tambah Film Baru</h2>
      <form onSubmit={onTambah} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem', alignItems: 'end' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', color: '#555' }}>Judul Film</label>
          <input
            type="text"
            name="judul"
            value={film.judul}
            onChange={onInputChange}
            placeholder="Contoh: Laskar Pelangi"
            style={{ width: '100%', padding: '0.7rem', border: '2px solid #ddd', borderRadius: '6px', fontSize: '1rem', transition: 'border-color 0.3s' }}
            onFocus={(e) => e.target.style.borderColor = '#2d1b4e'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', color: '#555' }}>Sutradara</label>
          <input
            type="text"
            name="sutradara"
            value={film.sutradara}
            onChange={onInputChange}
            placeholder="Contoh: Riri Riza"
            style={{ width: '100%', padding: '0.7rem', border: '2px solid #ddd', borderRadius: '6px', fontSize: '1rem', transition: 'border-color 0.3s' }}
            onFocus={(e) => e.target.style.borderColor = '#2d1b4e'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', color: '#555' }}>Tahun Rilis</label>
          <input
            type="number"
            name="tahun"
            value={film.tahun}
            onChange={onInputChange}
            placeholder="Contoh: 2008"
            style={{ width: '100%', padding: '0.7rem', border: '2px solid #ddd', borderRadius: '6px', fontSize: '1rem', transition: 'border-color 0.3s' }}
            onFocus={(e) => e.target.style.borderColor = '#2d1b4e'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', color: '#555' }}>Genre</label>
          <input
            type="text"
            name="genre"
            value={film.genre}
            onChange={onInputChange}
            placeholder="Contoh: Drama"
            style={{ width: '100%', padding: '0.7rem', border: '2px solid #ddd', borderRadius: '6px', fontSize: '1rem', transition: 'border-color 0.3s' }}
            onFocus={(e) => e.target.style.borderColor = '#2d1b4e'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', color: '#555' }}>Rating</label>
          <input
            type="number"
            name="rating"
            value={film.rating}
            onChange={onInputChange}
            step="0.1"
            min="0"
            max="10"
            placeholder="Contoh: 8.0"
            style={{ width: '100%', padding: '0.7rem', border: '2px solid #ddd', borderRadius: '6px', fontSize: '1rem', transition: 'border-color 0.3s' }}
            onFocus={(e) => e.target.style.borderColor = '#2d1b4e'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
        </div>
        <button
          type="submit"
          style={{ background: 'linear-gradient(135deg, #16213e, #2d1b4e)', color: '#fff', padding: '0.8rem 1.5rem', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '1.05rem', fontWeight: 'bold', width: '100%', marginTop: '0.5rem' }}
        >
          Tambah
        </button>
      </form>
    </section>
  )
}

export default FormTambahFilm