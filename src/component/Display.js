import Card from "./DisplayCard";
import { data } from "./posterData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Display = () => {

  const slideLeft = () =>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () =>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <div className="relative flex items-center">
      <MdChevronLeft size={40} onClick={slideLeft} className="opacity-60 hover:opacity-100 cursor-pointer" />
      <div
        id="slider"
        className="py-10 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide mx-10"
      >
        {data.map((item) => (
          <Card src={item.src} />
        ))}
      </div>
      <MdChevronRight size={40} onClick={slideRight} className="opacity-60 hover:opacity-100 cursor-pointer"/>
    </div>
  );
};

export default Display;
