// Imports
import { BrowserRouter } from "react-router-dom";
// Import components
import Navigation from "./components/navigation/Navigation"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
