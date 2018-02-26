//import {html} from 'lit-html';
import {html} from 'lit-html/lib/lit-extended.js';
import {configuration} from './config.js';

export const config = configuration;
export const createBeer = (update, navigation) => {
  const actions = {
    beerDetails: id => evt => navigation.navigateToBeerDetails({ id }),
  };

  return {
    actions,
    view: model => html`
      <div>
        <p>Beer Page</p>
        <ul>
          ${model.beerList.map(beer =>
            html`<li key=${beer.id}>
              <a href=${'#/beer/' + beer.id}>${beer.title}</a>
              <button className="btn btn-default btn-xs" on-click="${actions.beerDetails(beer.id)}">
                ${beer.title}
              </button>
              <button className="btn btn-default btn-xs" on-click="${evt => console.log('TEST')}">
                ${beer.title}
              </button>
            </li>`
          )}
        </ul>
      </div>
    `
  };
};
