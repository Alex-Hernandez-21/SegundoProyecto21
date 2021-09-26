import './styles/styles.css';
import Index from './pages';
import { BrowserRouter as Router,  Switch,  Route} from "react-router-dom"; 
import RhodesianInfoPage from './pages/rhodesian';
import BorderCollieInfoPage from './pages/borderCollie';
import Layout from './layouts/Layout';


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>        
            <Route path="/rhodesian" >
              <RhodesianInfoPage/>
            </Route> 
            <Route path="/borderCollie" >
              <BorderCollieInfoPage/>
            </Route> 
            <Route path="/" >
              <Index />
            </Route>
          </Switch>
        </Layout> 
      </Router>
    </div>
  );
}

export default App;
