const ID = 'userIdentity';
const PASSWORD = '123456789o';

// 로그인 확인
function onSignInButtonClickHandler(event) {
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;

    const signInMessageElement = document.getElementById('sign-in-message');
    if (id === ID && password === PASSWORD) {
        alert('로그인 성공!');
        signInMessageElement.textContent = '';
    } else {
        signInMessageElement.textContent = '로그인 정보가 일치하지 않습니다.';
    }
}

// 회원가입 홈페이지로 이동
function onSignUpLinkClickHandler(event) {
    window.location.href = 'https://www.google.com';
}

const signUpLinkElement = document.getElementById('sign-up-link');
signUpLinkElement.addEventListener('click', onSignUpLinkClickHandler);

// 카카오 로그인 홈페이지 이동
function onSignUpLinkKakao(event) {
    window.location.href = 'https://developers.kakao.com/';
}

//네이버 로그인 홈페이지로 이동
function onSignUpLinkNaver(event) {
    window.location.href = 'https://developers.naver.com/';
}

const signUpLinkKakaoElement = document.getElementById('sign-up-kakao');
signUpLinkKakaoElement.addEventListener('click', onSignUpLinkKakao);
const signUpLinkNaverElement = document.getElementById('sign-up-naver');
signUpLinkNaverElement.addEventListener('click', onSignUpLinkNaver);