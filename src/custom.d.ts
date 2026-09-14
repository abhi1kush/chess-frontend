declare module "*.css" {
    const content: { [className: string]: string };
    export default content;
  }

  declare module '*.mp3' {
    const src: string;
    export default src;
  }