const result = document.getElementById('result')
const btn = document.getElementById("btn")


btn.addEventListener('click',function(e){
    e.preventDefault()
    const hexadecimalInput = document.getElementById('hexadecimal').value;

    if(hexadecimalInput === ''){
      alert('Please input a number');
    }else if(hexadecimalInput < 0){
      alert('Please input a positive number');
    }else{
      result.style.visibility = 'visible'
    }

     binaryNumber = Number(hexadecimalInput).toString(2)
     result.innerHTML = binaryNumber;

  });