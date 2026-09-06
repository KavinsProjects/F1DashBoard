import { useState } from "react";
import Home from "./components/Home.jsx";
import Dashboard from "./components/Dashboard.jsx";
import steeringWheel from "./assets/steering-wheel-sim-racing-steering.png";
import "./App.css";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState("home");

  const navigateTo = (view) => {
    setActiveView(view);
    setMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <button
        className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <img src={steeringWheel} alt="" aria-hidden="true" />
      </button>

      <aside className={`app-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <p className="app-menu-kicker">PIT WALL</p>
        <p className="app-menu-title">F1 DASHBOARD</p>
        <nav aria-label="Main navigation">
          <button className={activeView === "home" ? "active" : ""} type="button" onClick={() => navigateTo("home")}>
            HOME
          </button>
          <button className={activeView === "dashboard" ? "active" : ""} type="button" onClick={() => navigateTo("dashboard")}>
            DASHBOARD
          </button>
        </nav>
      </aside>

      <main>{activeView === "home" ? <Home onExplore={() => navigateTo("dashboard")} /> : <Dashboard />}</main>
    </div>
  );
}

export default App
