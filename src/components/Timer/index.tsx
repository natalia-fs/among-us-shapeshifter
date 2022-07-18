import { useCrewmates } from '../../CrewmatesContext';

export function Timer(){
  const {
    minutes,
    seconds,
  } = useCrewmates();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div className="timer"> Tempo restante:
      <div className="digitsContainer">
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
    </div>
  )
}