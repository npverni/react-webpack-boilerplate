import React from 'react';
import { render } from 'react-dom';
import Hello from './component';

main();

function main() {
  render(<Hello />, document.getElementById('app'));
}
