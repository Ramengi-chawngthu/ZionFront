const burgerStyle = {
  width: "36px",
  height: "4px",
  backgroundColor: "#7768F2",
  margin: "4px",
  borderRadius: "3px",
};

const burgerLeft = {
  position: "absolute",
  left: 0,
  top: 0,
  transform: "rotate(45deg)",
};

const burgerRight = {
  position: "absolute",
  left: 0,
  top: 0,
  transform: "rotate(-45deg)",
};

function Burger({ handleClick }) {
  return (
    <>
      <div style={{ cursor: "pointer" }} onClick={handleClick}>
        <div style={{ ...burgerStyle, ...burgerLeft }}></div>
        <div style={{ ...burgerStyle, ...burgerRight }}></div>
      </div>
    </>
  );
}

export default Burger;
