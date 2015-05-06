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
	"C":3
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
var M = [
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," ","*","*","*","*"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," ","*"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," ","*"," "," ","*"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," ","*"," "," ","*"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," ","*","*","*","*"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "]
];
var XX = 0;
var YY = 0;
//======================================================================================================= PS LOGIC
PS.init = function( system, options ) {
	"use strict";
	PS.gridSize( 8, 8 );
    for(var x = 0; x < 8; x++){
        for(var y = 0; y < 8; y++){
            var ap = 1;
            if (x == 0 || y == 0 || x == 7 || y == 7) {
                ap = 0;
            } else {
                if (x == 3 ) {
                    if(y < 3) {
                        ap = 0.25;
                    } else {
                        ap = 0.75;
                    }
                }
                if (y == 3) {
                    ap = 0;
                }
            }


            PS.data(x,y,new Block(0,ap));
        }
    }
    PS.timerStart(10,draw);

};

PS.touch = function( x, y, data, options ) {
	"use strict";
    data.air = 640;
};


PS.release = function( x, y, data, options ) {
	"use strict";

};

PS.enter = function( x, y, data, options ) {
	"use strict";
    XX = x;
    YY = y;
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
function Block(air, air_permeability) {
	this.air = air;
	this.air_permeability = air_permeability;
}

Block.prototype.move_air = function (left,top,right,bottom) {
	if (this.air_permeability > 0) {

        var l_diff = left.air   - this.air;
        var t_diff = top.air    - this.air;
        var r_diff = right.air  - this.air;
        var b_diff = bottom.air - this.air;

        var total = this.air;
        var count = 1;
        if (l_diff < 0) {
            total += left.air;
            count++;
        }
        if (t_diff < 0) {
            total += top.air;
            count++;
        }
        if (r_diff < 0) {
            total += right.air;
            count++;
        }
        if (b_diff < 0) {
            total += bottom.air;
            count++;
        }
        var each = Math.abs(total/count);
        if (l_diff < 0) {
            left.air = each*this.air_permeability;
            total -= left.air;
        }
        if (t_diff < 0) {
            top.air = each*this.air_permeability;
            total -= top.air;
        }
        if (r_diff < 0) {
            right.air = each*this.air_permeability;
            total -= right.air;
        }
        if (b_diff < 0) {
            bottom.air = each*this.air_permeability;
            total -= bottom.air;
        }

        this.air = total;
	}
};
// ======================================================================================================= HELPERS
var blank_data = function() {return new Block(0,material.Vacuum,0);};
var vacume_block = function() {return new Block(0,1)};

var draw = function() {
    var total = 0;
    var c = "";
    blocks = [];
    for(x = 0; x < 8; x++){
        for(y = 0; y < 8; y++){
            blocks.push ({x:x,y:y});
            total +=  PS.data(x,y).air;

        }
    }
    blocks = shuffle(blocks);

    for(i = 0; i < blocks.length; i++){
        x = blocks[i].x;
        y = blocks[i].y;
        data = PS.data(x,y);
        data.move_air(
            PS.data((((x - 1) % 8) + 8) % 8, (((y + 0) % 8) + 8) % 8),
            PS.data((((x + 0) % 8) + 8) % 8, (((y - 1) % 8) + 8) % 8),
            PS.data((((x + 1) % 8) + 8) % 8, (((y + 0) % 8) + 8) % 8),
            PS.data((((x + 0) % 8) + 8) % 8, (((y + 1) % 8) + 8) % 8)
        );

        var r = Math.min(255,Math.round(data.air*10));
        var b = 0;
        var g = 256-Math.round(data.air_permeability*256);
        if (x == XX && y == YY){
            c = "("+r+","+g+","+b+")";
        }
        PS.color(x,y,r,g,b);
    }

    PS.statusText(Math.round(PS.data(XX,YY).air*100) + "/" + PS.data(XX,YY).air_permeability + " -- " + Math.round(total*100) + "..."+c);
};
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
//======================================================================================================== TESTS
if (G.testing) {
    QUnit.test("Block air flow", function(assert) {

        var c = new Block(1,1);
        var t = new Block(0.5,1);
        var r = new Block(1,1);
        var l = new Block(0,1);
        var b = new Block(1,1);


        var total = c.air + t.air + r.air + l.air + b.air;
        c.move_air(l,t,r,b);
        assert.equal(c.air + t.air + r.air + l.air + b.air,total);

        c = new Block(1,1);
        t = new Block(0.25,1);
        r = new Block(0.5,1);
        l = new Block(0,1);
        b = new Block(1,1);


        total = c.air + t.air + r.air + l.air + b.air;
        c.move_air(l,t,r,b);
        assert.equal(c.air + t.air + r.air + l.air + b.air,total);



        c = new Block(1,0.25);
        t = new Block(0,0.25);
        r = new Block(0.5,1);
        l = new Block(0,1);
        b = new Block(1,1);


        total = c.air + t.air + r.air + l.air + b.air;
        c.move_air(l,t,r,b);
        assert.equal(c.air + t.air + r.air + l.air + b.air,total);


    });
}