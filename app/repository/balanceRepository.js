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

export const clear = () =>{
    balanceRepository.accounts = []
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

export const transfer = (originId, destinationId, amount) => {
    let originAccount = findByAccountId(originId)

    if (!originAccount) {
        return false
    }

    originAccount = withdraw(originId, amount)
    const destinationAccount = deposit(destinationId, amount)

    return {
        origin: originAccount,
        destination: destinationAccount
    }
}