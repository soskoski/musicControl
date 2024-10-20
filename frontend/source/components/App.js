import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./HomePage";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <HomePage />
//       </div>
//     );
//   }
// }

const App = () => {
  return (
    <div className="center">
      <HomePage />
    </div>
  );
};

const appDiv = document.getElementById("app");
if (appDiv) {
  const root = createRoot(appDiv);
  root.render(<App />);
} else {
  console.error("da te ebam");
}

export default App;
