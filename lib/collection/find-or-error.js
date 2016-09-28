'use strict';

module.exports = function findOrError(list, predicate, error = "Item not found") {
	return Promise.try(() => {
		let item = list.find(predicate);

		if (item != null) {
			return item;
		} else {
			throw new Error(error);
		}
	});
}
