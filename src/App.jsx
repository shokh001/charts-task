import AnalystRating from './components/AnalystRating'
import FairValue from './components/FairValue'
import FinranksScore from './components/FinranksScore'
import OctagonView from './components/OctagonView'
import './App.css'

function App() {

  return (
    <div className="App">
      <FinranksScore />
      <OctagonView />
      <AnalystRating />
      <FairValue />
    </div>
  )
}

export default App
