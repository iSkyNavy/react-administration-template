import RouteProvider from "./routes/RouteProvider";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
	return (
		<StyledEngineProvider injectFirst>
			<RouteProvider />
		</StyledEngineProvider>
	);
}

export default App;
