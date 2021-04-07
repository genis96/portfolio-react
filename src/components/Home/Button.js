import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Home/Button.css"

// style[0] is btn primary, defaults to it
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn-large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkBtnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to="/skills">
            <button onClick={onClick} type={type} className={`btn ${checkBtnStyle} ${checkBtnSize}`}>
                {children}
            </button>
        </Link>
    )
}