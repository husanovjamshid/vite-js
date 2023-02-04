import "bootstrap/dist/css/bootstrap.min.css";
import { Public } from "./components/pages/Public/Public";
import { Private } from "./components/pages/Private/Private";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext/AuthContext";

function App() {
  let { token } = useContext(AuthContext);
  return <div className="App">{token ? <Private /> : <Public />}</div>;
}

export default App;
