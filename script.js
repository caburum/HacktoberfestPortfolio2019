document.onload = show();

/**
 * Get text from element and create span element for every letter for text animation
 */
function show() {
    const text = document.getElementById('show');
    const string_split = text.innerHTML.split('');
    text.innerHTML = '';

    string_split.forEach(e => {
        let el = document.createElement('span');
        el.innerHTML = e;
        el.style.opacity = '0';
        el.classList.add('letter');
        text.appendChild(el);
    });

    // Show 1 letter every 25ms
    let c = 0;
    let interval = setInterval(() => {
        text.children[c].style.opacity = '1';
        c++
        if(c == text.children.length) {
            clearInterval(interval);
        }
        }
        , 25);
}

