export const Badge = () => {
  return (
    <section className="colored-text">
      <h2>Badge</h2>
      <p>
        Badges are used to highlight an item's status for quick recognition.
      </p>
      <p className="heading">Notification Badge</p>
      <section style={{ display: "flex" }}>
        <section className="badge">
          <p class="avatar avatar--fallback-icon fas fa-shopping-cart"></p>
          <p className="badge--icon">2</p>
        </section>
        <section className="badge">
          <p class="avatar avatar--fallback-icon fas fa-comment"></p>
          <p className="badge--icon">5</p>
        </section>
        <section className="badge">
          <p class="avatar avatar--fallback-icon fas fa-thumbs-up"></p>
          <p className="badge--icon">16</p>
        </section>
        <section className="badge">
          <p class="avatar avatar--fallback-icon fas fa-bell"></p>
          <p className="badge--icon">99+</p>
        </section>
      </section>
      <p className="heading">Status Badge</p>
      <section style={{ display: "flex" }}>
        <section className="badge">
          <img
            className=" avatar "
            alt=""
            src="https://pbs.twimg.com/profile_images/1332028682416754688/ToL0ltgZ_400x400.jpg"
          />
          <p
            style={{ color: "green" }}
            className="badge--avatar fas fa-circle"
          ></p>
        </section>
        <section className="badge">
          <img
            className=" avatar "
            alt=""
            src="https://pbs.twimg.com/profile_images/1332028682416754688/ToL0ltgZ_400x400.jpg"
          />
          <p
            style={{ color: "grey" }}
            className="badge--avatar fas fa-dot-circle"
          ></p>
        </section>
        <section className="badge">
          <img
            className=" avatar "
            alt=""
            src="https://pbs.twimg.com/profile_images/1332028682416754688/ToL0ltgZ_400x400.jpg"
          />
          <p
            style={{ color: "gold", backgroundColor: "black" }}
            className="badge--avatar fas fa-moon"
          ></p>
        </section>
        <section className="badge">
          <img
            className=" avatar "
            alt=""
            src="https://pbs.twimg.com/profile_images/1332028682416754688/ToL0ltgZ_400x400.jpg"
          />
          <p
            style={{ color: "red" }}
            className="badge--avatar fas fa-minus-circle"
          ></p>
        </section>
      </section>
    </section>
  );
};
