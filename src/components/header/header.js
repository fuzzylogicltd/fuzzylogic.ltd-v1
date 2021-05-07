import React from 'react';
import Menu from './menu';
import * as styles from "./header.module.css";
import logo from '../../assets/fuzzylogic-logo.svg';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          open: false,
        }
      }

      toggle() {
        this.setState(prevState => ({ open: !prevState.open }));
      }

    render() {

        return (
            <header>
            <div className="container grid">
                <div className={styles.logo}>
                    <a href="/">
                        <svg id="logo" viewBox="0 0 130 130">
                            <path d="m130.99 0v39.423h-26.282v-14.199h-13.141s-13.141 1.1981-13.141 14.199v13.001h13.141v26.142h-13.141v26.282s-2.7856 26.142-28.788 26.142h-49.639v-39.283h26.282v14.199h12.722s13.281-1.0583 13.281-14.199v-13.141h-13.281v-26.142h13.281v-26.142s2.6458-26.282 41.929-26.282z"/>
                            <path d="m91.563 104.85v26.142h39.423v-52.424h-26.282v26.282z"/>
                            <path d="m39.423 26.143v-26.142h-39.423v52.424h26.282v-26.282z"/>
                        </svg>
                    </a>
                    <div className={styles.sitetitle}>
                        <span>fuzzylogic.ltd</span>
                    </div>
                   
                </div>

                <nav className={` ${this.state.open ? `${styles.open}` : ""}`}>
                    <div className={styles.burger}
                        onClick={() => this.toggle()}
                        onKeyDown={() => this.toggle()} >
                        <svg id="icon" viewBox="0 0 800 600">
                            <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top"></path>
                            <path d="M300,320 L540,320" className="middle"></path>
                            <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                        </svg>
                    </div>

                    <Menu open={this.state.open} />

                </nav>
            </div>
        </header>
        )
    }
}

export default Header;