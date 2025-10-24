import { Show, createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import data from "./data.json";
import "./App.css";

function App() {
  const [developer, setDeveloper] = createSignal(false);

  const toggleDropdown = () => {
    console.log(developer == true);
    return (
      <Show when={developer() == true}>
        <div class="dropdown">
          <p>
            <b>I have:</b>
          </p>
          <ul>
            {data.skills.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </Show>
    );
  };
  return (
    <>
      <h1>{data.title}</h1>
      <h3>{data.introduction}</h3>
      <div class="card">
        <button
          onClick={() => {
            setDeveloper((developer) => !developer);
            // console.log(developer);
          }}
        >
          Alex as a developer
        </button>
        <Show when={developer()}>
          <div class="dropdown">
            <p>
              <b>I have:</b>
            </p>
            <ul>
              {data.skills.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </Show>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
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
