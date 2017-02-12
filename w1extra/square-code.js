// function split2s(str, delim) {
//     var p=str.indexOf(delim);
//     if (p !== -1) {
//         return [str.substring(0,p), str.substring(p+1)];
//     } else {
//         return [str];
//     }
// }
function squareCode(msg){
  var msgArr = msg.split(' ');
  var noSpacesMsg = msgArr.join('');
  var squareWidth = Math.ceil(Math.sqrt(noSpacesMsg.length));
  var squareMsg = breakIntoXStrings(noSpacesMsg, squareWidth);
  var invSquareMsg = inverseXYAxis(squareMsg);
  var invMsg = twoDimenArrToString(invSquareMsg);
  return invMsg;
}

function breakIntoXStrings(str, subStringSize){
  var sqrMsg = []
  for(var i = 0; i < subStringSize; i++){
    if(i === 0){
      sqrMsg.push(str.substring(i, subStringSize).split(''))
    }else{
      sqrMsg.push(str.substring(i * subStringSize, (i * subStringSize) + subStringSize).split(''))
    }
  }
  return sqrMsg;
}

function inverseXYAxis(arr){
  for(var i = 0; i < arr.length; i++){
    for (j = 0; j < arr.length; j++){
      var temp = arr[i][j];
      if(i > j){
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
      }
    }
  }
  return arr;
}

function twoDimenArrToString(arr){

  var str = arr.join(' ');
  str = str.split(',');
  str = str.join('');
  return str;
}

console.log(squareCode('this is a bad square and I have no idea of what Im doing'));
console.log(squareCode('haveaniceday'))
console.log(squareCode('feedthedog'))
console.log(squareCode('chillout'))