/*
Copyright 2019 Omar Baqueiro Espinosa

This file is part of ZFS-Usage Applet

ZFS-Usage Applet is free software: you can redistribute it and/or modify it under the
terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later
version.

Foobar is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
details.

You should have received a copy of the GNU General Public License along
with Foobar. If not, see http://www.gnu.org/licenses/.
*/


const Applet = imports.ui.applet;
const Util = imports.misc.util;
const GLib = imports.gi.GLib;
const Main = imports.ui.main;
const MessageTray = imports.ui.messageTray;

function MyApplet(orientation, panel_height, instance_id) {
    this._init(orientation, panel_height, instance_id);
}


function backtick(command) {
  try {
    let [result, stdout, stderr] = GLib.spawn_command_line_sync(command);
    if (stdout != null) {
      return stdout.toString();
    }
  }
  catch (e) {
    global.logError(e);
  }

  return "";
}

function getData(params) {
  return backtick("zpool list -o "+params);           
}

MyApplet.prototype = {
    __proto__: Applet.TextIconApplet.prototype,

    _init: function(orientation, panel_height, instance_id) {
        Applet.TextIconApplet.prototype._init.call(this, orientation, panel_height, instance_id);

        this.set_applet_icon_name("zfs-icon");
	
	this.set_applet_label(getData("cap").split("\n")[1]);
	setInterval(()=> {
           this.set_applet_tooltip(getData());
	},5000);
    },

    on_applet_clicked: function() {
	      let source = new MessageTray.SystemNotificationSource();
                 Main.messageTray.add(source);
                 let notification = new MessageTray.Notification(source,"ZFS Pool",getData("name,size,free,alloc,cap"));
	        notification.setTransient(true);
                 notification.setUrgency(MessageTray.Urgency.NORMAL);
                 source.notify(notification);
}
};

function main(metadata, orientation, panel_height, instance_id) {
    return new MyApplet(orientation, panel_height, instance_id);
}


