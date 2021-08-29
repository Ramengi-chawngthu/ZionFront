const burgerStyle = {
  width: "30px",
  height: "4px",
  backgroundColor: "#7768F2",
  margin: "4px",
  borderRadius: "3px",
};

function Burger() {
  return (
    <>
      <div style={burgerStyle}></div>
      <div style={burgerStyle}></div>
      <div style={burgerStyle}></div>
    </>
  );
}

export default Burger;
