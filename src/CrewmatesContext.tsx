import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { toast } from 'react-toastify';

export interface Crewmate{
  id: string;
  color: string;
}

interface CrewmateProviderProps {
  children: ReactNode
}

interface CrewmatesContextData {
  crew: Crewmate[];
  selectCrewmate: (crewmate: Crewmate) => void;
  shuffleCrewmates: (crewmates: Crewmate[], sliceLimit: number) => Crewmate[];
}

const CrewmatesContext = createContext<CrewmatesContextData>(
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

const sliceLimit = crewmates.length;

export function CrewmatesProvider( { children }: CrewmateProviderProps ){
  // const [crewmates, setCrewmates] = useState<Crewmate[]>([]);
  const [ crew, setCrew ] = useState<Crewmate[]>( () => {
    return shuffleCrewmates(crewmates, sliceLimit);
  })

  function shuffle(crewArray: Array<Crewmate>, sliceLimit: number): Crewmate[]{
    let slicedCrewmateArray = crewArray.slice(0, sliceLimit);
    let currentIndex = slicedCrewmateArray.length+1;
    let randomIndex;
    // Alterando a string do id, para diferenciar os tripulantes clonados
    let shapeshifter = slicedCrewmateArray[Math.floor(Math.random() * (currentIndex-1) )];
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

  function shuffleCrewmates(crewArray: Array<Crewmate>, sliceLimit: number): Crewmate[]{
    return shuffle(crewArray, sliceLimit);
  }

  function selectCrewmate(crewmate: Crewmate){
    if( crewmate.id.includes('*') ){
      toast.success(`Parabéns, você encontrou o metamorfo!   ${crewmate.id} diz: "Não sou eu! CONFIA"`, {
        position: toast.POSITION.BOTTOM_CENTER,
        onClose: () => {
          setCrew(shuffleCrewmates(crewmates, sliceLimit));
        }
      });
    }
    else if( crewmate.id.includes('#') )
      toast('"Cara, eu acabei de fazer visual task"', {
        position: toast.POSITION.BOTTOM_CENTER
      });
    else{
      toast(`${crewmate.id} diz: "Não sou o metamorfo, há dois tripulantes IGUAIS e eu não sou um deles!"`, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
  }

  return (
    <CrewmatesContext.Provider value={{ crew, selectCrewmate, shuffleCrewmates }}>
      { children }
    </CrewmatesContext.Provider>
  )
}

export function useCrewmates(){
  const context = useContext(CrewmatesContext);
  return context;
}