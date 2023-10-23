import styles from "./priceplan.module.css";
import { Link } from "react-router-dom"
//  card information
const cards = [
    {id: "first", plan: "Basic", price: "Free", billing: "Up to 5 users for free", features:{one : "Basic document collaboration",two:"2",three: "Great security and support" }},
    {id: "second", plan: "Pro", price: "$9.99", billing: "Per user, billed monthly", features:{one : "All essential integrations",two:"50",three: "More control and insights" }},
    {id: "third", plan: "Ultimate", price: "$19.99", billing: "Per user, billed monthly", features:{one : "Robust work management",two:"100",three: "VIP support" }}
]


export function PricePlan(){

    return (
        <>
        <div className={styles.container}>
            {cards.map((card) => (
                <div id={card.id} key={card.id} className={styles.card} datatype={ card.id === "second" ? "colored" : "" }>
                    <h2>{card.plan}</h2>
                    <div className={styles.wrapper}>
                        <div className={styles.billing}>
                            <p>{card.price}</p>
                            <span>{card.billing}</span>
                        </div>
                        <div className={`flow ${styles.features} `}>
                            <p>{card.features.one}</p>
                            <p>{card.features.two} GB storage</p>
                            <p>{card.features.three}</p>
                        </div>
                    </div>
                    <Link to="/signup" className={`button ${styles.button}`} datatype={ card.id === "second" ? "light" : "primary" }>Try for Free</Link>
                </div>
            ))   
                  }
        </div>
        </>
    )
}