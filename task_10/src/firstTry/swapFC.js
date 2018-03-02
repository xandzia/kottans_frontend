export function swapCF() {
    const f = document.querySelector('.f');
    const c = document.querySelector('.c');
    const t = document.querySelectorAll('.temp');
    const cf = document.querySelectorAll('.cf');
    c.disabled = true;

    f.onclick = () => {
        for (let i=0; i<t.length; i++) {
            let temp = parseFloat(t[i].innerHTML);
            temp = temp * 1.8 + 32;
            t[i].textContent = temp.toFixed(1);;
            cf[i].textContent = 'F';
        };
        f.disabled = true;
        c.disabled = false;
    };
    c.onclick = () => {
        for (let i=0; i<t.length; i++) {
            let temp = parseFloat(t[i].innerHTML);
            temp = (temp - 32) * (5/9);
            t[i].textContent = temp.toFixed(1);
            cf[i].textContent = 'C';
        };
        c.disabled = true;
        f.disabled = false;
    }
};
