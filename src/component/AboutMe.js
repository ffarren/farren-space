import Zoom from "react-reveal/Zoom";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="py-36 bg-lime-300 border-2 border-t-0 border-black"
    >
      <Zoom>
        <h1 className="font-mono font-bold text-center text-2xl lg:text-7xl mb-20">
          About Me
        </h1>
      </Zoom>
      <Zoom>
        <p className="font-mono text-center px-5 lg:px-36 text-xl lg:text-4xl tracking-wide">
          Hi, my name is Farren, and I'm a self-taught Web Developer/Designer
          from Jakarta, Indonesia.
          <br />
          <br />I enjoy taking complex problems and poking my brains to solve it
          out. I have a strong interest in web development and just a right
          amount experience in using React and Javascript.
          <br />
          <br />Outside work, I enjoy an evening coffee time with my friends, playing music, and playing with my Poodle pup, Momoi.
        </p>
      </Zoom>
    </div>
  );
};

export default AboutMe;
