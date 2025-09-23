module.exports.List = class extends Array {

	insert(value) {
		const clone = this.concat();

		return {
			after: (element) => {
				let index = clone.indexOf(element);

				if (index < 0) {
					index = clone.length - 1;
				}

				clone.splice(index + 1, 0, value);
				return clone;
			},

			before: (element) => {
				let index = clone.indexOf(element);

				if (index < 0) {
					index = 0;
				}

				clone.splice(index, 0, value);
				return clone;
			}
		};
	}

};
