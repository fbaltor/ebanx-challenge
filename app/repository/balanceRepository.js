const balanceRepository = {
    accounts: [
        {
            id: 100,
            amount: 10,
        },
        {
            id: 200,
            amount: 20,
        }
    ],
}

export const findByAccountId = (id) => 
    balanceRepository.accounts.find(acc => acc.id == id)

export const deposit = (destinationId, amount) => {
    const account = findByAccountId(destinationId)

    if (!account) {
        const newAccount = {}
        newAccount.id = destinationId
        newAccount.amount = amount

        balanceRepository.accounts.push(newAccount)
        
        return newAccount
    }
    
    account.amount += amount
    
    return account
}