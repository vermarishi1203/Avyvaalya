export const Input = () => {
  return (
    <section>
      <textarea className="input " placeholder="Enter your name" />
      <textarea className="input input--valid" placeholder="Enter your name" />
      <textarea
        className="input input--invalid"
        placeholder="Enter your name"
      />
    </section>
  );
};
