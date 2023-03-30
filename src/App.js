import { Route, Routes } from "react-router-dom";
import MainScreen from "./components/main_page";
import SecondScreen from "./components/second";

function App() {
  return (
    <>
      <Routes>
        <Route path="/allMovie" Component={MainScreen} />
        <Route path="/movie/:id" Component={SecondScreen} />
      </Routes>
    </>
  );
}

export default App;
