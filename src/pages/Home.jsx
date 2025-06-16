import React from 'react';
import '../style/Home.css';
import { Container, Row, Col } from 'reactstrap';

import worldImg from '../file/image/world.png';
import heroImg from '../file/image/Travel1.jpg';
import heroImg02 from '../file/image/Travel2.jpg';
import heroVideo from '../file/image/hero-video.mp4';

import Subtitle from './../shared/subtitle';
import logo from '../components/image/logo.png';

import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../Image-gallery/MasonryImagesGallery';
import NewsLetter from '../shared/Newsletter';

const Home = () => {
  return (
    <section>
    
      <section className='first'>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='hero_content'>
                <div className='hero_subtitle d-flex align-items-center'>
                  <Subtitle subtitle={'Want to explore beauty?'} />
                  <img src={worldImg} alt='' />
                </div>
                <h2> Welcome to the City of Joy, Our own </h2>
                <h1>
                  <span>কOLকATA</span><img id='logo' src={logo} alt='' />
                </h1>
              </div>
            </Col>

            <Col lg='2'>
              <div className='hero_img-box mt-2'>
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero_img-box hero__video-box mt-4'>
                <video src={heroVideo} alt='' controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero_img-box mt-5'>
                <img src={heroImg02} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='second'></section>

      <section className='third'>
        <Container>
          <Row>
            <Col lg='12' className='explore mb-2'>
              <Subtitle subtitle={'Explore'} />
              <h2 className='featured_tour-title'>Our featured tours</h2>
            </Col>

            <Col className='featuredTourList'>
              <FeaturedTourList />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='fifth'>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className='gallery_title'>Our Pride Our City of Joy</h2>
            </Col>

            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      <section className='seven'>
        <NewsLetter />
      </section>
    </section>
  );
};

export default Home;
