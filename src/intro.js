export const Intro = () => {
  return (
    <section className="intro">
      <h2 className="colored-text">hello !</h2>
      <p className="colored-text">
        Welcome to Avyavaalyay. Ready to kickstart designing your website? just
        paste the below line in your html document or hit the download button to
        download the css file.
      </p>
      <code>
        {"<"}link rel="stylesheet" href="styles.css" /{">"}
      </code>
      <a className="button button--primary">Download CSS</a>
      <h2 className="colored-text">Why Avyavaalyay?</h2>
      <p className="colored-text">
        Avyavaalyay is a Component Library which has almost all the basic
        components you require for designing your website. Hence you{" "}
        <strong>save a ton of time</strong> as you don't have to write your CSS
        from scratch!
        <br />
        <br />
        It is small and hence <strong>loads faster</strong>.
        <br />
        <br />
        It has predifined{" "}
        <strong>variables for colors, margins and padding</strong>, so you don't
        have to provide them for each element. Just set them once and all the
        components will modify themselves.
      </p>
      <h2 className="colored-text">About the Name</h2>
      <p className="colored-text">
        I am a developer based in <strong>India</strong> . I am a native{" "}
        <strong>hindi</strong> speaker, so I choosed a name from hindi for this
        component library. In my opinion, its really simple and relevant.
        <br />
        <br />
        <strong>Avyav (अवयव),</strong> pronounced as "av-yev", is a hindi word
        meaning <strong>component</strong>. And <strong>Aalyay (आलय),</strong>{" "}
        pronounced as "al-yea", is another hindi word meaning{" "}
        <strong>home</strong>. So the word{" "}
        <strong>Avyavaalyay (अवयवालय),</strong> pronounced as "av-yev-al-yea"
        roughly translates to{" "}
        <strong>a place where components are stored</strong>.
      </p>
    </section>
  );
};
