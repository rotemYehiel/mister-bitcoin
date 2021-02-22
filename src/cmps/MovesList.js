
import React from 'react'
import moment from 'moment'


export default (props) => {
    const { moves } = props;
    return (
        <div className="moves-list">
            <ul className="moves-list-ul">
                <h3>Your Moves:</h3>
                {moves.map(move => (
                    <li key={move.date} className="move">
                        <p>At: {moment(move.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                        <p>Amount: {move.amount} coins</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}



