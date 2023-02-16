//your code here

const form = document.querySelector("#form");
const display = document.getElementById("result");

form.addEventListener("submit", submit);

function submit(e) {
  e.preventDefault();

  const input = document.querySelector("input").value;
	
  let arr = input.split(",");
   arr.sort((a,b)=>{return a-b;});
	//arr.sort()
  
  let cost = 0;

  while (arr.length > 1) {
    let sum = Number(arr[0]) + Number(arr[1]);
	      arr.push(sum);
    cost += sum;
    arr.splice(0, 2);

    
 arr.sort((a,b)=>{return a-b;});	  
  }
	document.querySelector("input").value = null;

	display.textContent = cost;
}
