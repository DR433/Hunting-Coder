import React from 'react'
import Link from 'next/link'

// making a css stylesheet for the individual navbar and importing them 
import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div>
            {/* Making a nav bar using just vanilla css */}
            <div className={styles.pageNavigator}>
                <nav className={styles.mainNavigation}>
                    <ul>
                        <div className="navHeading">
                            <Link href={'/'}><li style={{ fontSize: "27px", fontStyle: "oblique" }}>Hunting Coder</li></Link>
                        </div>
                        <Link href={'/about'}><li>About</li></Link>
                        <Link href={'/contacts'}><li>Contacts</li></Link>
                        <Link href={'/blogs'}><li>Blogs</li></Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
