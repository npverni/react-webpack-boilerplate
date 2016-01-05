import React from 'react';

export default class Hello extends React.Component {
  constructor(){
    super();
    this.state = {
      name: null
    }
  }

  sayHi(){
    this.setState({
      name: this.refs.name.value
    });
  }

  render() {
    const form = (
      <div>
        <label>What is your name?</label>
        <input type="text" ref="name" />
        <button onClick={() => this.sayHi() }>Submit</button>
      </div>
    );

    const msg = (
      <h1>Hello, {this.state.name}</h1>
    )

    return this.state.name ? msg : form;
  }
}
