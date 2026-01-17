import { useEffect, useState } from "react";

const texts = [
    "IT Student",
    "Full Stack Developer",
];

export default function Typewriter() {
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        let typingSpeed = isDeleting ? 60 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentText.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);

                if (charIndex + 1 === currentText.length) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                setDisplayText(currentText.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);

                if (charIndex === 0) {
                    setIsDeleting(false);
                    setTextIndex((textIndex + 1) % texts.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex]);

    return (
        <h1>
            {displayText}
            <span className="cursor">|</span>
        </h1>
    );
}
