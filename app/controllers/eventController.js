import { deposit } from "../repository/balanceRepository.js"

export const eventController = (req, res) => {
    const event = req.body

    if (event.type === 'deposit') {
        const account = deposit(event.destination, event.amount)
        
        res.send(account)
    }

    res.end()
}