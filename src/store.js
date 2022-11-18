import { configureStore } from "redux";
import rootred from "./redux/reducers/main";

const store = configureStore(rootred);

export default store;
