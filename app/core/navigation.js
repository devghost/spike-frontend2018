import { createServices } from "./services";


const thepages = {
  home: {
    id: "Home",
    tab: "Home"
  },
  coffee: {
    id: "Coffee",
    tab: "Coffee"
  },
  beer: {
    id: "Beer",
    tab: "Beer"
  },
  beerDetails: {
    id: "BeerDetails",
    tab: "Beer"
  },
  temp: {
    id: "Temp"
  }
};

export const pages = (function () {
  return thepages;
})();

export const createNavigation = update => {
  const services = createServices();

  const navigate = (page, params = {}) =>
    update(model => Object.assign(model, ({ page, params })));

  const navigateTo = page => params => navigate(page, params);

  const navigateToCoffee = params => {
    services.loadCoffees().then(coffees => {
      update(model => Object.assign(model, { coffees }));
      if (params && params.id) {
        services.loadCoffee(params).then(coffee => {
          update(model => Object.assign(model, { coffee: coffee.description }));
        });
      }
      navigate(pages.coffee, params);
    });
  };

  const navigateToBeer = () => {
    services.loadBeer().then(beerList => {
      update(model => Object.assign(model, { beerList }));
      navigate(pages.beer);
    });
  };

  const navigateToTemp = () => {
      update(model => Object.assign(model, {
          precipitations: false,
          precipitation: null,
          date: "",
          value: 20,
          units: "C"
        }));
      navigate(pages.temp);
  };

  return {
    navigateToHome: navigateTo(pages.home),
    navigateToTemp,
    navigateToCoffee,
    navigateToBeer,
    navigateToBeerDetails: navigateTo(pages.beerDetails)
  };
};
