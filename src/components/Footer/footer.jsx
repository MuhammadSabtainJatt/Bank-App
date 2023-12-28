import React from 'react'

export default function footer() {
    
    const Year=new Date().getFullYear()
    return (
        <footer className=' text-center bg-primary fw-bold' >
            <p className=''>&copy; {Year} My Bank App. All rights reserved.</p>
        </footer>
    )
}
