declare module 'react' {
    // Custom type for a React functional component with props and children.
    type FCC<P = unknown> = FC<PropsWithChildren<P>>;
}

export {};