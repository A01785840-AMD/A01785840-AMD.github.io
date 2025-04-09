import Aether from "@aether/Aether.js";
import styles from "@styles/Table.module.css";


export default function Table({ headers = [], rows = [], className = "" }) {
    const tableClass = className ? `${styles.table} ${className}` : styles.table;

    return new Aether.Component(
        <table class={tableClass}>
            <thead>
                <tr>
                    {headers.map(header => <th>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map(row => (
                    <tr>
                        {row.map(cell => <td>{cell}</td>)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}