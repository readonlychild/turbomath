turbomath = turbomath || {};
turbomath.adventure = turbomath.adventure || {};
turbomath.adventure.__adventureName = "elementary";

turbomath.adventure.getCurrentLevel = function () {
	var lvl = localStorage.getItem(this.__adventureName) || "1";
	return parseInt(lvl);
};

turbomath.adventure.grade = function (session) {
	return session.goodOnes*1 + session.badOnes*(-1) + session.skips*(0);
};
turbomath.adventure.starsEarned = function (session) {
	var grade = this.grade(session);
	//var level = this.getLevel();
	var starsEarned = 0;
	if (grade >= session.adventureLevel.passingGrade) starsEarned = 1;
	if (grade >= session.adventureLevel.passingGrade + 10) starsEarned = 2;
	if (grade >= session.adventureLevel.passingGrade + 20) starsEarned = 3;
	return starsEarned;
};

turbomath.adventure.passedLevel = function (session) {
	var grade = this.grade(session);
	//var level = this.getLevel(session.adventureLevel.level);
	var currLevel = this.getCurrentLevel();
	var passed = grade >= session.adventureLevel.passingGrade;
	if (passed) {
		var starsEarned = this.starsEarned(session);
		var prevEarned = this.getStarsEarnedInLevel(session.adventureLevel.level);
		if (starsEarned > prevEarned) {
			localStorage.setItem(this.__adventureName+session.adventureLevel.level+'StarsEarned', starsEarned);
		}
		if (session.adventureLevel.level == currLevel) {
			localStorage.setItem(this.__adventureName, currLevel + 1);
		}
	}
	return passed;
};

turbomath.adventure.getStarsEarnedInLevel = function (lvlNumber) {
	var starsEarned = localStorage.getItem(this.__adventureName+lvlNumber+'StarsEarned') || 0;
	return parseInt(starsEarned);
};


turbomath.adventure.summary = "<h2>Elementary Adventure</h2>";
turbomath.adventure.summary+= "Levels start with small numbers, and just addition. ";
turbomath.adventure.summary+= "As levels are achieved, numbers start getting bigger, and other arithmetics operations are intorduced. ";
turbomath.adventure.summary+= "Substraction starts at level 19, Addition is dropped for some levels. ";
turbomath.adventure.summary+= "Additions and Substractions are combined starting at level 31. ";
turbomath.adventure.summary+= "Multiplication joins the party at level ? ";
turbomath.adventure.summary+= "Division then appears at level ? ";
turbomath.adventure.summary+= " ";


turbomath.adventure.totalLevels = 33;




turbomath.adventure.getLevel = function (numb) {
	

	var lvl = {};
	lvl.level = 0;
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
	var rlvl = numb || currLevel;

	switch (rlvl) {
		case 1:
			lvl.level = 1;
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
			lvl.level = 2;
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
			lvl.level = 3;
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
			lvl.level = 4;
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
			lvl.level = 5;
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
			lvl.level = 6;
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
			lvl.level = 7;
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
			lvl.level = 8;
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
			lvl.level = 9;
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
			lvl.level = 10;
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
			lvl.level = 11;
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
			lvl.level = 12;
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
			lvl.level = 13;
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
			lvl.level = 14;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:2,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "014";
			lvl.passingGrade = 40;
			break;
		case 15:
			lvl.level = 15;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:3,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "015";
			lvl.passingGrade = 40;
			break;
		case 16:
			lvl.level = 16;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:4,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "016";
			lvl.passingGrade = 40;
			break;
		case 17:
			lvl.level = 17;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:4,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "017";
			lvl.passingGrade = 40;
			break;
		case 18:
			lvl.level = 18;
			lvl.seconds = 120;
			lvl.operations = [ "+" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "018";
			lvl.passingGrade = 40;
			break;
		case 19:
			lvl.level = 19;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:0,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "019";
			lvl.passingGrade = 40;
			break;
		case 20:
			lvl.level = 20;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "020";
			lvl.passingGrade = 40;
			break;
		case 21:
			lvl.level = 21;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:2,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:6,  multiplication:1, division:1 };
			lvl.difficulty.level = "021";
			lvl.passingGrade = 40;
			break;
		case 22:
			lvl.level = 22;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:8,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:12, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:3,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:8,  multiplication:1, division:1 };
			lvl.difficulty.level = "022";
			lvl.passingGrade = 40;
			break;
		case 23:
			lvl.level = 23;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:9,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:15, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:8,  multiplication:1, division:1 };
			lvl.difficulty.level = "023";
			lvl.passingGrade = 40;
			break;
		case 24:
			lvl.level = 24;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:9,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:15, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:9,  multiplication:1, division:1 };
			lvl.difficulty.level = "024";
			lvl.passingGrade = 40;
			break;
		case 25:
			lvl.level = 25;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:9,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:16, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:9,  multiplication:1, division:1 };
			lvl.difficulty.level = "025";
			lvl.passingGrade = 40;
			break;
		case 26:
			lvl.level = 26;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:9,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:17, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:9,  multiplication:1, division:1 };
			lvl.difficulty.level = "026";
			lvl.passingGrade = 40;
			break;
		case 27:
			lvl.level = 27;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:9,  multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:18, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:9,  multiplication:1, division:1 };
			lvl.difficulty.level = "027";
			lvl.passingGrade = 40;
			break;
		case 28:
			lvl.level = 28;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:19, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.level = "028";
			lvl.passingGrade = 40;
			break;
		case 29:
			lvl.level = 29;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:20, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:10, multiplication:1, division:1 };
			lvl.difficulty.level = "029";
			lvl.passingGrade = 40;
			break;
		case 30:
			lvl.level = 30;
			lvl.seconds = 120;
			lvl.operations = [ "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:5,  subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:20, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:5,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.level = "030";
			lvl.passingGrade = 40;
			break;
		case 31:
			lvl.level = 31;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:1,  subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:20, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:1,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.level = "031";
			lvl.passingGrade = 40;
			break;
		case 32:
			lvl.level = 32;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:2,  subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:20, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:1,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.level = "032";
			lvl.passingGrade = 40;
			break;
		case 33:
			lvl.level = 33;
			lvl.seconds = 120;
			lvl.operations = [ "+", "-" ];
			lvl.difficulty = {};
			lvl.difficulty.n1min = { addition:3,  subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.n1max = { addition:10, subtraction:20, multiplication:1, division:1 };
			lvl.difficulty.n2min = { addition:1,  subtraction:1,  multiplication:1, division:1 };
			lvl.difficulty.n2max = { addition:10, subtraction:11, multiplication:1, division:1 };
			lvl.difficulty.level = "033";
			lvl.passingGrade = 40;
			break;
	}

	return lvl;

};
