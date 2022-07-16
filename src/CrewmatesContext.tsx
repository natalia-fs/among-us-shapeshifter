import { createContext, useContext, ReactNode } from "react";

export interface Crewmate{
  id: string;
  color: string;
}

interface CrewmateProviderProps {
  children: ReactNode
}

interface CrewmatesContextData {
  selectCrewmate: (crewmate: Crewmate) => void;
}

const CrewmatesContext = createContext<CrewmatesContextData>({} as CrewmatesContextData);

export function CrewmatesProvider( { children }: CrewmateProviderProps ){
  // const [crewmates, setCrewmates] = useState<Crewmate[]>([]);
  // Usar caso um dia eu pegue os dados via api
  // useEffect(() => {
  //   api.get('crewmates')
  //     .then(response => setCrewmates(response.data.crewmates))
  // }, []);

  function selectCrewmate(crewmate: Crewmate){
    if( crewmate.id.includes('*') ){
      console.log('Não sou eu! CONFIA');
    }
    else if( crewmate.id.includes('#') )
      console.log('"Cara, eu acabei de fazer visual task"');
    else
      console.log('Não sou o metamorfo, há dois tripulantes iguais e eu não sou um deles!')
  }

  return (
    <CrewmatesContext.Provider value={{ selectCrewmate }}>
      { children }
    </CrewmatesContext.Provider>
  )
}

export function useCrewmates(){
  const context = useContext(CrewmatesContext);
  return context;
}