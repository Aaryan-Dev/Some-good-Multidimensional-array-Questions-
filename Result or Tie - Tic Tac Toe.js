// You are given a 3 * 3matrix(2d-array) that represents the final situation of a Tic Tac Toe.

// Your task is to write a program that finds out the winner in case the match ended in a win. If the winner is 'x', printx.

// If the winner is 'o', printo.

// In case the match ended in a tie, printTie.

function ticTacToe(matrix){
    let bag2 = ""; 
    let bag3 = ""; 
 for(i=0; i<matrix.length; i++){
  
   let bag = ""
   let bag1 = ""
     for(j=0; j<matrix.length; j++){
     bag = bag + (matrix[i][j]);  
      bag1 = bag1 + (matrix[j][i]);  
     }
     // console.log(bag);
     // console.log(bag1);
 if(bag[0]==bag[1]&&bag[1]==bag[2]){
           console.log(bag[0]); 
 }else if(bag1[0]==bag1[1]&&bag1[1]==bag1[2]){
       console.log(bag1[0]); 
 }
    
    for(j=0; j<matrix.length; j++){
     if(i == j ){
         bag2 = bag2 + (matrix[j][i])
     } 
    }
     for(j=0; j<matrix.length; j++){
     if(i+j == 2 ){
         bag3 = bag3 + (matrix[j][i])
     } 
     
    }
 }
    if(bag2[0]==bag2[1]&&bag2[1]==bag2[2]){
           console.log(bag2[0]); 
 }else if(bag3[0]==bag3[1]&&bag3[1]==bag3[2]){
       console.log(bag3[0]); 
 }
}