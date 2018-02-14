import React from 'react';
import ReactDOM from 'react-dom';

const server = 'http://localhost:8080';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      csv: ''
    }
  }

  clickHandler(jsonText) {
    console.log('click handler!')
    //verify proper json
    try {
      JSON.parse(jsonText);
    } catch(error) {
      alert('Invalid JSON String');
      return;
    }

    fetch(this.props.server, {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': jsonText
    }).then((result) => { return result.json(); }
    ).then((result) => {
      this.setState({csv: result});
    });

  }

  render() {
    return (
      <div>
        <Title/>
        <Input clickHandler={this.clickHandler.bind(this)}/>
        <Footer csv={this.state.csv} />
      </div>
    )
  }
}

var Title = (props) => (
  <div>
    <h2>JSON to CSV Converter</h2>
    <h4>By Paolo Z. Roxas </h4>
  </div>
)

class Input extends React.Component {
  constructor(props){
    super(props);
    this.state= {inputValue: ''};
  }

  keyUpHandler(event) {
    console.log('keyup! ', event.target.value);
    if (event.keyCode === 13) {
      this.props.clickHandler(this.state.inputValue);
    } else {
      this.state.inputValue = event.target.value;
    }
  }

  render() {
    return (
      <div>
        <input onKeyUp={this.keyUpHandler.bind(this)} type="text" placeholder="Your JSON here:"/>
        <button onClick={(event) => { this.props.clickHandler(this.state.inputValue); }} >Convert</button>
      </div>
    )
  }
}


var Footer = (props) => (
  <div>
    {props.csv}
    <div>MIT License; Github: leetster0</div>
  </div>
)
console.log(server)
ReactDOM.render(<App server={server}/>, document.getElementById('app'));
