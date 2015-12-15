/**
 * Created by Viddu Devigere on 12/8/15.
 */
var React = require('react');
var ProductThumbnail = require("product-thumb");

module.exports = React.createClass({
  render: function () {
    return (
        <div className="productGrid">
          <div className="row">
            <h2>{this.props.q}</h2>
          </div>
          <div className="row">
            <ProductThumbnail price="400 USD" title="Nulla At Nulla Justo, Eget" />
          </div>
        </div>
    );
  }
});