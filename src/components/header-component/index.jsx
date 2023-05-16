import "./styles.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function HeaderComponent() {
  let location = useLocation();

  return (
    <nav className="menu">
      <div className="logoContainer">
        <img
          src="./assets/images/logo.png"
          alt="logo do site"
          className="logo"
        />
        <img src="./assets/images/Dogin.png" alt="Dogin" className="logoName" />
      </div>
      <div className="menuOpts">
        <ul>
          <li>
            <LinkTo label="Home" href="/" path={location.pathname} />
          </li>
          <li>
            <LinkTo label="Raças" href="/breeds" path={location.pathname} />
          </li>
          <li>
            <LinkTo label="Sobre nós" href="/about" path={location.pathname} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

function LinkTo({ label, href, path }) {
  if (href === path) {
    return <>{label}</>;
  }

  return <Link to={href}>{label}</Link>;
}
