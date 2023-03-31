import AuthForm from '../../components/auth/AuthForm'
import styles from '~/styles/auth.css'

export default function UserAuth(){
    return (
        <AuthForm />
    )
}

export function links(){
    return ({rel: "stylesheet", href: styles})
}