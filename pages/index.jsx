import ContextProvider from "../components/ContextProvider";
import Page from "../components/Page";
import Hero from "../components/Hero";
import RevealList from "../components/RevealList";
import Skills from "../components/Skills";
import { useEffect, useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Work from "../components/Work";
import { useNavStyle } from "../hooks/useNavStyle";
import Contact from "../components/Contact";
import { useRouter } from "next/router";
import MobileReveal from "../components/MobileReveal";

const Home = () => {
  const { setNode: setHeroRef, entry: heroEntry } = useIntersectionObserver({
    threshold: 0.9
  });

  const {
    node: skillsRef,
    setNode: setSkillsRef,
    entry: skillsEntry
  } = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: "120px"
  });

  const {
    node: workRef,
    setNode: setWorkRef,
    entry: workEntry
  } = useIntersectionObserver({
    threshold: 0.5
  });

  const {
    node: contactRef,
    setNode: setContactRef,
    entry: contactEntry
  } = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: "0px 0px 0px 0px"
  });

  const [section, setSection] = useState(null);

  const { navStyle, setNavStyle } = useNavStyle();

  const router = useRouter();

  useEffect(() => {
    const { intersectionRatio: heroRatio } = heroEntry;
    const heroIntersecting = heroRatio
      ? heroRatio > 0.9
      : navStyle !== "opaque";
    setNavStyle(heroIntersecting ? "default" : "opaque");

    const { intersectionRatio: skillsRatio } = skillsEntry;
    const skillsIntersecting = skillsRatio > 0.5;

    const { intersectionRatio: workRatio } = workEntry;
    const workIntersecting = workRatio > 0.5;

    const { intersectionRatio: contactRatio } = contactEntry;
    const contactIntersecting = contactRatio > 0.5;

    if (contactIntersecting) setSection("contact");
    else if (workIntersecting) setSection("work");
    else if (skillsIntersecting) setSection("skills");
    else setSection(null);

    return () => {};
  }, [skillsEntry, heroEntry, workEntry, contactEntry]);

  useEffect(() => {
    const { asPath } = router;

    const yNavOffset = 96;

    console.log(router, asPath);

    if (skillsRef && workRef && contactRef) {
      switch (asPath) {
        case "/skills":
          scrollTo({
            top: skillsRef.getBoundingClientRect().top + scrollY - yNavOffset,
            behavior: "smooth"
          });
          return;
        case "/work":
          scrollTo({
            top: workRef.getBoundingClientRect().top + scrollY - yNavOffset,
            behavior: "smooth"
          });
          return;
        case "/contact":
          scrollTo({
            top: contactRef.getBoundingClientRect().top + scrollY - yNavOffset,
            behavior: "smooth"
          });
          return;
        case "/":
          scrollTo(0, 0);
          return;
        case "/[section]":
          return;
        default:
          router.push("/");
          return;
      }
    }
  }, [router, skillsRef, workRef, contactRef]);

  return (
    <Page>
      <RevealList section={section}></RevealList>
      <Hero ref={setHeroRef}></Hero>
      <MobileReveal>
        <p>
          Welcome! I am a London-based web developer with a focus on delivering
          modern applications as quickly as possible.
        </p>
        <p>Listed here are the skills I have used at a professional level.</p>
      </MobileReveal>
      <Skills ref={setSkillsRef}></Skills>
      <MobileReveal>
        <p>
          I have professional experience developing both internal systems and
          public-facing websites.
        </p>
        <p>
          Here I have outlined some of my completed work as a software
          developer.
        </p>
      </MobileReveal>
      <Work ref={setWorkRef}></Work>
      <MobileReveal>
        <p>
          View or download my CV, or check out my Github where I keep my
          personal projects.
        </p>
      </MobileReveal>
      <Contact ref={setContactRef}></Contact>
    </Page>
  );
};

export default ContextProvider(Home);
