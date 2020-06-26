import React from "react";
import 'materialize-css';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import info from '../../components/cardinfo.json';
import { Row } from 'react-materialize';
import waves from '../Main/waves.mp4';


function Portfolio() {
    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="s12">
                    <video className="bgvid" height='auto' autoPlay muted loop id="myVideo"
                        src={waves} type="video/mp4" />
                </div>
            </div>
            <div className='container content'>
                    <Row>
                        <Card 
                        title={info[0].title}
                        repo={info[0].repoUrl}
                        description={info[0].description}
                        link={info[0].link}
                        picture={info[0].picture}
                        />
                        <Card 
                        title={info[1].title}
                        repo={info[1].repoUrl}
                        description={info[1].description}
                        link={info[1].link}
                        picture={info[1].picture}
                        />
                        <Card 
                        title={info[2].title}
                        repo={info[2].repoUrl}
                        description={info[2].description}
                        link={info[2].link}
                        picture={info[2].picture}
                        />
                    </Row>
                    <Row>
                    <Card 
                        title={info[3].title}
                        repo={info[3].repoUrl}
                        description={info[3].description}
                        link={info[3].link}
                        picture={info[3].picture}
                        />
                        <Card 
                        title={info[4].title}
                        repo={info[4].repoUrl}
                        description={info[4].description}
                        link={info[4].link}
                        picture={info[4].picture}
                        />
                        <Card 
                        title={info[5].title}
                        repo={info[5].repoUrl}
                        description={info[5].description}
                        link={info[5].link}
                        picture={info[5].picture}
                        />
                    </Row>
            </div>
            <Footer />
        </div>
    );
}

export default Portfolio;