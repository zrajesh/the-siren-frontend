import { combineReducers } from "redux";
// Import reducers
import heroReducer from "./reducer/heroReducer";
import bollywoodLeftReducer from "./reducer/bollywoodLeftReducer";
import hollywoodLeftReducer from "./reducer/hollywoodLeftReducer";
import foodLeftReducer from "./reducer/foodLeftReducer";
import technologyLeftReducer from "./reducer/technologyLeftReducer";
import fitnessLeftReducer from "./reducer/fitnessLeftReducer";
import blogContentReducer from "./reducer/blogContentReducer";
import suggestionReducer from "./reducer/suggesstionReducer";

export default combineReducers({
    hero: heroReducer,
    bollywoodLeft: bollywoodLeftReducer,
    hollywoodLeft: hollywoodLeftReducer,
    technologyLeft: technologyLeftReducer,
    foodLeft: foodLeftReducer,
    fitnessLeft: fitnessLeftReducer,
    blogContent: blogContentReducer,
    suggesstion: suggestionReducer
});
