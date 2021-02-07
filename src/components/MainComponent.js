import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import Footer from "./FooterComponent";
import DishDetails from "./DishdetailComponet";
import { DISHES } from "../shared/dishes";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      //selectedDish: null,
    };
  }
  // onDishSelected(dishId) {
  //   this.setState({ selectedDish: dishId });
  // }

  render() {
    const HomePage = () => {
      return (
        <Home/>
      );
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;

{
  /* <Menu
dishes={this.state.dishes}
onClick={(dishId) => this.onDishSelected(dishId)}
/>
<DishDetails
dish={this.state.dishes.filter(
  (dish) => dish.id === this.state.selectedDish
)[0]}
/> */
}
