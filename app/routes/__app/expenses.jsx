import {Outlet, Link, useLoaderData} from "@remix-run/react"
import { FaDownload, FaPlus } from 'react-icons/fa';

import ExpensesList from "~/components/expenses/ExpensesList"
import { getExpenses } from "~/data/expenses.server";

export default function Expenses(){
    const expenses = useLoaderData()

    const hasExpenses = expenses && expenses.length > 0

    return (
        <div>
            <Outlet />
            <main>
                <section id="expenses-actions">
                    <Link to="add">
                        <FaPlus />
                        <span>Add Expense</span>
                    </Link>
                    <a href="/expenses/raw">
                        <FaDownload />
                        <span>Load Raw Data</span>
                    </a>
                </section>
                {hasExpenses && <ExpensesList expenses={expenses}/>}
                {!hasExpenses && <section id="no-expenses">
                    <h1>No expenses found</h1>
                    <p>Start <Link to="add">adding some</Link> today</p>
                    </section>}
            </main>
        </div>
        
    )
}

export async function loader(){
    const expenses = await getExpenses()
    return expenses
}

