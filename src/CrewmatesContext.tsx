import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { CustomToast } from "./components/CustomToast";
import { EndingModal } from "./components/Modals/EndingModal";
import { StartingModal } from "./components/Modals/StartingModal";

export interface Crewmate{
  id: string;
  color: string;
}

interface CrewmateProviderProps {
  children: ReactNode;
}

interface CrewmatesContextData {
  crew: Crewmate[];
  selectCrewmate: (crewmate: Crewmate) => void;
  shuffleCrewmates: (sliceLimit: number) => Crewmate[];
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  score: number;
  updateScore: (points: number) => void;
  resetGame: () => void;
  startTimer: () => void;
  resetTimer: () => void;
  openStartingModal: () => void;
  closeStartingModal: () => void;
  openEndingModal: () => void;
  closeEndingModal: () => void;
}

export const CrewmatesContext = createContext<CrewmatesContextData>(
  {} as CrewmatesContextData
);

const crewmates = [
  {id: 'Red', color:'#c51111'},
  {id: 'Blue', color: '#132ed1'},
  {id: 'Green', color:'#117f2d'},
  {id: 'Pink', color: '#fb69be'},
  {id: 'Orange', color: '#e8790e'},
  {id: 'Yellow', color: '#f5f557'},
  {id: 'Black', color: '#3e474e'},
  {id: 'White', color: '#d6e1f3'},
  {id: 'Purple', color: '#6d3ec0'},
  {id: 'Brown', color: '#764a1d'},
  {id: 'Cyan', color: '#28eae1'},
  {id: 'Lime', color: '#45d633'},
  {id: 'Maroon', color: '#6b2b3c'},
  {id: 'Rose', color: '#ecc0d3'},
  {id: 'Banana', color: '#fffebe'},
  {id: 'Gray', color: '#8397a7'},
  {id: 'Tan', color: '#928776'},
  {id: 'Coral', color: '#ec7578'},
  {id: 'Dodgerblue', color: '#1e90ff'},
];

const crewSliceLimit = crewmates.length;

export function shuffle(sliceLimit?: number): Crewmate[]{

  let slicedCrewmateArray = JSON.parse(JSON.stringify(crewmates));
  slicedCrewmateArray = slicedCrewmateArray.slice(0, sliceLimit);
  let currentIndex = slicedCrewmateArray.length+1;
  let randomIndex = Math.floor(Math.random() * (currentIndex-1));
  // Alterando a string do id, para diferenciar os tripulantes clonados
  let shapeshifter = slicedCrewmateArray[randomIndex];
  shapeshifter.id+='*';
  slicedCrewmateArray.push({
    id: shapeshifter.id.replace('*','#'),
    color: shapeshifter.color
  });
  while(currentIndex !== 0){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [slicedCrewmateArray[currentIndex], slicedCrewmateArray[randomIndex]] = [slicedCrewmateArray[randomIndex], slicedCrewmateArray[currentIndex]];
  }
  return slicedCrewmateArray;
}

let TimerTimeout: NodeJS.Timeout;

export function CrewmatesProvider( { children }: CrewmateProviderProps ){
  const defaultTime = 40;
  const [time, setTime] = useState(defaultTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const [ score, setScore ] = useState(0);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startTimer() {
    setIsActive(true);
  }
  
  function resetTimer() {
    clearTimeout(TimerTimeout);
    setIsActive(false);
    setTime(defaultTime);
    setHasFinished(false)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      TimerTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      openEndingModal();
    }
  }, [isActive, time]);

  function updateScore(points: number){
    setScore(score + points);
  }

  function resetScore(){
    setScore(0);
  }
  function resetGame(){
    setCrew(shuffleCrewmates(crewSliceLimit));
    resetScore();
    resetTimer();
    startTimer();
  }

  // Modal
  function openStartingModal(){
    setIsStartingModalOpen(true);
  }
  function closeStartingModal(){
    setIsStartingModalOpen(false);
  }
  function openEndingModal(){
    setIsEndingModalOpen(true);
  }
  function closeEndingModal(){
    resetGame();
    setIsEndingModalOpen(false);
  }

  const [ crew, setCrew ] = useState<Crewmate[]>( () => {
    return shuffleCrewmates(crewSliceLimit);
  });
  
  const [isStartingModalOpen, setIsStartingModalOpen] = useState(true);
  const [isEndingModalOpen, setIsEndingModalOpen] = useState(false);

  function shuffleCrewmates(sliceLimit: number): Crewmate[]{
    return shuffle(sliceLimit);
  }

  function selectCrewmate(crewmate: Crewmate){
    let message = "";
    const style = {
      minWidth: "30rem",
      boxShadow: "none",
      border: 0,
      background: "transparent"
    }

    if( crewmate.id.includes('*') ){
      setCrew(shuffleCrewmates(crewSliceLimit));
      updateScore(1);
      toast.success(`Parabéns! ${crewmate.id} era o metamorfo!`, {
        position: toast.POSITION.TOP_LEFT,
        theme: "colored"
      });
    }
    else if( crewmate.id.includes('#') ){
      message = "Sem chance, eu acabei de fazer tarefa visual!";
      toast(
        <CustomToast crewmate={crewmate} message={message}></CustomToast>,
        {
          position: toast.POSITION.BOTTOM_LEFT,
          style
        }
      )
    }
    else{
      message = "Não sou o metamorfo, há dois tripulantes IGUAIS e eu não sou um deles!";
      toast(
        <CustomToast crewmate={crewmate} message={message}></CustomToast>,
        {
          position: toast.POSITION.BOTTOM_LEFT,
          style
        }
      )
    }
  }

  return (
    <CrewmatesContext.Provider
      value={
        {
          crew,
          minutes,
          seconds,
          hasFinished,
          isActive,
          score,
          selectCrewmate,
          shuffleCrewmates,
          updateScore,
          resetGame,
          startTimer,
          resetTimer,
          openStartingModal,
          closeStartingModal,
          openEndingModal,
          closeEndingModal
        }
      }
    >
      { children }
      { isStartingModalOpen && <StartingModal /> }
      { isEndingModalOpen && <EndingModal /> }

    </CrewmatesContext.Provider>
  )
}

export function useCrewmates(){
  const context = useContext(CrewmatesContext);
  return context;
}