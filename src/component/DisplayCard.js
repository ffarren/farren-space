const DisplayCard = (props) => {
  return (
    <>
      <img
        alt="project screenshot"
        className="w-[220px] inline-block m-2 cursor-pointer hover:scale-125 ease-in-out duration-300"
        src={props.src}
      ></img>
    </>
  );
};

export default DisplayCard;
