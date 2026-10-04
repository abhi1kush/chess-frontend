declare module "*.css" {
    const content: { [className: string]: string };
    export default content;
  }

  declare module '*.mp3' {
    const src: string;
    export default src;
  }

  declare module 'virtual:famous-games' {
    export type FamousGame = {
      id: string;
      title: string;
      file: string;
    };
    export const FAMOUS_GAMES: FamousGame[];
  }