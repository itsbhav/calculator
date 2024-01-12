import Input from "./Input";
import Nav from "./Nav";
import NoramlCalc from "./NoramlCalc";
import { DataProvider } from "./context/DataContext";
import ScientificCalc from "./ScientificCalc";
import HistoryStack from "./HistoryStack";
function App() {
  return (
    <div className={`App`} id="App">
      <DataProvider>
        <Input />
        <Nav />
        <NoramlCalc />
        <ScientificCalc />
        <HistoryStack />
      </DataProvider>
    </div>
  );
}

export default App;
