import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';

import './App.css';
function App() {
  const HatsPage = () => {
    <div>
      <h1>HATS PAGE</h1>
    </div>;
  };

  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
