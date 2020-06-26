import React from 'react';

const headerStyles = {
    color: '#E85A4F',
}

export default {
    tip1: {
        title: <h1 style={headerStyles}>Tip one</h1>,
        tip: <p>All 3x3 mini squares, all rows and all columns must contain the numbers 1-9. <br/> No duplicates allowed!</p>
    },
    tip2: {
        title: <h1 style={headerStyles}>Tip two</h1>,
        tip: <p>Look for the most filled out columns/rows/mini-squares first</p>
    },
    tip3: {
        title: <h1 style={headerStyles}>Tip three</h1>,
        tip: <p>Figure out the potential possibilities in each square. Eventually, you'll narrow each square down to only one possible number!</p>
    },
    tip4: {
        title: <h1 style={headerStyles}>Tip four</h1>,
        tip: <p>Be patient and try and solve the puzzle yourself before looking at the solution. Thats the only way to get better!</p>
    }
}