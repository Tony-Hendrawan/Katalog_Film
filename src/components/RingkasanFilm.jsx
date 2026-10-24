function RingkasanFilm({ jumlah }) {
  return (
    <div style={{ background: 'linear-gradient(135deg, #1a1a2e, #2d1b4e)', color: '#fff', padding: '1rem 1.5rem', borderRadius: '8px', display: 'inline-block', marginBottom: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <strong style={{ fontSize: '1.1rem' }}>Total Film:</strong> {jumlah}
    </div>
  )
}

export default RingkasanFilm