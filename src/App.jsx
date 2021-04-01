import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import {routes} from "./routes";

export default function App() {
	return (
		<Router>
			<Switch>
				{routes.map((route, index) => ((
						<Route
							key={index}
							exact={route.exact}
							path={route.path}
							component={route.component}
						/>
					)))}
			</Switch>
			<Redirect from="/123" to="/"/>
		</Router>

	);
}

