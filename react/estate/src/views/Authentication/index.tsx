import React, { ChangeEvent, useState } from "react";
import "./style.css";

import SignInBackground from "assents/image/sign-in-background.png";
import SignUpBackground from "assents/image/sign-up-background.png";
import InputBox from "components/Inputbox";

//                    type                    //
type AuthPage = 'sign-in' | 'sign-up';

//                    interface                    //
interface SnsContainerProps {
    title: string;
}

//                    component                    //
function SnsContainer({title}:SnsContainerProps) {

    //                    event handler                    //
    const onSnsButtonClickHandler = (type: 'kakao' | 'naver') => {
        alert(type);

    };
//                    render                    //
    return (
        <div className="authentication-sns-container">
            <div className="sns-container-title label">{title}</div>
            <div className="sns-button-container">
                <div className="sns-button kakao-button" 
                onClick={() => {onSnsButtonClickHandler('kakao')}}></div>
                <div className="sns-button naver-button" 
                onClick={() => {onSnsButtonClickHandler('naver')}}></div>
            </div>
        </div>
    );
} 

//                    interface                    //
interface Props {
    onLinkClickHandler: () => void
}

//                    component                    //
function SignIn({onLinkClickHandler}: Props) { 

    //                    state                    //
    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [message, setMessage] = useState<string>('');
        
    //                    event handler                    //
    const onIdChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setId(event.target.value);
        setMessage('');
    };

    const onPasswordChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        setMessage('');
    };

    const onSignInButtonClickHandler = () => {
        
        const ID = 'service123';
        const PASSWORD = 'qwer1234';

        const isSuccess = id === ID && password === PASSWORD;
        if(isSuccess) {
            setId('');
            setPassword('');
            alert('로그인 성공!');
        }
        else {
            setMessage('로그인 정보가 일치하지 않습니다.');
        }
    };

//                    render                    //
    return (
        <div className="authentication-contents">
            <div className="authentication-input-container">
                <InputBox label="아이디" type="text" value={id} placeholder="아이디를 입력해주세요." 
                onChangeHandler={onIdChangeHandler}/>
                <InputBox label="비밀번호" type="password" value={password} placeholder="비밀번호를 입력해주세요." 
                onChangeHandler={onPasswordChangeHandler} message={message} error />
            </div>
            <div className="authentication-button-container">
                <div className="primary-button full-width" 
                onClick={onSignInButtonClickHandler}>로그인</div>
                <div className="text-link" onClick={onLinkClickHandler}>회원가입</div>
                <div className="short-divider"></div>
                <SnsContainer title="SNS 로그인" />
            </div>
        </div>
    );
}
//                    component                    //
function SignUp({onLinkClickHandler}:Props) {

//                        state                      //
    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordCheck, setpasswordCheck] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [authnumber, setAuthNumber] = useState<string>('');
    
    const [idButtonStatus, setIdButtonStatus] = useState<boolean>(false);
    const [emailButtonStatus, setEamilButtonStatus] = useState<boolean>(false);
    const [authnumberButtonStatus, setAuthNumberButtonStatus] = useState<boolean>(false);

    const [isIdCheck, setIdCheck] = useState<boolean>(false);
    const [isPasswordPattern, setPasswordPattern] = useState<boolean>(false);
    const [isEqualPassword, setEqualPassword] = useState<boolean>(false);
    const [isEmailCheck, setEmailCheck] = useState<boolean>(false);
    const [isAuthNumberCheck, setAuthNumberCheck] = useState<boolean>(false);

    const [idMessage, setIdMessage] = useState<string>('');
    const [passwordMessage, setPasswordMessage] = useState<string>('');
    const [passwordCheckMessage, setPasswordCheckMessage] = useState<string>('');
    const [emailMessage, setEmailMessage] = useState<string>('');
    const [authNumberMessage, setAuthNumberMessage] = useState<string>('');

    const [isIdError, setIdError] = useState<boolean>(false);
    const [isEmailError, setEmailError] = useState<boolean>(false);
    const [isAuthNumberError, setAuthNumberError] = useState<boolean>(false);

    const isSignUpActive = isIdCheck && isEmailCheck && isAuthNumberCheck && 
    isPasswordPattern && isEqualPassword;

    const signUpButtonClass = isSignUpActive ? 'primary-button full-width' : 'disable-button full-width';

    //                        event handler                      //
    const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setId(value);
        setIdButtonStatus(value !== '');
        setIdCheck(false);
        setIdMessage('');
    };
    
    const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setPassword(value);

        const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,13}$/;
        const isPasswordPattern = passwordPattern.test(value);
        setPasswordPattern(isPasswordPattern);

        const passwordMessage = 
            isPasswordPattern ? '' : 
            value ? '영문, 숫자를 혼용하여 8 ~ 13자 입력해주세요.' : '';
        setPasswordMessage(passwordMessage);

        const isEqualPassword = passwordCheck === value;
        setEqualPassword(isEqualPassword);

        const passwordCheckMessage = 
            isEqualPassword ? '' : 
            passwordCheck ? '비밀번호가 일치하지 않습니다.' : '';
        setPasswordCheckMessage(passwordCheckMessage);
    };
    
    const onPasswordCheckChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setpasswordCheck(value);

        const isEqualPassword = password === value;
        setEqualPassword(isEqualPassword);

        const passwordCheckMessage = 
            isEqualPassword ? '' : 
            value ? '비밀번호가 일치하지 않습니다.' : '';
        setPasswordCheckMessage(passwordCheckMessage);
    };
    
    const onEmailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setEmail(value);
        setEamilButtonStatus(value !== '');
        setEmailCheck(false);
        setAuthNumberCheck(false);
        setEmailMessage('');
    };
    
    const onAuthNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setAuthNumber(value);
        setAuthNumberButtonStatus(value !== '');
        setAuthNumberCheck(false);
        setAuthNumberMessage('');
    };
    
    const onIdButtonClickHandler = () => {
        if(!idButtonStatus) return;

        const idCheck = id !== 'admin';
        setIdCheck(idCheck);
        setIdError(!idCheck);

        const idMessage = idCheck ? '사용 가능한 아이디입니다.' : '이미 사용중인 아이디입니다.'
        setIdMessage(idMessage);
    };
    
    const onEmailButtonClickHandler = () => {
        if(!emailButtonStatus) return;
        
        const emailPattern = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/;
        const isEmailPattern = emailPattern.test(email);
        setEmailCheck(isEmailPattern);
        setEmailError(!isEmailPattern);

        const emailMessage = isEmailPattern ? '인증번호가 전송되었습니다' : '이메일 형식이 아닙니다.';
        setEmailMessage(emailMessage);
    };

    const onAuthNumberButtonClickHandler = () => {
        if(!authnumberButtonStatus) return;
        
        const authNumberCheck = authnumber === '1234';
        setAuthNumberCheck(authNumberCheck);
        setAuthNumberError(!authNumberCheck);

        const authNumberMessage = authNumberCheck ? '인증번호가 확인되었습니다.' : '인증번호가 일치하지 않습니다.';
        setAuthNumberMessage(authNumberMessage);
    };
    
    const onSignUpButtonClickHandler = () => {
        if(!isSignUpActive) return;
        alert('회원가입');
    };
    
    //                    render                    //
    return (
        <div className="authentication-contents">
            <SnsContainer title="SNS 회원가입" />
            <div className="short-divider"></div>
            <div className="authentication-input-container">

                <InputBox label="아이디" type="text" value={id} placeholder="아이디를 입력해주세요." 
                onChangeHandler={onIdChangeHandler} buttonTitle="중복 확인" 
                ButtonStatus={idButtonStatus} onButtonClickHandler={onIdButtonClickHandler} message={idMessage} error={isIdError} />

                <InputBox label="비밀번호" type="password" value={password} placeholder="비밀번호를 입력해주세요." 
                onChangeHandler={onPasswordChangeHandler} message={passwordMessage} error/>

                <InputBox label="비밀번호 확인" type="password" value={passwordCheck} placeholder="비밀번호를 입력해주세요." 
                onChangeHandler={onPasswordCheckChangeHandler} message={passwordCheckMessage} error />

                <InputBox label="이메일" type="email" value={email} placeholder="이메일 주소를 입력해주세요." 
                onChangeHandler={onEmailChangeHandler} buttonTitle="중복 확인" 
                ButtonStatus={emailButtonStatus} onButtonClickHandler={onEmailButtonClickHandler} message={emailMessage} error={isEmailError} />

                {
                isEmailCheck &&
                <InputBox label="인증번호" type="text" value={authnumber} 
                placeholder="인증번호 4자리를  입력해주세요." 
                onChangeHandler={onAuthNumberChangeHandler} buttonTitle="인증 확인" 
                ButtonStatus={authnumberButtonStatus} onButtonClickHandler={onAuthNumberButtonClickHandler} message={authNumberMessage} error={isAuthNumberError} />}

            </div>
            <div className="authentication-button-container">
                <div className={signUpButtonClass} onClick={onSignUpButtonClickHandler}>회원가입</div>
                <div className="text-link" onClick={onLinkClickHandler}>로그인</div>
            </div>
        </div>
    );
}

//                    component                    //
export default function Authentication() {

    //                    state                    //
    const [page, setPage] = useState<AuthPage>('sign-in');

    //                    event handler                    //
    const onLinkClickHandler = () => {
        if(page === 'sign-in') setPage('sign-up');
        else setPage('sign-in');
    }

    //                    constant                    //
    const AuthenticationContents 
    = page === 'sign-in' ? 
        <SignIn onLinkClickHandler={onLinkClickHandler}/> : 
        <SignUp onLinkClickHandler={onLinkClickHandler}/>;

    const imageBoxStyle = {backgroundImage: `url(${page === 'sign-in' ? SignInBackground : SignUpBackground
})`}

    //                    render                    //
    return (
        <div id="authentication-wrapper">
            <div className='authentication-image-box' 
            style={imageBoxStyle}></div>
            <div className='authentication-box'>
                <div className='authentication-container'>
                    <div className='authentication-title h1'>
                        {'임대 주택 가격 서비스'}
                    </div>
                    {AuthenticationContents}                 
                </div>
            </div>
        </div>
        
    )
}
