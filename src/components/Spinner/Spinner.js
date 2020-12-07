import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const Loader = () => {
  return <PacmanLoader size={30} margin={2} color={"#3E7890"} loading={true} />;
};

export default Loader;
