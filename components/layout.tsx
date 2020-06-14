import * as React from 'react'
//import styles from './layout.module.css'

const Layout = (props: { children: React.ReactNode }) => (
  <div className="Layout">
    <header className="Header">
      <img
        className="HeaderImage"
        src="/images/PQ_KOROMARU.png"
        alt="profile image">
      </img>
    </header>
    <main className="Content">
      {props.children}
    </main>
    <style jsx global>{`

      .Layout {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
      }
      .Content {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .Header {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .HeaderImage {
        width: 8rem;
        height: 8rem;
        border-radius: 9999px;
      }
    `}</style>
  </div>
)
export default Layout
