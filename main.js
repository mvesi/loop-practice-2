var animals = ['rat','cat','butterfly','marmot','ocelot'];

// #1
for(var i=0 ; i<animals.length ; i++){
	if(animals[i]!=='ocelot'){
		console.log(animals[i]);
	}
}

// #2
for(var i=0 ; i<animals.length ; i++){
	if(animals[i]!=='marmot' && animals[i]!=='cat'){
		console.log(animals[i]);
	}
}

// #3
for(var i=animals.length-1 ; i>=0 ; i--){
	console.log(animals[i]);
}

// #4
for(var i=0 ; i<animals.length ; i++){
	if(animals[i].substring(0,1)==="r" || animals[i].substring(0,1)==="o"){
		console.log(animals[i]);
	}
	else{
		console.log(animals[i]);
		console.log(animals[i]);
	}
}
