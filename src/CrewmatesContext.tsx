import { createContext, useContext, ReactNode } from "react";
import { toast } from 'react-toastify';

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
      toast.success(`Parabéns, você encontrou o metamorfo!   ${crewmate.id} diz: "Não sou eu! CONFIA"`, {
        position: toast.POSITION.BOTTOM_CENTER
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
    <CrewmatesContext.Provider value={{ selectCrewmate }}>
      { children }
    </CrewmatesContext.Provider>
  )
}

export function useCrewmates(){
  const context = useContext(CrewmatesContext);
  return context;
}