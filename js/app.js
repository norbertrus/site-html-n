const darkMode = document.querySelector('#mode-toggle');
const body = document.body;
darkMode.addEventListener('click', function() {
   body.classList.toggle('dark-mode')
    console.log(body);
});

// verificam culoarea profilului body.cl
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('dark-mode')
    body.classList.toggle('dark-mode');
}
