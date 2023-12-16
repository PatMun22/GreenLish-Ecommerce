import { IoMdRadioButtonOn } from "react-icons/io";
import "./indicatorButtons.scss";

const IndicatorButtons = ({
  carousel,
  index,
  updateIndex,
  activeSlideIndex,
}) => {
  return (
    <button
      className="indicator-buttons"
      onClick={() => {
        updateIndex(index);
      }}
      key={carousel.id}
    >
      <IoMdRadioButtonOn
        style={{
          color: index === activeSlideIndex ? "#121935" : "#738678",
          backgroundColor: "transparent",
        }}
      />
    </button>
  );
};

export default IndicatorButtons;
