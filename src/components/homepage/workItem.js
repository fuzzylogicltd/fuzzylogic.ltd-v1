import React, { Component } from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
import * as styles from "./workItem.module.css";

class WorkItem extends Component {

  constructor(props) {
    super(props);
    this.flipCard = this.flipCard.bind(this);
    this.state = {
      flipped: false
    }
  }

  flipCard() {
    const currentState = this.state.flipped;
    this.setState({ flipped: !currentState })
  }

  render() {
    return (
        <div className={styles.workitem}>
            <div className={ `${styles.flipcard} ${this.state.flipped ? styles.flipped : '' }`} onClick={this.flipCard} role="show buttons">
                <div className={styles.flipcardinner}>
                  <div className={styles.flipcardfront}>
                    <GatsbyImage image={this.props.image} alt={this.props.name} imgStyle={{ transform:"none", willChange:"auto" }} />
                  </div>
                  <div className={styles.flipcardback}>
                    { (this.props.www !== "") ? <a href={this.props.www} class="linkbutton">Live Site</a> : "" }
                    { (this.props.slug !== "") ? <Link to={this.props.slug} class="linkbutton">Case Study</Link> : "" }
                  </div>
                </div>
              </div> 
            <h4>{this.props.name}</h4>
            <p>{this.props.blurb}</p>
            <div className={styles.worktags}>
                {this.props.tags.split(",").map((tag) => <span key={tag}>{tag}</span> )}
            </div>
        </div>
    )
  }
}

export default WorkItem;