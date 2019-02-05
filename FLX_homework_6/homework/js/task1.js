 var a = Number(prompt('please enter number'));
 var b = Number(prompt('please enter number'));
 var c = Number(prompt('please enter number'));

alert(`${a}x^2+${b}x+${c}=0`);

if (typeof(a) === 'number') {
    if (typeof(b) === 'number') {
        if (typeof(c) === 'number') {
            var d = b * b - 4 * a * c;
            alert(`D=${d}`);
            if (d < 0) {
                alert('no solution');
            } else if (d > 0) {
                var x1 = (-b + Math.sqrt(d)) / (2 * a);
                var x2 = (-b - Math.sqrt(d)) / (2 * a);
                alert(`x1=${x1} x2=${x2}`);

            } else {
                var x = -b / (2 * a);
                alert(`x=${x}`);
            }
        } else {
            alert('Invalid input data');
        }
    } else {
        alert('Invalid input data');
    }
} else {
    alert('Invalid input data');
}