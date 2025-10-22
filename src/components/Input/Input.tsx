import styles from './Input.module.css'



type InputProps = {
    id:string
    labelText: string
} & React.ComponentProps<'input'>

export default function Input({id, type, labelText, ...rest } : InputProps){
    return(
        <>
            <label htmlFor={id}>{labelText}</label>
            <input 
            type={type} 
            id={id} {...rest}
            className={styles.input}></input>
        </>
    )
}