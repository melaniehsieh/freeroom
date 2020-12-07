import React from "react";
import Home from "./pages/Home";
import Loader from "./components/Loader";

class App extends React.Component {
  state = {
    loading: false,
  };

  render() {
    if (this.state.loading === true) {
      return (
        <div className="app">
          <Loader />
        </div>
      );
    } else if (this.state.loading === false) {
      return (
        <div>
          <Home />
        </div>
      );
    }
  }
}

export default App;
