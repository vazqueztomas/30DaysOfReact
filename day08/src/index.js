import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    image: "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg",
  };

  changeAnimal = () => {
    let dogURL =
      "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg";
    let catURL =
      "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg";

    let image = this.state.image === catURL ? dogURL : catURL;
    this.setState({image});
  };
  render() {
    const count = this.state.count;
    return (
      <div className="App">
        <div className="animal">
          <img src={this.state.image} alt="animal" />
        </div>
        <button onClick={this.changeAnimal}>Change animal</button>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
