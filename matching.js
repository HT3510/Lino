const avatars = ['🧑‍💼', '👩‍💼', '👨‍💻', '👩‍💻', '🧑‍🎨', '👩‍🎤', '👨‍🔬', '👩‍🍳'];
const names = ['美咲', '葵', '蓮', '陽菜', '結衣', '樹', '彩花', '莉子', '健太', '拓海'];
const occupations = ['IT・Web系', '経営者・役員', '大手企業', 'デザイナー', '金融・不動産', '医療・福祉'];
const zodiacs = ['甲（大木）', '丙（太陽）', '庚（刀剣）', '壬（大海）', '戊（山岳）'];
const kyuseiList = ['一白水星', '三碧木星', '四緑木星', '九紫火星', '六白金星'];
const faceTags = ['意志強相・誠実', '包容力・知性相', '人気運・直感相', 'リーダー気質相'];
const odekakeTagsList = ['今夜サクッと飲み 🥂', '週末カフェ巡り ☕', '隠れ家ディナー 🍷', 'ドライブデート 🚗'];

let dummyUsers = [];
for (let i = 1; i <= 100; i++) {
    dummyUsers.push({
        id: i,
        name: names[(i - 1) % names.length] + ` (${i})`,
        age: 24 + (i % 8),
        avatar: avatars[(i - 1) % avatars.length],
        occupation: occupations[(i - 1) % occupations.length],
        matchScore: 85 + (i % 14),
        nikkan: zodiacs[(i - 1) % zodiacs.length],
        kyusei: kyuseiList[(i - 1) % kyuseiList.length],
        faceTag: faceTags[(i - 1) % faceTags.length],
        odekake: odekakeTagsList[(i - 1) % odekakeTagsList.length]
    });
}

let currentUserIndex = 0;

function renderCard() {
    const wrapper = document.getElementById('card-wrapper');
    const noMsg = document.getElementById('no-cards-msg');

    if (currentUserIndex >= dummyUsers.length) {
        wrapper.innerHTML = '';
        noMsg.style.display = 'block';
        return;
    }

    noMsg.style.display = 'none';
    const user = dummyUsers[currentUserIndex];

    wrapper.innerHTML = `
        <div class="match-card" id="current-match-card">
            <div class="match-badge-container">
                <div class="match-badge">✨ 命式相性スコア ${user.matchScore}%</div>
                <div class="card-index-indicator">${currentUserIndex + 1} / 100</div>
            </div>
            <div class="card-avatar-section">
                <div class="avatar-inner">${user.avatar}</div>
            </div>
            <div class="card-info-section">
                <div class="user-name-text">${user.name} <span class="user-age-text">${user.age}歳</span></div>
                <div class="user-occupation-sub">💼 ${user.occupation}</div>
                <div class="ai-judgment-text">👁️ AI人相判定：${user.faceTag}</div>
                <div class="fortune-detail-box">
                    <div class="fortune-item"><span>お相手の日干:</span> <strong>${user.nikkan}</strong></div>
                    <div class="fortune-item"><span>九星気学:</span> <strong>${user.kyusei}</strong></div>
                    <div class="fortune-item"><span>おでかけ目的:</span> <strong>${user.odekake}</strong></div>
                </div>
                <div class="button-action-row">
                    <button class="button-skip" onclick="skipCard()">スキップ</button>
                    <button class="button-like-submit" onclick="sendDestinyLike(${user.id})">✨ 運命のいいね！</button>
                </div>
            </div>
        </div>
    `;
}

function skipCard() {
    const card = document.getElementById('current-match-card');
    if (card) {
        card.style.transform = 'translateX(-100vw) rotate(-20deg)';
        card.style.opacity = '0';
    }
    setTimeout(() => {
        currentUserIndex++;
        renderCard();
    }, 350);
}

function sendDestinyLike(id) {
    const card = document.getElementById('current-match-card');
    if (card) {
        card.style.transform = 'translateX(100vw) rotate(20deg)';
        card.style.opacity = '0';
    }
    openCustomAlert(`お相手に「運命のいいね！」を送信しました ✨`);
    setTimeout(() => {
        currentUserIndex++;
        renderCard();
    }, 350);
}


