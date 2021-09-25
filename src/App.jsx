
import './styles/styles.css';
import Index from './pages';
import { BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom"; 
import RhodesianInfoPage from './pages/rhodesian';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/rhodesian">
            <RhodesianInfoPage/>
          </Route> 
          <Route path="/">
            <Index />
          </Route>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
