function switchTab(tabId, btnElement) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.getElementById('tab-' + tabId).classList.add('active');

    if (btnElement) {
        document.querySelectorAll('.app-bottom-nav .nav-button').forEach(b => b.classList.remove('active'));
        if (!btnElement.classList.contains('nav-center-button')) {
            btnElement.classList.add('active');
        }
    }
}

function switchLikesTab(btn, type) {
    document.querySelectorAll('.likes-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function toggleEditMode(isEdit) {
    const container = document.getElementById('mypage-container');
    if (isEdit) {
        container.classList.add('is-editing');
    } else {
        container.classList.remove('is-editing');
    }
}

function saveProfileData() {
    document.getElementById('display-user-name').innerText = document.getElementById('input-name').value;
    document.getElementById('display-user-residence').innerText = document.getElementById('input-residence').value;
    toggleEditMode(false);
    openCustomAlert("プロフィールを正常に更新しました！");
}

function openCustomAlert(msg) {
    document.getElementById('customAlertMessage').innerText = msg;
    document.getElementById('customAlertOverlay').style.display = 'flex';
}

function closeCustomAlert() {
    document.getElementById('customAlertOverlay').style.display = 'none';
}

window.onload = function() {
    renderCard();
};


