import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Label,
  Button,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && val.length >= len;
const maxLength = (len) => (val) => !val || val.length <= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCommentModelOpen: false,
    };
    this.toggleCommentModel = this.toggleCommentModel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleCommentModel() {
    this.setState({
      isCommentModelOpen: !this.state.isCommentModelOpen,
    });
  }

  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
  }
  render() {
    return (
      <>
        <Button outline onClick={this.toggleCommentModel}>
          <span className="fa fa-pencil fa-lg"></span> Submit Comment
        </Button>
        <Modal
          isOpen={this.state.isCommentModelOpen}
          toggle={this.toggleCommentModel}
        >
          <ModalHeader toggle={this.toggleCommentModel}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label HtmlFor="Rate" md={12}>
                  Rating
                </Label>
                <Col md={12}>
                  <Control.select className="form-control" model=".rating">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label HtmlFor="name" md={12}>
                  Name
                </Label>
                <Col md={12}>
                  <Control.text
                    className="form-control"
                    model=".name"
                    placeholder="Your Name"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label HtmlFor="name" md={12}>
                  Comment
                </Label>
                <Col md={12}>
                  <Control.textarea
                    className="form-control"
                    rows="6"
                    model=".comment"
                  />
                </Col>
              </Row>
              <Button
                type="submit"
                className="btn"
                value="submit"
                color="primary"
              >
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default CommentForm;
