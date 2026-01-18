import './Shimmer.css';

const Shimmer = ({noOfArray}) => {
  return (
    <div className="shimmer-container">
      {Array(noOfArray || 12)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img"></div>
            <div className="shimmer-line title"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line small"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
