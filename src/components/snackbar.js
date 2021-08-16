import { useState } from "react";

export const Snackbar = () => {
  const [shown, setShown] = useState(false);
  return (
    <section className="colored-text">
      <h2>Snackbar</h2>
      <p>
        Snackbars inform users of a process that an app has performed or will
        perform. They appear temporarily, towards the bottom of the screen. They
        shouldn’t interrupt the user experience, and they don’t require user
        input to disappear. <br />
        <br />
        Snackbars contain a single line of text directly related to the
        operation performed. They may contain a text action, but no icons. You
        can use them to display notifications.
      </p>
      {shown ? (
        <section className="snackbar colored-text">
          <p className="snackbar--text ">snackbar</p>
          <button onClick={() => setShown(false)} className=" button--dismiss">
            X
          </button>{" "}
        </section>
      ) : (
        <button
          onClick={() => setShown(true)}
          className="button button--primary"
        >
          Show Snackbar
        </button>
      )}
    </section>
  );
};
