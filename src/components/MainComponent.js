import React, { Component } from "react";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import Footer from "./FooterComponent";
import DishDetails from "./DishdetailComponet";
import { DISHES } from "../shared/dishes";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelected(dishId) {
    this.setState({ selectedDish: dishId });
  }
  render() {
    return (
      <div>
       <Header />
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelected(dishId)}
        />
        <DishDetails
          dish={this.state.dishes.filter(
            (dish) => dish.id === this.state.selectedDish
          )[0]}
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
