function rectangle(length, breadth) {
    for (let i = 1; i <= length; i++) {
        let row = '';

        for (let j = 1; j <= breadth; j++) {
            if (i === 1 || i === length || j === 1 || j === breadth) {
                row += '*';
            } else {
                row += ' ';
            }
        }

        console.log(row);
    }
}

rectangle(5, 6)