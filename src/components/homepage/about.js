import React, { Component } from 'react';
import ReactRevealText from 'react-reveal-text';
import handleViewport from 'react-in-viewport';

import * as styles from './about.module.css'

class about extends Component {

    constructor(props) {
        super(props);
        this.state = {
            aboutText: "I'm a freelance web designer and full-stack developer with over 15 years of experience in creating websites that make people happy and get stuff done. I can make you a site or custom web application from start to finish or cover only part of a project that you need an extra pair of hands on.",
            show: false 
        }
    }

    loadText() {
        const { inViewport, enterCount } = this.props;
        if (inViewport && enterCount === 1) {
            
            setTimeout(() => {
                this.setState({ show: true });
                console.log("visible");
              }, 200);
        } 
      }

    render() {

        //const { enterCount, leaveCount } = this.props;
        this.loadText();

        return (
        <section id="about" className={styles.about}>
            <div className="container">
                <h3>Hi, I'm Lazar</h3>
                <ReactRevealText show={this.state.show}  transitionTime={50}  delayMax={1500} timingFunction="ease-in" >
                    {this.state.aboutText}
                </ReactRevealText>
            </div>
        </section>
    )
    }
    
}

const aboutWrapped = handleViewport(about, { rootMargin: '-1.0px' });

export default aboutWrapped
