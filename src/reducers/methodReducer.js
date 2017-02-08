// Put each method in actions, not state!
// That will allow for constructors that build the steps of a method when fed a problem
const defaultState = {
	pValChartAdd: {
		name: "Place Value Chart"
		oper: "+"
		overview: "",
		steps: [
			{
				num: "1",
				desc: "Draw a table with [NUM] columns, each representing a place value."
			},
			{
				num: "2",
				desc: "Split up the first number, and add chips to the table accordingly."
			},
			{
				num: "3",
				desc: "Repeat for the second number."
			},
			{
				num: "4",
				desc: "count the chips to add up each column"
			},
			{
				num: "5+",
				desc: "compose tens/compose hundreds"
			},
			{
				num: "n",
				desc: "count the chips and yay!"
			}
		]
	}
}