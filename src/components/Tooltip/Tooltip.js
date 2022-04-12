import React, { useState } from 'react';

import './tooltip.css';

const Tooltip = (props) => {
    let timeout;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, props.delay || 400);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div
            className='tooltip-wrapper'
            onMouseEnter={ showTip }
            onMouseLeave={ hideTip }
        >
            { props.children }
            {active && (
                <div className='tooltip-tip'>
                    { props.content }
                </div>
            )}
        </div>
    );
};

export { Tooltip };