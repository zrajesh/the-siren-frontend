// Imports
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Import components
import Navigation from "./components/navigation/Navigation"
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
          <Switch>
            <Route exact path="/" component={Hero} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
