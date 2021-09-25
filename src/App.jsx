import './styles/styles.css';
import Index from './pages';
import { BrowserRouter as Router,  Switch,  Route} from "react-router-dom"; 
import RhodesianInfoPage from './pages/rhodesian';
import Layout from './layouts/Layout';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Layout>
            <Route path="/rhodesian">
              <RhodesianInfoPage/>
            </Route> 
            <Route path="/">
              <Index />
            </Route>
          </Layout>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
