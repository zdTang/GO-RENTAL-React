import "./App.css";
import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
function App() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold ">Hello world!</h1>
        <h2 className="text-blue-600">Mike</h2>
        <Button variant="outline">Button</Button>
        <Checkbox />
      </div>
    </>
  );
}

export default App;
