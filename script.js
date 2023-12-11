//your JS code here. If required.
function  fizzBuzz(st, end){

	for(let i=st; i<=end; i++){
		//logic
		if(i % 3 == 0 && i % 5 == 0){
			alert("FizzBuzz")
		}
		else if(i % 3 == 0){
			alert("Fizz")
		}
		else if(i % 5 == 0){
			alert("Buzz")
		}
		else{
			alert(i.toString())
		}
	}
}
fizzBuzz(1, 100)
