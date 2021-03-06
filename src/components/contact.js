import React from 'react';
import * as styles from "./contact.module.css";

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
        <div className="container">
            <h2>Let's Talk</h2>
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" action="/thanks">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className={styles.halfform}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className={styles.halfform}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>
                <div className={styles.buttonholder}>
                    <button type="input" className="linkbutton">Send</button>
                </div>
            </form>
        </div>
    </section>
    )
}

export default Contact;
