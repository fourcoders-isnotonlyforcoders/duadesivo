export interface CardProps {
    src: string,
    alt: string,
    title: string,
    sub: string,
    value: string,
}

export interface CardsProps extends CardProps {
    selected: boolean;
    onSelect: (value: string) => void;
}

