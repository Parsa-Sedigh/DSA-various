// note that square is a rectangle. Just takes one param instead of two.
function square(side) {
    for (let i = 0; i < side; i++) {
        let row = ''

        // move forward on the current row
        for (let j = 0; j < side; j++) {
            if (i === 0 || i === side - 1 || j === 0 || j === side - 1) {
                row += '*'
            } else {
                row += ' '
            }
        }

        console.log(row)
    }
}

square(5)