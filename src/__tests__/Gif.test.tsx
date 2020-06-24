import React from 'react';
import Git from '../Gif';
import renderer from 'react-test-renderer';
import { JSDOM } from "jsdom"

const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window
let div = global.document.createElement('div');
div.id = "root";
global.document.body.appendChild(div);

it('renders correctly', () => {
  const tree = renderer
    .create(<Git preview="preview.img" original="original" title="title"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});