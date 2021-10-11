export const counter = 2000;
export const activities = [
    {date: new Date(), operation: 'deposit', amount: '1000$'},
    {date: new Date(Date.now() - 86400000), operation: 'deposit', amount: '1500$'},
    {date: new Date(Date.now() - 86400000), operation: 'windrow', amount: '-500$'}
];

export const createNewActivity = (value) => (
    {
        date: new Date(),
        operation: value > 0 ? 'deposit' : 'windrow',
        amount: `${value}$`
    });