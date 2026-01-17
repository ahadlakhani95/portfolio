// import { useEffect, useState } from "react";

// const Cursor = () => {
//     const [position, setPosition] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         const moveCursor = (e) => {
//             setPosition({
//                 x: e.clientX,
//                 y: e.clientY,
//             });
//         };

//         window.addEventListener("mousemove", moveCursor);

//         return () => {
//             window.removeEventListener("mousemove", moveCursor);
//         };
//     }, []);

//     return (
//         <div className="curosr_outline" style={{
//             left: position.x,
//             top: position.y,
//             transform: "translate(-50%, -50%)",
//         }}>
//             <div
//                 style={{
//                     left: position.x,
//                     top: position.y,
//                     transform: "translate(-50%, -50%)",
//                 }}
//                 className="cursor-dot"
//             />
//         </div>
//     );
// };

// export default Cursor;
import React, { useRef, useEffect } from 'react';

const Cursor = () => {
    const cursor_outline_ref = useRef(null);
    const cursor_dot_ref = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            const x = e.clientX;
            const y = e.clientY;

            if (cursor_dot_ref.current && cursor_outline_ref.current) {
                cursor_dot_ref.current.style.top = `${y}px`;
                cursor_dot_ref.current.style.left = `${x}px`;

                cursor_outline_ref.current.style.top = `${y}px`;
                cursor_outline_ref.current.style.left = `${x}px`;
            }
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <>
            <div className="curosr_outline" ref={cursor_outline_ref}></div>
            <div className="cursor-dot" ref={cursor_dot_ref}></div>
        </>
    );
};

export default Cursor;
