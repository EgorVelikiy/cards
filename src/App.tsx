import { Card } from './componets/Card/Card'
import cards from './componets/data/data'
import './App.css'

const App: React.FC = () => {
  return (
    <div className='container'>
      {cards.map(card => 
        <Card {...card}/>
      )}
    </div>
  )
}

export default App
