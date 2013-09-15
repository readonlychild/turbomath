turbomath.session.difficulty.setToSuperEasy = function () {
	turbomath.session.difficulty.n1min = { addition:1,  subtraction:6,  multiplication:1,  division:1  };
	turbomath.session.difficulty.n1max = { addition:9,  subtraction:16, multiplication:3,  division:2  };
	turbomath.session.difficulty.n2min = { addition:1,  subtraction:1,  multiplication:1,  division:1  };
	turbomath.session.difficulty.n2max = { addition:9,  subtraction:6,  multiplication:3,  division:2  };
};

turbomath.session.difficulty.setToEasy = function () {
	turbomath.session.difficulty.n1min = { addition:4,  subtraction:10, multiplication:1,  division:1  };
	turbomath.session.difficulty.n1max = { addition:20, subtraction:20, multiplication:5,  division:5  };
	turbomath.session.difficulty.n2min = { addition:1,  subtraction:1,  multiplication:1,  division:1  };
	turbomath.session.difficulty.n2max = { addition:10, subtraction:10, multiplication:5,  division:5  };
};

turbomath.session.difficulty.setToNormal = function () {
	turbomath.session.difficulty.n1min = { addition:10, subtraction:10, multiplication:1,  division:1  };
	turbomath.session.difficulty.n1max = { addition:30, subtraction:30, multiplication:10, division:10 };
	turbomath.session.difficulty.n2min = { addition:1,  subtraction:1,  multiplication:1,  division:1  };
	turbomath.session.difficulty.n2max = { addition:20, subtraction:20, multiplication:10, division:10 };
};

turbomath.session.difficulty.setToHard = function () {
	turbomath.session.difficulty.n1min = { addition:10, subtraction:20, multiplication:3,  division:1  };
	turbomath.session.difficulty.n1max = { addition:30, subtraction:50, multiplication:15, division:10 };
	turbomath.session.difficulty.n2min = { addition:10, subtraction:10, multiplication:3,  division:1  };
	turbomath.session.difficulty.n2max = { addition:30, subtraction:20, multiplication:10, division:10 };
};