import React from "react";
import waves from './waves.mp4';
import 'materialize-css';
import { Redirect } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'

function Main() {
    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="s12">
                    <video width='100%' height='auto' autoPlay muted loop id="myVideo"
                        src={waves} type="video/mp4" />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Main;