import { data } from "./constants/data";
import RecursiveComp from "./RecursiveComp";

function App() {
  return (
    <div className="App">
      <RecursiveComp data={data} />
    </div>
  );
}

export default App;
