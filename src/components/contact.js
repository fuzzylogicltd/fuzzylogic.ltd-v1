import React from 'react';
import * as styles from "./contact.module.css";

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
        <div className="container">
            <h2>Let's Talk</h2>
            <form action="">
                <div className={styles.halfform}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>
                <div className={styles.halfform}>
                    <label htmlFor="name">Email</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                </div>
                <div className={styles.buttonholder}>
                    <button type="input" className="button1">Send</button>
                </div>
            </form>
        </div>
    </section>
    )
}

export default Contact;