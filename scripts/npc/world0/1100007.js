/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/    
/*
        Author : Biscuit
        NPC Name: Kiru
*/

status = -1;

function start() {
    cm.sendNext("Hello, do you want to go to Ereve? If so, you've come to the right place.");
}

function action(mode, type, selection){
    status++;
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendYesNo("I can take you to #bEreve#k if you want...");
    } else if (status == 1) {
        cm.sendNext("Okay, off you go!");
	} else if (status == 2) {
        cm.warp(130000210);
        cm.dispose();
    }
}
