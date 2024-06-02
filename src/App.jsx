import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import IconGrid from "./components/IconGrid";
import Imageshow from "./components/Imageshow";
import Testimonal from "./components/Testimonal";
import Form from "./components/Form";

function App() {
  let iconData = [
    {
      icon: "bi-window m-auto text-primary",
      heading: "Fully Responsive",
      para: "This theme will look great on any device, no matter the size!",
    },
    {
      icon: "bi-layers m-auto text-primary",
      heading: "Bootstrap 5 Ready",
      para: "Featuring the latest build of the new Bootstrap 5 framework!",
    },
    {
      icon: "bi-terminal m-auto text-primary",
      heading: "Easy to Use",
      para: "Ready to use with your own content, or customize the source files!",
    },
  ];

  let imgShow = [
    {
      image: "/img/bg-showcase-1.jpg",
      side: "order-lg-2",
      imgHeading: "Fully Responsive Design",
      imgPara:
        "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone,tablet, or desktop the page will behave responsively!",
    },
    {
      image: "/img/bg-showcase-2.jpg",
      side: "",
      imgHeading: "Updated For Bootstrap 5",
      imgPara:
        "Newly improved, and full of great utility classNamees, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5! ",
    },
    {
      image: "/img/bg-showcase-3.jpg",
      side: "order-lg-2",
      imgHeading: "Easy to Use & Customize",
      imgPara:
        " Landing Page is just HTML and CSS with a splash of SCSS forusers who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    },
  ];

  let testimonial = [
    {
      testImg: "/img/testimonials-1.jpg",
      testHead: "Margaret E.",
      testPara: "This is fantastic! Thanks so much guys!",
    },
    {
      testImg: "/img/testimonials-2.jpg",
      testHead: "Fred S.",
      testPara:
        "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
    },
    {
      testImg: "/img/testimonials-3.jpg",
      testHead: "Sarah W.",
      testPara:
        "Thanks so much for making these free resources available to us!",
    },
  ];

  return (
    <>
      <NavBar />
      <header className="masthead">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                {/* <!-- Page heading--> */}
                <h1 className="mb-5">
                  Generate more leads with a professional landing page!
                </h1>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Icons Grid--> */}
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            {iconData.map((icon, i) => {
              return <IconGrid key={i} props={icon} />;
            })}
          </div>
        </div>
      </section>

      {/* <!-- Image Showcases--> */}
      <section className="showcase">
        <div className="container-fluid p-0">
          {imgShow.map((show, i) => {
            return <Imageshow key={i} props={show} />;
          })}
        </div>
      </section>

      {/* <!-- Testimonials--> */}
      <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">What people are saying...</h2>
          <div className="row">
            {testimonial.map((test, i) => {
              return <Testimonal key={i} props={test} />;
            })}
          </div>
        </div>
      </section>

      {/* <!-- Call to Action--> */}
      <section className="call-to-action text-white text-center" id="signup">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <h2 className="mb-4">Ready to get started? Sign up now!</h2>
              <Form />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
