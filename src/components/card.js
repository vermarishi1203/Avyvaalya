export const Card = () => {
  return (
    <section>
      <h2 className="colored-text">Card</h2>
      <p className="colored-text">
        Cards are surfaces that display content and actions on a single topic.
        <br />
        <br />
        They should be easy to scan for relevant and actionable information.
        Elements, like text and images, should be placed on them in a way that
        clearly indicates hierarchy.
      </p>
      <p className="colored-text heading">Card with badge</p>
      <section className="card">
        <img
          className="image--responsive card__image"
          alt=""
          src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymxhbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        />
        <h3 className="card__title">title</h3>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="card__badge">New</p>
        <button className="button button--primary">button</button>
      </section>
      <p className="heading colored-text">Card with Dismiss button</p>
      <section className="card">
        <img
          className="image--responsive card__image"
          alt=""
          src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymxhbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        />
        <h3 className="card__title">title</h3>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="button--dismiss">X</button>
        <button className="button button--primary">button</button>
      </section>
      <p className="heading colored-text">Card with Text Overlay</p>
      <section className="card card--text-overlay">
        <img
          className="card__image--overlay"
          alt=""
          src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymxhbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        />
        <h3 className="card__title">title</h3>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="button ">button</button>
      </section>
      <p className="heading colored-text">Text Only Card</p>
      <section className="card">
        <h3 className="card__title">title</h3>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <p className="heading colored-text">Horizontal Card</p>
      <section className="card--horizontal">
        <img
          className=" card__horizontal__image"
          alt=""
          src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymxhbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        />
        <section className="card">
          <h3 className="card__title">title</h3>
          <p className="card__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="button--dismiss">X</button>
          <button className="button button--primary">button</button>
        </section>
      </section>
      <p className="heading colored-text">Card with Shadow</p>
      <section className="card shadow">
        <img
          className="image--responsive card__image"
          alt=""
          src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymxhbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        />
        <h3 className="card__title">title</h3>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="button--dismiss">X</button>
        <button className="button button--primary">button</button>
      </section>
    </section>
  );
};
