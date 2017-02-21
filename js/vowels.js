function count_vowels(input){
	vowels = input.match(/[aeiou]/gim);
	return vowels.length;
}

alert(count_vowels("4%"));
