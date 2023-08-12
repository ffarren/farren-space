import Typewriter from "typewriter-effect";

const Welcome = () => {
  return (
    <div className="mt-20 border-2 border-t-0 border-black w-full bg-fuchsia-400 pl-10 lg:pl-44 py-48">
      <h1 className="font-mono text-5xl lg:text-9xl font-bold mb-12">
        <Typewriter
          options={{
            strings: [
              "Halo!",
              "Hello!",
              "Greetings!",
              "Bonjour!",
              "こんにちは!",
              "Hola!",
              "Ciao!",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <h1 className="font-mono text-2xl lg:text-7xl mb-10">I'm Fidelis Farren</h1>
    </div>
  );
};

export default Welcome;
