
function mirror(string) {
	var slice = string.split("");
    var reverse = slice.reverse();
    var result = reverse.join("");
    
  return string+result;
}

console.log(reverse('---ccv'));

