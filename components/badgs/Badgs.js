import React from "react";
import { Badge } from "reactstrap";
import { selectCartItemsCount } from "../../redux/cart/card-selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

function BadgeItems({ count, dropdownCart }) {
  console.log("props:", count);
  return (
    <div>
      <Badge onClick={dropdownCart} className="badge-success">
        {count}
      </Badge>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  count: selectCartItemsCount
});

export default connect(mapStateToProps)(BadgeItems);
