import React from "react";
import s from "./TransactionHostory.module.css"

export default function TransactionHistory({items}) {
    const item = items.map(i => <tr key={i.id}>
        <td>{i.type}</td>
        <td>{i.amount}</td>
        <td>{i.currency}</td>
    </tr>)
    return (
        <div>
            <table className={s.table}>
                <thead className={s.head}>
                <tr className={s.headItems}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
                </thead>
                <tbody className={s.tBody}>
                {item}
                </tbody>
            </table>
        </div>
    )
}