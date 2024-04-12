import React, { ChangeEvent } from "react";
import './style.css';

export interface InputBoxProps {
    label: string;
    type: 'text' | 'password' | 'email' | 'number';
    value: string;
    placeholder: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    buttonTitle?: string;
    ButtonStatus?: boolean;
    onButtonClickHandler?: () => void;
    message?: string;
    error? : boolean;
}

export default function InputBox({label, type, value, placeholder, onChangeHandler, buttonTitle, ButtonStatus, onButtonClickHandler, message, error}: InputBoxProps) {

    const buttonClass = ButtonStatus ? 'input-primary-button' : 'input-disable-button';
    const messageClass = 'input-message ' + (error ? 'error' : 'primary');

    return (
        <div className="input-box">
            <div className="input-label label">{label}</div>
            <div className="input-content-box">
                <input
                    className="input"
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                />
                {buttonTitle && 
                <div className={buttonClass} onClick={onButtonClickHandler}>
                    {buttonTitle}
                </div> 
                }
            </div>
            <div className={messageClass}>
                {message}
            </div>
        </div>
    );
}