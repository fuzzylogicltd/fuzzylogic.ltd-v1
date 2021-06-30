import React from "react"
import * as styles from "./skillsItem.module.css"

const skillsItem = props => {
  return (
    <div className={styles.skillssection}>
      <img src={props.image} alt={props.title} width="110px" height="110px" />
      <h4>{props.title}</h4>
      <div dangerouslySetInnerHTML={{ __html: props.html }}></div>
    </div>
  )
}

export default skillsItem
