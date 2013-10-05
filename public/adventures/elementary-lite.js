turbomath = turbomath || {};
turbomath.adventure = turbomath.adventure || {};
turbomath.adventure.__adventureName = "elementary (lite)";

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
	session.guid = session.guid || "--guest";
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
		try {
			var lvlnum = "000" + session.adventureLevel.level;
			lvlnum = lvlnum.substr(lvlnum.length-3);
			var gradenum = "000" + grade;
			gradenum = gradenum.substr(gradenum.length-3);
			$.ajax({
				url: "http://missile-cmd.herokuapp.com/leaderboard/add/turbomathlite/" + session.guid + "/1" + lvlnum + gradenum,
				type:"GET"
			});
		} catch (err) {}
	}
	return passed;
};

turbomath.adventure.getStarsEarnedInLevel = function (lvlNumber) {
	var starsEarned = localStorage.getItem(this.__adventureName+lvlNumber+'StarsEarned') || 0;
	return parseInt(starsEarned);
};


turbomath.adventure.summary = "<h2>Elementary[lite] Adventure</h2>";
turbomath.adventure.summary+= "Levels start with small numbers, and just addition. ";
turbomath.adventure.summary+= "More levels are available in the non-lite edition! ";
turbomath.adventure.summary+= " ";


turbomath.adventure.totalLevels = 6;



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
	}

	return lvl;

};
