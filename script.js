async function convertVideo() {
    const link = document.getElementById('youtube-link').value;
    const response = await fetch('https://YOUR_BACKEND_URL/video', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ url: link })
    });
    const data = await response.json();
    document.getElementById('result').innerHTML = `<a href="${data.download}" target="_blank">تحميل الفيديو</a>`;
}

async function convertAudio() {
    const link = document.getElementById('youtube-link').value;
    const response = await fetch('https://YOUR_BACKEND_URL/audio', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ url: link })
    });
    const data = await response.json();
    document.getElementById('result').innerHTML = `<a href="${data.download}" target="_blank">تحميل الصوت</a>`;
}
