import type { App } from 'vue';

import vuetify from './plugins/vuetify';

import './App.scss';

// Test list staged

export default function setup(app: App) {
  app.use(vuetify);
}
