import { Outlet } from 'react-router-dom'
import AppNav from './AppNav'
import Logo from './Logo'
import styles from './Sidebar.module.css'

export default function SideBar() {
    return (
        <div className={styles.sidebar}>
            <Logo/>
            <AppNav/>

            <Outlet></Outlet>
            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Copyrighting {new Date(). getFullYear()} by WorldWise Inc.
                </p>
            </footer>
        </div>
    )
}

