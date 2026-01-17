import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

function Navbar() {
    const tabs = ["Home", "Projects", "Skills", "Contact"];
    const [activeTab, setActiveTab] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

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
        <>
            {/* ===== DESKTOP NAV ===== */}
            <div className="nav_main desktop_nav">
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

            {/* ===== MOBILE MENU BUTTON ===== */}
            <div className="mobile_menu_btn" onClick={() => setMenuOpen(true)}>
                ☰
            </div>

            {/* ===== MOBILE SIDE MENU ===== */}
            <div className={`mobile_menu ${menuOpen ? "open" : ""}`}>
                <span className="close_btn" onClick={() => setMenuOpen(false)}>×</span>

                {tabs.map((item, i) => (
                    <a
                        key={i}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => {
                            setActiveTab(i);
                            setMenuOpen(false);
                        }}
                        className="mobile_link"
                    >
                        {item}
                    </a>
                ))}
            </div>
        </>
    );
}

export default Navbar;
