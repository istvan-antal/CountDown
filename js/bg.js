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
var circle = document.getElementById('circle'),
    ctx = circle.getContext('2d'),
    r;
    
function update() {
    var d1 = new Date(),
    d2 = new Date(),
    diff;

    d2.setHours(CD.get('targetHour'), CD.get('targetMinute'), 0, 0);

    diff = Math.floor((d2.getTime() - d1.getTime()) / 1000);
    
    r = diff / (3600 * (parseInt(CD.get('amountHour'), 10) + parseInt(CD.get('amountMinute'), 10) / 60));
                
    CD.drawCircle(circle, r, CD.getColor(r));
                
    chrome.browserAction.setIcon({
        imageData: ctx.getImageData(0, 0, circle.width, circle.height)
    });
}

update();
setInterval(update, 60000);