import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles/styles.scss";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<ItemListContainer />
					</Route>
					<Route exact path="/detail/:itemId">
						<ItemDetailContainer />
					</Route>
					<Route exact path="/cart">
						<h1>Carrito - Proximamente</h1>
					</Route>
					<Route path="*">
						<Redirect to="/" />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
