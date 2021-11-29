import './App.css';
import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

  // // Do one-time setup (Recommended to do data loading in componentDidMount)
  // constructor(props) {
  //   super(props); // super: reference to the parent constructor

  //   // Initialize state, this is the ONLY TIME we do direct assignment to this.state
  //   this.state = { lat: null, errorMessage: "" };
  // }

  state = { lat: null, errorMessage: "" }; // eqivalent to constructor function

  // When component first shows up, do data loading:
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // call setState to update state, DO NOT do direct assignments! (xx = xx)
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message }) 
    );
  }

  // // Do more data loading when states/props update
  // componentDidUpdate() {
  //   console.log("My component was just updated!");
  // }

  // // Do cleanup
  // componentWillUnmount() {
  //   console.log("My component will unmount!");
  // }
  
  // Refactor conditional rendering logic to a helper method instead of putting them in render()
  renderContent() {
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />; // pass states as props down to child
    }
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

export default App;

// App lifecycle
// 1. Instance of App component is created
// 2. App component 'constructor' function gets called
// 3. State object is created and assigned to the 'this.state' property
// 4. We call geolocation service
// 5. React calls the component render method
// 6. App returns JSX, gets rendered to page as HTML
