/* @jsx createElement */
import { createElement, render } from './react.js';

function Title() {
  return (
    <h2>정말 동작할까?</h2>
  );
}

render(<Title />, document.querySelector('#root'));
