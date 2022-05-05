// Given amatrixofRrows andCcolumns which contains distinct integers and you are given a integerKand you need to print both the diagonals crossing through the given elementK, you can always assume that the given element always exist in the matrix.

// image.png

// In this 4*4 Matrix, suppose we need to print the diagonals passing from11, So the output will be :

// 1 6 11 16

// 8 11 14

// Note: You need to print the diagonal from top to bottom also make sure you print the diagonals going fromleft to rightfirst then diagonal goingright to left,on a new lines.


function specificDiagonals(R, C, matrix, K){
    
    sum = 0
      var value = false;
for(i=0; i<R; i++){


for(j=0; j<C; j++){
    if(K===matrix[i][j]){
        
        value = true;
        sum = sum + i+ j;
        var p = i;
        var q = j
    }

}
}
//   console.log(sum);

bag = "";
bag1 = "";
for(k=0; k<R; k++){
for(l=0; l<C; l++){
    
  if(value){
  
for(i=0; i<R; i++){
if(k==p+i && l==q+i|| k==p-i && l==q-i){
       bag = bag + matrix[k][l]+ " ";
}    
}
  }
  // if(){
  //       console.log(matrix[k][l]);
  // }
    
  if(sum == k+l){
  bag1 = bag1 + (matrix[k][l])+ " ";
  }
}
} 
    console.log(bag);
    console.log(bag1);
}
