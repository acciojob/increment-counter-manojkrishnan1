//your JS code here. If required.
function increment(){
    const element = document.getElementById('counter');
    let num = Number(element.innerText);
    alert(num);
    element.innerText =++num;
  }