import React, { Component } from "react";
import { withRouter } from "next/router";
import axios from "axios";
import BaseLayout from "../components/baseLayout/baseLayout";
import BasePage from "../components/basePages";
import { Card, Col, CardBody, CardFooter, Row } from "reactstrap";
import image from "../assets/images/318x180.svg";

export class shops extends Component {
  static async getInitialProps({ query }) {
    const shopId = query.id;
    let shop = {};
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${shopId}`
      );
      shop = response.data;
    } catch (error) {
      console.error(error);
    }

    return { shop };
  }

  render() {
    console.log("props:", this.props);
    const { shop } = this.props;
    return (
      <BaseLayout title="shop-page">
        <BasePage>
          <Row className="padding-top">
            <Col className="col-md-4">
              <Card>
                <div className="d-flex flex-column p-4">
                  <h1 className="display-3 text-muted">shops</h1>
                  <CardBody>
                    <h3>
                      <strong>Title</strong>: {shop.title}
                    </h3>
                    <p>
                      <strong>BODY</strong>: {shop.body}
                    </p>
                  </CardBody>
                  <CardFooter>
                    <p>
                      <strong>Id</strong> : {shop.id}
                    </p>
                  </CardFooter>
                </div>
              </Card>
            </Col>
            <Col className="col-md-8">
              <img src={image} className="img-fluid-custom" />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withRouter(shops);
