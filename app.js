import "./style.css";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip, GSDevTools);

const preloaderBackground = document.querySelector("preloader_background");

const preloaderText = document.querySelector(".preloader_text");

const master = gsap.timeline();

const setIntervalStates = () => {
  gsap.set(preloaderText, {
    yPercent: 100,
  });
};

master.add(setIntervalStates());
