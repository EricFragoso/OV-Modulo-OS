import { StatusBar } from "react-native";
import { Routes } from "./src/routes";
import { NativeWindStyleSheet } from "nativewind";
import { useFonts, OpenSans_700Bold, OpenSans_300Light, OpenSans_400Regular, OpenSans_500Medium, OpenSans_600SemiBold, OpenSans_800ExtraBold } from '@expo-google-fonts/open-sans';

export default function App() {
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
    <>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </>

  );
}