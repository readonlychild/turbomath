turbomath.adventure = {};
turbomath.adventure.getCurrentLevel = function () {
	var lvl = localStorage.adventureLevel || "1";
	return parseInt(lvl);
};

turbomath.adventure.getLevel = function () {
	
	var lvl = {};
	lvl.operations = [ "+", "-" ];
	lvl.difficulty = {};
	lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1,  division:1  };
	lvl.difficulty.n1max = { addition:9,  subtraction:16, multiplication:3,  division:2  };
	lvl.difficulty.n2min = { addition:1,  subtraction:1,  multiplication:1,  division:1  };
	lvl.difficulty.n2max = { addition:9,  subtraction:6,  multiplication:3,  division:2  };
	lvl.difficulty.level = "adv-000";
	lvl.passingGrade = 100;

	var currLevel = this.getCurrentLevel();

	switch (currLevel) {
		case 1:
			lvl.seconds = 60;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:5,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:5,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "001";
			lvl.passingGrade = 10;
			break;
		case 2:
			lvl.seconds = 60;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:5,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:4,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "002";
			lvl.passingGrade = 20;
			break;
		case 3:
			lvl.seconds = 60;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:5,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:4,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "003";
			lvl.passingGrade = 30;
			break;
		case 4:
			lvl.seconds = 60;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:5,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:4,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "004";
			lvl.passingGrade = 40;
			break;
		case 5:
			lvl.seconds = 60;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:5,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:4,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "005";
			lvl.passingGrade = 60;
			break;
	}

	return lvl;

};

turbomath.adventure.grade = function (session) {
	return session.goodOnes*1 + session.badOnes*(-1) + session.skips*(0);
};

turbomath.adventure.passedLevel = function (session) {
	var grade = this.grade(session);
	var level = this.getLevel();
	var passed = grade >= level.passingGrade;
	if (passed) {
		localStorage.adventureLevel = this.getCurrentLevel() + 1;
	}
	return passed;
};


