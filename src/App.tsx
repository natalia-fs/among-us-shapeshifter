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
  function shuffleCrewmates(crew: Array<Crewmate>): Array<Crewmate>{
    let currentIndex = crew.length+1;
    let randomIndex;
    let shapeshifter = crew[Math.floor(Math.random() * currentIndex-1)];
    shapeshifter.id+='*';
    crew.push({id: shapeshifter.id.replace('*','#'), color: shapeshifter.color});
    while(currentIndex !== 0){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

    [crew[currentIndex], crew[randomIndex]] = [crew[randomIndex], crew[currentIndex]]; }

    return crew;
  }
  return (
    <div className="App">
      {
        shuffleCrewmates(crewmates).map((crewmate: Crewmate) => {
          return (
            <Crewmate color={crewmate.color} id={crewmate.id} key={crewmate.id}/>
          )
        })
      }
    </div>
  )
}

export default App
