function reverse(string) {
	var slice = string.split(" ");
    var reverse = slice.reverse();
    var result = reverse.join(" ");
    return result;
}

console.log(reverse('saya ingin makan nasi goreng'));

