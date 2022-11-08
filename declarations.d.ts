declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}


declare module "*.svg" {
    const content: any;
    export default content;
}

// declare module "framer-motion/dist/framer-motion" {
//     export * from "framer-motion";
//   }