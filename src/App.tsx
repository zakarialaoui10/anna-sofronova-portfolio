import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { FC, Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";

const App: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { i18n } = useTranslation();
  const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language);
  };
  return (
    <Fragment>
      <Header handleChange={changeLanguage} />
      <Navigation />
      <About />
      <Education />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default App;
