import { StatusBar, View } from "react-native";
import { Routes } from "./src/routes";
import { Home } from "./src/screens/home";


export default function App() {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </View>
    
  );
}