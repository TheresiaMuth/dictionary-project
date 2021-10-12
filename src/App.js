import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
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
  );
}
