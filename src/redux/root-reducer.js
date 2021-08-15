import { combineReducers } from "redux";
// Import reducers
import heroReducer from "./reducer/heroReducer";
import bollywoodLeftReducer from "./reducer/bollywoodLeftReducer";
import bollywoodRightReducer from "./reducer/bollywoodRightReducer";
import hollywoodRightReducer from "./reducer/hollywoodRightReducer";
import hollywoodLeftReducer from "./reducer/hollywoodLeftReducer";
import foodRightReducer from "./reducer/foodRightReducer";
import foodLeftReducer from "./reducer/foodLeftReducer";
import technologyRightReducer from "./reducer/tecgnologyRightReducer";
import technologyLeftReducer from "./reducer/technologyLeftReducer";
import fitnessRightReducer from "./reducer/fitnessRightReducer";
import fitnessLeftReducer from "./reducer/fitnessLeftReducer";

export default combineReducers({
    hero: heroReducer,
    bollywoodRight: bollywoodRightReducer,
    bollywoodLeft: bollywoodLeftReducer,
    hollywoodRight: hollywoodRightReducer,
    hollywoodLeft: hollywoodLeftReducer,
    technologyRight: technologyRightReducer,
    technologyLeft: technologyLeftReducer,
    foodRight: foodRightReducer,
    foodLeft: foodLeftReducer,
    fitnessRight: fitnessRightReducer,
    fitnessLeft: fitnessLeftReducer
});
