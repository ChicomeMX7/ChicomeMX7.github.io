import "./styles/App.css";
import { AppContextProvider } from "./context/AppContext";
import { RecorderScreen } from "./components/RecorderScreen";
import { ControlPannel } from "./components/ControlPannel";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <AppContextProvider value="H">
      <Layout>
        <RecorderScreen />
        <ControlPannel />
        <ControlPannel />
        <ControlPannel />
        <ControlPannel />
        <ControlPannel />
        <ControlPannel />
      </Layout>
    </AppContextProvider>
  );
}

export default App;
