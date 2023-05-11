import axios from "axios";
import React from "react";

function App() {
  const API_test = () => {
    axios
      .get(process.env.REACT_APP_SERVER_PATH + "api")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    API_test();
  }, []);

  return (
    <div>
      <h1>hello, react!</h1>
    </div>
  );
}

export default App;
