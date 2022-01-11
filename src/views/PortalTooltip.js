import { createPortal } from "react-dom";
import { useState, useRef, useEffect } from "react";

const Tooltip = ({ left, top }) => {
    return (
        <div
            className="absolute flex justify-center border border-gray-300 bg-white rounded w-28"
            style={{ top: `${top}px`, left: `${left}px` }}
        >
            <span>tooltip</span>
        </div>
    );
};

const Port = ({ children }) => {
    return createPortal(children, document.getElementById('upper-root'));
};

const PortalTooltip = () => {
    const [hover, setHover] = useState(false);
    const [coord, setCoord] = useState({ left: 0, top: 0});

    const setTootlip = ({ x, y, width }) => {
        if (x && y && width) setCoord({ left: x - 12, top: y + window.scrollY - 32 });
        setHover(true);
    };
    const removeTooltip = () => {
        setCoord({ left: '', top: '' });
        setHover(false);
    };

    return (
        <div className="w-full max-w-xs">
            <span>Portal tooltip</span>
            <div className="flex h-40 bg-white flex-col border border-red-300 p-6 overflow-hidden">
                <button
                    className="w-80 border border-gray-300"
                    onMouseEnter={(e) => setTootlip(e.target.getBoundingClientRect())}
                    onMouseLeave={removeTooltip}
                >
                    Action
                </button>
                {hover &&
                    <Port>
                        <Tooltip {...coord} />
                    </Port>
                }
            </div>
        </div>
    );
};

export default PortalTooltip;