"use client"
import Header from "./sections/Header.js"
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Habilities from "./sections/Habilities";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import WelcomeScreen from "./sections/Welcome";

export default function Home() {
  return(
    <main>
      <WelcomeScreen />
      <Header />
        <AboutMe />
        <Habilities />
        <Projects />
        <Contact />
      <Footer />
    </main>
  )
}     