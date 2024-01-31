import "./App.css";
import Home from "./routes/Home";
import { Provider } from "jotai";

function App() {
  let Component: React.FC = Home;

  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    default:
      Component = Home;
  }

  return (
    <Provider>
      <Component />
    </Provider>
  );
}

export default App;
