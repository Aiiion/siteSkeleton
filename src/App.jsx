import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import data from "./data.json";
import "./App.css";

function App() {
  const [developer, setDeveloper] = createSignal(false);

  return (
    <>
      <h1>{data.title}</h1>
      <h3>{data.introduction}</h3>
      <div class="card">
        <button
          onClick={() => setDeveloper((d) => !d)}
          aria-expanded={developer()}
        >
          Alex as a developer
        </button>

        <div
          class="dropdown"
          classList={{ open: developer() }}
          aria-hidden={!developer()}
        >
          <p>
            <b>I have:</b>
          </p>
          <ul>
            {data.skills.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <p class="read-the-docs">
        Click on the socials logos to learn more
      </p>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo" alt="Solid logo" />
        </a>
      </div>
    </>
  );
}

export default App;
