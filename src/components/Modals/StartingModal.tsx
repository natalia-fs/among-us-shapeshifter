import { useCrewmates } from '../../CrewmatesContext';
import './EndingModal.css';

export function StartingModal(){
    const { closeStartingModal, startTimer } = useCrewmates();
    function handleStartGame(){
        closeStartingModal();
        startTimer();
    }

    return (
        <div className="overlay">
            <div className="container">
                <header>Há metamorfos entre nós</header>
                <p>Se prepare para encontrar os metamorfos entre os tripulantes</p>

                <button className='startGame' type="button" onClick={handleStartGame}>
                    Iniciar
                </button>
            </div>
        </div>
    )
}