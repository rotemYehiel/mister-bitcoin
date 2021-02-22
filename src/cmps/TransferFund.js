import React, { useState } from 'react';

const TransferFund = (props) => {
    const { contact, loggedInUser } = props;
    const [amount, setAmount] = useState(0);

    const tranfer = async (ev) => {
        ev.preventDefault();
        props.onTransferCoins(amount);
        setAmount(0);
    }

    if (!contact && !loggedInUser) {
        return <h3>no contact yet...</h3>
    }
    return (
        <div className="transfer-fund card-on-feed">
            <p>Transfer coins to {contact.name}:</p>
            <form onSubmit={(ev) => tranfer(ev)}>
                <p className="amount-p">
                    <label>Amount</label>
                    <input type="number"
                        name="amount"
                        min="1" max={loggedInUser.coins} required
                        value={amount}
                        onChange={(ev) => setAmount(ev.target.value)} />
                    <button type="submit">Tranfer</button>
                </p>
            </form>
        </div>
    )

}
export default TransferFund


