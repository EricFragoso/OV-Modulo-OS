import { StatusBar } from "react-native";
import { Routes } from "./src/routes";
import { useFonts, OpenSans_700Bold, OpenSans_300Light, OpenSans_400Regular, OpenSans_500Medium, OpenSans_600SemiBold, OpenSans_800ExtraBold } from '@expo-google-fonts/open-sans';
import Context from './Context'
import React, { useState } from "react";

export default function App() {
  const [listaDeOS, setListaDeOS] = useState(null)

  let [fontsLoaded] = useFonts({
    OpenSans_300Light, 
    OpenSans_400Regular, 
    OpenSans_500Medium, 
    OpenSans_600SemiBold, 
    OpenSans_700Bold, 
    OpenSans_800ExtraBold 
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <Context.Provider value={{listaDeOS, setListaDeOS}}>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </Context.Provider>

  );
}