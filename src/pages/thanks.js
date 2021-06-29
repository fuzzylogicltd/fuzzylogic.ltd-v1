import React from 'react';
import Helmet from "../components/helmet";
import Layout from "../components/layout";


const thanks = () => {
    return (
        <Layout>
             <Helmet slug={`/badges`} title={`Web Development Marit Badges - fuzzylogic.ltd`} />

             <section className="pageHeadline">
            <div class="container">
            <h1>Message received!</h1>
            </div>
          </section>
          <section class="content">
              <article className="container">
                <p>Thank you. I'll get in touch as soon as I can.</p>
              </article>
            </section>
        </Layout>
        
    )
}

export default thanks
