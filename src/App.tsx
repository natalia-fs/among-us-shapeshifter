import './App.css'
import { Crewmate } from './components/Crewmate'
import { Crewmate as CrewmateType, useCrewmates } from './CrewmatesContext';

function App() {

  const { crew } = useCrewmates();

  return (
    <>
      <div className="App">
        <div className="gridContainer">
          {
            crew.map((crewmate: CrewmateType) => {
              return (
                <Crewmate crewmate={crewmate} key={crewmate.id}/>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
