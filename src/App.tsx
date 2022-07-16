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
    {id: 'Green', color:'#117f2d'},
    {id: 'Pink', color: '#fb69be'},
    {id: 'Orange', color: '#e8790e'},
    {id: 'Yellow', color: '#f5f557'},
    {id: 'Black', color: '#3e474e'},
    {id: 'White', color: '#d6e1f3'},
    {id: 'Purple', color: '#6d3ec0'},
    {id: 'Brown', color: '#764a1d'},
    {id: 'Cyan', color: '#28eae1'},
    {id: 'Lime', color: '#45d633'},
    {id: 'Maroon', color: '#6b2b3c'},
    {id: 'Rose', color: '#ecc0d3'},
    {id: 'Banana', color: '#fffebe'},
    {id: 'Gray', color: '#8397a7'},
    {id: 'Tan', color: '#928776'},
    {id: 'Coral', color: '#ec7578'},
  ];

  const sliceLimit = 18;

  function shuffleCrewmates(crew: Array<Crewmate>, sliceLimit: number): Array<Crewmate>{
    let slicedCrewmateArray = crew.slice(0, sliceLimit);
    let currentIndex = slicedCrewmateArray.length+1;
    let randomIndex;
    // Alterando a string do id, para diferenciar os tripulantes clonados
    let shapeshifter = slicedCrewmateArray[Math.floor(Math.random() * (currentIndex-1) )];
    shapeshifter.id+='*';
    slicedCrewmateArray.push({id: shapeshifter.id.replace('*','#'), color: shapeshifter.color});
    while(currentIndex !== 0){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

    [slicedCrewmateArray[currentIndex], slicedCrewmateArray[randomIndex]] = [slicedCrewmateArray[randomIndex], slicedCrewmateArray[currentIndex]]; }

    return slicedCrewmateArray;
  }
  return (
    <div className="App">
      <div className="gridContainer">
        {
          shuffleCrewmates(crewmates, sliceLimit).map((crewmate: Crewmate) => {
            return (
              <Crewmate color={crewmate.color} id={crewmate.id} key={crewmate.id}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
