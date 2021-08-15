export const Avatar = () => {
  return (
    <section className="colored-text">
      <h2>Avatar</h2>
      <p>
        The Avatar component is used to represent a user, and displays the
        profile picture, initials or fallback icon.
      </p>
      <p className="heading">Image Avatar</p>
      <section style={{ display: "flex" }}>
        <img
          className=" avatar "
          alt=""
          src="https://pbs.twimg.com/profile_images/1332028682416754688/ToL0ltgZ_400x400.jpg"
        />
        <img
          className=" avatar "
          alt=""
          src="https://pbs.twimg.com/profile_images/1407601239727112198/V4bunpAi_400x400.jpg"
        />
        <img
          className=" avatar "
          alt=""
          src="https://pbs.twimg.com/profile_images/1350667071202332673/glWYSyvy_400x400.jpg"
        />
      </section>
      <p className="heading">Letter Avatar</p>
      <section style={{ display: "flex" }}>
        <p
          style={{ "--primary-color": "maroon" }}
          className="avatar avatar--letter "
        >
          R
        </p>
        <p
          style={{ "--primary-color": "green" }}
          className="avatar avatar--letter "
        >
          SK
        </p>
        <p
          style={{ "--primary-color": "orange" }}
          className="avatar avatar--letter "
        >
          V
        </p>
      </section>
      <p className="heading">Fallback Icon Avatar</p>
      <section style={{ display: "flex" }}>
        <p
          style={{ "--primary-color": "grey" }}
          className="avatar avatar--fallback-icon fas fa-user-circle"
        ></p>
        <p
          style={{ "--primary-color": "black" }}
          className="avatar avatar--fallback-icon fas fa-user-circle"
        ></p>
        <p className="avatar avatar--fallback-icon fas fa-user-circle"></p>
      </section>
    </section>
  );
};
