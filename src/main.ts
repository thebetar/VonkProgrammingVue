import type { App } from 'vue';

import vuetify from './plugins/vuetify';

import './App.scss';

export default function setup(app: App) {
  app.use(vuetify);
}
