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

const Home = () => {
  const {
    node: heroRef,
    setNode: setHeroRef,
    entry: heroEntry
  } = useIntersectionObserver({
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

  const { setNavStyle } = useNavStyle();

  const router = useRouter();

  useEffect(() => {
    const { intersectionRatio: heroRatio } = heroEntry;
    const heroIntersecting = heroRatio ? heroRatio > 0.9 : true;
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
  }, [skillsEntry, heroEntry, workEntry, contactEntry]);

  useEffect(() => {
    const { query } = router;
    const { section: path } = query;

    const yNavOffset = 96;

    if (skillsRef && workRef && contactRef) {
      switch (path) {
        case "skills":
          return scrollTo({
            top: skillsRef.getBoundingClientRect().top + scrollY - yNavOffset,
            behavior: "smooth"
          });
        case "work":
          return scrollTo({
            top: workRef.getBoundingClientRect().top + scrollY - yNavOffset,
            behavior: "smooth"
          });
        case "contact":
          return scrollTo({
            top: contactRef.getBoundingClientRect().top + scrollY - yNavOffset,
            behavior: "smooth"
          });
      }
    }
  }, [router]);

  return (
    <Page>
      <RevealList section={section}></RevealList>
      <Hero ref={setHeroRef}></Hero>
      <Skills ref={setSkillsRef}></Skills>
      <Work ref={setWorkRef}></Work>
      <Contact ref={setContactRef}></Contact>
    </Page>
  );
};

export default ContextProvider(Home);
