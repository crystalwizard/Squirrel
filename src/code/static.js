// do not touch this line
if (!window.plugin.wasabeeSkins) window.plugin.wasabeeSkins = {};

// each skin needs its own namespace, change that here
window.plugin.wasabeeSkins.squirrel = {};

// this is a shortcut to save typing below
const skin = window.plugin.wasabeeSkins.squirrel;

skin.static = {
  // the display name 
  skinName: "Squirrel",
  // the name of any CSS files used. Currently "main" is required
  CSS: {
    main: require("./css/main.css")
  },
  // the path to image files
  images: {
    toolbar_addlinks: require("./images/toolbar_addlinks.png"),
    toolbar_viewOps: require("./images/toolbar_viewOps.png"),
    toolbar_addMarkers: require("./images/toolbar_addMarkers.png"),
    toolbar_sync: require("./images/toolbar_sync.png"),
    toolbar_upload: require("./images/toolbar_upload.png"),
    toolbar_download: require("./images/toolbar_download.png"),
    toolbar_wasabeebutton_in: require("./images/toolbar_wasabeebutton_in.png"),
    toolbar_wasabeebutton_out: require("./images/toolbar_wasabeebutton_out.png"),
    toolbar_quickdraw: require("./images/toolbar_quickdraw.png"),
    toolbar_settings: require("./images/toolbar_settings.png")
  },
  // if you want change the quickdraw guide style, adjust this
  constants: {
    QUICKDRAW_GUIDE_STYLE: {
      color: "#0f0",
      dashArray: [8, 2],
      opacity: 0.7,
      weight: 5,
      smoothFactor: 1,
      clickable: false,
      interactive: true
    }
  }
};

// each skin gets exactly one language -- define that here
skin.static.strings = require("./strings.json");

// define the images for markers here
skin.static.markerTypes = new Map([
  [
    skin.static.constants.MARKER_TYPE_CAPTURE,
    {
      markerIcon: require("./images/wasabee_markers_capture_pending.png"),
      markerIconAssigned: require("./images/wasabee_markers_capture_assigned.png"),
      markerIconAcknowledged: require("./images/wasabee_markers_capture_assigned.png"),
      markerIconDone: require("./images/wasabee_markers_capture_done.png")
    }
  ],
  [
    skin.static.constants.MARKER_TYPE_DECAY,
    {
      markerIcon: require("./images/wasabee_markers_decay_pending.png"),
      markerIconAssigned: require("./images/wasabee_markers_decay_assigned.png"),
      markerIconAcknowledged: require("./images/wasabee_markers_decay_assigned.png"),
      markerIconDone: require("./images/wasabee_markers_decay_done.png")
    }
  ],
  [
    skin.static.constants.MARKER_TYPE_DESTROY,
    {
      markerIcon: require("./images/wasabee_markers_destroy_pending.png"),
      markerIconAssigned: require("./images/wasabee_markers_destroy_assigned.png"),
      markerIconAcknowledged: require("./images/wasabee_markers_destroy_assigned.png"),
      markerIconDone: require("./images/wasabee_markers_destroy_done.png")
    }
  ],
  [
    skin.static.constants.MARKER_TYPE_FARM,
    {
      markerIcon: require("./images/wasabee_markers_farm_pending.png"),
      markerIconAssigned: require("./images/wasabee_markers_farm_assigned.png"),
      markerIconAcknowledged: require("./images/wasabee_markers_farm_assigned.png"),
      markerIconDone: require("./images/wasabee_markers_farm_done.png")
    }
  ],
  [
    skin.static.constants.MARKER_TYPE_GOTO,
    {
      markerIcon: require("./images/wasabee_markers_goto_pending.png"),
      markerIconAssigned: require("./images/wasabee_markers_goto_assigned.png"),
      markerIconAcknowledged: require("./images/wasabee_markers_goto_assigned.png"),
      markerIconDone: require("./images/wasabee_markers_goto_done.png")
    }
  ],
  [
    skin.static.constants.MARKER_TYPE_KEY,
    {
      markerIcon: require("./images/wasabee_markers_key_pending.png"),
      markerIconAssigned: require("./images/wasabee_markers_key_assigned.png"),
      markerIconAcknowledged: require("./images/wasabee_markers_key_assigned.png"),
      markerIconDone: require("./images/wasabee_markers_key_done.png")
    }
  ],
  [
    skin.static.constants.MARKER_TYPE_LINK,
    {
      markerIcon: require("./images/wasabee_markers_link_pending.png"),
      markerIconAssigned: require("./images/wasabee_markers_link_assigned.png"),
      markerIconAcknowledged: require("./images/wasabee_markers_link_assigned.png"),
      markerIconDone: require("./images/wasabee_markers_link_done.png")
    }
  ],
  [
    skin.static.constants.MARKER_TYPE_MEETAGENT,
    {
      markerIcon: require("./images/wasabee_markers_meetagent_pending.png"),
      markerIconAssigned: require("./images/wasabee_markers_meetagent_assigned.png"),
      markerIconAcknowledged: require("./images/wasabee_markers_meetagent_assigned.png"),
      markerIconDone: require("./images/wasabee_markers_meetagent_done.png")
    }
  ],
  [
    skin.static.constants.MARKER_TYPE_OTHER,
    {
      markerIcon: require("./images/wasabee_markers_other_pending.png"),
      markerIconAssigned: require("./images/wasabee_markers_other_assigned.png"),
      markerIconAcknowledged: require("./images/wasabee_markers_other_assigned.png"),
      markerIconDone: require("./images/wasabee_markers_other_done.png")
    }
  ],
  [
    skin.static.constants.MARKER_TYPE_RECHARGE,
    {
      markerIcon: require("./images/wasabee_markers_recharge_pending.png"),
      markerIconAssigned: require("./images/wasabee_markers_recharge_assigned.png"),
      markerIconAcknowledged: require("./images/wasabee_markers_recharge_assigned.png"),
      markerIconDone: require("./images/wasabee_markers_recharge_done.png")
    }
  ],
  [
    skin.static.constants.MARKER_TYPE_UPGRADE,
    {
      markerIcon: require("./images/wasabee_markers_upgrade_pending.png"),
      markerIconAssigned: require("./images/wasabee_markers_upgrade_assigned.png"),
      markerIconAcknowledged: require("./images/wasabee_markers_upgrade_assigned.png"),
      markerIconDone: require("./images/wasabee_markers_upgrade_done.png")
    }
  ],
  [
    skin.static.constants.MARKER_TYPE_VIRUS,
    {
      markerIcon: require("./images/wasabee_markers_virus_pending.png"),
      markerIconAssigned: require("./images/wasabee_markers_virus_assigned.png"),
      markerIconAcknowledged: require("./images/wasabee_markers_virus_assigned.png"),
      markerIconDone: require("./images/wasabee_markers_virus_done.png")
    }
  ],
  [
    skin.static.constants.MARKER_TYPE_EXCLUDE,
    {
      markerIcon: require("./images/wasabee_markers_exclude_pending.png"),
      markerIconAssigned: require("./images/wasabee_markers_exclude_assigned.png"),
      markerIconAcknowledged: require("./images/wasabee_markers_exclude_assigned.png"),
      markerIconDone: require("./images/wasabee_markers_exclude_done.png")
    }
  ]
]);

// define the various colors here
// https://leafletjs.com/reference-1.0.3.html#path
// self-block doesn't need the "portal" data, but it doesn't hurt
skin.static.layerTypes = new Map([
  [
    "main",
    {
      name: "main",
      displayName: "Red",
      color: "#ff0000",
      link: {
        dashArray: [5, 5, 1, 5],
        assignedDashArray: [4, 2, 1],
        opacity: 1,
        weight: 2
      },
      portal: {
        iconUrl: require("./images/marker_layer_main.png")
      }
    }
  ],
  [
    "groupa",
    {
      name: "groupa",
      displayName: "Orange",
      color: "#ff6600",
      link: {
        dashArray: [5, 5, 1, 5],
        assignedDashArray: [4, 2, 1],
        opacity: 1,
        weight: 2
      },
      portal: {
        iconUrl: require("./images/marker_layer_groupa.png")
      }
    }
  ],
  [
    "groupb",
    {
      name: "groupb",
      displayName: "Light Orange",
      color: "#ff9900",
      link: {
        dashArray: [5, 5, 1, 5],
        assignedDashArray: [4, 1, 4, 1],
        opacity: 1,
        weight: 2
      },
      portal: {
        iconUrl: require("./images/marker_layer_groupb.png")
      }
    }
  ],
  [
    "groupc",
    {
      name: "groupc",
      displayName: "Tan",
      color: "#bb9900",
      link: {
        dashArray: [5, 5, 1, 5],
        assignedDashArray: [4, 2, 1],
        opacity: 1,
        weight: 2
      },
      portal: {
        iconUrl: require("./images/marker_layer_groupc.png")
      }
    }
  ],
  [
    "groupd",
    {
      name: "groupd",
      displayName: "Purple",
      color: "#bb22cc",
      link: {
        dashArray: [5, 5, 1, 5],
        assignedDashArray: [4, 2, 1],
        opacity: 1,
        weight: 2
      },
      portal: {
        iconUrl: require("./images/marker_layer_groupd.png")
      }
    }
  ],
  [
    "groupe",
    {
      name: "groupe",
      displayName: "Teal",
      color: "#33cccc",
      link: {
        dashArray: [5, 5, 1, 5],
        assignedDashArray: [4, 2, 1],
        opacity: 1,
        weight: 2
      },
      portal: {
        iconUrl: require("./images/marker_layer_groupe.png")
      }
    }
  ],
  [
    "groupf",
    {
      name: "groupf",
      displayName: "Pink",
      color: "#ff55ff",
      link: {
        dashArray: [5, 5, 1, 5],
        assignedDashArray: [4, 2, 1],
        opacity: 1,
        weight: 2
      },
      portal: {
        iconUrl: require("./images/marker_layer_groupf.png")
      }
    }
  ],
  [
    "self-block",
    {
      name: "self-block",
      displayName: "Self Block",
      color: "#ff1111",
      link: {
        dashArray: [1, 5, 1, 5],
        assignedDashArray: [4, 2, 1],
        opacity: 4,
        weight: 3
      },
      portal: {
        iconUrl: require("./images/marker_layer_groupa.png")
      }
    }
  ]
]);
