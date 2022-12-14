import { deposit, withdraw } from "../repository/balanceRepository.js"

export const eventController = (req, res) => {
    const event = req.body

    if (event.type === 'deposit') {
        const account = deposit(event.destination, event.amount)

        const response = {
            destination: account
        }
        
        return res.status(201).send(response)
    }

    if (event.type === 'withdraw') {
        const account = withdraw(event.origin, event.amount)

        if (!account)
            return res.status(404).send(String(0))
        
        const response = {
            origin: account
        }

        return res.status(201).send(response)
    }
}