import React from "react";

import Layout from "../components/layout";
import Intro from "../components/homepage/intro";
import About from "../components/homepage/about";
import Skills from "../components/homepage/skills";
import Work from "../components/homepage/work";
import Testimonials from "../components/homepage/testimonials";


export default function App({data}) {
  return (
    <Layout>
      <Intro />
      <About />
      <Skills />
      <Work />
      <Testimonials />
    </Layout>
    )
}