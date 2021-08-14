export const Modal = () => {
  return (
    <section className="modal">
      <section>
        <h3>Modal title</h3>
      </section>
      <section>
        <p>
          Hey!
          <br />
          This is a sample Modal.
        </p>
      </section>
      <section>
        <button className="button button--primary">close</button>
        <button className="button button--secondary">secondary action</button>
      </section>
      <button className="button--dismiss">X</button>
    </section>
  );
};
