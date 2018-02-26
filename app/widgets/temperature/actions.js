export const createActions = update => ({
  togglePrecipitations: evt =>
    update(model => {
      model.precipitations = evt.target.checked;
      return model;
    }),

  changePrecipitation: evt =>
    update(model => {
      model.precipitation = evt.target.value;
      return model;
    }),

  editDate: evt =>
    update(model => {
      model.date = evt.target.value;
      return model;
    }),

  increase: amount =>
    update(model => {
      model.value = model.value + amount;
      return model;
    }),

  changeUnits: () => update(model => {
    if (model.units === "C") {
      model.units = "F";
      model.value = Math.round( model.value * 9 / 5 + 32 );
    }
    else {
      model.units = "C";
      model.value = Math.round( (model.value - 32) / 9 * 5 );
    }
    return model;
  })
});