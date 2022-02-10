import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
// import "./product.scss"

const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const resp = await fetch("https:fakestoreapi.com/products");
      if (componentMounted) {
        setData(await resp.clone().json());
        setFilter(await resp.json());
        setLoading(false);
        console.log(filter);
      }
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        {/* <div className="d-flex justify-content-center spinner">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div> */}
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const filterProduct = (category) => {
    const getProduct = data.filter((categ) => categ.category === category);
    setFilter(getProduct);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="col-md-12 text-center">
          <h2 className="fw-bolder mt-5 mb-3 text-dicoration-underline">
            Latest Products
          </h2>
        </div>
        <div className="col-md-12 text-center mb-3">
          <a
            href="#"
            className="btn btn-outline-dark me-2 mt-2"
            onClick={() => {
              setFilter(data);
            }}
          >
            All Products
          </a>
          <a
            href="#"
            className="btn btn-outline-dark mt-2 me-2"
            onClick={() => {
              filterProduct("women's clothing");
            }}
          >
            Women's Clothes{" "}
          </a>
          <a
            href="#"
            className="btn btn-outline-dark mt-2 me-2"
            onClick={() => {
              filterProduct("men's clothing");
            }}
          >
            Men's Clothes
          </a>

          <a
            href="#"
            className="btn btn-outline-dark mt-2 me-2"
            onClick={() => {
              filterProduct("jewelery");
            }}
          >
            Jewelery{" "}
          </a>
          <a
            href="#"
            className="btn btn-outline-dark mt-2"
            onClick={() => {
              filterProduct("electronics");
            }}
          >
            Electronics{" "}
          </a>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3">
              <div className="card h-100 text-center p-4" key={product.id}>
                  <img className="card-img-top" height='250px' alt="{product.title}" src={`${product.image}`} />
                  <div className="card-body ">
                    <h6 className="card-title">
                      Category: {product.category}
                    </h6>
                    <br />
                    <h5 className="d-inline-block fw-bold card-text">${product.price}</h5>
                    <br />
                    <Link
                    className="btn btn-outline-dark fw-bold"
                    to={`/productDetails/${product.id}`}
                  >
                    Buy Now
                  </Link>
                  </div>
                </div>
              </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </>
  );
};
export default Product;
