import "bootstrap/dist/css/bootstrap.min.css";
import { Public } from "./components/pages/Public/Public";
import { Private } from "./components/pages/Private/Private";

function App() {
  return (
    <div className="App">
      {localStorage.getItem("token") ? <Private /> : <Public />}
    </div>
  );
}

export default App;
