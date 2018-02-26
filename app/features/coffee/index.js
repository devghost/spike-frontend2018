import {html} from 'lit-html/lib/lit-extended.js';
import {configuration} from './config.js';

export const config = configuration;
export const createCoffee = update => ({
  view: model => (html`<span>Coffee ${model.coffees.length}</span>`)
});
