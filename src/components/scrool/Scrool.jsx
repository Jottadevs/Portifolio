import React, { useEffect, useState } from 'react';
import './Scrool.css';

function Scrool() {
    const [hideMouse, setHideMouse] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 100;
            const scrollPosition = window.pageYOffset;
            const shouldHideMouse = scrollPosition > scrollThreshold;

            setHideMouse(shouldHideMouse);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`scroll-mouse ${hideMouse ? 'hide' : ''}`}>
            <div className="scroll-wheel">
                <div className="ponteiro"></div>
            </div>
        </div>
    );
}

export default Scrool;
