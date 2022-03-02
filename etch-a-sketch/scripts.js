const sketchPad = document.querySelector('.sketch-container');

function createGrid(gridNum) {
    for (i=0; i<gridNum; i++) {
        for (j=0; j<gridNum; j++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add('sketch-box');
            gridBox.addEventListener('mouseover', () => {
                gridBox.style.background = 'black';
            });
            sketchPad.appendChild(gridBox);
        }
    }
}

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
    const allGrid = document.querySelectorAll('.sketch-box');
    allGrid.forEach((grid) => {
        grid.style.background = 'white';
    });
});

createGrid(16);