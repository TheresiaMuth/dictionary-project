import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div>
        <main>
          <Dictionary />
        </main>
        <div className="container">
          <footer className="App-footer">
            <a
              href="https://github.com/TheresiaMuth/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            <span> by Theresia Muth</span>
          </footer>
        </div>
      </div>
    </div>
  );
}
