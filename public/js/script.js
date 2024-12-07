const toggleElm = document.querySelector('.toggle');
const sidebarElm = document.getElementById('sidebar');
const txtModeElm = document.getElementById('text-mode');
let modeElm = document.getElementById('mode');
let screenMode;


let toggleMode = () => {
    if(document.documentElement.classList.contains('dark')) {
        mode.classList.replace('ri-moon-line', 'ri-sun-line')
        screenMode = 'light';
        document.documentElement.className = screenMode;
        txtModeElm.innerHTML = 'Light mode';
        updateMode();
    }
    else{
        mode.classList.replace('ri-sun-line', 'ri-moon-line')
        screenMode = 'dark';
        document.documentElement.className = screenMode;
        txtModeElm.innerHTML = 'Dark mode';
        updateMode();
    }
}

let setSlidebar = () => {
    sidebarElm.classList.toggle('open');
    toggleElm.classList.toggle('open');
    sidebarElm.classList.forEach((elm) => {
        if(elm != 'open') {
            sidebarElm.classList.replace("w-[250px]", "w-[90px]");
            toggleElm.classList.replace('ri-arrow-left-s-line', 'ri-arrow-right-s-line');
        }
        else{
            sidebarElm.classList.replace("w-[90px]", "w-[250px]");
            toggleElm.classList.replace('ri-arrow-right-s-line', 'ri-arrow-left-s-line');
        }
    })
}

modeElm.addEventListener('click', toggleMode);
toggleElm.addEventListener('click', setSlidebar);