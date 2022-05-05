// Given a squarematrixof sizeN, turn it by 90 degrees in an anti-clockwise direction, as shown in sample input.

function rotateBy90(R, matrix){
   
    for(i=R-1; i>=0; i--){
        bag = "";
        for(j=0; j<R; j++){
            bag = bag + matrix[j][i]+ " ";
        }
        console.log(bag);
    }
   
 }