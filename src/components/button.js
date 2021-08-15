export const Button = () => {
  return (
    <section className="colored-text">
      <h2>Button</h2>
      <p>
        The Button component is used to trigger an action or event, such as
        submitting a form, opening a dialog, canceling an action, or performing
        a delete operation.
      </p>
      <p className="heading">Primary Button</p>
      <section>
        <button className="button button--primary">Primary</button>
        <button
          style={{ "--primary-color": "red", "--primary-dark": "darkred" }}
          className="button button--primary"
        >
          Primary
        </button>
        <button
          style={{ "--primary-color": "green", "--primary-dark": "darkgreen" }}
          className="button button--primary"
        >
          Primary
        </button>
        <button
          style={{ "--primary-color": "gold", "--primary-dark": "orange" }}
          className="button button--primary"
        >
          Primary
        </button>
      </section>
      <p className="heading">Secondary Button</p>
      <section>
        <button className="button button--secondary">Secondary</button>
        <button
          style={{ "--primary-color": "red" }}
          className="button button--secondary"
        >
          Secondary
        </button>
        <button
          style={{ "--primary-color": "green" }}
          className="button button--secondary"
        >
          Secondary
        </button>
        <button
          style={{ "--primary-color": "gold" }}
          className="button button--secondary"
        >
          Secondary
        </button>
      </section>
      <p className="heading">Link Button</p>
      <section>
        <button className="button button--link">Link</button>
        <button
          style={{ "--primary-color": "red" }}
          className="button button--link"
        >
          Link
        </button>
        <button
          style={{ "--primary-color": "green" }}
          className="button button--link"
        >
          Link
        </button>
        <button
          style={{ "--primary-color": "gold" }}
          className="button button--link"
        >
          Link
        </button>
      </section>
      <p className="heading">Icon Button</p>
      <section>
        <button className="button button--icon">
          <i class="fas fa-shopping-cart"></i>
        </button>
        <button className="button button--icon">
          <i class="fas fa-headphones"></i>
        </button>
        <button className="button button--icon">
          <i class="fas fa-search"></i>
        </button>
        <button className="button button--icon">
          <i class="fas fa-user-circle"></i>
        </button>
      </section>
      <p className="heading">Icon Text Button</p>
      <section>
        <button className="button button--icon-text">
          <i class="fas fa-shopping-cart"> Cart</i>
        </button>
        <button className="button button--icon-text">
          <i class="fas fa-headphones"> Playlist</i>
        </button>
        <button className="button button--icon-text">
          <i class="fas fa-search"> Search</i>
        </button>
        <button className="button button--icon-text">
          <i class="fas fa-user-circle"> Profile</i>
        </button>
      </section>
      <p className="heading">Floating Action Button</p>
      <p>(look in the bottom-right corner of the screen)</p>
      <button className="button--floating-action">
        <i className="fas fa-chevron-up"></i>
      </button>
    </section>
  );
};
