import React, { Component } from "react";
import { fetchingDataAsync } from "../../redux/shop/shop-actions";
import { connect } from "react-redux";
import { addItemsToCard } from "../../redux/cart/cart-actions";
import CartShop from "./cartShop";
import { Col, Alert } from "reactstrap";
import loadingData from "../../assets/images/loading.gif";

export class Shop extends Component {
  componentDidMount() {
    const { fetchingDataAsync } = this.props;
    fetchingDataAsync();
  }

  render() {
    // console.log("props: data?", this.props);
    const { data, cartCount, loading, error } = this.props;
    console.log("props: ", this.props);
    return (
      <>
        <div className="w-100 text-right mb-3">
          <h1>محبوب ترین ها</h1>
        </div>
        <Col className="w-100 text-center">
          {error && <Alert color="danger">Failed to load resource</Alert>}
        </Col>
        <Col md="12" className="d-flex flex-row flex-wrap">
          {loading ? (
            <div className="d-flex justify-content-center align-items-center w-100 pt-5">
              <img src={loadingData} alt="loading" />
            </div>
          ) : (
            <CartShop cartCount={cartCount} data={data} />
          )}
        </Col>
      </>
    );
  }
}

const mapStateToProps = state => ({
  data: state.shop.items,
  loading: state.shop.loading,
  error: state.shop.error
});

const mapDispatchToProps = dispatch => ({
  fetchingDataAsync: () => dispatch(fetchingDataAsync()),
  cartCount: item => dispatch(addItemsToCard(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
