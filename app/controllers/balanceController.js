import { findByAccountId } from "../repository/balanceRepository.js"

export const balanceController = (req, res) => {
    const account = findByAccountId(req.query.account_id)

    if (!account)
        return res.status(404).send(String(0))

    return res.send(String(account.balance))
}