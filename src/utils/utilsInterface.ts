export interface TextPolitics {
    title: string;
    description: React.ReactNode | (() => JSX.Element);
    image: string;
    list: (string | React.ReactNode | (() => JSX.Element))[];
}
