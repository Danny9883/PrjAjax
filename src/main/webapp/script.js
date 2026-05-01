// 페이지 로드 시 생년월일 옵션 생성
window.onload = function() {
    const yearSelect = document.getElementById('birthYear');
    const monthSelect = document.getElementById('birthMonth');
    const daySelect = document.getElementById('birthDay');
    for (let i = 2024; i >= 1950; i--) {
        yearSelect.options.add(new Option(i, i));
    }
    for (let i = 1; i <= 12; i++) {
        monthSelect.options.add(new Option(i, i));
    }
    for (let i = 1; i <= 31; i++) {
        daySelect.options.add(new Option(i, i));
    }
};

// 비밀번호 확인 로직 예시
const pwInput = document.getElementById('userPw');
const pwConfirmInput = document.getElementById('userPwConfirm');
const pwError = document.getElementById('pw-confirm-error');

pwConfirmInput.addEventListener('keyup', () => {
    if (pwInput.value !== pwConfirmInput.value) {
        pwError.style.display = 'inline'; // 일치하지 않으면 노출
    } else {
        pwError.style.display = 'none'; // 일치하면 숨김
    }
});

// 가입 버튼 클릭 시 
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('회원가입 기능이 실행됩니다.');
});
