// eslint-disable-next-line @typescript-eslint/no-unused-vars
import plugin from 'tailwindcss/plugin';

export type PluginCreator = Parameters<typeof plugin>[0];
export type PluginAPI = Parameters<PluginCreator>[0];

export type Theme = PluginAPI['theme']

export { type CSSRuleObject } from 'tailwindcss/types/config';
