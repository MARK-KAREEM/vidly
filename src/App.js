import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import Register from "./components/register";
import Logout from "./components/logout";
import auth from "./services/authService";
import ProtectedRoute from "./components/common/protectedRoute";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <main className="container">
        <ToastContainer />
        <NavBar user={user} />
        <div>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/loginForm" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={user} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/notFound" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/notFound" />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
