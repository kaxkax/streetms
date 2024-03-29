/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/*
	Author: Biscuit
*/
function enter(pi) {
	if (pi.isQuestStarted(21201)) {
		pi.warp(108000700, "out00");
		pi.openNpc(1203000);
		return true;
	} else if (pi.isQuestStarted(21302)) {
		if (pi.getNumMobs(108010702) == 0)
			pi.spawnMonsterOnMap(108010702, 9001013, -139, 454);
		pi.warp(108010701, "out00");
		pi.openNpc(1203001);
		return true;
	}
	return false;
}