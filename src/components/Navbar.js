import Link from "next/link"

export default function Navbar({ link }) {
    
    
    return (
        <div style={{display:'flex', gap:'10px'}}>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
        </div>
    )
}