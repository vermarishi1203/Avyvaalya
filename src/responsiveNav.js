const DecideNav = () => {
  const [button, setButton] = useState("X");
  if (button === "=") {
    return (
      <nav className="mobile-nav">
        <button onClick={() => setButton("X")}>X</button>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Blogs</a>
        <a href="#">Talks</a>
        <a href="#">Contact</a>
      </nav>
    );
  } else {
    return (
      <nav>
        <button onClick={() => setButton("=")}>=</button>
      </nav>
    );
  }
};
