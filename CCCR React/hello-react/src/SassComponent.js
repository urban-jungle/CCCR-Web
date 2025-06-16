import "./SassComponent.scss";
import classnames from "classnames";

const SassComponent = () => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "green",
    "violet",
  ];

  return (
    <div className="SassComponent">
      {colors.map((color) => (
        <div key={color} className={classnames("box", color)}></div>
      ))}
    </div>
  );
};

export default SassComponent;
