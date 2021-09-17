import "bootstrap/dist/css/bootstrap.min.css"
import "./components/styles/styles.scss"
import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { UIContextProvider } from "./context/UIContext"
import { CartProvider } from "./context/CartContext"
import { CartScreen } from "./components/CartScreen/CartScreen"
import { Checkout } from './components/Checkout/Checkout'


function App() {
    return (
        <>
            <UIContextProvider>
                <CartProvider>
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
                            <Route exact path="/cart">
                                <CartScreen />
                            </Route>
                            <Route exact path="/checkout">
                                <Checkout/>
                            </Route>
                            <Route path="*">
                                <Redirect to="/" />
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </CartProvider>
            </UIContextProvider>
        </>
    )
}

export default App
