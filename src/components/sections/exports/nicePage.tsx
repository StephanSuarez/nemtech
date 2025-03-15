"use client";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../../titles/title";
import { CardSelectedContext } from "@/src/context/CardSelectedContext";

export default function NicePage() {
    const context = useContext(CardSelectedContext);

    if (!context) {
        throw new Error("NicePage debe estar dentro de CardSelectedProvider");
    }

    const { cardSelected } = context;

    return (
        <div className="relative w-full p-8 min-h-screen overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.img
                    key={cardSelected.image} // clave única para que Framer Motion detecte cambios
                    className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
                    src={context.cardSelected.image}
                    alt={context.cardSelected.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                />
            </AnimatePresence>

            <div className="relative z-10 w-full p-8" style={{ marginTop: '80px', marginLeft: '100px' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={context.cardSelected.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Title
                            color="#98FB98"
                            text1={context.cardSelected.name.split(' ')[0]}
                            text2={context.cardSelected.name.split(' ')[1]}
                            text3={context.cardSelected.name.split(' ')[2]}
                            text4={context.cardSelected.name.split(' ').slice(3).join(' ')}
                        />

                        <div className="flex flex-col gap-4 mt-8">
                            <ul className="list-disc pl-5">
                                {context.cardSelected.terms?.map((term, index) => (
                                    <li key={index}>{term}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
