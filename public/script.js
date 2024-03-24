var checkboxes = document.querySelectorAll('.checkbox');
var count = 0;

checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            count++;
        } else {
            count--;
        }
        document.getElementById('counter').innerHTML = count;
    });
});