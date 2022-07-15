function Parent(){
    return(
        <div className="parent">
            <h1>I'm the parent</h1>
            <Child text={"I'm the eldest child"} />
            <Child text={"I'm the codestatesmember"} />
            <Child />
        </div>
    );
};

function Child(props){
    console.log("props : ", props);
    return(
        <div className="child">
            <p>{props.text}</p>
        </div>
        
    )
}
export default Parent;
