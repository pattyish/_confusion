import React from "react";
import { Card, CardImg, CardText, CardBody, CardSubtitle } from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";
import CarouselComponent from "./CarouselComponent";

const RenderCard = ({ item, isLoading, errMess }) => {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else {
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <Card>
          <CardImg src={baseUrl + item.image} alt={item.name} />
          <CardBody>
            <CardText>{item.name}</CardText>
            {item.designation ? (
              <CardSubtitle>{item.designation}</CardSubtitle>
            ) : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
  }
};

function Home(props) {
  return (
    <div className="container">
      <CarouselComponent carousel={props.carouselDish} />
      <div className="row">
        <div className="col-12 col-md my-1">
          <hr />
          <h2 style={{ color: "#512DA8" }} > Dishes Available</h2>
          <hr />
        </div>
      </div>
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.dish}
            isLoading={props.dishesLoading}
            errMess={props.dishesErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.promotion}
            isLoading={props.promoLoading}
            errMess={props.promoErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.leader}
            isLoading={props.leadersLoading}
            errMess={props.leadersFailed}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
