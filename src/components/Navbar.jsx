import React from 'react'
import { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import './Hero'
import Skills from './myskills/Skills'

function Navbar() {
    const tabs = ["Home", "Projects", "Skills", "Contact"];
    const [activeTab, setActiveTab] = useState(0);

    const tabsRef = useRef([]);
    const pillRef = useRef(null);

    useEffect(() => {
        const el = tabsRef.current[activeTab];
        if (!el || !pillRef.current) return;

        pillRef.current.style.width = `${el.offsetWidth}px`;
        pillRef.current.style.height = `${el.offsetHeight}px`;
        pillRef.current.style.transform = `translate(${el.offsetLeft}px,0px)`;
    }, [activeTab]);

    return (

        <div className="nav_main">
            <nav className="nav">
                <div ref={pillRef} className="nav-pill" />

                {tabs.map((item, i) => (
                    <a
                        key={i}
                        ref={(el) => (tabsRef.current[i] = el)}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setActiveTab(i)}
                        className="nav-link"
                    >
                        {item}
                    </a>
                ))}
            </nav>
        </div>

    );
};

export default Navbar;
