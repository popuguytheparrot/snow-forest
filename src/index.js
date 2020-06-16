import { using } from 'forest';

import { app } from './app';

const root = document.getElementById('app');

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    root.innerHTML = '';
  });
}

using(root, app);
