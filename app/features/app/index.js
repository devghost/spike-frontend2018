import './app.less';

import { pages } from "./../../core/navigation.js";
import { createHome } from "./../home";
import { createCoffee } from "./../coffee";
import { createBeer } from "./../beer";
import { createBeerDetails } from "./../beer/beerDetails.js";
import { createTemp } from "./../temp";
import { html } from 'lit-html/lib/lit-extended.js';

export const createApp = (update, navigation) => {
  const homeComponent = createHome(update);
  const coffeeComponent = createCoffee(update);
  const beerComponent = createBeer(update, navigation);
  const beerDetailsComponent = createBeerDetails(update);
  const tempComponent = createTemp(update);

  const pageMap = {
    [pages.home.id]: homeComponent,
    [pages.coffee.id]: coffeeComponent,
    [pages.beer.id]: beerComponent,
    [pages.beerDetails.id]: beerDetailsComponent,
    [pages.temp.id]: tempComponent,
  };

  return {
    model: () => ({
      page: pages.home,
      params: {}
    }),
    view: model => {
      const currentPageId = pageMap[model.page.id] ? model.page.id : pages.home.id;
      const component = pageMap[currentPageId];
      const currentTab = model.page.tab;
      const isActive = tab => tab === currentTab ? "active" : "";

      return html`
         <div>
          <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              <li class=${isActive(pages.home.tab)}>
                <a href="#/">Home</a>
              </li>
              <li class=${isActive(pages.coffee.tab)}>
                <a href="#/coffee">Coffee</a>
              </li>
              <li class=${isActive(pages.beer.tab)}>
                <a href="#/beer">Beer</a>
              </li>
              <li>
                <a href="#/temp">Temp</a>
              </li>
              <li class="btn">
                <button className="btn btn-default"
                  onclick=${evt => navigation.navigateToHome()}>Home</button>
              </li>
              <li className="btn">
                <button className="btn btn-default"
                  onclick=${evt => navigation.navigateToCoffee()}>Coffee</button>
              </li>
              <li className="btn">
                <button className="btn btn-default"
                  onclick=${evt => navigation.navigateToBeer()}>Beer</button>
              </li>
            </ul>
          </nav>
          ${component.view(model)}
        </div>
      `;
    }
  };
};
