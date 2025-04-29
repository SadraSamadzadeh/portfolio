import { theme } from '../style/theme';
import { atom } from 'jotai';

export const mobileAtom = atom(window.matchMedia(`(max-width: ${theme.responsive.media.lg})`).matches);