import { useState } from "react";

export const Modal = () => {
  const [shown, setShown] = useState(false);
  return (
    <section>
      <h2 className="colored-text">Modal</h2>
      <p className="colored-text">
        A modal dialog is a window overlaid on either the primary window or
        another dialog window. Content behind a modal dialog is inert, meaning
        that users cannot interact with it.
      </p>
      {shown ? (
        <section className="modal">
          <section className="header">
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
            <button
              onClick={() => setShown(false)}
              className="button button--primary"
            >
              close
            </button>
            <button className="button button--secondary">
              secondary action
            </button>
          </section>
          <button onClick={() => setShown(false)} className="button--dismiss">
            X
          </button>
        </section>
      ) : (
        <button
          onClick={() => setShown(true)}
          className="button button--primary"
        >
          Show Modal
        </button>
      )}
    </section>
  );
};
