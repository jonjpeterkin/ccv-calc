import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProbForm from './components/ProbForm'
import Solutions from './components/Solutions'

class App extends Component {
  render() {
    return (
    	<MuiThemeProvider>
	      <div className="App">
	      	<ProbForm />
	      	<Solutions />
	      </div>
    	</MuiThemeProvider>
    );
  }
}

export default App;
