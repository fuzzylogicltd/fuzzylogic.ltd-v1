import React from 'react';
import TextLoop from "react-text-loop";
import * as styles from "./intro.module.css";

const intro = () => {
    return (
        <section className={styles.intro}>
          <div className="container">

              <h1>
                  <span>Creating modern </span> 
                  <span>websites and apps </span>  
                  <span>for <span className={styles.purpose}>
                    <TextLoop interval="2000" springConfig={{ stiffness: 100, damping: 10 }}>
                      <span>businesses</span>
                      <span>law firms</span>
                      <span>startups</span>
                      <span>artists</span>
                      <span>fun and profit</span>
                      <span>you</span>
                    </TextLoop>
                  </span></span>
              </h1>

                <div className={styles.scrollarrow}>
                  <a href="#about">
                      <svg viewBox="0 0 512 512">
                          <path d="m 363.38995,307.75461 -88.36947,84.41388 c -4.88137,5.04969 -11.53012,7.57453 -18.85216,7.57453 -7.32204,0 -13.88663,-2.52484 -18.85216,-7.57453 l -88.70611,-84.41388 c -10.52018,-10.01521 -10.52018,-26.34252 0,-36.35773 10.52017,-10.01521 27.52078,-10.01521 38.04095,0 l 42.41735,40.5658 V 129.33243 c 0,-14.22328 12.03508,-25.7534 26.93165,-25.7534 14.89657,0 26.93165,11.53012 26.93165,25.7534 v 182.63025 l 42.41735,-40.5658 c 10.52017,-10.01521 27.52078,-10.01521 38.04095,0 10.52018,10.01521 10.52018,26.25836 0,36.35773 z" />
                          <path d="m 256,20.183594 c -127.60486,0 -231.478516,103.871706 -231.478516,231.476566 0,127.60485 103.873656,231.47851 231.478516,231.47851 127.60486,0 231.47852,-103.87366 231.47852,-231.47851 C 487.47852,124.0553 383.60486,20.183594 256,20.183594 Z m 0,40 c 105.98725,0 191.47852,85.489306 191.47852,191.476566 0,105.98725 -85.49127,191.47851 -191.47852,191.47851 -105.98725,0 -191.478516,-85.49126 -191.478516,-191.47851 C 64.521484,145.6729 150.01275,60.183594 256,60.183594 Z" />
                      </svg>
                  </a>
              </div>

          </div>
      </section>
    )
}

export default intro;