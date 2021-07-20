import React from "react";
import OrderBy from "./OrderBy";

class Products extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectedOrder:""
        }
    }

    handleOrderBy = (value) => {
        this.setState({
            selectedOrder:value
        })
    }

    render(){
        return(
            <>
          <div>
              <div className = "products-filter">
                  <p>
                      {`${this.props.data.length} Product${
                          this.props.data.length > 1 ? "s": ""
                      }found. `}{" "}
                  </p>
                  <OrderBy selectedOrder = {this.state.selectedOrder}   handleOrderBy={this.handleOrderBy}/>
              </div>
              <div className = "flex wrap">
                  {this.props.data.map((product) => {
                     return <Product {...product} />
                  })}
              </div>
          </div>

            </>
        )
    }
}

function Product(props) {
    return (
      <div className="product-item">
        <div className="product-label">Free Shipping</div>
        <img
          className="product-item-img"
          src={`/static/products/${props.sku}_1.jpg`}
          alt={props.title}
        />
        <div className="product-item-details">
          <p className="product-item-title">{props.title}</p>
          <div className="line"></div>
          <h3 className="product-item-price">
            {props.currencyFormat + props.price}
          </h3>
          <button>Add To Cart</button>
        </div>
      </div>
    );
  }

export default Products