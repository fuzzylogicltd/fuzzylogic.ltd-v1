import React from 'react';
import Menu from './menu';
import * as styles from "./header.module.css"

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
                    fuzzylogic.ltd
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