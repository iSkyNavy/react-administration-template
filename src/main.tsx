import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./toolbox/styles/reset.scss";
import { BrowserRouter } from "react-router-dom";
import "./toolbox/styles/_theme.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	// <React.StrictMode>
	<BrowserRouter>
		<App />
	</BrowserRouter>

	// </React.StrictMode>,
);
