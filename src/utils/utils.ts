import { TextPolitics } from "./utilsInterface";
import React, { ReactElement } from 'react';

const textBoldAndNormal = (stringNormalOne: string, stringBold: string, stringNormalTwo: string): ReactElement => {
    return React.createElement("p", {}, 
        stringNormalOne, 
        " ",
        React.createElement("span", { className: "font-bold" }, stringBold), 
        " ",
        stringNormalTwo,
    );
};

export const textPolitics: TextPolitics[] = [
    {
        title: "Política de Calidad",
        description: textBoldAndNormal("En", "NEMTECH", "la calidad es el pilar fundamental de nuestro compromiso con la seguridad avanzada. Nos aseguramos de que cada solución tecnológica cumpla con los más altos estándares de precisión, eficiencia y eficacia. Para ello, implementamos un Sistema de Gestión de Calidad (SGC) basado en normativas internacionales, garantizando:"),
        image: "/politica-calidad-icon.png",
        list: [
            textBoldAndNormal("", "Diseño y desarrollo innovador:", "Incorporamos tecnologías de vanguardia, como inteligencia artificial y nanotecnología, asegurando una evolución constante en nuestras soluciones de seguridad."),
            textBoldAndNormal("", "Control de calidad riguroso:", "Aplicamos procesos de inspección, pruebas de desempeño y auditorías internas en cada etapa del ciclo de producción, minimizando riesgos y maximizando la eficacia de nuestras soluciones."),
            textBoldAndNormal("", "Soporte técnico especializado:", "Brindamos asistencia técnica 24/7 para garantizar el correcto funcionamiento de nuestros sistemas, con soporte en múltiples idiomas."),
            textBoldAndNormal("", "Capacitación y entrenamiento:", "Ofrecemos formación integral a nuestros clientes y usuarios sobre nuestras soluciones de seguridad."),
            textBoldAndNormal("", "Cumplimiento de normativas:", "Nos adherimos a las regulaciones y estándares internacionales en materia de seguridad y protección de datos."),
        ],
    },
    {
        title: "Política Ambiental",
        description: textBoldAndNormal("En", "NEMTECH", "comprendemos la responsabilidad de minimizar el impacto ambiental de nuestras actividades. Nuestra política ambiental se fundamenta en el desarrollo sostenible, asegurando la compatibilidad entre la innovación tecnológica y la protección del medio ambiente. Para ello, adoptamos los siguientes principios:"),
        image: "/politica-calidad-icon.png",
        list: [
            textBoldAndNormal("", "Diseño ecológico de productos:", "Implementamos materiales reciclables y tecnologías de bajo consumo energético en el desarrollo de nuestros sistemas de seguridad."),
            textBoldAndNormal("", "Gestión eficiente de residuos:", "Aplicamos estrategias de reducción, reutilización y reciclaje de residuos generados en el desarrollo y prueba de nuestros productos."),
            textBoldAndNormal("", "Uso responsable de recursos:", "Optimizamos el consumo de energía, agua y materias primas en nuestros procesos operativos, promoviendo la eficiencia en el uso de recursos naturales."),
            textBoldAndNormal("", "Cumplimiento normativo:", "Nos alineamos con regulaciones ambientales nacionales e internacionales, asegurando que nuestras operaciones cumplan con estándares ecológicos y de sostenibilidad."),
            textBoldAndNormal("", "Conciencia y formación ambiental:", "Fomentamos una cultura ambiental dentro de la empresa, promoviendo prácticas sostenibles entre nuestros empleados, clientes y socios estratégicos."),
            textBoldAndNormal("", "Compromiso:", "Nos esforzamos por integrar soluciones tecnológicas que no solo brinden seguridad avanzada, sino que también sean responsables con el medio ambiente, contribuyendo a un futuro más sostenible."),
        ]
    },
    {
        title: "Política de Seguridad",
        description: textBoldAndNormal("La excelencia en el servicio es un eje clave en", "NEMTECH", "donde nos comprometemos a brindar soluciones tecnológicas de seguridad con altos estándares de atención al cliente, soporte técnico especializado y un enfoque en la satisfacción de nuestros usuarios. Nuestra política de servicio se basa en los siguientes principios:"),
        image: "/politica-calidad-icon.png",
        list: [
            textBoldAndNormal("", "Atención al cliente:", "Ofrecemos un servicio de atención al cliente excepcional, con un enfoque en la satisfacción de nuestros usuarios."),
            textBoldAndNormal("", "Soporte técnico especializado:", "Brindamos asistencia técnica 24/7 para garantizar el correcto funcionamiento de nuestros sistemas, con soporte en múltiples idiomas."),
            textBoldAndNormal("", "Capacitación y entrenamiento:", "Ofrecemos formación integral a nuestros clientes y usuarios sobre la operación, mantenimiento y optimización de nuestros productos."),
            textBoldAndNormal("", "Compromiso con la seguridad operativa:", "Garantizamos que nuestras tecnologías sean implementadas con los más altos estándares de seguridad y confiabilidad."),
            textBoldAndNormal("", "Cumplimiento de tiempos y procesos:", "Nos aseguramos de que cada entrega e implementación se realice de manera eficiente y en los plazos acordados."),
            textBoldAndNormal("", "Escalabilidad y actualización:", "Brindamos mejoras y actualizaciones constantes en nuestros productos, asegurando que las soluciones evolucionen con los desafíos del entorno de seguridad."),
        ]
    }
]