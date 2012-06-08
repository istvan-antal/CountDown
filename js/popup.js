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
        amountHour = $('#thour'),
        amountMinute = $('#tminute'),
        i;
                
    for (i = 0; i < 24; i += 1) {
        hour.append('<option value="' + i + '">' + CD.leadZ(i) + '</option>');
    }
                
    for (i = 0; i < 60; i += 1) {
        minute.append('<option value="' + i + '">' + CD.leadZ(i) + '</option>');
    }
    
    for (i = 0; i < 24; i += 1) {
        amountHour.append('<option value="' + i + '">' + i + '</option>');
    }
                
    for (i = 0; i < 60; i += 1) {
        amountMinute.append('<option value="' + i + '">' + i + '</option>');
    }
                
    hour.val(CD.get('targetHour'));
    minute.val(CD.get('targetMinute'));
    
    amountHour.val(CD.get('amountHour'));
    amountMinute.val(CD.get('amountMinute'));
                
    hour.change(function () {
        CD.set('targetHour', $(this).val());
    });
                                
    minute.change(function () {
        CD.set('targetMinute', $(this).val());
    });
    
    amountHour.change(function () {
        CD.set('amountHour', $(this).val());
    });
                                
    amountMinute.change(function () {
        CD.set('amountMinute', $(this).val());
    });
});