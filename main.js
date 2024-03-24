document.addEventListener('DOMContentLoaded', function () {
    let count = 0;
    for (let i = 0; i < 5; i++) {
        document.querySelector(`#sdg${i}`).addEventListener('change', function (event) {
            count += this.checked ? 1 : -1;
            document.querySelector('#counter').textContent = `${count} out of 5`;
        });
    }
});