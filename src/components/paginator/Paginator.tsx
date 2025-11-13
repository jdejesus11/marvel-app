import React from "react"
import styles from "./Paginator.module.css"
import LeftArrow from "../../assets/images/left-arrow.png"
import RightArrow from "../../assets/images/rigth-arrow.png"

interface PaginatorProps {
    pages: number,
    currentPage?: number,
    onEventChange?: () => void
}

export const Paginator:React.FC<PaginatorProps> = ({pages, onEventChange}) => {

    const items = new Array(pages).fill(undefined)

    return <>
        <div className={styles["paginator-container"]} >
            <button  onClick={() => onEventChange?.()} className={styles["paginator-container__arrow"]} >
                <img alt="left arrow" className={styles["paginator-container__image"]} src={LeftArrow}  />
            </button>
            {
              items.map((__, index) => {
                return <button onClick={() => onEventChange?.()} key={index} className={styles["paginator-container__page"]}>
                    <strong>
                    {
                        index + 1
                    }
                    </strong>
                </button>
            })
            }
            <button onClick={() => onEventChange?.()} className={styles["paginator-container__arrow"]} >
                <img alt="rigth arrow" className={styles["paginator-container__image"]} src={RightArrow}  />
            </button>
        </div>
    </>
}