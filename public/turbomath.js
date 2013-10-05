	var turbomath = {};
	turbomath.Constants = {};
	turbomath.Constants.Addition = "+";
	turbomath.Constants.Subtraction = "-";
	turbomath.Constants.Multiplication = "x";
	turbomath.Constants.Division = "/";

	turbomath.session = {};
	turbomath.session.goodOnes = 0;
	turbomath.session.skips = 0;
	turbomath.session.badOnes = 0;
	turbomath.session.seconds = 0;
	turbomath.session.availableOperations = [ "+", "-", "*", "/" ];
	turbomath.session.totalSeconds = 60;

	turbomath.session.difficulty = {};
	turbomath.session.difficulty.level = "not set";
	turbomath.session.difficulty.n1min = { addition:10, subtraction:10, multiplication:1,  division:1  };
	turbomath.session.difficulty.n1max = { addition:30, subtraction:30, multiplication:10, division:10 };
	turbomath.session.difficulty.n2min = { addition:1,  subtraction:1,  multiplication:1,  division:1  };
	turbomath.session.difficulty.n2max = { addition:20, subtraction:20, multiplication:10, division:10 };

	turbomath.misc = {};

	turbomath.getRandomOperation = function () {
		var op = {};
		op.n1 = 1; //this.randomIntegerBetween(this.session.difficulty.n1min, this.session.difficulty.n1max);
		op.n2 = 1; //this.randomIntegerBetween(this.session.difficulty.n2min, this.session.difficulty.n2max);

		op.op = "+";
		op.op = this.pickRandomOp(this.session.availableOperations);

		op.answer = op.n1 + op.n2;
		switch(op.op) {
			case "+":
				op.n1 = this.randomIntegerBetween(this.session.difficulty.n1min.addition, this.session.difficulty.n1max.addition);
				op.n2 = this.randomIntegerBetween(this.session.difficulty.n2min.addition, this.session.difficulty.n2max.addition);
				op.answer = op.n1 + op.n2;
				break;
			case "-":
				op.n1 = this.randomIntegerBetween(this.session.difficulty.n1min.subtraction, this.session.difficulty.n1max.subtraction);
				op.n2 = this.randomIntegerBetween(this.session.difficulty.n2min.subtraction, this.session.difficulty.n2max.subtraction);
				op.answer = op.n1 - op.n2;
				break;
			case "*":
				op.n1 = this.randomIntegerBetween(this.session.difficulty.n1min.multiplication, this.session.difficulty.n1max.multiplication);
				op.n2 = this.randomIntegerBetween(this.session.difficulty.n2min.multiplication, this.session.difficulty.n2max.multiplication);
				op.answer = op.n1 * op.n2;
				break;
			case "/":
				op.n1 = this.randomIntegerBetween(this.session.difficulty.n1min.division, this.session.difficulty.n1max.division);
				op.n2 = this.randomIntegerBetween(this.session.difficulty.n2min.division, this.session.difficulty.n2max.division);
				op.answer = op.n1 * op.n2;
				var tmp = op.answer;
				op.answer = op.n1;
				op.n1 = tmp;
				break;
		}
		
		op.options = [];
		var lolimit = op.answer - 3;
		//if (lolimit < 0) lolimit = 0;
		var hilimit = lolimit + 6;
		for (var i = lolimit, z = hilimit; i < z; i++) {
			op.options.push(i);
		}
		showOperation(op);
		return op;
	};
	
	turbomath.randomIntegerBetween = function (min, max) {
		return Math.floor(Math.random() * (max - min + 0)) + min;
	};
	turbomath.pickRandomOp = function (availOps) {
		var r = Math.random();
		var x = Math.floor(r * availOps.length) + 0;
		//console.log(r, x);
		return availOps[x];
	}
	
	function startTimer() {
			turbomath.tick();
	};
	turbomath.tick = function () {
		if (this.session.seconds < 0) return;
		this.session.seconds += 1;

		if (this.session.seconds > this.session.totalSeconds) {
			endGame();
			return;
		}
		if (turbomath.onTick) {
			turbomath.onTick();
		}
		setTimeout(function () {turbomath.tick();}, 1000);
	};
	
turbomath._random4 = function () {
	return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
};
turbomath.getGuid = function () {
	var nwguid = this._random4() + this._random4() + this._random4();
	var guid = localStorage.getItem('turbomathGuid') || nwguid;
	localStorage.setItem('turbomathGuid', guid);
	return guid;
}