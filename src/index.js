module.exports = function check(str, bracketsConfig) {
  let open = false;
  let close = false;
  let equal = false;
  let openBracket;
  let arr = str.split('');
  let queue =[];
  for (let i = 0; i<arr.length; i++) {
     for (let j = 0; j < bracketsConfig.length; j++) {
      if(bracketsConfig[j][0] == bracketsConfig[j][1] && bracketsConfig[j][0] == arr[i]){
        openBracket = bracketsConfig[j][0];
        equal = true;
        break;
      }
      if(bracketsConfig[j][0] == arr[i]){
        open = true;
        break;
      }
      if(bracketsConfig[j][1] == arr[i]){
        openBracket = bracketsConfig[j][0];
        close = true;
        break;
      }
    }

    if(equal) {
      if(queue[queue.length-1] === openBracket){
        queue.pop();
        openBracket = '';
      }
      else {
        queue.push(arr[i]);
      }
      equal = false;
    }
    if(open){
      queue.push(arr[i]);
      open = false;
    }

    if(close){
      if(queue[queue.length-1] === openBracket){
        queue.pop();
        openBracket = '';
        close = false;
      }
      else {
        return false;
      }
    }
  }
  return queue.length == 0 ? true : false;
}

/*let str = '||';
let bracketsConfig = [['|', '|']];

let open = false;
let close = false;
let equal = false;
let openBracket;
let arr = str.split('');
let queue =[];
for (let i = 0; i<arr.length; i++) {
   for (let j = 0; j < bracketsConfig.length; j++) {
    if(bracketsConfig[j][0] == bracketsConfig[j][1] && bracketsConfig[j][0] == arr[i]){
      openBracket = bracketsConfig[j][0];
      equal = true;
      break;
    }
    if(bracketsConfig[j][0] == arr[i]){
      open = true;
      break;
    }
    if(bracketsConfig[j][1] == arr[i]){
      openBracket = bracketsConfig[j][0];
      close = true;
      break;
    }
  }

  if(equal) {
    if(queue[queue.length-1] === openBracket){
      queue.pop();
      openBracket = '';
    }
    else {
      queue.push(arr[i]);
    }
    equal = false;
  }
  if(open){
    queue.push(arr[i]);
    open = false;
  }

  if(close){
    if(queue[queue.length-1] === openBracket){
      queue.pop();
      openBracket = '';
      close = false;
    }
    else {
      return false;
    }
  }
}
return queue.length == 0 ? true : false;
*/