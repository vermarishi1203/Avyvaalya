export const Alert = () => {
  return (
    <section className="colored-text">
      <h2>Alert</h2>
      <p>
        Alerts are used to communicate a state that affects a system, feature or
        page.
      </p>
      <p className="alert alert--success ">
        <i class="fas fa-check-circle"></i> This is a success alert -- check it
        out !
      </p>
      <p className="alert alert--info ">
        <i class="fas fa-info-circle"></i> This is a info alert -- check it out
        !
      </p>
      <p className="alert alert--warning ">
        <i class="fas fa-exclamation-circle"></i> This is a warning alert --
        check it out !
      </p>
      <p className="alert alert--error ">
        <i class="fas fa-times-circle"></i> This is a error alert -- check it
        out !
      </p>
    </section>
  );
};
