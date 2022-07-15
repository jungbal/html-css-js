import "./styles.css";

const App = () => {
  const itemOne = "React를";
  const itemTwo = "배우고 있습니다.";

  return(
    <div className="App">
      <Learn attribute={itemOne} />
      <Learn attribute={itemTwo} />
      <Learn />
      </div>
  );
};

const Learn = (props) => {
  return <div className="Learn">
    <p>{props.attribute}</p> {/* 문장렌더링 */}
  </div>
};

export default App;
