1.Maximum sum of hour glass in matrix-

// Complete the hourglassSum function below.
function hourglassSum(mat) {
var result=[],sum=0;
for(var i=0;i<mat.length-2;i++){
  for(var j=0;j<mat.length-2;j++){
         sum = (mat[i][j]+mat[i][j+1]+mat[i][j+2])+ 
                      (mat[i+1][j+1])+ 
                  (mat[i+2][j]+mat[i+2][j+1]+mat[i+2][j+2]); 
                  result.push(sum)
  }      

}
var newArray=result.sort((a,b)=>b-a)
return (newArray[0])
}
