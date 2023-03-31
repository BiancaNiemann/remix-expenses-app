import ExpenseStatistics from "~/components/expenses/ExpenseStatistics"
import Chart from "~/components/expenses/Chart"

const DUMMY_EXPENSES = [{
    id: 'e1',
    title: 'First Expense',
    amount: 12.99,
    date: new Date().toISOString()
},{
id: 'e2',
title: 'second Expense',
amount: 12.99,
date: new Date().toISOString()
}
]

export default function ExpenseAnalytics() {
    return (
        <main>
            <Chart expenses={DUMMY_EXPENSES}/>
            <ExpenseStatistics expenses={DUMMY_EXPENSES} />
        </main>

    )
}