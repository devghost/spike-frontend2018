import {html} from 'lit-html/lib/lit-extended.js';

export const createBeerDetails = update => ({
  view: model => (html`<p>Details of beer ${model.params.id}</p>`)
});
