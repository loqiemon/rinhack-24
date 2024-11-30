import "./index.css";
import App from "./App";
import { Provider } from "./components/ui/provider";
import ReactDOM from "react-dom/client";;


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider>
    <App />
  </Provider>
);
