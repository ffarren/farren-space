import Display from "./Display";
import Zoom from "react-reveal/Zoom";

const MyWork = () => {
  return (
    <div
      id="mywork"
      className="w-full bg-white-300 border-black border-l-2 border-b-2 border-r-2 p-14 lg:p-24"
    >
      <Zoom>
        <p className="font-mono text-2xl lg:text-4xl text-center py-10">
          current hobby: making posters
        </p>
        <Display />
      </Zoom>
    </div>
  );
};

export default MyWork;
