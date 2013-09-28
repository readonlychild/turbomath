turbomath.adventure = {};
turbomath.adventure.getCurrentLevel = function () {
	var lvl = localStorage.adventureLevel || "1";
	return parseInt(lvl);
};

turbomath.adventure.grade = function (session) {
	return session.goodOnes*1 + session.badOnes*(-1) + session.skips*(0);
};
turbomath.adventure.starsEarned = function (session) {
	var grade = this.grade(session);
	var level = this.getLevel();
	var starsEarned = 0;
	if (grade >= level.passingGrade) starsEarned = 1;
	if (grade >= level.passingGrade + 10) starsEarned = 2;
	if (grade >= level.passingGrade + 20) starsEarned = 3;
	return starsEarned;
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







turbomath.adventure.getLevel = function () {
	
	var lvl = {};
	lvl.operations = [ "+", "-", "*", "/" ];
	lvl.seconds = 120;
	lvl.difficulty = {};
	lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1,  division:1  };
	lvl.difficulty.n1max = { addition:90, subtraction:90, multiplication:20, division:20 };
	lvl.difficulty.n2min = { addition:1,  subtraction:16, multiplication:1,  division:1  };
	lvl.difficulty.n2max = { addition:90, subtraction:52, multiplication:20, division:20 };
	lvl.difficulty.level = "000";
	lvl.passingGrade = 40;

	var currLevel = this.getCurrentLevel();

	switch (currLevel) {
		case 1:
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:5,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:3,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "001";
			lvl.passingGrade = 40;
			break;
		case 2:
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:5,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:4,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "002";
			lvl.passingGrade = 40;
			break;
		case 3:
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:5,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:4,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "003";
			lvl.passingGrade = 40;
			break;
		case 4:
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:5,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:6,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "004";
			lvl.passingGrade = 40;
			break;
		case 5:
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:5,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:7,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "005";
			lvl.passingGrade = 40;
			break;
		case 6:
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:5,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:8,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "006";
			lvl.passingGrade = 40;
			break;
		case 7:
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:5,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:9,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "007";
			lvl.passingGrade = 40;
			break;
		case 8:
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:5,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "008";
			lvl.passingGrade = 40;
			break;
		case 9:
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:6,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "009";
			lvl.passingGrade = 40;
			break;
		case 10:
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:7,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "010";
			lvl.passingGrade = 40;
			break;
		case 11:
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:8,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "011";
			lvl.passingGrade = 40;
			break;
		case 12:
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:9,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "012";
			lvl.passingGrade = 40;
			break;
		case 13:
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:0,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "013";
			lvl.passingGrade = 40;
			break;
		case 14:
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:2,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "014";
			lvl.passingGrade = 40;
		case 15:
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:3,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "015";
			lvl.passingGrade = 40;
		case 16:
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:4,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "016";
			lvl.passingGrade = 40;
		case 17:
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:4,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "017";
			lvl.passingGrade = 40;
		case 18:
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "018";
			lvl.passingGrade = 40;
		case 19:
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "019";
			lvl.passingGrade = 40;
		case 20:
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "020";
			lvl.passingGrade = 40;
		case 21:
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:2,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "021";
			lvl.passingGrade = 40;
		case 22:
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:8,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:12, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:3,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:8,  multiplication:1, division:1 };
			lvl.difficulty.level = "022";
			lvl.passingGrade = 40;
		case 23:
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:9,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:15, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:8,  multiplication:1, division:1 };
			lvl.difficulty.level = "023";
			lvl.passingGrade = 40;
		case 24:
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:9,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:15, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:9,  multiplication:1, division:1 };
			lvl.difficulty.level = "024";
			lvl.passingGrade = 40;
		case 25:
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:9,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:16, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:9,  multiplication:1, division:1 };
			lvl.difficulty.level = "025";
			lvl.passingGrade = 40;
		case 26:
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:9,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:17, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:9,  multiplication:1, division:1 };
			lvl.difficulty.level = "026";
			lvl.passingGrade = 40;
		case 27:
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:9,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:18, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:9,  multiplication:1, division:1 };
			lvl.difficulty.level = "027";
			lvl.passingGrade = 40;
		case 28:
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:19, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.level = "028";
			lvl.passingGrade = 40;
		case 29:
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:20, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.level = "029";
			lvl.passingGrade = 40;
		case 30:
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:20, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.level = "030";
			lvl.passingGrade = 40;
		case 31:
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:20, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:1,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.level = "031";
			lvl.passingGrade = 40;
		case 32:
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:2,  subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:20, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:1,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.level = "032";
			lvl.passingGrade = 40;
		case 33:
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:3,  subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:20, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:1,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.level = "033";
			lvl.passingGrade = 40;
	}

	return lvl;

};
