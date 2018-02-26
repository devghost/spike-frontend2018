import stream from "mithril/stream";
import {render} from 'lit-html/lib/lit-extended.js';

import { createNavigation } from "./navigation.js";
import { createRouter } from "./router.js";

import { createApp } from "./../features/app";

// Meiosis Setup  
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const update = stream();
const navigation = createNavigation(update);
const app = createApp(update, navigation);
const initialModel = app.model();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = stream.scan(applyUpdate, initialModel, update);

// Rendering
models.map(model => render(app.view(model), document.body));

// Router
const router = createRouter(navigation);
models.map(router.routeSync);


trace({ update, dataStreams: [ models ]});

//meiosisTracer({ selector: "#tracer" });
// import('./main.elm').then(Elm => {
//     var mountNode = document.getElementById('main');
//     var app = Elm.Main.embed(mountNode);
// });
