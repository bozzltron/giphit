import { JSDOM } from "jsdom"
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window
window.HTMLCanvasElement.prototype.getContext = function(){};
HTMLCanvasElement.prototype.getContext = function(){};