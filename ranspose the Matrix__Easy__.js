// The transpose of a matrix is an operator which flips a matrix over its diagonal, that is it switches the row and column of the matrix by producing another matrix.

// See sample test case for better understanding

// So, given an array of n rows and m columns, generate the transpose of the matrix.


function transposeTheMatrix(N, M, matrix){
    
    for(j=0; j<M; j++){
        bag = "";
        for(i=0; i<N; i++){
            bag = bag + matrix[i][j] + " ";
        }
        console.log(bag);
    }
  
}



