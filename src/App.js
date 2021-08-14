import "./styles.css";
import "./componentLibrary.css";
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
            <li className="list list--stacked">
              <a href={item}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
      <section className="docs">
        <Alert />
        <Avatar />
        <Badge />
        <Button />
        <Card />
        <Image />
        <Input />
        <List />
        <Modal />
        <Navigation />
        <Rating />
        <SimplifiedGrid />
        <Snackbar />
        <TextUtilities />
      </section>
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
