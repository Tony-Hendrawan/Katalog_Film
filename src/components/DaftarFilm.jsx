import KartuFilm from './KartuFilm.jsx'

function DaftarFilm({ daftarFilm }) {
  if (daftarFilm.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem', color: '#555', background: '#f8f9fa', borderRadius: '8px', margin: '2rem 0' }}>
        <p>Belum ada data Film</p>
      </div>
    )
  }

  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', padding: '1rem' }}>
      {daftarFilm.map((film) => (
        <KartuFilm key={film.id} film={film} />
      ))}
    </section>
  )
}

export default DaftarFilm