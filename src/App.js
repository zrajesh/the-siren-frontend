// Imports
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Import components
import Navigation from "./components/navigation/Navigation"
import Hero from "./components/hero/Hero";
import Bollywood from "./components/blogPages/Bollywood";
import Hollywood from "./components/blogPages/Hollywood";
import Technology from "./components/blogPages/Technology";
import Fitness from "./components/blogPages/Fitness";
import Food from "./components/blogPages/Food";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
          <Switch>
            <Route exact path="/" component={Hero} />
            <Route exact path="/bollywood" component={Bollywood} />
            <Route exact path="/hollywood" component={Hollywood} />
            <Route exact path="/technology" component={Technology} />
            <Route exact path="/fitness" component={Fitness} />
            <Route exact path="/food" component={Food} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
