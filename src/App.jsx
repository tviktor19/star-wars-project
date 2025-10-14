import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { EpisodeList } from './components/Episodes/EpisodeList'
import { EpisodeDetails } from './components/Episodes/EpisodeDetails'
import { CharacterList } from './components/Characters/CharacterList'
import { CharacterDetails } from './components/Characters/CharacterDetails'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<EpisodeList />} />
        <Route path="/episode" element={<EpisodeList />} />
        <Route path="/episode/:id" element={<EpisodeDetails />} />
        <Route path="/character" element={<CharacterList />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
