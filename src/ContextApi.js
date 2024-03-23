import { createContext, useContext, useState } from "react";

const AppContext= createContext();

export const useAppContext =()=>useContext(AppContext);

export const AppContectProvider=({children})=>{
    const [appState, setAppState]=useState({
        detail:{},
        addtocard:[],
    });
   


    const updateState =(newState)=>{
        setAppState((prevState)=> ({

            ...prevState,
            ...newState,
        }));
    };
    return(
       < AppContext.Provider  value={{appState,updateState}}>
        {children}
       </AppContext.Provider>
    );
};
