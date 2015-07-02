var expect= chai.expect;
describe ('add', function(){
	it('should convert strings to numbers before adding them', function(){
	expect(add(1,2)).to.equal(3);
})
	it('should convert decimal strings to numbers before adding them', function(){
	expect(add(1, 2)).to.equal(3);
})
})

describe ('max', function(){
	it('should take two numbers and return the larger one', function(){
		expect(max(3, 4)).to.equal(4);
	})
})
describe ('maxOfThree', function(){
	it('should take three numbers and return the larger one', function(){
		expect(maxOfThree(4,5,6)).to.equal(6);
	})
})
describe ('isVowel', function(){
	it('should take a character with a string length of one and return true if vowel', function(){
		expect(isVowel('a')).to.equal(true);
})
	it('should take a character with a string length of one and return true if vowel', function(){
		expect(isVowel('b')).to.equal(false);
	})
})
describe ('sum', function(){
	it('should take an array of numbers and add them all together', function(){
		expect(sum([10,9,8])).to.equal(27);
	})
})
describe ('multiply', function(){
	it('should take an array of number and mutiply them all together', function(){
		expect(multiply([4,5,6])).to.equal(120);
	})
})
describe ('reverse', function(){
	it('should take a string of letters and reverse them around', function(){
		expect(reverse('abcd')).to.equal('dcba');
	})
})
describe ('findLongestWord', function(){
	it('should take an array of words and returns the length of the longest one', function(){
		expect(findLongestWord(['cat','dog','he','billy'],2)).to.equal(5);
	})
})
describe ('filterLongWords', function(){
	it('should take an array of words and an integer i and returns the array of words that are longer than i.', function(){
		expect(filterLongWords(['cat','dog','he','billy'],1)).to.eql(['cat','dog','he','billy']);
	})
})
describe ('charFreq', function(){
	it('takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object', function(){
		expect(charFreq('callofduty')).to.eql({c:1,a:1,l:2,o:1,f:1,d:1,u:1,t:1,y:1});
	})
})

























