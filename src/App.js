// Imports
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
// Import components
import Navigation from "./components/navigation/Navigation"
import Hero from "./components/hero/Hero";
import Bollywood from "./components/blogPages/Bollywood";
import Hollywood from "./components/blogPages/Hollywood";
import Technology from "./components/blogPages/Technology";
import Fitness from "./components/blogPages/Fitness";
import Food from "./components/blogPages/Food";
import BlogContent from "./components/blogContent/BlogContent";
// Import store
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
          <Switch>
            <Route exact path="/" component={Hero} />
            <Route exact path="/bollywood" component={Bollywood} />
            <Route exact path="/bollywood/:blogTopic" component={BlogContent} />
            <Route exact path="/hollywood" component={Hollywood} />
            <Route exact path="/hollywood/:blogTopic" component={BlogContent} />
            <Route exact path="/technology" component={Technology} />
            <Route exact path="/technology/:blogTopic" component={BlogContent} />
            <Route exact path="/fitness" component={Fitness} />
            <Route exact path="/fitness/:blogTopic" component={BlogContent} />
            <Route exact path="/food" component={Food} />
            <Route exact path="/food/:blogTopic" component={BlogContent} />
          </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
