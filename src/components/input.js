export const Input = () => {
  return (
    <section className="colored-text">
      <h2>Input</h2>
      <p>
        The Input component is a component that is used to get user input in a
        text field.
      </p>
      <p className="heading">Input Textbox</p>
      <textarea className="input " placeholder="Enter your name" />
      <p className="heading">Input Textbox after Validation (success)</p>
      <textarea className="input input--valid" placeholder="Enter your name" />
      <p className="heading">Input Textbox after Validation (error)</p>
      <textarea
        className="input input--invalid"
        placeholder="Enter your name"
      />
    </section>
  );
};
