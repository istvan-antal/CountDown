/*!
 * Copyright (c) 2012 István Miklós Antal
 * This file is part of CountDown.
 * 
 * CountDown is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * CountDown is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with CountDown.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
var CD;

CD = {
    init: function () {
        if (!CD.get('version')) {
            CD.set('version', 1);
            
            CD.set('targetHour', '16');
            CD.set('targetMinute', '30');
            
            CD.set('amountHour', '16');
            CD.set('amountMinute', '30');
        }
    },
    colorTransition: function (value, colors) {
        var range;
        
        do {
            range = colors.shift();
        } while (value >= range.max && colors.length);
        
        return {
            r: Math.floor(range.r * value * 255),
            g: Math.floor(range.g * value * 255),
            b: Math.floor(range.b * value * 255)
        };
    },
    getColor: function (r) {
        return CD.colorTransition(1 - r, [
            { max: 0.25, r: 40, g: 0, b: 0 }, 
            { max: 0.5, r: 10, g: 2, b: 0 }, 
            { max: 0.75, r: 2, g: 2, b: 0 }, 
            { max: 1, r: 0, g: 1, b: 0}
        ]);
    },
    drawCircle: function (circle, r, color) {
        var ctx = circle.getContext('2d');
        
        ctx.clearRect(0,0, circle.width, circle.height);
        
        ctx.fillStyle = "rgb(190, 190, 190)"; 
        ctx.arc(Math.round(circle.width / 2), Math.round(circle.height / 2), Math.floor(Math.min(circle.width / 2, circle.height / 2)),  0, 2 * Math.PI, false);
        ctx.fill();
        
        ctx.fillStyle = "rgb(" + color.r +"," + color.g + "," + color.b + ")";  
        ctx.beginPath();
        ctx.moveTo(Math.round(circle.width / 2), Math.round(circle.height / 2));
        ctx.arc(Math.round(circle.width / 2), Math.round(circle.height / 2), Math.floor(Math.min(circle.width / 2, circle.height / 2)),  (2 - 2 * r + 1.5)  * Math.PI, (2 + 1.5) * Math.PI, false);
        ctx.moveTo(Math.round(circle.width / 2), Math.round(circle.height / 2));
        ctx.fill();        
    },
    leadZ: function (i) {
        if (String(i).length < 2) {
            return '0' + i;
        } else {
            return String(i);
        }
    },
    set: function (key, value) {
        try {
            //log("Storing [" + key + ":" + value + "]");
            window.localStorage.removeItem(key);      // <-- Local storage!
            window.localStorage.setItem(key, value);  // <-- Local storage!
        } catch(e) {
            //log("Error inside setItem");
            //log(e);
        }
        //log("Return from setItem" + key + ":" +  value);
    },
    get: function (key) {
        var value;
        //log('Retrieving key [' + key + ']');
        try {
            value = window.localStorage.getItem(key);  // <-- Local storage!
        }catch(e) {
            //log("Error inside getItem() for key:" + key);
            //log(e);
            value = "null";
        }
        //log("Returning value: " + value);
        return value;
    },
    clear: function () {
        //log('about to clear local storage');
        window.localStorage.clear(); // <-- Local storage!
        //log('cleared');
    }
};