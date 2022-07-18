import { Crewmate } from './components/Crewmate'
import { Timer } from './components/Timer';
import { Crewmate as CrewmateType, useCrewmates } from './CrewmatesContext';
import './App.css'

function App() {

  const { crew, score } = useCrewmates();

  return (
    <>
      <div className="App">
        <div className="infosContainer">
          <div className="score"> Pontuação:
            <span>{score}</span>
          </div>
          <Timer />

        </div>

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
