// game.js for Perlenspiel 3.2

/*
Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
Perlenspiel is Copyright © 2009-15 Worcester Polytechnic Institute.
This file is part of Perlenspiel.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with Perlenspiel. If not, see <http://www.gnu.org/licenses/>.

Perlenspiel uses dygraphs (Copyright © 2009 by Dan Vanderkam) under the MIT License for data visualization.
See dygraphs License.txt, <http://dygraphs.com> and <http://opensource.org/licenses/MIT> for more information.
*/

// The following comment lines are for JSLint. Don't remove them!

/*jslint nomen: true, white: true */
/*global PS */

// This is a template for creating new Perlenspiel games
M = {
	" ":0,
	"*":1,
	"H":2,
	"C":3,
	""
}
G = {
	testing: true
};

// material
// - durability
// - air pressure
// - heat conductivity
// - power conductivity

//think of it more like a rooms not materials that build the rooms

//we have a engine room
//we have a ...
//

// - engine room
// - open space 1x1
// - armory
// - air scrubbers
// - hydroponics
// - garden (reduces panic level of people while i them)
// - med bay
// - computer core
// - supply depot
// - galley (feeds people)
// - cryo chambers
// - air lock
// - fuel tanks
// - waste renal
// - water tanks
// - specifically no bridge
var material = {
	Vacuum: 0,
	HullMetal: 1,
	ComputerCore:2,
	EngineCore: 3,
	FuelCell: 4,
	PowerLine: 5,
	PowerSwitch: 6,
	AirVent: 7,
	AirValve: 8,
	Light: 9, //walls already get lights every [x] tiles these are for large open spaces
	OpenRoom: 10,
	Bed: 11,
	Chair: 12,
	Table: 13,


};
//======================================================================================================= PS LOGIC
PS.init = function( system, options ) {
	"use strict";
	PS.gridSize( 8, 8 );

};

PS.touch = function( x, y, data, options ) {
	"use strict";
};


PS.release = function( x, y, data, options ) {
	"use strict";

};

PS.enter = function( x, y, data, options ) {
	"use strict";
};


PS.exit = function( x, y, data, options ) {
	"use strict";

};
PS.exitGrid = function( options ) {
	"use strict";
};

PS.keyDown = function( key, shift, ctrl, options ) {
	"use strict";
};


PS.keyUp = function( key, shift, ctrl, options ) {
	"use strict";

};


PS.swipe = function( data, options ) {
	"use strict";

};

PS.input = function( sensors, options ) {
	"use strict";

};
// ======================================================================================================= BLOCK PROTOTYPE
function Block(air, material,temperature,air_permeability) {
	this.air = air;
	this.air_permeability = air_permeability;
	this.material = material;
	this.temperature = temperature;
	this.buffer_air = 0;
	this.buffer_tempature = 0;
}

Block.prototype.move_air = function (left,top,right,bottom) {
	if (this.material != material.HullMetal) {

	}
};
// ======================================================================================================= HELPERS
var blank_data = function() {return new Block(0,material.Vacuum,0);};
var vacume_block = function() {return new Block(0,)}

//======================================================================================================== TESTS
if (G.testing) {
	QUnit.test( "Block Constructor threw PS bead's data.", function( assert ) {
		PS.gridSize(3,3);
		PS.data(PS.ALL,PS.ALL,blank_data());

		d = PS.data(1,1);

		assert.ok(d.air === 0);
		assert.ok(d.material === material.Vacuum);
		assert.ok(d.temperature === 0);

		d.air = 100;

		t = PS.data(1,1);

		assert.equal(t.air,100);
	});
}