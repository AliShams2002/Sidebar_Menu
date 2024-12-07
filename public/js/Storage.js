let CheckMode = () => {
    if(screenMode === 'dark') {
        modeElm.classList.replace('ri-sun-line', 'ri-moon-line');
        txtModeElm.innerHTML = 'Dark mode';
      }
      else{
        modeElm.classList.replace('ri-moon-line', 'ri-sun-line')
        txtModeElm.innerHTML = 'Light mode';
      }
}

let updateMode = () => {
    localStorage.setItem('mode', JSON.stringify(screenMode));
}

let setMode = () => {
    const item = localStorage.getItem('mode');
    
    if(item === undefined) {
        return;
    }
    const getMode = JSON.parse(localStorage.getItem('mode'));
    screenMode = getMode;
    document.documentElement.classList.add(screenMode);
    CheckMode();
}


CheckMode();
setMode();