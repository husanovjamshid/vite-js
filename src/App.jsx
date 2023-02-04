import "bootstrap/dist/css/bootstrap.min.css";
import { Public } from "./components/pages/Public/Public";
import { Private } from "./components/pages/Private/Private";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext/AuthContext";

function App() {
  const { token } = useContext(AuthContext);
  if (token) {
    return <Private />;
  } else {
    return <Public />;
  }
}

export default App;
