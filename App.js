import { StatusBar, View } from "react-native";
import { Routes } from "./src/routes";
import { DetailAtivo } from "./src/screens/detailAtivo";
import { DetailOS } from "./src/screens/detailOS";
import { Home } from "./src/screens/home";
import { ListOS } from "./src/screens/listOS";


export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Home />
    </>

  );
}