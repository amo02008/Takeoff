import React, { Component } from 'react';
// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import Navbar from './components/Navbar';
// Pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ItineraryCreator from './pages/ItineraryCreator';
import ItineraryEditor from './pages/ItineraryEditor';
import Blog from './pages/Blog';
import BucketList from './pages/BucketList';
import MeetTheTeam from './pages/MeetTheTeam';
import Contact from './pages/Contact';
// Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// JWT
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
// Private Route
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/";
  }
}

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {/* Public Routes */}
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <div>
              <Navbar />

              {/* Private Routes */}
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/creator" component={ItineraryCreator} />
              <PrivateRoute exact path="/editor" component={ItineraryEditor} />
              <PrivateRoute exact path="/blog" component={Blog} />
              <PrivateRoute exact path="/bucket-list" component={BucketList} />
              <PrivateRoute exact path="/meet-the-team" component={MeetTheTeam} />
              <PrivateRoute exact path="/contact" component={Contact} />
            </div>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
