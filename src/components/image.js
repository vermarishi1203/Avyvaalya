export const Image = () => {
  return (
    <section className="colored-text">
      <h2>Image</h2>
      <p>The Image component is used to display images.</p>
      <p className="heading">Responsive Image</p>
      <img
        className="image--responsive"
        alt=""
        src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymxhbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
      />
      <p className="heading">Round Image</p>
      <div className="image--round ">
        <img
          // className="image--round--center"
          alt=""
          src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymxhbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        />
      </div>
    </section>
  );
};
