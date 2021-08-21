import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/styles.scss';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <main>
      <NavBar />
      <ItemListContainer/>
    </main>
  );
};

export default App;
