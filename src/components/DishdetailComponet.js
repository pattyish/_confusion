import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetails extends Component {
  renderDish(dish) {
    if (dish != null)
      return (
        <Card className="col-12 col-md-5 m-1">
          <CardImg top width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }
  renderComments(array) {
    if (array.length !== 0) {
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {array.map((comment) => (
            <ul className="list-unstyled">
              <li>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author} ,{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            </ul>
          ))}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    let dish = this.props.dish ? (
      <div className="row">
        {this.renderDish(this.props.dish)}
        {this.renderComments(this.props.dish.comments)}
      </div>
    ) : (
      <div></div>
    );
    return <div className="container">{dish}</div>;
  }
}

export default DishDetails;
