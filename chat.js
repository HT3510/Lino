function openChatRoom(name, avatar) {
    document.getElementById('chatModalName').innerText = name;
    document.getElementById('chatModalAvatar').innerText = avatar;
    document.getElementById('chatModal').style.display = 'flex';
}

function closeChatRoom() {
    document.getElementById('chatModal').style.display = 'none';
}

function sendChatMessage() {
    const input = document.getElementById('chatInputText');
    const text = input.value.trim();
    if (!text) return;

    const body = document.getElementById('chatModalBody');
    body.innerHTML += `<div class="chat-bubble outgoing">${text}</div>`;
    input.value = '';
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {
        body.innerHTML += `<div class="chat-bubble incoming">ありがとうございます！ぜひ今度お話ししましょう✨</div>`;
        body.scrollTop = body.scrollHeight;
    }, 1000);
}


