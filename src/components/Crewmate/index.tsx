import { Container } from './styles';
import './styles.css';

interface CrewmateProps{
  id: string;
  color: string;
}

export function Crewmate({ id, color } : CrewmateProps){
  function handleSelectCrewmate(){
    if( id.includes('*') ){
      console.log('SHAPESHIFTER!')
    }
    else if( id.includes('#') )
    console.log('"Cara, eu acabei de fazer visual task"')
  }
  
  return (
    // <span className="draw">
      <Container
        color={color}
        onClick={handleSelectCrewmate}
      >
        <div className="crew-shadow" style={{background: color}}></div>
        <div className="crew">
          <div className="legs-shadow"></div>
          <div className="legs"></div>
          <div className="back"></div>
          <div className="glass"></div>
        </div>
      </Container>
    // </span>
  )
}
