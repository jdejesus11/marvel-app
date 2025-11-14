import React, {PropsWithChildren} from "react";
import styles from "./AppLayout.module.css"

interface AppLayoutProps  extends PropsWithChildren{
    Header: React.FC,
    Footer: React.FC
}

export const AppLayout:React.FC<AppLayoutProps> = ({Header, Footer, children}) => {

    return <div className={styles["app-layout"]}>
         <header  className={styles[""]} >
            <Header />
         </header>
         <main className={styles["app-main"]}> 
            {children}
         </main>
         <footer className={styles[""]}>
            <Footer />
         </footer>
    </div>
}