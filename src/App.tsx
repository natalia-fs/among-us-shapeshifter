import './App.css'
import { Crewmate } from './components/Crewmate'

interface Crewmate{
  id: string;
  color: string;
}

function App() {
  const crewmates = [
    {id: 'Red', color:'#c51111'},
    {id: 'Blue', color: '#132ed1'},
    {id: 'DarkGreen', color:'#117f2d'},
    {id: 'Pink', color: '#fb69be'},
    {id: 'Orange', color: '#e8790e'},
    {id: 'Yellow', color: '#f5f557'},
    {id: 'Black', color: '#3e474e'},
    {id: 'White', color: '#d6e1f3'},
    {id: 'Purple', color: '#6d3ec0'},
    {id: 'Brown', color: '#764a1d'},
    {id: 'Cyan', color: '#28eae1'},
    {id: 'LightGreen', color: '#45d633'},
  ];

  return (
    <div className="App">
      {
        crewmates.map((crewmate: Crewmate) => {
          return (
            <Crewmate key={crewmate.id}/>
          )
        })
      }
    </div>
  )
}

export default App
