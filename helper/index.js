'use strict';

module.exports.List = class extends Array {

	insert(value) {
		return {
			after: (element) => {
				let index = this.indexOf(element);

				if (index < 0) {
					index = this.length - 1;
				}

				this.splice(index + 1, 0, value);
				return this;
			},

			before: (element) => {
				let index = this.indexOf(element);

				if (index < 0) {
					index = 0;
				}

				this.splice(index, 0, value);
				return this;
			}
		};
	}

};
