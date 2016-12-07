import React from 'react';
import {render} from 'react-dom'

const App = () => (
  <div>{'Hello world!'}</div>
)

window.onload = () => {
  render(
    <App />,
    document.getElementsByTagName('main')[0]
  );
};
