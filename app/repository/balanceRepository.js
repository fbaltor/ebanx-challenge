const balanceRepository = {
    accounts: [
        {
            id: 100,
            balance: 10,
        },
        {
            id: 200,
            balance: 20,
        }
    ],
}

export const findByAccountId = (id) => 
    balanceRepository.accounts.find(acc => acc.id == id)

export const deposit = (destinationId, amount) => {
    let account = findByAccountId(destinationId)

    if (!account) {
        account = {}
        account.id = destinationId
        account.balance = amount

        balanceRepository.accounts.push(account)        
    } else {
        account.balance += amount
    }
    
    return account
}

export const withdraw = (originId, amount) => {
    const account = findByAccountId(originId)
    
    if (!account)
        return false
    
    account.balance -= amount
    
    return account
}