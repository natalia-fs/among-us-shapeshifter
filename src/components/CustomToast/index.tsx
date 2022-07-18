import { Crewmate } from '../Crewmate';
import { Crewmate as CrewmateType, useCrewmates } from '../../CrewmatesContext';
import { Container } from './styles';
// import './styles.css';

interface CrewmateProps{
  crewmate: CrewmateType;
  message: string;
}

export function CustomToast({ crewmate, message } : CrewmateProps){
  
  return (
    <Container
      color={crewmate.color}
    >
      <div className="customToast">
        <div className="customToastImage">
          <Crewmate crewmate={crewmate}/>
        </div>
        <div className="customToastContent">
          <strong>{crewmate.id}: </strong>
          <span>{message}</span>
        </div>
      </div>
    </Container>
  )
}
