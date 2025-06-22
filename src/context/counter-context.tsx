import { createContext, useContext, useReducer } from "react";
import type { Dispatch } from "react";
import type { ReactNode } from "react";

//  State tipi
type State = {
  count: number;
};

//  Aksiyon tipi
type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

// 🔧 Başlangıç state
const initialState: State = {
  count: 0,
};

//  Reducer fonksiyonu
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default: {
      const _exhaustiveCheck: never = action;
      throw new Error(`Unknown action: ${_exhaustiveCheck}`);
    }
  }
};

//  Context tipleri
type CounterContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

//  Başlangıçta undefined
const CounterContext = createContext<CounterContextType | undefined>(undefined);

// 🧠 Provider bileşeni
export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

//  Custom hook
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
