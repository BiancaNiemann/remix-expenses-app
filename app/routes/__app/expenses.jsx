import {Outlet, Link} from "@remix-run/react"
import ExpensesList from "~/components/expenses/ExpensesList"
import { FaDownload, FaPlus } from 'react-icons/fa';

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


export default function Expenses(){
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
                <ExpensesList expenses={DUMMY_EXPENSES}/>
            </main>
        </div>
        
    )
}
