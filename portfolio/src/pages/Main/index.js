import React from "react";
import waves from './waves.mp4';
import 'materialize-css';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './style.css'

function Main() {
    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="s12">
                    <video className="bgvid" height='auto' autoPlay muted loop id="myVideo"
                        src={waves} type="video/mp4" />
                </div>
            </div>
            <div className='container'>
                <div class="jumbotron heroObject bg-transparent">
                    <h1 className="display-4 text-center introText text-white">Christian Balentine is a graduate from the UNCC Full Stack Web Development Bootcamp.</h1>
                    <br></br>
                    <p className="text-center lead introText text-white">He specializes in back end JavaScript and package such as Node, Express, Mongo and SQL. He is also familiar with React and Frameworks, Bootstrap and Materialize. Any free time he has is taken up by his guitars, his computers, or his records.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Main;