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
