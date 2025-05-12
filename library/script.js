(function(){
    var script = {
 "start": "this.init()",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.MapViewer"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "definitions": [{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 28.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CDBE87B7_C34F_5DE1_41E8_56C43A365A24",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -148.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CC5837F8_C34F_5D6F_41CF_762723E28E77",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/u/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Panorama7",
 "id": "panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620",
 "class": "Panorama",
 "overlays": [
  "this.overlay_06DA344B_1D42_BC2A_41B0_4E0D0F945F56"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 31.48,
   "yaw": 145.9,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C"
  }
 ],
 "hfov": 360,
 "pitch": -0.01,
 "vfov": 76,
 "thumbnailUrl": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -27.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CDAF4793_C34F_5DA1_41E2_DEBB90DBF737",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CD48C658_C34F_5EAF_41E6_D7692A100D5D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 21.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CC2138B6_C34F_53E3_41D0_1A021253660B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 44.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D37BF9B6_C34F_55E3_41E6_86FB1466FC6E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 46.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CD50E67E_C34F_5F60_41BA_42CDB6203876",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/u/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "F2-3",
 "id": "panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112",
 "class": "Panorama",
 "overlays": [
  "this.overlay_4B98AA67_5B86_FE7C_41B5_C0105473FCDF",
  "this.overlay_557045B7_5B86_CADC_41CD_E51B187AACCE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -158.93,
   "yaw": 131.48,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7"
  }
 ],
 "hfov": 360,
 "pitch": 4.67,
 "vfov": 82.65,
 "thumbnailUrl": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 24.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D36BC9A2_C34F_55E3_41C4_BC5860C7535C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "F3-1",
 "id": "panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5054800F_5EA1_62C4_41B6_4CD046120DA0",
  "this.overlay_4F56E61F_5EA3_6EC3_41D2_3FE754C1A964",
  "this.overlay_4DD5740D_5EA7_62C4_41BE_6F175F07F134"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -71.67,
   "yaw": 131.63,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88"
  },
  {
   "backwardYaw": 91.76,
   "yaw": -114.75,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_31002405_206D_14F7_41BB_D64EF95E9EA6"
  }
 ],
 "hfov": 360,
 "pitch": -1.15,
 "vfov": 82.71,
 "thumbnailUrl": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 50.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CEE485D1_C34F_5DA0_41BF_48D568F5B15B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/u/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 66.32,
 "overlays": [
  "this.overlay_BBB7DC19_ABA7_CF55_41E4_2C96DD3E281B"
 ],
 "thumbnailUrl": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_t.jpg",
 "id": "panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8",
 "class": "Panorama",
 "label": "libraryfrontside",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 50.78,
   "yaw": -146.05,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D827ACFC_D371_2565_41B6_427B2920453F"
  }
 ],
 "hfov": 360,
 "pitch": 5.33,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -166.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 53.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CE97C620_C34F_5E9F_41D8_E43CF6670E53",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -161.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CCC388DE_C34F_53A3_41E5_5BB31D22AE66",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 3.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CCE2B902_C34F_52A3_41E3_657F4F3B8856",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -46.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CC8D392F_C34F_52E0_41E2_7BA704C135A0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 169.76,
  "class": "PanoramaCameraPosition",
  "pitch": -9.82
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 172.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CED305A5_C34F_5DE1_41E4_209E8B8B4A51",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -48.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CD7D46A7_C34F_5FE1_4179_CFA7F7A7A1E6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 55.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CD0C06BB_C34F_5FE1_41B4_33587464B485",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 93.72,
  "class": "PanoramaCameraPosition",
  "pitch": -5.06
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "F2-4",
 "id": "panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7",
 "class": "Panorama",
 "overlays": [
  "this.overlay_546C625C_5BBD_CE4C_41C6_77E826D7EEA6",
  "this.overlay_4ACFD88F_5BBF_DACC_41CC_46AB08922C00"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -126.3,
   "yaw": 84.65,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_31002405_206D_14F7_41BB_D64EF95E9EA6"
  },
  {
   "backwardYaw": 131.48,
   "yaw": -158.93,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112"
  }
 ],
 "hfov": 360,
 "pitch": 4.09,
 "vfov": 79.81,
 "thumbnailUrl": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 107.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CC4E37D8_C34F_5DAF_41BD_B33394D5232C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -83.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CECE6580_C34F_5D9F_41C8_A2A686AA397C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer"
},
{
 "initialPosition": {
  "yaw": -92.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CEEEF5B9_C34F_5DE1_41D9_D41F69DC407E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 163.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CCAFB956_C34F_52A3_41E8_466EF08D2F71",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -166.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/u/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "F2-2",
 "id": "panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069",
 "class": "Panorama",
 "overlays": [
  "this.overlay_4C921ECB_5B83_D6B4_41D6_9FB46E62ED19",
  "this.overlay_4811703D_5B86_49CC_41CF_70560E6A2D11",
  "this.overlay_4F9EE24D_5B86_CE4C_41D6_5066C09CD1EF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5"
  },
  {
   "backwardYaw": 136.48,
   "yaw": -151.32,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_31002405_206D_14F7_41BB_D64EF95E9EA6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112"
  }
 ],
 "hfov": 360,
 "pitch": 4.86,
 "vfov": 78.29,
 "thumbnailUrl": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 168.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CC9D6943_C34F_52A1_41CC_3ECCB371576C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 24.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CD82176B_C34F_5D61_41E5_9E0603164E37",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -48.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CEA0B634_C34F_5EE7_41E3_192F99FE3D4F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 154.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CD28B6DD_C34F_5FA1_41D9_5D66A87E025B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "G2",
 "hfovMin": "120%",
 "id": "panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D61D10E2_D853_A87A_41E5_1BDAA2591CBD",
  "this.overlay_D6745D2C_D85D_B9CF_41D2_DA64D79B15DE",
  "this.overlay_106E3C29_1CC3_AC17_4192_CD36BA170A74",
  "this.overlay_B17A4E79_BE50_9064_41E6_FA8C1DA66322"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D"
  },
  {
   "backwardYaw": 4.64,
   "yaw": -106.72,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7"
  },
  {
   "backwardYaw": -177.51,
   "yaw": -155.18,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 68,
 "thumbnailUrl": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 173.86,
  "class": "PanoramaCameraPosition",
  "pitch": -11.46
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -0.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CDF08757_C34F_5EA1_41BD_28662F46885C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/u/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "F1-3",
 "id": "panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_0CF6DE1F_1CDE_6C2B_41A1_C84EA417EB22",
  "this.overlay_0CB9215F_1CDE_742A_41B3_56293DB99C84",
  "this.overlay_5F0F22D7_51AA_479A_41A0_FC2A4BE60045"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 87.56,
   "yaw": -155.37,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_31002405_206D_14F7_41BB_D64EF95E9EA6"
  },
  {
   "backwardYaw": -129.99,
   "yaw": 32.26,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817"
  }
 ],
 "hfov": 360,
 "pitch": 0.01,
 "vfov": 76,
 "thumbnailUrl": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -175.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CC06A881_C34F_53A1_41CD_5B1DB81D70D3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -43.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CE3FA558_C34F_52AF_41C6_0660893F0A7D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -53.14,
  "class": "PanoramaCameraPosition",
  "pitch": -2.52
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_camera"
  }
 ],
 "id": "playList_CDB1B4C4_C34F_53A7_41CF_D9F111350961",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/f/0/{row}_{column}.jpg",
      "colCount": 12,
      "height": 6144,
      "width": 6144,
      "tags": "ondemand",
      "rowCount": 12,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/u/0/{row}_{column}.jpg",
      "colCount": 12,
      "height": 6144,
      "width": 6144,
      "tags": "ondemand",
      "rowCount": 12,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/u/1/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/r/0/{row}_{column}.jpg",
      "colCount": 12,
      "height": 6144,
      "width": 6144,
      "tags": "ondemand",
      "rowCount": 12,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/b/0/{row}_{column}.jpg",
      "colCount": 12,
      "height": 6144,
      "width": 6144,
      "tags": "ondemand",
      "rowCount": 12,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/d/0/{row}_{column}.jpg",
      "colCount": 12,
      "height": 6144,
      "width": 6144,
      "tags": "ondemand",
      "rowCount": 12,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/l/0/{row}_{column}.jpg",
      "colCount": 12,
      "height": 6144,
      "width": 6144,
      "tags": "ondemand",
      "rowCount": 12,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "F1-2",
 "id": "panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817",
 "class": "Panorama",
 "overlays": [
  "this.overlay_1359FF38_1CC2_6C75_41A9_0DC475A00C00",
  "this.overlay_0D8EB6D2_1CC2_BC35_41A8_36DA4C94B6C2",
  "this.overlay_41BE7D4F_51BA_428A_41CE_89D8D1FD4F15",
  "this.overlay_41426E19_51FA_5E96_41B0_FB3994B67A11",
  "this.overlay_ADD2953A_BEB0_91E5_41E5_DFFF5884594B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 32.26,
   "yaw": -129.99,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A"
  },
  {
   "backwardYaw": 179.96,
   "yaw": -16.24,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38"
  },
  {
   "backwardYaw": -155.18,
   "yaw": -177.51,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 92.8,
 "thumbnailUrl": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/u/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "F3-4",
 "id": "panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303",
 "class": "Panorama",
 "overlays": [
  "this.overlay_4FF63D85_5EA3_DDC4_41B6_F45EDF8B5CD8",
  "this.overlay_4C040CFC_5EA2_E345_41D5_EA2C273DFEC0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -114.75,
   "yaw": 91.76,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5"
  },
  {
   "backwardYaw": 133.3,
   "yaw": -133.33,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522"
  }
 ],
 "hfov": 360,
 "pitch": -2.39,
 "vfov": 79.23,
 "thumbnailUrl": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 108.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CC65483D_C34F_52E1_41C2_416DDA77932E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -34.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CDC43716_C34F_5EA3_41DC_03D510D037E7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "id": "window_AF98A043_BE50_8FAB_41B9_A33F4254F5DF",
 "backgroundOpacity": 1,
 "headerBorderColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "shadow": true,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "veilColorDirection": "horizontal",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "paddingLeft": 0,
 "bodyBorderColor": "#000000",
 "minWidth": 20,
 "shadowVerticalLength": 0,
 "backgroundColor": [],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "height": 200,
 "headerPaddingRight": 10,
 "title": "",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "titlePaddingTop": 5,
 "headerBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowBlurRadius": 6,
 "titleTextDecoration": "none",
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "children": [
  "this.htmlText_AF9A9043_BE50_8FAB_41A5_5B90F374C03E"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "headerBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBorderRadius": 11,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "headerBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "titlePaddingRight": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "headerVerticalAlign": "middle",
 "paddingTop": 0,
 "titlePaddingLeft": 5,
 "bodyPaddingBottom": 5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "bodyPaddingRight": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [],
 "data": {
  "name": "Window7905"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -36.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CD639696_C34F_5FA3_41D1_52D0CADE6226",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GE0",
 "hfovMin": "120%",
 "id": "panorama_D827ACFC_D371_2565_41B6_427B2920453F",
 "class": "Panorama",
 "overlays": [
  "this.overlay_BA737896_ABA0_575F_41D7_5F03D1A99771",
  "this.overlay_AEF8F52C_BE50_91FD_41CD_47D2318364EE",
  "this.overlay_B1AE176E_BE53_707A_41E3_AD1ACB8BBD1C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 73.32,
   "yaw": -148.05,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D"
  },
  {
   "backwardYaw": 73.32,
   "yaw": 151.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D"
  },
  {
   "backwardYaw": -146.05,
   "yaw": 50.78,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8"
  }
 ],
 "hfov": 360,
 "pitch": -0.55,
 "vfov": 83.01,
 "thumbnailUrl": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CC6BB81C_C34F_52A0_41E2_2AC432E0EE24",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -129.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CEF095E6_C34F_5D60_41DD_34A74AC4357D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -149.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CC33F8CA_C34F_53A3_41DD_BC046C33D1D2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "G1",
 "hfovMin": "120%",
 "id": "panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D776B519_D84C_A9C9_41CA_9E6F99FA57BF",
  "this.overlay_D758154D_D84C_A849_419E_669BF13D329B",
  "this.overlay_D6B6E93C_D84C_59CF_41E1_AAD09B1F6943",
  "this.overlay_D6C9E417_D854_AFD9_41BC_5F0313940920",
  "this.overlay_1223600E_1CCE_542D_41A0_88529815786F",
  "this.overlay_AE878DD5_BE50_B0AF_41C0_EB5CDA9DD7DC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -81.18,
   "yaw": 96.85,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14"
  },
  {
   "backwardYaw": -7.23,
   "yaw": -25.66,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 84.79,
 "thumbnailUrl": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -106.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_D349597B_C34F_5561_41E8_6807B4888ED5",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "f1-r1.1",
 "id": "panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38",
 "class": "Panorama",
 "overlays": [
  "this.overlay_0D6E71DB_1CCF_D42B_41B2_71FEBDA8B4CE",
  "this.overlay_0D36DD0E_1CC1_EC2D_41B4_5F30099ED763",
  "this.overlay_0EF244DF_1CC1_FC2B_4199_823A924DD830",
  "this.overlay_41226A14_51AA_469E_41D0_1E336FB07AB7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -11.92,
   "yaw": 30.59,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994"
  },
  {
   "backwardYaw": -16.24,
   "yaw": 179.96,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817"
  }
 ],
 "hfov": 360,
 "pitch": -2.7,
 "vfov": 83.03,
 "thumbnailUrl": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "F1-1",
 "id": "panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14",
 "class": "Panorama",
 "overlays": [
  "this.overlay_131E397A_1CC2_74F5_41B8_7D933025FF25"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 80,
 "thumbnailUrl": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/f/0/{row}_{column}.jpg",
      "colCount": 17,
      "height": 8704,
      "width": 8704,
      "tags": "ondemand",
      "rowCount": 17,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/f/1/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/f/2/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/f/3/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/f/4/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/f/5/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/r/0/{row}_{column}.jpg",
      "colCount": 17,
      "height": 8704,
      "width": 8704,
      "tags": "ondemand",
      "rowCount": 17,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/r/1/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/r/2/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/r/3/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/r/4/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/r/5/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/b/0/{row}_{column}.jpg",
      "colCount": 17,
      "height": 8704,
      "width": 8704,
      "tags": "ondemand",
      "rowCount": 17,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/b/1/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/b/2/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/b/3/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/b/4/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/b/5/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/l/0/{row}_{column}.jpg",
      "colCount": 17,
      "height": 8704,
      "width": 8704,
      "tags": "ondemand",
      "rowCount": 17,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/l/1/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/l/2/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/l/3/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/l/4/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/l/5/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "F1R1",
 "id": "panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_0E86B260_1CC2_5415_41AD_9DB2E690A412",
  "this.overlay_0E217EC7_1CC2_AC1B_41A2_4AFEA4BE1FEE",
  "this.overlay_0FF3BACF_1CC2_B42B_41A0_A7FAE33133DD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 30.59,
   "yaw": -11.92,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38"
  },
  {
   "backwardYaw": 18.01,
   "yaw": 89.31,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817"
  }
 ],
 "hfov": 360,
 "pitch": -2.01,
 "vfov": 62.99,
 "thumbnailUrl": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 65.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CCFD391A_C34F_52A3_41D7_760FB81F1E3D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -152.76,
  "class": "PanoramaCameraPosition",
  "pitch": 9.84
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 28.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D31A89DC_C34F_55A7_41E7_575A41FBE5D4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 2.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CC11B89C_C34F_53A7_41D4_C74DCBC39491",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -147.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CDE11741_C34F_5EA0_41E0_DC78A10F8F65",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "F1R2",
 "id": "panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE",
 "class": "Panorama",
 "overlays": [
  "this.overlay_0B9CA677_1CC6_5CFA_41B6_ED4217C7B292",
  "this.overlay_0B2E370B_1CC6_7C2B_41B3_B9D2D032E413"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 89.31,
   "yaw": 18.01,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994"
  }
 ],
 "hfov": 360,
 "pitch": 0.01,
 "vfov": 66,
 "thumbnailUrl": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "F3-3",
 "id": "panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522",
 "class": "Panorama",
 "overlays": [
  "this.overlay_4F0C79BB_5EAF_65CC_41BC_DA9A8BDD6E66",
  "this.overlay_4C736B31_5EA1_A6DC_41D7_3B6D484C18E6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -133.33,
   "yaw": 133.3,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303"
  },
  {
   "backwardYaw": 143.64,
   "yaw": -124.77,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88"
  }
 ],
 "hfov": 360,
 "pitch": -2.86,
 "vfov": 81.28,
 "thumbnailUrl": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_06F70832_1CC6_5475_41B9_88088342E615_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "shadowHorizontalLength": 3,
 "id": "window_ADCBD1A9_BEB1_90E7_41C5_2B7199748D5F",
 "backgroundOpacity": 1,
 "headerBorderColor": "#000000",
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "shadow": true,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "veilColorDirection": "horizontal",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "paddingLeft": 0,
 "bodyBorderColor": "#000000",
 "minWidth": 20,
 "shadowVerticalLength": 0,
 "backgroundColor": [],
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "height": 300,
 "headerPaddingRight": 10,
 "title": "",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "footerHeight": 5,
 "titlePaddingBottom": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "titlePaddingTop": 5,
 "headerBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "shadowBlurRadius": 6,
 "titleTextDecoration": "none",
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "children": [
  "this.htmlText_ADCDA1A9_BEB1_90E7_41D9_BC5B79E46C85"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "headerBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBorderRadius": 11,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "headerBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerPaddingBottom": 10,
 "titlePaddingRight": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "headerVerticalAlign": "middle",
 "paddingTop": 0,
 "titlePaddingLeft": 5,
 "bodyPaddingBottom": 5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "bodyPaddingRight": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowSpread": 1,
 "closeButtonBackgroundColor": [],
 "data": {
  "name": "Window14311"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "initialPosition": {
  "yaw": 73.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CE988611_C34F_5EA1_41C3_18884D7F2C98",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -106.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_CCBE496A_C34F_5563_41E6_99EFD69ECCE9",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 31.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CD3BA6F2_C34F_5F63_41B9_9CF9A3E860C8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/u/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/u/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Panorama6",
 "id": "panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_063BF533_1D46_5C7B_41B3_402BF04614D2",
  "this.overlay_068EC392_1D4E_B435_41B0_68B80B521139"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 145.9,
   "yaw": 31.48,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620"
  },
  {
   "backwardYaw": -151.24,
   "yaw": -176.37,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 75,
 "thumbnailUrl": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -88.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CC74485D_C34F_52A1_41D4_4A6DD67CE703",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -95.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CEDC6A3B_C34F_56E1_41D4_4555A359C2FA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GM2",
 "id": "panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C9796E73_D84F_B859_41D4_404D928E10A1",
  "this.overlay_CB7B1929_DBCD_B9C9_4190_4B17B6CD415F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889"
  },
  {
   "backwardYaw": -179.5,
   "yaw": -6.67,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257"
  }
 ],
 "hfov": 360,
 "pitch": -1.49,
 "vfov": 77.71,
 "thumbnailUrl": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/u/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Panorama5",
 "id": "panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_07FC5484_1D46_7C1D_41B9_689C98BF1C28",
  "this.overlay_4BC64D88_5931_5561_41D2_F41FECC7D21A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 40.96,
   "yaw": -3.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA"
  },
  {
   "backwardYaw": -176.37,
   "yaw": -151.24,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C"
  }
 ],
 "hfov": 360,
 "pitch": -0.01,
 "vfov": 74,
 "thumbnailUrl": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 33.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D359498C_C34F_55A7_41A7_A403714A7538",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 104.04,
  "class": "PanoramaCameraPosition",
  "pitch": -4.18
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -139.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CCD218F2_C34F_5363_41C4_EE78AC299B86",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/u/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "F2-1",
 "id": "panorama_31002405_206D_14F7_41BB_D64EF95E9EA6",
 "class": "Panorama",
 "overlays": [
  "this.overlay_3116E04A_2067_0D7D_41B0_C529932C4FE5",
  "this.overlay_33332EDA_207B_151C_41BF_FD288D6D8ABC",
  "this.overlay_49A50D7E_5B82_7A4C_41C8_07E8F76F624B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -151.32,
   "yaw": 136.48,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817"
  },
  {
   "backwardYaw": 84.65,
   "yaw": -126.3,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7"
  }
 ],
 "hfov": 360,
 "pitch": 3.43,
 "vfov": 77.13,
 "thumbnailUrl": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -153.99,
  "class": "PanoramaCameraPosition",
  "pitch": -6.14
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/u/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GM1",
 "id": "panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C918AB6A_D84C_B84A_41B4_EF891B5FDDB8",
  "this.overlay_48FB99F0_596E_FCA1_41D0_C42F1C4B2443"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -106.72,
   "yaw": 4.64,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257"
  }
 ],
 "hfov": 360,
 "pitch": -2.37,
 "vfov": 79.72,
 "thumbnailUrl": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/u/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "f1-lab1",
 "id": "panorama_06F70832_1CC6_5475_41B9_88088342E615",
 "class": "Panorama",
 "overlays": [
  "this.overlay_041199A1_1CC2_B417_41B7_31E298B1F1D7",
  "this.overlay_4BD91A17_5951_5F60_41D4_761933E89161"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -151.76,
   "yaw": 125.74,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5"
  },
  {
   "backwardYaw": -72.82,
   "yaw": -135.9,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA"
  }
 ],
 "hfov": 360,
 "pitch": -3.24,
 "vfov": 80.14,
 "thumbnailUrl": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8",
   "camera": "this.panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D827ACFC_D371_2565_41B6_427B2920453F",
   "camera": "this.panorama_D827ACFC_D371_2565_41B6_427B2920453F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D",
   "camera": "this.panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A",
   "camera": "this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889",
   "camera": "this.panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C",
   "camera": "this.panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9",
   "camera": "this.panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21",
   "camera": "this.panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7",
   "camera": "this.panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C",
   "camera": "this.panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257",
   "camera": "this.panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38",
   "camera": "this.panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A",
   "camera": "this.panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE",
   "camera": "this.panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994",
   "camera": "this.panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06F70832_1CC6_5475_41B9_88088342E615",
   "camera": "this.panorama_06F70832_1CC6_5475_41B9_88088342E615_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5",
   "camera": "this.panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E",
   "camera": "this.panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C",
   "camera": "this.panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620",
   "camera": "this.panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_31002405_206D_14F7_41BB_D64EF95E9EA6",
   "camera": "this.panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112",
   "camera": "this.panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7",
   "camera": "this.panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069",
   "camera": "this.panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5",
   "camera": "this.panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88",
   "camera": "this.panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522",
   "camera": "this.panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 31.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CD351707_C34F_5EA1_41D4_ECCC95DF459B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 29.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CD9DB784_C34F_5DA7_41E3_0FC30B9CB2AC",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 173.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CD45A66E_C34F_5F63_41E4_6040AF78DB8C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "F3-2",
 "id": "panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88",
 "class": "Panorama",
 "overlays": [
  "this.overlay_4E63BFAF_5EA2_BDC3_41D1_EE8A532E4C06",
  "this.overlay_4EA4007A_5EAE_E34C_419B_BD51418A5130"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 131.63,
   "yaw": -71.67,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5"
  },
  {
   "backwardYaw": -124.77,
   "yaw": 143.64,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522"
  }
 ],
 "hfov": 360,
 "pitch": -1.92,
 "vfov": 83.19,
 "thumbnailUrl": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 154.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CD1F66CD_C34F_5FA1_41C7_AB12ECD122C2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -90.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CEBDA643_C34F_5EA0_41DE_BB4CE801FC3F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GM3",
 "id": "panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257",
 "class": "Panorama",
 "overlays": [
  "this.overlay_4B548063_5951_6BA7_41D4_10492913848C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -6.67,
   "yaw": -179.5,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C"
  }
 ],
 "hfov": 360,
 "pitch": -2.7,
 "vfov": 82.76,
 "thumbnailUrl": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 98.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CEC53596_C34F_5DA3_41E1_0E32D0D79066",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/u/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GE1",
 "id": "panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D",
 "class": "Panorama",
 "overlays": [
  "this.overlay_0FE2F39D_1FE5_063F_41AA_299E87EF5C02",
  "this.overlay_0FB61194_1FFB_020D_41BD_7490206FD624",
  "this.overlay_AE1A7E3A_BE50_93E5_41E2_987D68BE9BAF",
  "this.overlay_AE4B366A_BE51_9065_41CD_6D8E6E8808F4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -25.66,
   "yaw": -7.23,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A"
  },
  {
   "backwardYaw": -25.66,
   "yaw": -94.37,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A"
  },
  {
   "backwardYaw": -148.05,
   "yaw": 73.32,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D827ACFC_D371_2565_41B6_427B2920453F"
  },
  {
   "backwardYaw": -148.05,
   "yaw": 170.46,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D827ACFC_D371_2565_41B6_427B2920453F"
  }
 ],
 "hfov": 360,
 "pitch": -1.71,
 "vfov": 81.34,
 "thumbnailUrl": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "f1-lab2",
 "id": "panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5",
 "class": "Panorama",
 "overlays": [
  "this.overlay_05730B68_1CC2_D4EC_418F_68174C22BB62",
  "this.overlay_054CF7C0_1CC3_DC15_41BA_75226379992C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 125.74,
   "yaw": -151.76,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_06F70832_1CC6_5475_41B9_88088342E615"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA"
  }
 ],
 "hfov": 360,
 "pitch": -3.24,
 "vfov": 80.01,
 "thumbnailUrl": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_camera"
  }
 ],
 "id": "playList_CDB1D4C4_C34F_53A7_41C8_A3A0D6015626",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -18.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CE36156C_C34F_5D67_41E5_520F3F939F39",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 176.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_D30A59C8_C34F_55AF_41C5_90123FC1F3D2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GL2",
 "id": "panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9",
 "class": "Panorama",
 "overlays": [
  "this.overlay_4188818E_51EA_458D_41D2_523F6C571BB7",
  "this.overlay_41981B8E_51EA_C58A_41BD_3DA75BA7F552"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -150.34,
   "yaw": 84,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21"
  },
  {
   "backwardYaw": 152.21,
   "yaw": 161.54,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C"
  }
 ],
 "hfov": 360,
 "pitch": -6.36,
 "vfov": 55.93,
 "thumbnailUrl": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_camera"
  }
 ],
 "id": "playList_CE04B519_C34F_52A0_41AD_5FEFAD6D1429",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GL1",
 "id": "panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C99CD076_D85D_A85B_41CD_B698CA2350D4",
  "this.overlay_41A4D778_51EE_CE96_41BE_50A3CD10D0D6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 161.54,
   "yaw": 152.21,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9"
  },
  {
   "backwardYaw": 96.85,
   "yaw": -81.18,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A"
  }
 ],
 "hfov": 360,
 "pitch": -5.06,
 "vfov": 80,
 "thumbnailUrl": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/u/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "F1R3",
 "id": "panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994",
 "class": "Panorama",
 "overlays": [
  "this.overlay_0F859363_1CC6_541B_41B9_902F7001E3A4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A"
  }
 ],
 "hfov": 360,
 "pitch": -4.16,
 "vfov": 80.69,
 "thumbnailUrl": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_camera"
  }
 ],
 "id": "playList_CE1AC525_C34F_52E1_41E1_246699F24B1D",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "F1-4",
 "id": "panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA",
 "class": "Panorama",
 "overlays": [
  "this.overlay_0C4BF08F_1CC2_F42B_41AE_947B537959EC",
  "this.overlay_0C1C9534_1CC3_BC7E_41B0_823D8C40AD5B",
  "this.overlay_5F030C54_51A6_C29E_41BB_548B61AB8BAF",
  "this.overlay_4BC50FA8_5951_54A1_41D3_745A0BF479F9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -155.37,
   "yaw": 87.56,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A"
  },
  {
   "backwardYaw": -135.9,
   "yaw": -72.82,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_06F70832_1CC6_5475_41B9_88088342E615"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_31002405_206D_14F7_41BB_D64EF95E9EA6"
  },
  {
   "backwardYaw": -3.88,
   "yaw": 40.96,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 62,
 "thumbnailUrl": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/f/0/{row}_{column}.jpg",
      "colCount": 12,
      "height": 6144,
      "width": 6144,
      "tags": "ondemand",
      "rowCount": 12,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/f/1/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/r/0/{row}_{column}.jpg",
      "colCount": 12,
      "height": 6144,
      "width": 6144,
      "tags": "ondemand",
      "rowCount": 12,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/r/1/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/b/0/{row}_{column}.jpg",
      "colCount": 12,
      "height": 6144,
      "width": 6144,
      "tags": "ondemand",
      "rowCount": 12,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/b/1/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/d/0/{row}_{column}.jpg",
      "colCount": 12,
      "height": 6144,
      "width": 6144,
      "tags": "ondemand",
      "rowCount": 12,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/d/1/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/l/0/{row}_{column}.jpg",
      "colCount": 12,
      "height": 6144,
      "width": 6144,
      "tags": "ondemand",
      "rowCount": 12,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/l/1/{row}_{column}.jpg",
      "colCount": 6,
      "height": 3072,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "GL3",
 "hfovMin": "126%",
 "id": "panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5FE32850_51AE_4296_4183_C0B2B17E494B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 84,
   "yaw": -150.34,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9"
  }
 ],
 "hfov": 360,
 "pitch": -4.18,
 "vfov": 73.77,
 "thumbnailUrl": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 28.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CDD1F72D_C34F_5EE0_41E0_B30565B0B2F4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -171.76,
  "class": "PanoramaCameraPosition",
  "pitch": -0.55
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_D827ACFC_D371_2565_41B6_427B2920453F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -54.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_CE8FD5FA_C34F_5D60_41B9_2D162E9FBEE8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "shadow": false,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "paddingLeft": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "ViewerArea",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "left": "0%",
 "width": "37.228%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "shadow": false,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "paddingLeft": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "class": "ViewerArea",
 "height": "55.887%",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "MapViewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 145.9,
   "hfov": 7.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.81
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C, this.camera_CC5837F8_C34F_5D6F_41CF_762723E28E77); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_00A69BEC_1D47_EBED_4196_6A260FFD97AC",
   "pitch": -18.81,
   "yaw": 145.9,
   "hfov": 7.51,
   "distance": 100
  }
 ],
 "id": "overlay_06DA344B_1D42_BC2A_41B0_4E0D0F945F56",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -110.35,
   "hfov": 10.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.42
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3007AB9F_206D_7313_41BE_3EC202B71186, this.camera_4B46B0AA_5BBE_4AF5_41C6_41672129F854)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_54AD5C43_5B85_D9B4_4145_AFD88F304A67",
   "pitch": -29.42,
   "yaw": -110.35,
   "hfov": 10.86,
   "distance": 100
  }
 ],
 "id": "overlay_4B98AA67_5B86_FE7C_41B5_C0105473FCDF",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 131.48,
   "hfov": 12.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.85
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7, this.camera_CC2138B6_C34F_53E3_41D0_1A021253660B); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4ED34EC2_5BBE_36B4_419D_9380A013EBB2",
   "pitch": -14.85,
   "yaw": 131.48,
   "hfov": 12.73,
   "distance": 100
  }
 ],
 "id": "overlay_557045B7_5B86_CADC_41CD_E51B187AACCE",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 131.63,
   "hfov": 9.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.81
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88, this.camera_CC65483D_C34F_52E1_41C2_416DDA77932E); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48BFB9AD_5EA1_A5C7_41BA_A5C4FB4FDB84",
   "pitch": -16.81,
   "yaw": 131.63,
   "hfov": 9.59,
   "distance": 100
  }
 ],
 "id": "overlay_5054800F_5EA1_62C4_41B6_4CD046120DA0",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -114.75,
   "hfov": 9.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.04
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303, this.camera_CC74485D_C34F_52A1_41D4_4A6DD67CE703); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48BF19AD_5EA1_A5C7_4187_9BBF9ADEB046",
   "pitch": -19.04,
   "yaw": -114.75,
   "hfov": 9.51,
   "distance": 50
  }
 ],
 "id": "overlay_4F56E61F_5EA3_6EC3_41D2_3FE754C1A964",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 62.11,
   "hfov": 6.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.24
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4D812EEA_5EA7_7F4D_41C5_A5DAD2575248",
   "pitch": -33.24,
   "yaw": 62.11,
   "hfov": 6.44,
   "distance": 50
  }
 ],
 "id": "overlay_4DD5740D_5EA7_62C4_41BE_6F175F07F134",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -146.05,
   "hfov": 14.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.5
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D827ACFC_D371_2565_41B6_427B2920453F, this.camera_CEF095E6_C34F_5D60_41DD_34A74AC4357D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BECDFEE4_ABA0_48F3_41DA_44644858BAB6",
   "pitch": -21.5,
   "yaw": -146.05,
   "hfov": 14.39,
   "distance": 100
  }
 ],
 "id": "overlay_BBB7DC19_ABA7_CF55_41E4_2C96DD3E281B",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 84.65,
   "hfov": 8.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.38
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_31002405_206D_14F7_41BB_D64EF95E9EA6, this.camera_CE97C620_C34F_5E9F_41D8_E43CF6670E53); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4ED2DEC2_5BBE_36B4_41D3_0AB8A26CA022",
   "pitch": -18.38,
   "yaw": 84.65,
   "hfov": 8.48,
   "distance": 50
  }
 ],
 "id": "overlay_546C625C_5BBD_CE4C_41C6_77E826D7EEA6",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -158.93,
   "hfov": 10.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.21
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112, this.camera_CEA0B634_C34F_5EE7_41E3_192F99FE3D4F); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4ED26EC2_5BBE_36B4_41D6_29691C982E42",
   "pitch": -23.21,
   "yaw": -158.93,
   "hfov": 10.2,
   "distance": 100
  }
 ],
 "id": "overlay_4ACFD88F_5BBF_DACC_41CC_46AB08922C00",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 86.94,
   "hfov": 10.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.6
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48C62002_5C7E_C9B4_41C7_5B426888C14F",
   "pitch": -19.6,
   "yaw": 86.94,
   "hfov": 10.03,
   "distance": 50
  }
 ],
 "id": "overlay_4C921ECB_5B83_D6B4_41D6_9FB46E62ED19",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -151.32,
   "hfov": 9.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.11
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_31002405_206D_14F7_41BB_D64EF95E9EA6, this.camera_CE3FA558_C34F_52AF_41C6_0660893F0A7D); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48C64002_5C7E_C9B4_41C0_F3930B6A5C72",
   "pitch": -26.11,
   "yaw": -151.32,
   "hfov": 9.58,
   "distance": 100
  }
 ],
 "id": "overlay_4811703D_5B86_49CC_41CF_70560E6A2D11",
 "data": {
  "label": "Arrow 08a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -58.7,
   "hfov": 9.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.93
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48C9E006_5C7E_C9BC_4137_0C3C00F76534",
   "pitch": -23.93,
   "yaw": -58.7,
   "hfov": 9.27,
   "distance": 100
  }
 ],
 "id": "overlay_4F9EE24D_5B86_CE4C_41D6_5066C09CD1EF",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -106.72,
   "hfov": 4.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.77
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7, this.camera_CC06A881_C34F_53A1_41CD_5B1DB81D70D3); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB891890_D834_B8D7_418F_F7AA6C13E1F2",
   "pitch": -22.77,
   "yaw": -106.72,
   "hfov": 4.78,
   "distance": 100
  }
 ],
 "id": "overlay_D61D10E2_D853_A87A_41E5_1BDAA2591CBD",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -12.82,
   "hfov": 4.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.9
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB896890_D834_B8D7_41D6_CA0E62F93F52",
   "pitch": -11.9,
   "yaw": -12.82,
   "hfov": 4.41,
   "distance": 100
  }
 ],
 "id": "overlay_D6745D2C_D85D_B9CF_41D2_DA64D79B15DE",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -155.18,
   "hfov": 5.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.03
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817, this.camera_CC11B89C_C34F_53A7_41D4_C74DCBC39491); this.setMediaBehaviour(this.playList_CDB1B4C4_C34F_53A7_41CF_D9F111350961, 0, this.panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_04638C95_1CC3_AC3F_41AE_AE61FD270B1E",
   "pitch": -9.03,
   "yaw": -155.18,
   "hfov": 5.01,
   "distance": 100
  }
 ],
 "id": "overlay_106E3C29_1CC3_AC17_4192_CD36BA170A74",
 "data": {
  "label": "stairs"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 46.89,
   "hfov": 16.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.22
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_ACD3896D_BE57_907F_41E1_892BA495712B",
   "pitch": -26.22,
   "yaw": 46.89,
   "hfov": 16.16,
   "distance": 100
  }
 ],
 "id": "overlay_B17A4E79_BE50_9064_41E6_FA8C1DA66322",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 32.26,
   "hfov": 7.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.95
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817, this.camera_CEE485D1_C34F_5DA0_41BF_48D568F5B15B); this.setMediaBehaviour(this.playList_CDB1B4C4_C34F_53A7_41CF_D9F111350961, 0, this.panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_04643CA5_1CC3_AC1F_4198_E2F3C8A4DFF6",
   "pitch": -14.95,
   "yaw": 32.26,
   "hfov": 7.34,
   "distance": 100
  }
 ],
 "id": "overlay_0CF6DE1F_1CDE_6C2B_41A1_C84EA417EB22",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -155.37,
   "hfov": 7.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.81
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA, this.camera_CEEEF5B9_C34F_5DE1_41D9_D41F69DC407E); this.setMediaBehaviour(this.playList_CE04B519_C34F_52A0_41AD_5FEFAD6D1429, 0, this.panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0465DCA6_1CC3_AC1D_41B1_3F31AB3B180F",
   "pitch": -10.81,
   "yaw": -155.37,
   "hfov": 7.47,
   "distance": 100
  }
 ],
 "id": "overlay_0CB9215F_1CDE_742A_41B3_56293DB99C84",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0_HS_3_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 133.42,
   "hfov": 13.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.46
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5E9C7C5B_51A5_C28A_41D0_F4103802F1E5",
   "pitch": -17.46,
   "yaw": 133.42,
   "hfov": 13.73,
   "distance": 100
  }
 ],
 "id": "overlay_5F0F22D7_51AA_479A_41A0_FC2A4BE60045",
 "data": {
  "label": "stairs"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 129.68,
   "hfov": 8.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.59
  }
 ],
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_CDB1D4C4_C34F_53A7_41C8_A3A0D6015626, 0, this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0465ACA2_1CC3_AC15_41B4_BA414A1E6916",
   "pitch": -13.59,
   "yaw": 129.68,
   "hfov": 8.22,
   "distance": 100
  }
 ],
 "id": "overlay_1359FF38_1CC2_6C75_41A9_0DC475A00C00",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -129.99,
   "hfov": 7.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.28
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A, this.camera_CDE11741_C34F_5EA0_41E0_DC78A10F8F65); this.setMediaBehaviour(this.playList_CE1AC525_C34F_52E1_41E1_246699F24B1D, 0, this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_04649CA4_1CC3_AC1D_419C_3A627AA232BA",
   "pitch": -8.28,
   "yaw": -129.99,
   "hfov": 7.46,
   "distance": 100
  }
 ],
 "id": "overlay_0D8EB6D2_1CC2_BC35_41A8_36DA4C94B6C2",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -16.24,
   "hfov": 17.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.54
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38, this.camera_CDF08757_C34F_5EA1_41BD_28662F46885C); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5E59AAE2_51A6_47BA_41C6_712657CA59B5",
   "pitch": -13.54,
   "yaw": -16.24,
   "hfov": 17.96,
   "distance": 100
  }
 ],
 "id": "overlay_41BE7D4F_51BA_428A_41CE_89D8D1FD4F15",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0_HS_5_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -177.51,
   "hfov": 12.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.74
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889, this.camera_CD82176B_C34F_5D61_41E5_9E0603164E37); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_41FB8B08_51E5_C676_41C3_1BD2395B22C4",
   "pitch": -27.74,
   "yaw": -177.51,
   "hfov": 12.74,
   "distance": 100
  }
 ],
 "id": "overlay_41426E19_51FA_5E96_41B0_FB3994B67A11",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -154.23,
   "hfov": 11.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.01
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_ADCBD1A9_BEB1_90E7_41C5_2B7199748D5F, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -154.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0_HS_6_0.png",
      "width": 658,
      "class": "ImageResourceLevel",
      "height": 658
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.01,
   "hfov": 11.74
  }
 ],
 "id": "overlay_ADD2953A_BEB0_91E5_41E5_DFFF5884594B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 91.76,
   "hfov": 11.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.79
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5, this.camera_CCFD391A_C34F_52A3_41D7_760FB81F1E3D); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48A159AD_5EA1_A5C7_41D3_85C1439011E3",
   "pitch": -35.79,
   "yaw": 91.76,
   "hfov": 11.36,
   "distance": 50
  }
 ],
 "id": "overlay_4FF63D85_5EA3_DDC4_41B6_F45EDF8B5CD8",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -133.33,
   "hfov": 7.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.56
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522, this.camera_CC8D392F_C34F_52E0_41E2_7BA704C135A0); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48A0A9AD_5EA1_A5C7_41D4_E5B5E1C620E3",
   "pitch": -37.56,
   "yaw": -133.33,
   "hfov": 7.42,
   "distance": 100
  }
 ],
 "id": "overlay_4C040CFC_5EA2_E345_41D5_EA2C273DFEC0",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_AF9A9043_BE50_8FAB_41A5_5B90F374C03E",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minWidth": 0,
 "height": "100%",
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">This is <B>Ground Floor</B>. On the Right side there is <B>Multipurpos Hall</B> . On the left side there are <B>Lincoln Corner</B> and <B>Cheif Libraran Office</B>. On the front side there is stairs and Faculty Office</SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText7906"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 50.78,
   "hfov": 20.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.08
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8, this.camera_D359498C_C34F_55A7_41A7_A403714A7538); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BECC5EE7_ABA0_48FE_41DA_E72F0BA1AB4C",
   "pitch": -20.08,
   "yaw": 50.78,
   "hfov": 20.39,
   "distance": 100
  }
 ],
 "id": "overlay_BA737896_ABA0_575F_41D7_5F03D1A99771",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -148.05,
   "hfov": 14.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.75
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D, this.camera_CCBE496A_C34F_5563_41E6_99EFD69ECCE9); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B19711DC_BE50_905D_41E4_E5B2B4BF8BA3",
   "pitch": -5.75,
   "yaw": -148.05,
   "hfov": 14.85,
   "distance": 100
  }
 ],
 "id": "overlay_AEF8F52C_BE50_91FD_41CD_47D2318364EE",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 151.69,
   "hfov": 10.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.26
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D, this.camera_D349597B_C34F_5561_41E8_6807B4888ED5); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_B197C1DC_BE50_905D_41E0_24A2F38AE828",
   "pitch": -5.26,
   "yaw": 151.69,
   "hfov": 10.8,
   "distance": 100
  }
 ],
 "id": "overlay_B1AE176E_BE53_707A_41E3_AD1ACB8BBD1C",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -25.66,
   "hfov": 5.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.19
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D, this.camera_CED305A5_C34F_5DE1_41E4_209E8B8B4A51); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB88D890_D834_B8D7_41DF_1EE8243FF621",
   "pitch": -22.19,
   "yaw": -25.66,
   "hfov": 5.29,
   "distance": 100
  }
 ],
 "id": "overlay_D776B519_D84C_A9C9_41CA_9E6F99FA57BF",
 "data": {
  "label": "exit"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -134.99,
   "hfov": 4.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.71
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB881890_D834_B8D7_41DA_2ABC282EAAB1",
   "pitch": -14.71,
   "yaw": -134.99,
   "hfov": 4.24,
   "distance": 100
  }
 ],
 "id": "overlay_D758154D_D84C_A849_419E_669BF13D329B",
 "data": {
  "label": "multi-purpose"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 96.85,
   "hfov": 4.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.86
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C, this.camera_CEC53596_C34F_5DA3_41E1_0E32D0D79066); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB898890_D834_B8D7_41B6_8688EF359BAC",
   "pitch": -16.86,
   "yaw": 96.85,
   "hfov": 4.48,
   "distance": 100
  }
 ],
 "id": "overlay_D6B6E93C_D84C_59CF_41E1_AAD09B1F6943",
 "data": {
  "label": "lincoln corner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -168.4,
   "hfov": 4.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.56
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB89B890_D834_B8D7_41D1_A757496AED73",
   "pitch": -20.56,
   "yaw": -168.4,
   "hfov": 4.8,
   "distance": 100
  }
 ],
 "id": "overlay_D6C9E417_D854_AFD9_41BC_5F0313940920",
 "data": {
  "label": "middle"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0_HS_4_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -156.26,
   "hfov": 7.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.27
  }
 ],
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_CDB1D4C4_C34F_53A7_41C8_A3A0D6015626, 0, this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A); this.setMediaBehaviour(this.playList_CDB1B4C4_C34F_53A7_41CF_D9F111350961, 0, this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_046CEC90_1CC3_AC36_41B1_8DA849568C1E",
   "pitch": -7.27,
   "yaw": -156.26,
   "hfov": 7.05,
   "distance": 100
  }
 ],
 "id": "overlay_1223600E_1CCE_542D_41A0_88529815786F",
 "data": {
  "label": "stairs"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0_HS_5_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -97.99,
   "hfov": 9.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.58
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_AF98A043_BE50_8FAB_41B9_A33F4254F5DF, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -97.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0_HS_5_0.png",
      "width": 548,
      "class": "ImageResourceLevel",
      "height": 361
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.58,
   "hfov": 9.47
  }
 ],
 "id": "overlay_AE878DD5_BE50_B0AF_41C0_EB5CDA9DD7DC",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 30.59,
   "hfov": 7.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.43
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A, this.camera_CC9D6943_C34F_52A1_41CC_3ECCB371576C); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_04611C9A_1CC3_AC35_41BC_5134F98D9565",
   "pitch": -21.43,
   "yaw": 30.59,
   "hfov": 7.49,
   "distance": 100
  }
 ],
 "id": "overlay_0D6E71DB_1CCF_D42B_41B2_71FEBDA8B4CE",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -42.05,
   "hfov": 7.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.01
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0466BC9B_1CC3_AC2B_41A8_A87D98218969",
   "pitch": -13.01,
   "yaw": -42.05,
   "hfov": 7.84,
   "distance": 100
  }
 ],
 "id": "overlay_0D36DD0E_1CC1_EC2D_41B4_5F30099ED763",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -54.5,
   "hfov": 7.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.66
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_04665C9B_1CC3_AC2B_41B9_6E63D77F0792",
   "pitch": -7.66,
   "yaw": -54.5,
   "hfov": 7.98,
   "distance": 100
  }
 ],
 "id": "overlay_0EF244DF_1CC1_FC2B_4199_823A924DD830",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 179.96,
   "hfov": 8.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.07
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817, this.camera_CCAFB956_C34F_52A3_41E8_466EF08D2F71); this.setMediaBehaviour(this.playList_CDB1B4C4_C34F_53A7_41CF_D9F111350961, 0, this.panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5E3C9946_51AD_C2FA_41BF_07F95A8CDF05",
   "pitch": 0.07,
   "yaw": 179.96,
   "hfov": 8.62,
   "distance": 100
  }
 ],
 "id": "overlay_41226A14_51AA_469E_41D0_1E336FB07AB7",
 "data": {
  "label": "exit"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -12.58,
   "hfov": 7.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.31
  }
 ],
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_CE1AC525_C34F_52E1_41E1_246699F24B1D, 0, this.panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_04644CA1_1CC3_AC17_41B2_D1A31F0B6DDB",
   "pitch": -19.31,
   "yaw": -12.58,
   "hfov": 7.42,
   "distance": 100
  }
 ],
 "id": "overlay_131E397A_1CC2_74F5_41B8_7D933025FF25",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -11.92,
   "hfov": 6.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.53
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38, this.camera_CC33F8CA_C34F_53A3_41DD_BC046C33D1D2); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0467FC9C_1CC3_AC2D_41AA_ECAE0E0D88CE",
   "pitch": -22.53,
   "yaw": -11.92,
   "hfov": 6.13,
   "distance": 100
  }
 ],
 "id": "overlay_0E86B260_1CC2_5415_41AD_9DB2E690A412",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -31.3,
   "hfov": 6.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.17
  }
 ],
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_CDB1B4C4_C34F_53A7_41CF_D9F111350961, 0, this.panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_04679C9D_1CC3_AC2F_4182_EB9FDDA8C715",
   "pitch": -18.17,
   "yaw": -31.3,
   "hfov": 6.31,
   "distance": 100
  }
 ],
 "id": "overlay_0E217EC7_1CC2_AC1B_41A2_4AFEA4BE1FEE",
 "data": {
  "label": "exit"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 89.31,
   "hfov": 6.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.96
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE, this.camera_CCC388DE_C34F_53A3_41E5_5BB31D22AE66); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_04671C9F_1CC3_AC2B_4196_757ACAE0CCBC",
   "pitch": -14.96,
   "yaw": 89.31,
   "hfov": 6.41,
   "distance": 100
  }
 ],
 "id": "overlay_0FF3BACF_1CC2_B42B_41A0_A7FAE33133DD",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 18.01,
   "hfov": 6.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.81
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A, this.camera_CEBDA643_C34F_5EA0_41DE_BB4CE801FC3F); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_074F09BE_1CC2_F46D_41B9_4421AA2B440F",
   "pitch": -10.81,
   "yaw": 18.01,
   "hfov": 6.81,
   "distance": 100
  }
 ],
 "id": "overlay_0B9CA677_1CC6_5CFA_41B6_ED4217C7B292",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -155.43,
   "hfov": 6.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.74
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_074FE9BE_1CC2_F46D_41BB_FF4E1F16539A",
   "pitch": -19.74,
   "yaw": -155.43,
   "hfov": 6.53,
   "distance": 100
  }
 ],
 "id": "overlay_0B2E370B_1CC6_7C2B_41B3_B9D2D032E413",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 133.3,
   "hfov": 8.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.58
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303, this.camera_CD50E67E_C34F_5F60_41BA_42CDB6203876); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48BE79AD_5EA1_A5C7_41C7_11E5010C73DB",
   "pitch": -19.58,
   "yaw": 133.3,
   "hfov": 8.01,
   "distance": 100
  }
 ],
 "id": "overlay_4F0C79BB_5EAF_65CC_41BC_DA9A8BDD6E66",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -124.77,
   "hfov": 7.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.13
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88, this.camera_CD639696_C34F_5FA3_41D1_52D0CADE6226); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48A1D9AD_5EA1_A5C7_41CB_00948C8BF977",
   "pitch": -20.13,
   "yaw": -124.77,
   "hfov": 7.62,
   "distance": 100
  }
 ],
 "id": "overlay_4C736B31_5EA1_A6DC_41D7_3B6D484C18E6",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_ADCDA1A9_BEB1_90E7_41D9_BC5B79E46C85",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "paddingLeft": 10,
 "minWidth": 0,
 "height": "100%",
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">This is <B>First Floor. </B>It contains </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;\"> \u2022 </SPAN>Faculty Offices</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;\"> \u2022 </SPAN>Reception Room </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;\"> \u2022 </SPAN>Digital Commons</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;\"> \u2022 </SPAN>Reference Commons</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;\"> \u2022 </SPAN>Research Commons</SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText14312"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 31.48,
   "hfov": 6.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.85
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620, this.camera_CDC43716_C34F_5EA3_41DC_03D510D037E7); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_00A55BEB_1D47_EBEB_41B7_7BA8EDBFD0BA",
   "pitch": -18.85,
   "yaw": 31.48,
   "hfov": 6.98,
   "distance": 100
  }
 ],
 "id": "overlay_063BF533_1D46_5C7B_41B3_402BF04614D2",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -176.37,
   "hfov": 7.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.71
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E, this.camera_CDD1F72D_C34F_5EE0_41E0_B30565B0B2F4); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_00A52BEC_1D47_EBED_41AE_511F9E646EDC",
   "pitch": -16.71,
   "yaw": -176.37,
   "hfov": 7.07,
   "distance": 100
  }
 ],
 "id": "overlay_068EC392_1D4E_B435_41B0_68B80B521139",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -6.67,
   "hfov": 10.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.61
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257, this.camera_CC6BB81C_C34F_52A0_41E2_2AC432E0EE24); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CBBEFE33_DBF4_7BD9_41E2_D9F1C283E6DA",
   "pitch": -28.61,
   "yaw": -6.67,
   "hfov": 10.87,
   "distance": 100
  }
 ],
 "id": "overlay_C9796E73_D84F_B859_41D4_404D928E10A1",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -5.69,
   "hfov": 5.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.48
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CBBEDE33_DBF4_7BD9_41C1_0EE593463AC1",
   "pitch": -14.48,
   "yaw": -5.69,
   "hfov": 5.1,
   "distance": 100
  }
 ],
 "id": "overlay_CB7B1929_DBCD_B9C9_4190_4B17B6CD415F",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -151.24,
   "hfov": 7.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.61
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C, this.camera_CCE2B902_C34F_52A3_41E3_657F4F3B8856); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_00A5EBEB_1D47_EBEB_41BA_D2A93D492774",
   "pitch": -11.61,
   "yaw": -151.24,
   "hfov": 7.67,
   "distance": 100
  }
 ],
 "id": "overlay_07FC5484_1D46_7C1D_41B9_689C98BF1C28",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -3.88,
   "hfov": 7.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.2
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA, this.camera_CCD218F2_C34F_5363_41C4_EE78AC299B86); this.setMediaBehaviour(this.playList_CE04B519_C34F_52A0_41AD_5FEFAD6D1429, 0, this.panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CD91902_5937_3D60_41B5_EDFD006C797C",
   "pitch": -13.2,
   "yaw": -3.88,
   "hfov": 7.63,
   "distance": 100
  }
 ],
 "id": "overlay_4BC64D88_5931_5561_41D2_F41FECC7D21A",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 136.48,
   "hfov": 8.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.87
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069, this.camera_D31A89DC_C34F_55A7_41E7_575A41FBE5D4); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35FA3C78_2065_351D_41A7_634F59F636AE",
   "pitch": -12.87,
   "yaw": 136.48,
   "hfov": 8.23,
   "distance": 100
  }
 ],
 "id": "overlay_3116E04A_2067_0D7D_41B0_C529932C4FE5",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 59.5,
   "hfov": 5.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.67
  }
 ],
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_CDB1B4C4_C34F_53A7_41CF_D9F111350961, 0, this.panorama_31002405_206D_14F7_41BB_D64EF95E9EA6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35FAEC78_2065_351D_41B6_B122577A14EF",
   "pitch": -32.67,
   "yaw": 59.5,
   "hfov": 5.17,
   "distance": 50
  }
 ],
 "id": "overlay_33332EDA_207B_151C_41BF_FD288D6D8ABC",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -126.3,
   "hfov": 9.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.62
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7, this.camera_CEDC6A3B_C34F_56E1_41D4_4555A359C2FA); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F9E6E64_5B8E_367C_41A0_6945557D15B9",
   "pitch": -20.62,
   "yaw": -126.3,
   "hfov": 9.57,
   "distance": 100
  }
 ],
 "id": "overlay_49A50D7E_5B82_7A4C_41C8_07E8F76F624B",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -174.64,
   "hfov": 7.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.33
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F8AABEB_5953_3CA7_41A1_8D19899E76B3",
   "pitch": -20.33,
   "yaw": -174.64,
   "hfov": 7.02,
   "distance": 100
  }
 ],
 "id": "overlay_C918AB6A_D84C_B84A_41B4_EF891B5FDDB8",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 4.64,
   "hfov": 11.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.87
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889, this.camera_CE988611_C34F_5EA1_41C3_18884D7F2C98); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F8D1BEB_5953_3CA7_41D1_492A1F28C2FF",
   "pitch": -5.87,
   "yaw": 4.64,
   "hfov": 11.93,
   "distance": 100
  }
 ],
 "id": "overlay_48FB99F0_596E_FCA1_41D0_C42F1C4B2443",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 125.74,
   "hfov": 7.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.58
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5, this.camera_CDBE87B7_C34F_5DE1_41E8_56C43A365A24); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_01C673B4_1CC6_747D_4188_0AD697DEDB0B",
   "pitch": -12.58,
   "yaw": 125.74,
   "hfov": 7.33,
   "distance": 100
  }
 ],
 "id": "overlay_041199A1_1CC2_B417_41B7_31E298B1F1D7",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -135.9,
   "hfov": 7.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.14
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA, this.camera_CC4E37D8_C34F_5DAF_41BD_B33394D5232C); this.setMediaBehaviour(this.playList_CE04B519_C34F_52A0_41AD_5FEFAD6D1429, 0, this.panorama_06F70832_1CC6_5475_41B9_88088342E615)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F5CF06B_5951_EBA7_41C0_F140F00842BF",
   "pitch": -3.14,
   "yaw": -135.9,
   "hfov": 7.5,
   "distance": 100
  }
 ],
 "id": "overlay_4BD91A17_5951_5F60_41D4_761933E89161",
 "data": {
  "label": "exit"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -71.67,
   "hfov": 8.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.5
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5, this.camera_CD7D46A7_C34F_5FE1_4179_CFA7F7A7A1E6); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48BF69AD_5EA1_A5C7_41D7_2B681D265D17",
   "pitch": -25.5,
   "yaw": -71.67,
   "hfov": 8.66,
   "distance": 100
  }
 ],
 "id": "overlay_4E63BFAF_5EA2_BDC3_41D1_EE8A532E4C06",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 143.64,
   "hfov": 10.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.79
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522, this.camera_CD0C06BB_C34F_5FE1_41B4_33587464B485); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48BEE9AD_5EA1_A5C7_41B3_A308A7BB2E46",
   "pitch": -25.79,
   "yaw": 143.64,
   "hfov": 10.53,
   "distance": 50
  }
 ],
 "id": "overlay_4EA4007A_5EAE_E34C_419B_BD51418A5130",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -179.5,
   "hfov": 7.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.68
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C, this.camera_CD45A66E_C34F_5F63_41E4_6040AF78DB8C); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4A3218F0_5957_3CA1_41BE_874C62E6DA8C",
   "pitch": -15.68,
   "yaw": -179.5,
   "hfov": 7.82,
   "distance": 100
  }
 ],
 "id": "overlay_4B548063_5951_6BA7_41D4_10492913848C",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0_HS_4_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 73.32,
   "hfov": 7.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.84
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D827ACFC_D371_2565_41B6_427B2920453F, this.camera_CD3BA6F2_C34F_5F63_41B9_9CF9A3E860C8); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0DCBCD94_1FFB_020D_4198_8C9344B3903F",
   "pitch": -25.84,
   "yaw": 73.32,
   "hfov": 7.05,
   "distance": 100
  }
 ],
 "id": "overlay_0FE2F39D_1FE5_063F_41AA_299E87EF5C02",
 "data": {
  "label": "exit"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0_HS_5_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 170.46,
   "hfov": 6.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.23
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D827ACFC_D371_2565_41B6_427B2920453F, this.camera_CD351707_C34F_5EA1_41D4_ECCC95DF459B); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0DCB8D94_1FFB_020D_41B6_0919D71F551C",
   "pitch": -29.23,
   "yaw": 170.46,
   "hfov": 6.84,
   "distance": 100
  }
 ],
 "id": "overlay_0FB61194_1FFB_020D_41BD_7490206FD624",
 "data": {
  "label": "exit 2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -7.23,
   "hfov": 9.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.01
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A, this.camera_CD1F66CD_C34F_5FA1_41C7_AB12ECD122C2); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AD07DCAB_BE50_90FB_41DC_41EFB942A8AE",
   "pitch": -1.01,
   "yaw": -7.23,
   "hfov": 9.21,
   "distance": 100
  }
 ],
 "id": "overlay_AE1A7E3A_BE50_93E5_41E2_987D68BE9BAF",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -94.37,
   "hfov": 9.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.03
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A, this.camera_CD28B6DD_C34F_5FA1_41D9_5D66A87E025B); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AD064CAC_BE50_90FD_41E1_AC550FE1ECA8",
   "pitch": -3.03,
   "yaw": -94.37,
   "hfov": 9.2,
   "distance": 100
  }
 ],
 "id": "overlay_AE4B366A_BE51_9065_41CD_6D8E6E8808F4",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -151.76,
   "hfov": 7.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.8
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06F70832_1CC6_5475_41B9_88088342E615, this.camera_CE8FD5FA_C34F_5D60_41B9_2D162E9FBEE8); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_01C173B5_1CC6_747F_41B9_D8CBD09EAE4D",
   "pitch": -19.8,
   "yaw": -151.76,
   "hfov": 7.48,
   "distance": 100
  }
 ],
 "id": "overlay_05730B68_1CC2_D4EC_418F_68174C22BB62",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -170.97,
   "hfov": 6.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.44
  }
 ],
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_CE04B519_C34F_52A0_41AD_5FEFAD6D1429, 0, this.panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_01C1C3B5_1CC6_747F_41B5_593C5F5188A4",
   "pitch": -13.44,
   "yaw": -170.97,
   "hfov": 6.6,
   "distance": 100
  }
 ],
 "id": "overlay_054CF7C0_1CC3_DC15_41BA_75226379992C",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 84,
   "hfov": 6.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.71
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21, this.camera_CD9DB784_C34F_5DA7_41E3_0FC30B9CB2AC); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4125800C_51EA_428E_41D3_5B9256F7B9A2",
   "pitch": -2.71,
   "yaw": 84,
   "hfov": 6.6,
   "distance": 100
  }
 ],
 "id": "overlay_4188818E_51EA_458D_41D2_523F6C571BB7",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0_HS_3_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 161.54,
   "hfov": 6.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.12
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C, this.camera_CDAF4793_C34F_5DA1_41E2_DEBB90DBF737); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_41B77364_51E5_C6BE_41C3_9CD14DC18B0A",
   "pitch": -7.12,
   "yaw": 161.54,
   "hfov": 6.33,
   "distance": 50
  }
 ],
 "id": "overlay_41981B8E_51EA_C58A_41BD_3DA75BA7F552",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 152.21,
   "hfov": 8.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.39
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9, this.camera_CE36156C_C34F_5D67_41E5_520F3F939F39); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_41B41363_51E5_C6BA_41C6_93FEAB0B2FDB",
   "pitch": -14.39,
   "yaw": 152.21,
   "hfov": 8.67,
   "distance": 100
  }
 ],
 "id": "overlay_C99CD076_D85D_A85B_41CD_B698CA2350D4",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -81.18,
   "hfov": 10.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.85
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A, this.camera_CECE6580_C34F_5D9F_41C8_A2A686AA397C); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_41B7C364_51E5_C6BE_41C3_C2B0302F1820",
   "pitch": -5.85,
   "yaw": -81.18,
   "hfov": 10.76,
   "distance": 100
  }
 ],
 "id": "overlay_41A4D778_51EE_CE96_41BE_50A3CD10D0D6",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -7.02,
   "hfov": 7.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.95
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0464BCA0_1CC3_AC15_41A7_DA944F2EDE9A",
   "pitch": -14.95,
   "yaw": -7.02,
   "hfov": 7.44,
   "distance": 100
  }
 ],
 "id": "overlay_0F859363_1CC6_541B_41B9_902F7001E3A4",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 87.56,
   "hfov": 7.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.99
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A, this.camera_D36BC9A2_C34F_55E3_41C4_BC5860C7535C); this.setMediaBehaviour(this.playList_CE1AC525_C34F_52E1_41E1_246699F24B1D, 0, this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_04653CA7_1CC3_AC1B_416F_AC2F62712B19",
   "pitch": -17.99,
   "yaw": 87.56,
   "hfov": 7.01,
   "distance": 100
  }
 ],
 "id": "overlay_0C4BF08F_1CC2_F42B_41AE_947B537959EC",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 104.83,
   "hfov": 7.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.61
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_047ADCA8_1CC3_AC15_41A5_023D7AF87591",
   "pitch": -14.61,
   "yaw": 104.83,
   "hfov": 7.13,
   "distance": 100
  }
 ],
 "id": "overlay_0C1C9534_1CC3_BC7E_41B0_823D8C40AD5B",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 40.96,
   "hfov": 8.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.49
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E, this.camera_D30A59C8_C34F_55AF_41C5_90123FC1F3D2); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5E9B2C5C_51A5_C28E_41C9_8B5B24DCB3D4",
   "pitch": -6.49,
   "yaw": 40.96,
   "hfov": 8.39,
   "distance": 100
  }
 ],
 "id": "overlay_5F030C54_51A6_C29E_41BB_548B61AB8BAF",
 "data": {
  "label": "room"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -72.82,
   "hfov": 10.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.31
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06F70832_1CC6_5475_41B9_88088342E615, this.camera_D37BF9B6_C34F_55E3_41E6_86FB1466FC6E); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F54607B_5951_EBA7_41C5_847E95E016FD",
   "pitch": -8.31,
   "yaw": -72.82,
   "hfov": 10.4,
   "distance": 100
  }
 ],
 "id": "overlay_4BC50FA8_5951_54A1_41D3_745A0BF479F9",
 "data": {
  "label": "lab"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -150.34,
   "hfov": 4.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.13
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9, this.camera_CD48C658_C34F_5EAF_41E6_D7692A100D5D); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5E877C52_51A5_C29A_41C6_FA114E0AD050",
   "pitch": -5.13,
   "yaw": -150.34,
   "hfov": 4.68,
   "distance": 50
  }
 ],
 "id": "overlay_5FE32850_51AE_4296_4183_C0B2B17E494B",
 "data": {
  "label": "Arrow 01 Right"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_00A69BEC_1D47_EBED_4196_6A260FFD97AC",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_54AD5C43_5B85_D9B4_4145_AFD88F304A67",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_4ED34EC2_5BBE_36B4_419D_9380A013EBB2",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_48BFB9AD_5EA1_A5C7_41BA_A5C4FB4FDB84",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_48BF19AD_5EA1_A5C7_4187_9BBF9ADEB046",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_4D812EEA_5EA7_7F4D_41C5_A5DAD2575248",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BBB0C8EC_ABA0_C8F2_41E0_6804B40DA3F8_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_BECDFEE4_ABA0_48F3_41DA_44644858BAB6",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_4ED2DEC2_5BBE_36B4_41D3_0AB8A26CA022",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_4ED26EC2_5BBE_36B4_41D6_29691C982E42",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_48C62002_5C7E_C9B4_41C7_5B426888C14F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_48C64002_5C7E_C9B4_41C0_F3930B6A5C72",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_48C9E006_5C7E_C9BC_4137_0C3C00F76534",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_CB891890_D834_B8D7_418F_F7AA6C13E1F2",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_CB896890_D834_B8D7_41D6_CA0E62F93F52",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_04638C95_1CC3_AC3F_41AE_AE61FD270B1E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_ACD3896D_BE57_907F_41E1_892BA495712B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_04643CA5_1CC3_AC1F_4198_E2F3C8A4DFF6",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_0465DCA6_1CC3_AC1D_41B1_3F31AB3B180F",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 510
  }
 ],
 "id": "AnimatedImageResource_5E9C7C5B_51A5_C28A_41D0_F4103802F1E5",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_0465ACA2_1CC3_AC15_41B4_BA414A1E6916",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_04649CA4_1CC3_AC1D_419C_3A627AA232BA",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5E59AAE2_51A6_47BA_41C6_712657CA59B5",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_41FB8B08_51E5_C676_41C3_1BD2395B22C4",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_48A159AD_5EA1_A5C7_41D3_85C1439011E3",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_48A0A9AD_5EA1_A5C7_41D4_E5B5E1C620E3",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_BECC5EE7_ABA0_48FE_41DA_E72F0BA1AB4C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_B19711DC_BE50_905D_41E4_E5B2B4BF8BA3",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_B197C1DC_BE50_905D_41E0_24A2F38AE828",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_CB88D890_D834_B8D7_41DF_1EE8243FF621",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_CB881890_D834_B8D7_41DA_2ABC282EAAB1",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_CB898890_D834_B8D7_41B6_8688EF359BAC",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_CB89B890_D834_B8D7_41D1_A757496AED73",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_046CEC90_1CC3_AC36_41B1_8DA849568C1E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_04611C9A_1CC3_AC35_41BC_5134F98D9565",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_0466BC9B_1CC3_AC2B_41A8_A87D98218969",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_04665C9B_1CC3_AC2B_41B9_6E63D77F0792",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5E3C9946_51AD_C2FA_41BF_07F95A8CDF05",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_04644CA1_1CC3_AC17_41B2_D1A31F0B6DDB",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_0467FC9C_1CC3_AC2D_41AA_ECAE0E0D88CE",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_04679C9D_1CC3_AC2F_4182_EB9FDDA8C715",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_04671C9F_1CC3_AC2B_4196_757ACAE0CCBC",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_074F09BE_1CC2_F46D_41B9_4421AA2B440F",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_074FE9BE_1CC2_F46D_41BB_FF4E1F16539A",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_48BE79AD_5EA1_A5C7_41C7_11E5010C73DB",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_48A1D9AD_5EA1_A5C7_41CB_00948C8BF977",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_00A55BEB_1D47_EBEB_41B7_7BA8EDBFD0BA",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_00A52BEC_1D47_EBED_41AE_511F9E646EDC",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_CBBEFE33_DBF4_7BD9_41E2_D9F1C283E6DA",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_CBBEDE33_DBF4_7BD9_41C1_0EE593463AC1",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_00A5EBEB_1D47_EBEB_41BA_D2A93D492774",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_4CD91902_5937_3D60_41B5_EDFD006C797C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_35FA3C78_2065_351D_41A7_634F59F636AE",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_35FAEC78_2065_351D_41B6_B122577A14EF",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_4F9E6E64_5B8E_367C_41A0_6945557D15B9",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_4F8AABEB_5953_3CA7_41A1_8D19899E76B3",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_4F8D1BEB_5953_3CA7_41D1_492A1F28C2FF",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_01C673B4_1CC6_747D_4188_0AD697DEDB0B",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_4F5CF06B_5951_EBA7_41C0_F140F00842BF",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_48BF69AD_5EA1_A5C7_41D7_2B681D265D17",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_48BEE9AD_5EA1_A5C7_41B3_A308A7BB2E46",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_4A3218F0_5957_3CA1_41BE_874C62E6DA8C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_0DCBCD94_1FFB_020D_4198_8C9344B3903F",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_0DCB8D94_1FFB_020D_41B6_0919D71F551C",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_AD07DCAB_BE50_90FB_41DC_41EFB942A8AE",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_AD064CAC_BE50_90FD_41E1_AC550FE1ECA8",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_01C173B5_1CC6_747F_41B9_D8CBD09EAE4D",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_01C1C3B5_1CC6_747F_41B5_593C5F5188A4",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_4125800C_51EA_428E_41D3_5B9256F7B9A2",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0_HS_3_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_41B77364_51E5_C6BE_41C3_9CD14DC18B0A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_41B41363_51E5_C6BA_41C6_93FEAB0B2FDB",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_41B7C364_51E5_C6BE_41C3_C2B0302F1820",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_0464BCA0_1CC3_AC15_41A7_DA944F2EDE9A",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_04653CA7_1CC3_AC1B_416F_AC2F62712B19",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_047ADCA8_1CC3_AC15_41A5_023D7AF87591",
 "rowCount": 5,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5E9B2C5C_51A5_C28E_41C9_8B5B24DCB3D4",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_4F54607B_5951_EBA7_41C5_847E95E016FD",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0_HS_1_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ],
 "id": "AnimatedImageResource_5E877C52_51A5_C29A_41C6_FA114E0AD050",
 "rowCount": 6,
 "class": "AnimatedImageResource"
}],
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getKey": function(key){  return window[key]; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "existsKey": function(key){  return key in window; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player775"
 },
 "mouseWheelEnabled": true,
 "gap": 10,
 "downloadEnabled": false,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
