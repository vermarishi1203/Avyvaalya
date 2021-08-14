export const Card = () => {
  return (
    <section>
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
      <section className="card">
        <h3 className="card__title">title</h3>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
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
