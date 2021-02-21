import React, { PureComponent } from 'react'
// rce


export class TransferFund extends PureComponent {
    state = {
        amount: 0
    }
    handleChange = (ev) => {
        // console.log(ev.target.value)
        const amount = ev.target.value;
        this.setState({ amount })
    }
    tranfer = async (ev) => {
        ev.preventDefault();
        this.props.onTransferCoins(this.state.amount)
        // do i need to upadate coins to contact?
        this.setState({ amount: '' });

    }
    render() {
        const { contact } = this.props;
        const { loggedInUser } = this.props;
        if (!contact && !loggedInUser) {
            return <h3>no contact yet...</h3>
        }
        return (
            <div className="transfer-fund">
                <p>Transfer coins to {contact.name}:</p>
                <form onSubmit={this.tranfer}>
                    <p className="amount-p">
                        <label>Amount</label>
                        <input type="number"
                            name="amount"
                            min="1" max={loggedInUser.coins} required
                            value={this.state.amount}
                            onChange={this.handleChange} />
                        <button type="submit">Tranfer</button>
                    </p>
                </form>
            </div>
        )
    }
}
export default TransferFund


