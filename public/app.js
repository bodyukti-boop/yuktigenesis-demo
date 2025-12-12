// public/app.js
window.addEventListener('DOMContentLoaded', () => {
const apiEl = document.getElementById('apiMessage');
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();


fetch('/api/message')
.then(res => res.json())
.then(data => {
apiEl.innerHTML = `<div>${data.message}</div><small>Server time: ${new Date(data.time).toLocaleString()}</small>`;
})
.catch(err => {
apiEl.textContent = 'Unable to fetch from API';
console.error(err);
});
});