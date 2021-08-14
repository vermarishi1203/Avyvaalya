export const Modal = () => {
  return (
    <section className="modal">
      <section className="header heading">
        <h3>Modal title</h3>
      </section>
      <section className="main">
        <p>
          Hey!
          <br />
          This is a sample Modal.
        </p>
      </section>
      <section className="footer">
        <button className="button button--primary">close</button>
        <button className="button button--secondary">secondary action</button>
      </section>
      <button className="button--dismiss">X</button>
    </section>
  );
};
