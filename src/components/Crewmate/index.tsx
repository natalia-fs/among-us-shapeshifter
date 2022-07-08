import { Container } from './styles';
import './styles.css';

interface CrewmateProps{
  id: string;
  color: string;
}

export function Crewmate({ id, color } : CrewmateProps){
  // const color: string = '#4fbfd3';
  // document.documentElement.style.setProperty('--color', color);
  return (
    // <span className="draw">
      <Container color={color}>
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
