import React from "react";
import { Card } from "./components/card/Card";
import {AppLayout} from "./layouts/AppLayout/AppLayout"
import {Header} from "./containers/header/Header"
import {Footer} from "./containers/footer/Footer"
import styles from "./App.module.css"


export const App = () => {
  return (
    <AppLayout Header={Header} Footer={Footer} >
      <div className={styles["body"]} >
          <section className={styles["content"]} >
      <Card
        character={{
          name: "Captain America (Steve Rogers)",
          comics: [
            "Lorep ipsum Lorep ipsum",
            "Lorep Ipsum",
            "Lorep Ipsum Lorep ipsum",
            "Lorep Ipsum ",
            "Lorep Ipsum",
            "Lorep Ipsum",
          ],
          description:
            "Soldado mejorado con el suero del súper soldado, símbolo de valentía y justicia.",
        }}
      />
      <Card
        character={{
          name: "Captain America (Steve Rogers)",
          comics: [
            "Lorep ipsum Lorep ipsum",
            "Lorep Ipsum",
            "Lorep Ipsum Lorep ipsum",
            "Lorep Ipsum ",
            "Lorep Ipsum",
            "Lorep Ipsum",
          ],
          description:
            "Soldado mejorado con el suero del súper soldado, símbolo de valentía y justicia.",
        }}
      />
      <Card
        character={{
          name: "Captain America (Steve Rogers)",
          comics: [
            "Lorep ipsum Lorep ipsum",
            "Lorep Ipsum",
            "Lorep Ipsum Lorep ipsum",
            "Lorep Ipsum ",
            "Lorep Ipsum",
            "Lorep Ipsum",
          ],
          description:
            "Soldado mejorado con el suero del súper soldado, símbolo de valentía y justicia.",
        }}
      />
         <Card
        character={{
          name: "Captain America (Steve Rogers)",
          comics: [
            "Lorep ipsum Lorep ipsum",
            "Lorep Ipsum",
            "Lorep Ipsum Lorep ipsum",
            "Lorep Ipsum ",
            "Lorep Ipsum",
            "Lorep Ipsum",
          ],
          description:
            "Soldado mejorado con el suero del súper soldado, símbolo de valentía y justicia.",
        }}
      />
         <Card
        character={{
          name: "Captain America (Steve Rogers)",
          comics: [
            "Lorep ipsum Lorep ipsum",
            "Lorep Ipsum",
            "Lorep Ipsum Lorep ipsum",
            "Lorep Ipsum ",
            "Lorep Ipsum",
            "Lorep Ipsum",
          ],
          description:
            "Soldado mejorado con el suero del súper soldado, símbolo de valentía y justicia.",
        }}
      />

          </section>
          <section className={styles["books"]}>
            dasdasd
          </section>
      </div>
    </AppLayout>
  );
};
