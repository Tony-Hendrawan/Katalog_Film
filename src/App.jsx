import { useState } from 'react'
import Header from './components/Header.jsx'
import FormTambahFilm from './components/FormTambahFilm.jsx'
import DaftarFilm from './components/DaftarFilm.jsx'
import RingkasanFilm from './components/RingkasanFilm.jsx'

const filmAwal = [
  { id: 1, judul: 'The Shawshank Redemption', sutradara: 'Frank Darabont', tahun: 1994, genre: 'Drama', rating: 9.3 },
  { id: 2, judul: 'The Godfather', sutradara: 'Francis Ford Coppola', tahun: 1972, genre: 'Drama', rating: 9.2 },
  { id: 3, judul: 'The Godfather Part II', sutradara: 'Francis Ford Coppola', tahun: 1974, genre: 'Drama', rating: 9.0 },
  { id: 4, judul: 'The Dark Knight', sutradara: 'Christopher Nolan', tahun: 2008, genre: 'Action', rating: 9.0 },
  { id: 5, judul: 'Pulp Fiction', sutradara: 'Quentin Tarantino', tahun: 1994, genre: 'Crime', rating: 8.9 },
]

function App() {
  const [daftarFilm, setDaftarFilm] = useState(filmAwal)
  const [formFilm, setFormFilm] = useState({ judul: '', sutradara: '', tahun: '', genre: '', rating: '' })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormFilm({ ...formFilm, [name]: value })
  }

  const handleTambahFilm = (e) => {
    e.preventDefault()
    if (!formFilm.judul || !formFilm.sutradara || !formFilm.tahun || !formFilm.genre || !formFilm.rating) {
      alert('Harap isi semua field!')
      return
    }
    const filmBaru = {
      id: Date.now(),
      judul: formFilm.judul,
      sutradara: formFilm.sutradara,
      tahun: parseInt(formFilm.tahun),
      genre: formFilm.genre,
      rating: parseFloat(formFilm.rating),
    }
    setDaftarFilm([...daftarFilm, filmBaru])
    setFormFilm({ judul: '', sutradara: '', tahun: '', genre: '', rating: '' })
  }

  return (
    <div className="container">
      <Header />
      <RingkasanFilm jumlah={daftarFilm.length} />
      <FormTambahFilm film={formFilm} onInputChange={handleInputChange} onTambah={handleTambahFilm} />
      <DaftarFilm daftarFilm={daftarFilm} />
    </div>
  )
}

export default App