import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

// refactor code (babel will call the constructor for you so no need to write the below code)
    state = { lat: null, errorMessage:''};

    // constructor(props) {
      //  super(props);
       // this.state = { lat: null, errorMessage:''};
   //}

// use this when you  need your component to render something ONCE (eg API)
   componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
                err => this.setState({ errorMessage: err.message })
        );
     }

     renderContent () {
         // CONDITIONAL RENDERING  

        // if there is no lat then display errorMessage (!this.state.lat ! means not)
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        // if there is no error then display lat
         if (!this.state.errorMessage && this.state.lat){
             return <SeasonDisplay lat={this.state.lat}/>
         }
         // if no latitude then display this div:
         return <Spinner message="Please accept location request"/>

     }
    
       render() {
           return (
               <div className="border red">
                   {this.renderContent()}
               </div>
           )

        
    }
  }

ReactDOM.render(<App />, document.querySelector('#root'));