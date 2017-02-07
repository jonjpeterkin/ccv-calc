import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProbForm from './components/ProbForm'


class App extends Component {
  render() {
    return (
    	<MuiThemeProvider>
	      <div className="App">
	      	<ProbForm/>
	      </div>
    	</MuiThemeProvider>
    );
  }
}

export default App;
