/// <reference types="vite/client" />

declare module 'virtual:famous-games' {
  export type FamousGame = {
    id: string;
    title: string;
    file: string;
  };
  export const FAMOUS_GAMES: FamousGame[];
}