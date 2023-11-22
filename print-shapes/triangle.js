function triangle(side) {
    // for each row, this loop is gonna run
    for (let i = 0; i < side; i++) {
        let row = ''

        // this loop is for the beginning gaps(from the left side to the first star)
        for (let j = i; j < side - 1; j++) {
            row += ' '
        }

        /* In the first iteration, we definitely put a star because j would be 0. Then the next star would be at the end of the current row
        which would be when j === 2*i -2. The special case is when we reach the last row of the triangle which is when i === side - 1 .*/
        for (let j = 0; j < (2 * i - 1); j++) {
            if (i === side - 1 || j === 0 || j === (2*i -2)) {
                row += '*'
            } else {
                row += ' '
            }
        }

        console.log(row)
    }
}

triangle(6)