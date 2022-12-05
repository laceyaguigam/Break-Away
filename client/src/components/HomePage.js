import React from "react";

import Header from "./Header"
import Footer from "./Footer"
import Reviews from "./Reviews"

function HomePage() {
  return (
    <section>
      <Header />
      <Reviews />
      <p>This is the homepage.</p>
      <Footer />
    </section>
  );
}
export default HomePage;
