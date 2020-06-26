import React from "react";
import 'materialize-css';
import { Footer } from 'react-materialize';
import './style.css';


function footer() {
  return (
    <Footer
      className="foot black"
      copyrights="&copy 2020 Christian Balentine"
      moreLinks={<a className="grey-text text-lighten-4 right" >Contact : christianbalentine47@gmail.com</a>}
    >
    </Footer>
  )
}


export default footer;