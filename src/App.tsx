import { CounterProvider } from "./context/counter-context";
import CounterDisplay from "./components/CounterDisplay";

const App = () => {
  return (
    <CounterProvider>
      <CounterDisplay />
    </CounterProvider>
  );
};

export default App;
