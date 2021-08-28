import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles/styles.scss";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<ItemListContainer />
					</Route>
					<Route exact path="/category/:catId">
						<ItemListContainer />
					</Route>
					<Route exact path="/detail/:itemId">
						<ItemDetailContainer />
					</Route>
					<Route path="*">
						<Redirect to="/" />
					</Route>
					<Route exact path="/cart">
						<h1>Carro de compra</h1>
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
