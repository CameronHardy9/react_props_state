import "./App.css";
import Box from "./components/Box.jsx"
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        
        const boxes = [];
        const numBoxes = 24;

        for (let i = 0; i < numBoxes; i++) {
            boxes.push({
                id: i,
                color: `rgb(
                    ${this.getRandomColor()}, 
                    ${this.getRandomColor()}, 
                    ${this.getRandomColor()}
                    )`
            });

        this.state = {boxes};
        console.log("App - Constructor");
}
    }
    handleBoxClick = (e) => {
        const newBoxes = this.state.boxes.map((item) => {
            if(item.id == e.target.id){
                item.color = `rgb(
                    ${this.getRandomColor()}, 
                    ${this.getRandomColor()}, 
                    ${this.getRandomColor()}
                    )`;
                }
            })
        return this.setState({newBoxes});
    }
    getRandomColor() {
        const rgb = Math.floor(Math.random() * 255 + 1);
        return rgb;
    }
    componentDidMount() {
        console.log("App - Mount");
    }
    componentDidUpdate() {
        console.log("App - Update");
    }
    render() {
        console.log("App - Render");
        const renderBoxes = this.state.boxes.map((item) => {
            return <Box key={item.id} id={item.id} color={item.color} handleClick={this.handleBoxClick} />
        })
        return (
            <main
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                }}
            >
                <h1>React: State and Props</h1>
                <div className="App">{renderBoxes}</div>
            </main>
        );
    }
}

export default App;
