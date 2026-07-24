import plugin from 'tailwindcss/plugin';
import { animStars } from './animStars';

export default plugin(animStars(8000));
