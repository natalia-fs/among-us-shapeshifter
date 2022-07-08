import './styles.css';

export function Crewmate(){
  const color: string = '#4fbfd3';
  document.documentElement.style.setProperty('--color',color)
  return (
    <span className="draw">
      <div className="crew-shadow" style={{background: color}}></div>
      <div className="crew">
        <div className="legs-shadow"></div>
        <div className="legs"></div>
        <div className="back"></div>
        <div className="glass"></div>
      </div>
    </span>
  )
}
