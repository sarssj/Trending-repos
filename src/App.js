import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
import "./App.css";
import ReposContainer from "./components/ReposContainer";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <ReposContainer />
      </Provider>
    </div>
  );
};

export default App;
