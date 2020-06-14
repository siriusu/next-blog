import * as React from 'react'
import styles from './layout.module.css'

const Layout: React.FC = ({ children }) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <img
        className={styles.headerimage}
        src="/images/PQ_KOROMARU.png"
        alt="profile image">
      </img>
    </header>
    <main>
      {children}
    </main>
  </div>
)
export default Layout
