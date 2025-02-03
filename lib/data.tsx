import claw from '/assets/claw.webp';
import claw2 from '/assets/claw-2.webp';
import deck from '/assets/deck.webp';
import ship from '/assets/ship.webp';
import vessel from '/assets/vessel.webp';
import { ChartBar, FileCheck, Container,  HeartHandshake } from 'lucide-react';

export const imageGallery = [
    { id: 1, src: claw, alt: 'Claw' },
    { id: 2, src: claw2, alt: 'Claw 2' },
    { id: 3, src: deck, alt: 'Deck' },
    { id: 4, src: ship, alt: 'Ship' },
    { id: 5, src: vessel, alt: 'Vessel' },
];


export const services = [
    {
        icon: <Container className="h-12 w-12" />, // Replace with an appropriate icon
        title: 'Procurement and Trading',
        description: 'Specializing in dry bulk soft commodities, vegetable oils, and coal.',
        features: [
            'High-quality product sourcing',
            'Diverse market demands',
        ],
    },
    {
        icon: <HeartHandshake className="h-12 w-12" />, // Replace with an appropriate icon
        title: 'Trading Support Services',
        description:
            'Value-added procurement and trading services.',
        features: [
            'Purchasing',
            'Trading logistics',
            'Operations support',
        ],
    },
    {
        icon: <FileCheck className="h-12 w-12" />, // Replace with an appropriate icon
        title: 'Documentation and Trade Finance',
        description:
            'Expert handling of all documentation processes and trade finance operations to facilitate smooth transactions.',
        features: [
            'Documentation management',
            'Trade finance expertise',
        ],
    },
    {
        icon: <ChartBar className="h-12 w-12" />, // Replace with an appropriate icon
        title: 'Market Analysis and Strategy',
        description:
            'In-depth market analysis and strategic planning to maximize trading efficiency and profitability.',
        features: [
            'Market analysis',
            'Strategic trading plans',
        ],
    },
];