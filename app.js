// ユーザーの登録写真（最大10枚、初期状態：1枚目がメインアイコン候補）
let userPhotos = ['👨‍💼', '📸', '✨', null, null, null, null, null, null, null];

function renderPhotoGrid() {
    const grid = document.getElementById('photoUploadGrid');
    const miniGrid = document.getElementById('subPhotosMiniGrid');
    const mainAvatarEmoji = document.getElementById('main-avatar-emoji');
    if (!grid) return;

    // 1枚目をメインアイコンに反映
    if (userPhotos[0]) {
        mainAvatarEmoji.innerText = userPhotos[0];
    }

    // 10枚のスロットを生成 (編集用グリッド)
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

    // サブ写真のミニプレビュー生成 (ビューモード用)
    if (miniGrid) {
        miniGrid.innerHTML = '';
        userPhotos.forEach((p, idx) => {
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
    // サンプルとして、クリックされたらアイコンの種類を切り替える・追加するインタラクション
    const samples = ['👨‍💼', '📸', '🌟', '🍷', '☕', '🚗', '🐱', '🕶️'];
    const current = userPhotos[index];
    
    if (current === null) {
        // 空きスロットなら新しいサンプルを追加
        userPhotos[index] = samples[index % samples.length];
    } else {
        // すでに埋まっていればクリア（ただし1枚目は最低1枚キープの仕様に配慮）
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
    renderPhotoGrid();
    openCustomAlert("プロフィールと写真を正常に更新しました！");
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
