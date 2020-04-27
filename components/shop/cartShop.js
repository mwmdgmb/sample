import React from "react";
import Link from "next/link";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Col
} from "reactstrap";
import image from "../../assets/images/318x180.svg";

const CartShop = ({ data ,cartCount }) => {
  return (
    <React.Fragment>
      {data.slice(0, 5).map(dxt => (
        <Col md="4" key={dxt.id}>
          <Card className="text-right m-2">
            <Link href={`shops?id=${dxt.id}`}>
              <a>
                <CardImg top width="100%" src={image} alt="Card image cap" />
              </a>
            </Link>
            <CardBody>
              <div className="d-flex flex-row justify-content-between align-items-baseline">
                <CardTitle>محصول شماره: {dxt.id}</CardTitle>
                <CardSubtitle>{dxt.employee_salary}T</CardSubtitle>
              </div>
              <CardText>این یک محصول تستی میباشد</CardText>
              <div className="d-flex justify-content-center align-item-center">
                <Button color="primary" onClick={() => cartCount(dxt)}>
                  اضافه کردن به سبد خرید
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default CartShop;
