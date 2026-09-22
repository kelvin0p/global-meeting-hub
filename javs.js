// Navigation Elements
const loginForm = document.getElementById('login-form');
const authContainer = document.getElementById('auth-container');
const appContainer = document.getElementById('app-container');
const logoutBtn = document.getElementById('logout-btn');

// App Action Elements
const inviteForm = document.getElementById('invite-form');
const inviteEmail = document.getElementById('invite-email');
const inviteStatus = document.getElementById('invite-status');
const syllabusUpload = document.getElementById('syllabus-upload');
const fileList = document.getElementById('file-list');
const startStreamBtn = document.getElementById('start-stream-btn');
const localVideo = document.getElementById('local-video');
const videoPlaceholder = document.getElementById('video-placeholder');

// Fake Authentication Transition
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    authContainer.classList.add('hidden');
    appContainer.classList.remove('hidden');
    document.body.style.alignItems = 'flex-start';
});

logoutBtn.addEventListener('click', () => {
    appContainer.classList.add('hidden');
    authContainer.classList.remove('hidden');
    document.body.style.alignItems = 'center';
});

// Simulating Email Invitation
inviteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    inviteStatus.innerText = `Invitation link sent successfully to ${inviteEmail.value}!`;
    inviteEmail.value = '';
    setTimeout(() => { inviteStatus.innerText = ''; }, 4000);
});

// File Upload Handler (Syllabus)
syllabusUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const li = document.createElement('li');
        li.innerText = `📄 ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
        fileList.appendChild(li);
    }
});