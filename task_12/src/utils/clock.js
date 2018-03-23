export const clock = document.getElementById("clock");

export function updateClock(elem) {
    const time = new Date(),
        h = `${time.getHours()}`.padStart(2, 0),
        m = `${time.getMinutes()}`.padStart(2, 0),
        s = `${time.getSeconds()}`.padStart(2, 0),
        stringDate = [h, m, s].join(":");
    console.log(elem);
    elem.innerHTML = stringDate;
};

window.setInterval(() => {
    updateClock(clock);
}, 500);
