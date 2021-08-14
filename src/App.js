import "./styles.css";
import "./componentLibrary.css";
import { useState } from "react";
import { Intro } from "./intro";
import {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Image,
  Input,
  List,
  Modal,
  Navigation,
  Rating,
  SimplifiedGrid,
  Snackbar,
  TextUtilities
} from "./components/index";

export default function ComponentLibrary() {
  const [renderComponent, setRenderComponent] = useState(<Intro />);
  const componentLibraryName = "Avyavaalya";
  const navItems = [
    "Alert",
    "Avatar",
    "Badge",
    "Button",
    "Card",
    "Image",
    "Input",
    "List",
    "Modal",
    "Navigation",
    "Rating",
    "Simplified Grid",
    "Snackbar",
    "Text Utilities"
  ];
  const componentClickHandler = (item) => {
    switch (item) {
      case "Alert":
        setRenderComponent(<Alert />);
        break;
      case "Avatar":
        setRenderComponent(<Avatar />);
        break;
      case "Badge":
        setRenderComponent(<Badge />);
        break;
      case "Button":
        setRenderComponent(<Button />);
        break;
      case "Card":
        setRenderComponent(<Card />);
        break;
      case "Image":
        setRenderComponent(<Image />);
        break;
      case "Input":
        setRenderComponent(<Input />);
        break;
      case "List":
        setRenderComponent(<List />);
        break;
      case "Modal":
        setRenderComponent(<Modal />);
        break;
      case "Navigation":
        setRenderComponent(<Navigation />);
        break;
      case "Rating":
        setRenderComponent(<Rating />);
        break;
      case "Simplified Grid":
        setRenderComponent(<SimplifiedGrid />);
        break;
      case "Snackbar":
        setRenderComponent(<Snackbar />);
        break;
      case "Text Utilities":
        setRenderComponent(<TextUtilities />);
        break;
      default:
        setRenderComponent();
        break;
    }
  };
  return (
    <div classname="component-library">
      <header>
        <h1>{componentLibraryName}</h1>
        <button className="button button--icon fab fa-github"></button>
        <button className="button button--secondary">Download</button>
      </header>
      <nav className="side-nav">
        <h2>Components</h2>
        <ul>
          {navItems.map((item) => (
            <li
              className="list list--stacked"
              onClick={() => componentClickHandler(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <section className="docs">{renderComponent}</section>
      <footer>
        <h3>
          Developed by <a href="https://rishiverma.netlify.app">Rishi Verma</a>.
        </h3>
        <nav>
          <i class="fab fa-github"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-twitter"></i>
        </nav>
      </footer>
    </div>
  );
}
