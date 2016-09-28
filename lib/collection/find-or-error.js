'use strict';

exports.findOrError = function (list, name) {
	return Promise.try(() => {
		let name = list.find(name);
		if (name) {
			return name;
		} else {
			throw new Error("Application not found");
		}
	});
}