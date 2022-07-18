import { useCrewmates } from '../../CrewmatesContext';
import './EndingModal.css';

export function EndingModal(){
    const { score, closeEndingModal } = useCrewmates();

    return (
        <div className="overlay">
            <div className="container">
                <header>Fim de jogo!</header>

                <p>Você desmascarou {score} metamorfo(s).</p>

                <button type="button" onClick={closeEndingModal}>
                    Tentar novamente
                </button>
            </div>
        </div>
    )
}