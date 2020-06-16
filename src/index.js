import { using } from 'forest';

import { app } from './app';

const root = document.getElementById('app');

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    root.innerHTML = ''
  })
}

using(root, app);