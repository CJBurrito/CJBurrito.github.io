import React from "react";
import 'materialize-css';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'

function Portfolio() {
    return (
        <div>
            <Navbar />
            <div>
                <div className='container'>
                    <div className='row'>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className='row'>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Portfolio;