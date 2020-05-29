import { using } from 'effector-dom';
import { Title } from './ui/title.js';

using(document.body, () => {
  Title();
});
