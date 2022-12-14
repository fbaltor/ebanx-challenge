import { clear } from "../repository/balanceRepository.js"

export const reset = (req, res) => {
    clear()

    return res.status(200).send('OK')
}