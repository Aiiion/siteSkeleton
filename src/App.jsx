import { createEffect, createSignal } from "solid-js";
import ghLogo from "./assets/github/github-mark.svg";
import ghLogoWhite from "./assets/github/github-mark-white.svg";
import liLogo from "./assets/linkedin/linkedin-mark.svg";
import liLogoWhite from "./assets/linkedin/linkedin-mark-white.svg";
import weatherLogo from "./assets/weather/logo512.png";
import weatherLogoWhite from "./assets/weather/white-logo512.png";
import bulbDark from "./assets/light-play/bulb-dark.png";
import bulbLight from "./assets/light-play/bulb-light.png";
import lightIcon from "./assets/light-mode.svg"
import darkIcon from "./assets/dark-mode.svg"
import {arrowDown} from "./assets/icons.jsx";
import data from "./data.json";
import "./App.css";

function App() {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const [skills, setSkills] = createSignal(false);
  const [darkTheme, setDarkTheme] = createSignal(systemTheme == "dark");
  const cssSetProp = (prop, value) =>
    document.documentElement.style.setProperty(prop, value);
  createEffect(() => {
    if (!darkTheme()) {
      cssSetProp("--main-bg-img", "var(--light-bg-img");
      cssSetProp("--main-bg-color", "var(--light-bg-color");
      cssSetProp("--main-color", "var(--light-color");
      cssSetProp("--main-btn-bg", "var(--light-btn-bg");
    } else {
      cssSetProp("--main-bg-img", "var(--dark-bg-img");
      cssSetProp("--main-bg-color", "var(--dark-bg-color");
      cssSetProp("--main-color", "var(--dark-color");
      cssSetProp("--main-btn-bg", "var(--dark-btn-bg");
    }
  });
  return (
    <>
      <button
        class="hover-underline top"
        onClick={() => setDarkTheme((theme) => !theme)}
      >
        Use {darkTheme() ? "light" : "dark"} theme <img
              src={darkTheme() ? lightIcon : darkIcon}
              class="logo"
              alt="theme icon"
            />
      </button>
      <article id="main">
        <h1>{data.title}</h1>
        <h3>{data.introduction}</h3>
        <article class="card pb-1">
          <button
            class="button-main hover-underline"
            onClick={() => setSkills((s) => !s)}
            aria-expanded={skills()}
          >
            <h3 class="pt-0">{data.skillsBtn} {arrowDown(skills())}</h3>
          </button>
          <section
            class="dropdown"
            classList={{ open: skills() }}
            aria-hidden={!skills()}
          >
            <p>
              <b>I have:</b>
            </p>
            <ul>
              {data.skills.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </section>
        </article>
        <article class="card pt-1">
          <h3>Projects</h3>
          <a href="https://weather.alexbierhance.com" class="project" target="_blank">
            <img
              src={darkTheme() ? weatherLogoWhite : weatherLogo}
              class="logo large"
              alt="weather app logo"
            />
            <b class="decoration-none">weather</b>
          </a>
          <a href="https://light-play.alexbierhance.com" class="project" target="_blank">
            <img
              src={darkTheme() ? bulbLight : bulbDark}
              class="logo large"
              alt="light bulb logo"
            />
            <b class="decoration-none">light-play</b>
            <small class="sub-text light">(desktop only)</small>
          </a>
        </article>
        <p class="sub-text">
          Check out my socials or email me to learn more
        </p>
        <Show when={data.github}>
          <a href="https://github.com/Aiiion" target="_blank">
            <img
              src={darkTheme() ? ghLogoWhite : ghLogo}
              class="logo small"
              alt="github logo"
            />
          </a>
        </Show>

        <Show when={data.linkedIn}>
          <a href="https://github.com/Aiiion" target="_blank">
            <img
              src={darkTheme() ? liLogoWhite : liLogo}
              class="logo small"
              alt="github logo"
            />
          </a>
        </Show>

        <div>
          <a href="mailto:alex@bierhance.se" target="_blank">
            <b>{data.email}</b>
          </a>
        </div>
      </article>
      {/* </div>   */}
    </>
  );
}

export default App;
