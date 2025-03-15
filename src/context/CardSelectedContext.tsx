import { createContext, useState } from 'react';

export interface Card {
    name: string;
    image: string;
    terms: string[];
}

interface CardSelectedContextType {
    cardSelected: Card;
    setCardSelected: (card: Card) => void;
}

export const CardSelectedContext = createContext<CardSelectedContextType | null>(null);

export const CardSelectedProvider = ({ children }: { children: React.ReactNode }) => {
    const [cardSelected, setCardSelected] = useState<Card>({
        name: "Incoterms exportación e importación",
        image: "/images/landscape.jpg",
        terms: [],
    });

    console.log(cardSelected);

    return (
        <CardSelectedContext.Provider value={{ cardSelected, setCardSelected }}>
            {children}
        </CardSelectedContext.Provider>
    );
};
