import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='page not found' />
        <h3>Oops! page not found</h3>
        <p>The page your are looking for was not found.</p>
        <p>But don't worry there's no place like</p>
        <Link to='/'>home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
