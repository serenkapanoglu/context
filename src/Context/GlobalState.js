import React, {useState} from "react";
import { createContext } from "react";


export const GlobalContext = createContext();

export const GlobalProvider = (props)=>{

    const [deger, setDeger] = useState("Mehmet");



    return (
    <GlobalContext.Provider 
    value={{
    deger:deger,
     linkler: [
    "Anasayfa", 
    "Hakkimizda", 
    "Iletisim", 
    "Portfolio",
    
    ],
    setDeger,
    }}>
    {props.children}</GlobalContext.Provider>
    
    ) ;
}

