function openFortuneDetail(type) {
    const modal = document.getElementById('fortuneModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    modal.style.display = 'flex';

    if (type === 'tarot') {
        title.innerText = "運命のLinoタロット占い";
        body.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <p style="font-size: 13px; color: #d1d5db; margin-bottom: 20px;">カードをタップして一枚お選びください</p>
                <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 20px;">
                    <div onclick="openCustomAlert('恋人のカード：直感的な結びつきが強まっています！')" style="width: 85px; height: 135px; background: linear-gradient(135deg, #2b1055 0%, #7597de 100%); border: 2px solid #e2b740; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer;">🌙</div>
                </div>
            </div>
        `;
    } else {
        title.innerText = "本格鑑定結果";
        body.innerHTML = `
            <div style="padding: 20px; text-align: center;">
                <div style="font-size: 22px; font-weight: bold; color: #00e6a8; margin-bottom: 12px;">総合運勢：大吉 (94点)</div>
                <p style="font-size: 12.5px; color: #d1d5db; line-height: 1.6;">あなたの日干（甲・大木）のエネルギーが最高潮に達する日です。</p>
            </div>
        `;
    }
}

function closeFortuneDetail() {
    document.getElementById('fortuneModal').style.display = 'none';
}


