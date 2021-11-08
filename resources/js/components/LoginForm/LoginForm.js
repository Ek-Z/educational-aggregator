//Переиспользуемая форма для регистрации и авторизации
import Input from "@mui/material/Input";
import React from "react";
import styles from "./LoginForm.module.scss"
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export function LoginForm
({title, button, onChange, onSubmit, name,
     email,password, c_password, error, passwordsError}) {
    return (
        <form className={styles.loginForm} onSubmit={onSubmit}>
            <div className={styles.loginForm_block}>
                <h1 className={styles.loginForm_block_title}>{title}</h1>
                {(title==="Регистрация") &&
                <Input
                    name="name"
                    value={name}
                    onChange={onChange}
                    fullWidth={true}
                    placeholder="Ваше имя"
                    className={styles.loginForm_block_input}
                    type="more"
                />
                }
                <Input
                    name="email"
                    value={email}
                    onChange={onChange}
                    fullWidth={true}
                    placeholder="Ваш email"
                    className={styles.loginForm_block_input}
                    type="email"
                />
                {error && <div style={{ color:'red' }}>{error}</div>}
                <Input
                    name="password"
                    value={password}
                    onChange={onChange}
                    fullWidth={true}
                    placeholder="Ваш пароль"
                    type="password"
                    className={styles.loginForm_block_input}
                />
                {passwordsError && <div style={{ color:'red' }}>{passwordsError}</div> }
                {(title === "Регистрация") &&
                <Input
                    name="c_password"
                    value={c_password}
                    onChange={onChange}
                    fullWidth={true}
                    placeholder="Повторите пароль"
                    type="password"
                    className={styles.loginForm_block_input}
                />}
                <Button type="submit" color="primary" variant="contained"
                        className={styles.loginForm_block_btn}
                >{button}</Button>
                {(title==="Авторизация") &&
                <Link className={styles.loginForm_link}to="/signUp">У вас нет аккаунта? Зарегистрируйтесь</Link>
                }
                    </div>
        </form>
    )
}
