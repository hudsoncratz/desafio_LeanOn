// function to cretae the intial design
function createDesign() {
    const matrix = [['.','#','#','#','.','.'],
                    ['.','#','.','.','#','.'],
                    ['.','#','#','#','.','.'],
                    ['.','#','.','.','.','.']];

    return matrix;
}
// function to print design on the screen
function printDesign(matrix) {
    print = '';
    for(i=0; i<matrix.length; i++) {
        for(j=0; j<matrix[i].length; j++){
            print += matrix[i][j] + ' ';
            if(j === matrix[i].length-1) print += '\n';
        }
    }

    return print;
}

// A recursive function to replace 
// previous color 'currentCollor' at  pixel '(x, y)'  
// and all surrounding pixels of (x, y) 
// with new color 'newColor'
function changeColor(matrix, x, y, currentCollor, newColor) 
{ 
    // Base cases 
    if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) 
        return; 
    if (matrix[x][y] != currentCollor) 
        return; 
    if (matrix[x][y] != currentCollor) 
        return; 
          
    // Replace the color at cell (x, y) 
    matrix[x][y] = newColor; 
  
    // Recursively call for rigth, left, up and down 
    changeColor(matrix, x+1, y, currentCollor, newColor); 
    changeColor(matrix, x-1, y, currentCollor, newColor); 
    changeColor(matrix, x, y+1, currentCollor, newColor); 
    changeColor(matrix, x, y-1, currentCollor, newColor); 
} 
  
// paintBucket finds the previous color on (x, y) and 
// calls the function changeColor
function paintBucket(pixel, newColor) 
{ 
    matrix = createDesign();
    x = pixel.x;
    y = pixel.y;
    currentCollor = matrix[x][y]; 
    changeColor(matrix, x, y, currentCollor, newColor); 
} 


matrix = createDesign();

//print initial design
console.log(printDesign(matrix));

pixel = {
    x: 0,
    y: 1
}

// calling the subroutine
paintBucket(pixel, 'o');

//print updated design
console.log(printDesign(matrix));
