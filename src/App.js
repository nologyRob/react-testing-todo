import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import { Switch, Route } from "react-router-dom"
import TodoPage from './pages/TodoPage/TodoPage';


function App() {
  return (
    <div className="App">
      <Banner />
      <Switch>
        <Route strict exact path="/" component={TodoPage}/>
        
      </Switch>
    </div>
  );
}

export default App;
