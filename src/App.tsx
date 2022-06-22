import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { FC, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";

const App: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const getInitialLocale = () => {
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || LOCALES.ENGLISH;
  };
  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());
  const handleChange = (e: string) => {
    setCurrentLocale(e);
    localStorage.setItem("locale", e);
  };
  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale="en"
      defaultLocale="en"
    >
      <Header currentLocale={currentLocale} handleChange={handleChange} />
      <Navigation />
      <About />
      <Education />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </IntlProvider>
  );
};

export default App;
