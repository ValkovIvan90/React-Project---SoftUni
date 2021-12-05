import React, { useEffect, useState } from 'react'

export default function MessageNot({ message }) {
    const [visible, setIsvisible] = useState(false);

    useEffect(() => {
        if (!message) {
            setIsvisible(false)
            return;
        }
        setIsvisible(true);
        const timer = setTimeout(() => {
            setIsvisible(false)
        }, 5000)
        return () => clearTimeout(timer);
    }, [message])

    return (
        <>
            {visible ? <p className="rgsServError">{message}</p> : ''}
        </>
    )
}
