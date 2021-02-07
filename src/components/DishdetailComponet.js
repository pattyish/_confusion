import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({dish}) {
    return (
      <Card className="col-12 col-md-5 m-1">
        <CardImg top width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
}
function RenderComments({comments}) {
  if (comments.length !== 0) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map((comment) => (
          <ul key={comment.id} className="list-unstyled">
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

const DishDetails = (props) => {
  let dish = props.dish ? (
    <div className="row">
      <RenderDish dish={props.dish} />
      <RenderComments comments={props.dish.comments} />
    </div>
  ) : (
    <div></div>
  );
  return <div className="container">{dish}</div>;
};

export default DishDetails;
