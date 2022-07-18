import { Container } from './styles';
import { Crewmate as CrewmateType, useCrewmates } from '../../CrewmatesContext';
import './styles.css';

interface CrewmateProps{
  crewmate: CrewmateType;
}

export function Crewmate({ crewmate } : CrewmateProps){
  const { selectCrewmate } = useCrewmates();

  function handleSelectCrewmate(){
    selectCrewmate(crewmate);
  }
  
  return (
    <Container
      color={crewmate.color}
      onClick={handleSelectCrewmate}
    >
      <div className="crew-shadow" style={{background: crewmate.color}}></div>
      <div className="crew">
        <div className="legs-shadow"></div>
        <div className="legs"></div>
        <div className="back"></div>
        <div className="glass"></div>
      </div>
    </Container>
  )
}
