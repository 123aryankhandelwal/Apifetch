import axios from "axios";
import React, { useState, useEffect } from "react";
import {addCart} from "../redux/action";
import Cart from "./Cart";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(false);


  const dispatch=useDispatch()
    const addProduct=(product)=>{
        dispatch(addCart(product))   
    }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setproduct(await response.json());
      setLoading(false);
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="d-flex justify-content-center spinner">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        {/* <div className="col-md-6" style={{lineHeight:2}}>
            <Skeleton height={400}></Skeleton>
        </div>
        <div className="col-md-6" >
            <Skeleton height={50} width={300} />
            <Skeleton height={75} />
            <Skeleton height={25} width={150} />
            <Skeleton height={50} />
            <Skeleton height={150}/>
            <Skeleton height={50} width={100} />
            <Skeleton height={50} width={100} style={{marginLeft:6}}/> s
             </div> */}

      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Ratings {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{Product.drisciption}</p>
         
          <button className="btn btn-outline-dark ms-5 mt-2 mb-2"  onClick={()=>{addProduct(product)}}>Add To Cart</button>
          <button className="btn btn-outline-dark bg-primary ms-2 mt-2 mb-2" to="/cart">Go To Cart</button>
          
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </>
  );
};
export default Product;
