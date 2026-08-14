let userPhotos = ['👨‍💼', '📸', '✨', null, null, null, null, null, null, null];

function renderPhotoGrid() {
    const grid = document.getElementById('photoUploadGrid');
    const miniGrid = document.getElementById('subPhotosMiniGrid');
    const mainAvatarEmoji = document.getElementById('main-avatar-emoji');
    if (!grid) return;

    if (userPhotos[0]) {
        mainAvatarEmoji.innerText = userPhotos[0];
    }

    grid.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        const hasImg = userPhotos[i] !== null;
        const slot = document.createElement('div');
        slot.className = `photo-slot ${hasImg ? 'has-image' : ''}`;
        slot.innerHTML = `
            <span>${hasImg ? userPhotos[i] : '＋'}</span>
            <span class="photo-slot-label">${i === 0 ? 'メイン' : i + 1}</span>
        `;
        slot.onclick = () => handlePhotoSlotClick(i);
        grid.appendChild(slot);
    }

    if (miniGrid) {
        miniGrid.innerHTML = '';
        userPhotos.forEach((p) => {
            if (p !== null) {
                const thumb = document.createElement('div');
                thumb.className = 'sub-mini-thumb';
                thumb.innerText = p;
                miniGrid.appendChild(thumb);
            }
        });
    }
}

function handlePhotoSlotClick(index) {
    const samples = ['👨‍💼', '📸', '🌟', '🍷', '☕', '🚗', '🐱', '🕶️'];
    const current = userPhotos[index];
    
    if (current === null) {
        userPhotos[index] = samples[index % samples.length];
    } else {
        if (index === 0) {
            openCustomAlert("メインアイコン（1枚目）は削除できません。別のアイコンに変更してください。");
            return;
        }
        userPhotos[index] = null;
    }
    renderPhotoGrid();
}

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
    const toggleBtn = document.getElementById('modeToggleBtn');
    if (isEdit) {
        container.classList.add('is-editing');
        if (toggleBtn) toggleBtn.style.display = 'none';
    } else {
        container.classList.remove('is-editing');
        if (toggleBtn) toggleBtn.style.display = 'block';
    }
}

function saveProfileData() {
    // 編集内容をビューモードに反映
    document.getElementById('v-birth').innerText = document.getElementById('input-birth').value;
    document.getElementById('v-body-size').innerText = document.getElementById('input-body-size').value;
    document.getElementById('v-build').innerText = document.getElementById('input-build').value;
    document.getElementById('v-income').innerText = document.getElementById('input-income').value;
    document.getElementById('v-residence').innerText = document.getElementById('input-residence').value;
    document.getElementById('v-intro').innerText = document.getElementById('input-intro').value;

    toggleEditMode(false);
    renderPhotoGrid();
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
    if (typeof renderCard === 'function') {
        renderCard();
    }
    renderPhotoGrid();
};
