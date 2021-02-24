
import React from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

export default (props) => {
    const { moves } = props;

    return (
        <div className="moves-list">
            {moves.length ? (<h3 className="card-on-feed">Moves</h3>) : (<h3 className="card-on-feed">No moves yet</h3>)}
            <ul className="moves-list-ul">
                {moves.map(move => (
                    <li key={move.date} className="move card-on-feed">
                        <p><span><FontAwesomeIcon icon={faCalendarCheck} /></span> {moment(move.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                        <p><span><FontAwesomeIcon icon={['fab', 'bitcoin']} /></span>{move.amount} coins</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}



