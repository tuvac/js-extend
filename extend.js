module.exports = {

    extend: function(out) {

        out = out || {};


        for (var i = 1; i < arguments.length; i++) {

            if (!arguments[i]) {
                continue;
            }

            for (var key in arguments[i]) {
            
				//element is an array
                if (Object.prototype.toString.call(arguments[i][key]) === '[object Array]') {

                    out[key] = out[key] || [];

                    var a = out[key].concat(arguments[i][key]);

					//remove duplicate array elements from 
// 					for (var ii = 0; ii < a.length; ++ii) {
// 				
// 						for (var j = ii + 1; j < a.length; ++j) {
// 					
// 							if (a[ii] === a[j]) {
// 								a.splice(j--, 1);
// 							}
// 						
// 						}
// 					
// 					}
//
//                  out[key] = a;
					out[key] = a.filter(function(item, pos) {
						return a.indexOf(item) === pos;
					})                    
                    
				//element is a nested object
                } else if (typeof arguments[i][key] === 'object') {

                    out[key] = out[key] || {};
                    this.extend(out[key], arguments[i][key]);
				
                } else {

                    if (arguments[i].hasOwnProperty(key)) {
                        out[key] = arguments[i][key];
                    }

                }

            }
        }

        return out;

    }

};