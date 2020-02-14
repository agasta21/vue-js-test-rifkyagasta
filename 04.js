function filteringAge(people) {
  var array=[];
	var i=0;
    
    for(i=0; i<people.length; i++){
        if(people[i].age <= 21){
        	array.push(people[i]);
        }
    }
    
    return array;
   
}

const people = [
  { id: 1, name: 'Udin', age: 12 },
  { id: 2, name: 'Wati', age: 51 },
  { id: 3, name: 'Budi', age: 34 },
  { id: 4, name: 'Agus', age: 16 },
  { id: 5, name: 'Sari', age: 19 },
  { id: 6, name: 'Ririn', age: 21 },
];

console.log(filteringAge(people));
