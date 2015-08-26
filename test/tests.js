var fn = require('../extend'),
	assert = require('assert');

var output = {};
var original = {
	a_boolean: true,
	a_number: 1234,
	a_string: 'I am a string',
	a_object: {
		obj_string: 'a string property of an object',
		obj_int: 5678,
		nested_obj: {
			nested_array: [
				1,2,3
			],
			nested_string: 'string',
				another_nested_obj: {
					another_nested_obj_string: 'this should be replaced',
					another_nested_obj_bool: true
				}				
		}
	}
};
var amended = {
	a_boolean: false,
	a_object: {
		obj_int: 1000,
		nested_obj: {
			nested_array: [
				2,4
			],		
			nested_int: 666,
			another_nested_obj: {
				another_nested_obj_string: 'a string'
			}
		}
	}	
}


describe('#extend', function() {
	
	it('Should merge a simple object', function() {

		fn.extend(output, original, amended);
		
		assert.equal(output.a_boolean, false);
		assert.equal(output.a_number, 1234);
		
		assert.deepEqual(output.a_object, {
			obj_string: 'a string property of an object',
			obj_int: 1000,
			nested_obj: {
				nested_array: [
					1,2,3,4
				],			
				nested_string: 'string',
				nested_int: 666,
				another_nested_obj: {
					another_nested_obj_string: 'a string',
					another_nested_obj_bool: true
				}				
			}
		});
		
	});
});