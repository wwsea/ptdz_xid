const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('SDtrKgACvY', uuidlib.v4());
	}

module.exports = generateId
