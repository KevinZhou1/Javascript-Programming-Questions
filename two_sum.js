/*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].



*/


function() twoSum(array, target) {


	var returnArray = [];
	var hash = new Map();
	for (var counter = 0; counter < array.length; counter++) {
	
	// we found a case where two numbers add to each other 	
	if (hash.has(target - array[counter])) {
			returnArray.push(hash.get(target- array[counter]);
			returnArray.push(counter);
			return returnArray;  
						

		}

	// We did not found a case
	else {

	map.set(array[counter], counter);
	}
		
		

	} 




}
