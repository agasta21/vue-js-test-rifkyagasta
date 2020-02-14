function duplicateRemover (array) {
  let array2 = []
  array.map(x => 
    if(!array2.includes(x) {
      array2.push(x)
    })
  return array2 
}

var city = ['Jakarta', 'Aceh', 'Malang', 'Medan', 'Bontang', 'Jogja', 'Jakarta', 'Bandung', 'Malang', 'Solo', 'Palembang', 'Bandung'];

console.log(duplicateRemover(city));