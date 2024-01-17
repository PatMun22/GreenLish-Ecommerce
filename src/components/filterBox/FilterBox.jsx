import "./filterBox.scss";

const FilterBox = () => {
  return (
    <div className="filter-box">
      <div className="upper-div">
        <h1>Filter by price</h1>
        <div className="underline"></div>
      </div>
      <div className="lower-div">
        <div className="btn">
          <p>Ksh. 0</p>
        </div>
        <div className="btn-bar"></div>
        <div className="btn">
          <p>Ksh. 10,000</p>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
