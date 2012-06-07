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
$(function () {
    var hour = $('#hour'),
    minute = $('#minute'),
    i;
                
    for (i = 0; i < 24; i += 1) {
        hour.append('<option value="' + i + '">' + CD.leadZ(i) + '</option>');
    }
                
    for (i = 0; i < 60; i += 1) {
        minute.append('<option value="' + i + '">' + CD.leadZ(i) + '</option>');
    }
                
    hour.val(CD.get('targetHour'));
    minute.val(CD.get('targetMinute'));
                
    hour.change(function () {
        CD.set('targetHour', $(this).val());
    });
                                
    minute.change(function () {
        CD.set('targetMinute', $(this).val());
    });
});
            
$(function () {
    var d1 = new Date(),
        d2 = new Date(),
        circle = document.getElementById('circle'),
        ctx = circle.getContext('2d'),
        r,
        diff;

    d2.setHours(CD.get('targetHour'), CD.get('targetMinute'), 0, 0);

    diff = Math.floor((d2.getTime() - d1.getTime()) / 1000);

    document.getElementById('indicator').innerHTML = Math.floor(diff / 3600) + 'h ' + Math.floor((diff % 3600) / 60) + ' min' ;

    r = diff / (3600 * 8.5);

    CD.drawCircle(circle, r, CD.getColor(r));
})