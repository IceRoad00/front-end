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