import React from 'react';
import './style.css';

import Card from '../Card';

export default function HomePage() {
    return(
        <div className="home-page">
            <Card />
            <Card />
            <Card />
        </div>
    );
}