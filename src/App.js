import "./styles.css";
import "/public/avyavaalya.css";
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
  const componentLibraryName = "Avyavaalyay";
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
    <div className="component-library">
      <header>
        <h1>{componentLibraryName}</h1>
        {/* <a
          href="https://github.com/vermarishi1203/Avyvaalya"
          className="fab fa-github"
        ></a>
        <a href="#" download className="download button button--primary">
          Download
        </a> */}
      </header>
      <section className="components">
        <h2>Components</h2>
        <nav className="side-nav">
          <ul>
            <li
              className="list list--stacked installation"
              onClick={() => setRenderComponent(<Intro />)}
            >
              Installation
            </li>
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
      </section>
      <section className="docs">{renderComponent}</section>
      <footer>
        <h3>
          Developed with <i class="fas fa-heart"></i> by{" "}
          <a href="https://rishiverma.netlify.app">Rishi Verma</a>.
        </h3>
        <nav>
          <a href="https://github.com/vermarishi1203" class="fab fa-github"></a>
          <a
            href="https://www.linkedin.com/in/vermarishi1203/"
            class="fab fa-linkedin"
          ></a>
          <a
            href="https://twitter.com/vermarishi1203"
            class="fab fa-twitter"
          ></a>
        </nav>
      </footer>
    </div>
  );
}
