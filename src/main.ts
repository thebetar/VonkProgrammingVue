import type { App } from 'vue';

import './App.css';

import vuetify from './plugins/vuetify';

export default function setup(app: App) {
  app.use(vuetify);
}
