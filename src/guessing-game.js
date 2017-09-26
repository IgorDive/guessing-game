class GuessingGame {
     constructor() {
    	this._min = undefined;
    	this._max = undefined;
    	this._temp = undefined;
    }

    setRange(min, max) {
    	this._min = +min;
    	this._max = +max;
    }

    guess() {
    	this._temp = (this._max - this._min) / 2;
    	return this._temp;
    }

    lower() {
    	this._max = this._temp;
    }

    greater() {
    	this._min = this._temp;
    }
}

module.exports = GuessingGame;