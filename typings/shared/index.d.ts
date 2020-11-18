// @ts-nocheck
declare module "*.md" {
    const md: string;
    export default md;
}

declare module "*.png" {
    const png: string;
    export default png;
}

declare module "*.jpg" {
    const jpg: string;
    export default jpg;
}

declare module "*.svg" {
    const component: FunctionComponent<SVGProps<SVGSVGElement> & {
        alt?: string;
    }>;
    export default component;
}
