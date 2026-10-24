function Header() {
  return (
    <header style={{ background: 'linear-gradient(135deg, #1a1a2e, #2d1b4e)', color: '#fff', padding: '2rem 0', textAlign: 'center', marginBottom: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎬 Katalog Film</h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Koleksi film favorit Anda</p>
    </header>
  )
}

export default Header