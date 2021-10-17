
import './App.css';
import Form from './Components/Form';
import Practice from './Components/Practice';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import AddData from './Components/AddData';


function App() {
  return (


    <>


    <Router>


    <Switch>

      <Route path='/students' component={Practice}/>
      <Route path='/add' component={AddData}/>

    </Switch>
    </Router>

    <div className="shrtcutLinks">
        
    </div>

    </>
  );
}

export default App;
