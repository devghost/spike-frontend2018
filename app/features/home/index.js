import { html } from "lit-html";
import {configuration} from './config.js';

export const config = configuration;
export const createHome = update => ({
  view: model => html`<h1 class="main-header">Frontend vNext</h1>`
});
