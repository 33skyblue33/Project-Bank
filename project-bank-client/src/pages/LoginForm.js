import React from 'react';
import styles from "../styles/Home.module.css"; 

export function LoginForm()
{
    return(
        <form className='formLog'>
            <input type='text' className={'styles.inputLog'}></input>
            <input type='password' className={'styles.inputLog'}></input>
        </form>
    )
}