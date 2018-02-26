import flyd from "flyd";
import hyperHTML from "hyperhtml/esm";
import { createTemperature } from "./../../widgets/temperature";
import {html} from 'lit-html/lib/lit-extended.js';

// Only for using Meiosis Tracer in development.
//import { trace } from "meiosis";
//import meiosisTracer from "meiosis-tracer";

//const update = flyd.stream();
//const temperature = createTemperature(update);
//const initialModel = temperature.model();
//const applyUpdate = (model, modelUpdate) => modelUpdate(model);
//const models = flyd.scan(applyUpdate, initialModel, update);

//const element = document.getElementById("main");
//const render = hyperHTML.bind(element);
//models.map(model => render`${temperature.view(model)}`);

export const createTemp = update => ({
    //view: models.map(model => temperature.view(model))
    view: model => html`
      ${createTemperature(update).view(model)}`
  });
  

// Only for using Meiosis Tracer in development.
//trace({ update, dataStreams: [ model ]});
//meiosisTracer({ selector: "#tracer" });
