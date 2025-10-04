import "./styles/App.css";
import { AppContextProvider } from "./context/AppContext";
import { RecorderScreen } from "./components/RecorderScreen";
import { ControlPannel } from "./components/ControlPannel";

function App() {
  return (
    <AppContextProvider>
      <RecorderScreen />
      <ControlPannel />
    </AppContextProvider>
  );
}

export default App;
