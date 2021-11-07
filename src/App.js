import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import moment from 'moment';
// Internal dependencies
import './App.scss';

// Component Import
const HomePage = React.lazy(() => import('./views/Index'));

function App() {
  const idLocale = require('moment/locale/id');
  moment.locale('id', idLocale);
  return (
    <BrowserRouter>
      <React.Suspense
        fallback={
          <div
            style={{ height: '100vh', width: '100%' }}
            className='d-flex justify-content-center align-items-center'
          >
            Loading...
          </div>
        }
      >
        <Switch>
          <Route
            exact
            path='/'
            name='Home Page'
            render={(props) => <HomePage {...props} />}
          />
          <Route
            exact
            path='/to=:username?'
            name='Home Page'
            render={(props) => <HomePage {...props} />}
          />
          <Redirect to='/' />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
