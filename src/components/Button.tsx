import Link from "next/link"
import React from 'react'

function Button({ text, link }: { text: string, link: string }) {
    return (
        <Link href={link} className="btn">Button</Link>
    )
}

export default Button