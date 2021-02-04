import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
} from "reactstrap";
import DishDetails from './DishdetailComponet';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
        }
        console.log('Menu component constructor has been invoked.')
    }
    onDishSelected(dish) {
        this.setState({ selectedDish: dish });
    }

    componentDidMount() {
        console.log('Menu component Did Mount has been invoked.')
    }

    render() {
        console.log('Menu component render has been invoked.')
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelected(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                    <DishDetails selectedDish={this.state.selectedDish} />
            </div>
        );
    }
}

export default Menu;
