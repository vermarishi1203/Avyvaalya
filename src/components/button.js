export const Button = () => {
  return (
    <section>
      <button className="button button--primary">Primary</button>
      <button className="button button--secondary">Secondary</button>
      <button className="button button--link">Link</button>
      <button className="button button--icon">
        <img
          className="button--icon__image "
          alt=""
          src="https://pbs.twimg.com/profile_images/687541373512224769/SqGNf-8T_400x400.png"
        />
      </button>
      <button className="button button--floating-action">+</button>
    </section>
  );
};
