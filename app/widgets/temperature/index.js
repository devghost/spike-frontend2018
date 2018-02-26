import { createActions } from "./actions";
import { createView } from "./view";

export const createTemperature = update => ({
  model: () => ({
    precipitations: false,
    precipitation: null,
    date: "",
    value: 20,
    units: "C"
  }),

  view: createView(createActions(update))
});