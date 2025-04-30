import { theme } from '../style/theme';
import { atom } from 'jotai';

export type ViewType = '_hello' | '_about-me' | '_projects' | '_contact-me'; 

export const mobileAtom = atom(window.matchMedia(`(max-width: ${theme.responsive.media.lg})`).matches);
export const page = atom<ViewType>('_hello');
export const contentManager = atom<string>('');