(function(){
    var script = {
 "start": "this.init()",
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer"
 ],
 "scrollBarWidth": 10,
 "minWidth": 20,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "desktopMipmappingEnabled": false,
 "propagateClick": false,
 "class": "Player",
 "backgroundPreloadEnabled": true,
 "paddingRight": 0,
 "definitions": [{
 "thumbnailUrl": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_t.jpg",
 "partial": false,
 "label": "belconi",
 "id": "panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
   "backwardYaw": -39.6,
   "yaw": -129.47,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 84.12,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_A5F03DCD_AB8C_42D4_41E3_EF335D747B4B"
 ],
 "class": "Panorama",
 "pitch": -2.95,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -100.34,
  "class": "PanoramaCameraPosition",
  "pitch": -1.21
 },
 "id": "panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 5.31,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 5.31,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 5.31,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -172.42,
  "class": "PanoramaCameraPosition",
  "pitch": 4.85
 },
 "id": "panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 4.83,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   },
   {
    "easing": "linear",
    "targetYaw": 81.68,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   },
   {
    "easing": "cubic_out",
    "targetYaw": 86.51,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 176.32,
  "class": "PanoramaCameraPosition",
  "pitch": -5.71
 },
 "id": "panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_t.jpg",
 "label": "Entrance2",
 "id": "panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A",
   "backwardYaw": -170.37,
   "yaw": 9.66,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 81.06,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2D623BF2_27CE_EC97_41B8_69B15940F49C",
  "this.overlay_2D622BF2_27CE_EC97_41B7_707F7B7133BB"
 ],
 "class": "Panorama",
 "pitch": -0.13,
 "hfov": 360,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_t.jpg",
 "label": "smartlab",
 "id": "panorama_60C35C53_7035_61D6_41D1_96B6807993FF",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA",
   "backwardYaw": 93.93,
   "yaw": -172.48,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D",
   "backwardYaw": -125.17,
   "yaw": 60.76,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 63.46,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_61118D3D_7037_E352_41DB_D9CAFC4E92D4",
  "this.overlay_611F8621_7035_6172_41D7_6BFE4C4F7884"
 ],
 "class": "Panorama",
 "pitch": -5.86,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -38.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6B10A066_78BA_768C_41C8_9BFA06346211",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -86.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6DD7C201_78BA_7A84_41D5_E4C5F4B9B0AA",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_t.jpg",
 "label": "room1",
 "id": "panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "rowCount": 15,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "rowCount": 15,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "rowCount": 15,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "rowCount": 15,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "rowCount": 15,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
   "backwardYaw": -15.87,
   "yaw": 58.98,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 62.02,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_7D6F2A04_6DFF_41E5_41C2_8816C37AFAA2"
 ],
 "class": "Panorama",
 "pitch": -9.44,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -170.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6EA1334B_78BA_7A84_41D0_855F02B09951",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_t.jpg",
 "label": "room3",
 "id": "panorama_882F48DF_8338_ED5E_41DF_4F65530589AE",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/0/{row}_{column}.jpg",
      "colCount": 17,
      "height": 8704,
      "width": 8704,
      "rowCount": 17,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/1/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "rowCount": 9,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/2/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/3/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/4/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/5/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/0/{row}_{column}.jpg",
      "colCount": 17,
      "height": 8704,
      "width": 8704,
      "rowCount": 17,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/1/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "rowCount": 9,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/2/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/3/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/4/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/5/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/0/{row}_{column}.jpg",
      "colCount": 17,
      "height": 8704,
      "width": 8704,
      "rowCount": 17,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/1/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "rowCount": 9,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/2/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/3/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/4/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/5/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/0/{row}_{column}.jpg",
      "colCount": 17,
      "height": 8704,
      "width": 8704,
      "rowCount": 17,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/1/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "rowCount": 9,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/2/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/3/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/4/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/5/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/0/{row}_{column}.jpg",
      "colCount": 17,
      "height": 8704,
      "width": 8704,
      "rowCount": 17,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/1/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "rowCount": 9,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/2/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/3/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/4/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/5/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
   "backwardYaw": 83.37,
   "yaw": 75.91,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 64.97,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8D9C4032_8348_DCE6_41C9_15041FDC3BEA"
 ],
 "class": "Panorama",
 "pitch": -14.82,
 "hfov": 360,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_t.jpg",
 "label": "rightcoridorr",
 "id": "panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6",
   "backwardYaw": -82.14,
   "yaw": 50.86,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6",
   "backwardYaw": -82.14,
   "yaw": -87.18,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965",
   "backwardYaw": -128.09,
   "yaw": 137.87,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965",
   "backwardYaw": -128.09,
   "yaw": -136.74,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A",
   "backwardYaw": 45.26,
   "yaw": 115.61,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 69.06,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6A97DFD8_65BF_AB2A_41C3_3E50220C5DA6",
  "this.overlay_6A36C49D_65BD_DD2A_41C4_B37802ADF778",
  "this.overlay_6A77C71E_65B3_7B26_41D2_00F45DD39300",
  "this.overlay_778A81BE_65D5_7766_41C5_A6B5B445518E",
  "this.overlay_77AC7450_65D6_DD39_4194_F5631E76AD62"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_t.jpg",
 "partial": false,
 "label": "room2",
 "id": "panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 84.7,
 "pitch": -2.81
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -150.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6D4EE294_78BA_7B8C_41D2_D5DC325C0059",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_t.jpg",
 "label": "Entrance1",
 "id": "panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784",
   "backwardYaw": 9.66,
   "yaw": -170.37,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 81.61,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2E0F5BBC_27CE_AC93_4188_ECB314955772"
 ],
 "class": "Panorama",
 "pitch": 4.85,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 116.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6CA15103_78BA_7684_41D4_7D80519D07F0",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 50.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6D93D23C_78BA_7AFC_41D3_DD24A76D9AD0",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 170.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6CFAF088_78BA_7784_41B3_EE31051B7616",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -174.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6D2822BF_78BA_7BFB_41C5_AA18DBD929CE",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -42.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6ED7431B_78BA_7A84_41D1_F0438F948586",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 61.43,
  "class": "PanoramaCameraPosition",
  "pitch": -5.73
 },
 "id": "panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_t.jpg",
 "label": "smartlab2",
 "id": "panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF",
   "backwardYaw": -172.48,
   "yaw": 93.93,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 64.87,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_61BB297B_7032_E3D6_41D3_E7B64B6A14DE"
 ],
 "class": "Panorama",
 "pitch": -6.76,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -119.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6D0B52DB_78BA_7B84_41AD_FC39BA558C7C",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 154.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6D5CF290_78BA_7B84_41AD_BAF82B6CAC6A",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_t.jpg",
 "label": "162",
 "id": "panorama_2C1A3955_2095_CA86_41BC_F803A92D6453",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
   "backwardYaw": -29.81,
   "yaw": -20.47,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 74.52,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2E47963C_209B_C686_41BF_A176F5C8EEDB"
 ],
 "class": "Panorama",
 "pitch": -7.96,
 "hfov": 360,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_t.jpg",
 "label": "G-right",
 "id": "panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
   "backwardYaw": 145,
   "yaw": 94.32,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_882F48DF_8338_ED5E_41DF_4F65530589AE",
   "backwardYaw": 75.91,
   "yaw": 83.37,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2C1A3955_2095_CA86_41BC_F803A92D6453",
   "backwardYaw": -20.47,
   "yaw": -29.81,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_66F48F21_7053_FF72_41CC_338C0456A8D8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB",
   "backwardYaw": 141.62,
   "yaw": 163.01,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 63.82,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2D8B8F0D_27CE_A58C_41C1_EFF6C48936DD",
  "this.overlay_7376A1CF_7DAA_6C05_41CC_41AE122D490D",
  "this.overlay_2F9AE2D0_2097_5F9E_417F_7C0822DCC9FC",
  "this.overlay_2F7F3A1E_20B6_CE85_41BB_8ECBCD786C87",
  "this.overlay_305E4CEA_2096_CB82_41B7_7E68997D1CF0"
 ],
 "class": "Panorama",
 "pitch": -8.38,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 97.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6C0BA1C9_78BA_7984_41D7_DACCC178BD00",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -9.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6D18A2CF_78BA_7B9C_41DD_ECBC513F8B38",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_t.jpg",
 "partial": false,
 "label": "2ndfloorcoridoor",
 "id": "panorama_64882088_72C3_C2ED_41D0_0CC0426D5922",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
   "backwardYaw": -115.33,
   "yaw": 154.2,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 94.2,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_67D9CD83_72C3_C2E3_41D2_98E01CCB813D"
 ],
 "class": "Panorama",
 "pitch": -1.49,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 66.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6CEC10B3_78BA_7784_41C8_4D50EDF1EEF5",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -171.6,
  "class": "PanoramaCameraPosition",
  "pitch": -19.22
 },
 "id": "panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -98.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6C29C1B3_78BA_7984_41C3_FEB36DC17369",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_t.jpg",
 "label": "firstfloorcoridoooe",
 "id": "panorama_63584076_72C4_C225_41D9_7003B7355FB0",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2",
   "backwardYaw": 78.87,
   "yaw": 159.11,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
   "backwardYaw": 81.71,
   "yaw": -106.82,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 67.85,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_612CC06F_72CD_C223_41C2_56DE8B6299F2",
  "this.overlay_62C7CA2E_72CC_C625_41D6_44B5A63D6A34",
  "this.overlay_65923DA3_7245_C223_41D1_FE1BFE70C46D"
 ],
 "class": "Panorama",
 "pitch": -4.6,
 "hfov": 360,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_t.jpg",
 "label": "f1",
 "id": "panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_64882088_72C3_C2ED_41D0_0CC0426D5922",
   "backwardYaw": 154.2,
   "yaw": -115.33,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649",
   "backwardYaw": 142.53,
   "yaw": -90.51,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47",
   "backwardYaw": -129.47,
   "yaw": -39.6,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E",
   "backwardYaw": 64.27,
   "yaw": 104.17,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0",
   "backwardYaw": -106.82,
   "yaw": 81.71,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 65.29,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_A67546E7_AB8C_4ED4_41CA_09A559A3AF75",
  "this.overlay_581356E7_5543_BC2D_41D3_1067E1CAA752",
  "this.overlay_6155A733_72C3_CE23_41CA_96783A0F5A35",
  "this.overlay_6768CCFD_72DC_C227_41D0_30ABBF7555DC",
  "this.overlay_6955A86A_72C5_C22D_41DC_240C10260780"
 ],
 "class": "Panorama",
 "pitch": -7.68,
 "hfov": 360,
 "partial": false
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A",
   "camera": "this.panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
   "camera": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784",
   "camera": "this.panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E",
   "camera": "this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
   "camera": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
   "camera": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
   "camera": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47",
   "camera": "this.panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D",
   "camera": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C",
   "camera": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6",
   "camera": "this.panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0",
   "camera": "this.panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF",
   "camera": "this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA",
   "camera": "this.panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_66F48F21_7053_FF72_41CC_338C0456A8D8",
   "camera": "this.panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_882F48DF_8338_ED5E_41DF_4F65530589AE",
   "camera": "this.panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB",
   "camera": "this.panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6",
   "camera": "this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965",
   "camera": "this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_2C1A3955_2095_CA86_41BC_F803A92D6453",
   "camera": "this.panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A",
   "camera": "this.panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "camera": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "media": "this.panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0",
   "camera": "this.panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "media": "this.panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613",
   "camera": "this.panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "media": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0",
   "camera": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2",
   "camera": "this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.panorama_62830609_72C7_41EF_41CB_5673A5B66BA1",
   "camera": "this.panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "media": "this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18",
   "camera": "this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "media": "this.panorama_6579408D_7247_42E7_41BC_2A988AD9953C",
   "camera": "this.panorama_6579408D_7247_42E7_41BC_2A988AD9953C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "media": "this.panorama_64882088_72C3_C2ED_41D0_0CC0426D5922",
   "camera": "this.panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "media": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649",
   "camera": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "media": "this.panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3",
   "camera": "this.panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "media": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "camera": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "media": "this.panorama_6833DF27_78C9_AA8B_41D7_218E52138C53",
   "camera": "this.panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 0)",
   "media": "this.panorama_68963652_78C9_FA84_41D3_30E9234A7AC4",
   "camera": "this.panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 150.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6C7D6150_78BA_7685_41D5_DB501BF9740A",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -25.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6DB1B22A_78BA_7A84_41D9_E1B90B5E2384",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6579408D_7247_42E7_41BC_2A988AD9953C_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_t.jpg",
 "partial": false,
 "label": "lab2",
 "id": "panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C",
   "backwardYaw": 39.26,
   "yaw": 5.46,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 81.68,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6057515A_6FF2_E3D6_41CB_9577DD48D455",
  "this.overlay_7FE3BEF8_6FF3_9ED2_41CA_F4E9C9BAB020"
 ],
 "class": "Panorama",
 "pitch": -2.42,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 89.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6E83036B_78BA_7A84_41C8_19EA90463CEE",
 "class": "PanoramaCamera"
},
{
 "mouseControlMode": "drag_acceleration",
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -85.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6C6CB164_78BA_768C_41BE_D712DF218AB5",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 4.83,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   },
   {
    "easing": "linear",
    "targetYaw": 81.68,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   },
   {
    "easing": "cubic_out",
    "targetYaw": 86.51,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 52.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6FF57445_78BA_7E8C_41D3_2A1E964BD3F4",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -3.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6C90511C_78BA_76BC_41B3_EC6C247F122C",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -140.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6CCAE0C7_78BA_778B_41D3_710CD80D2267",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_t.jpg",
 "overlays": [
  "this.overlay_70307665_7DA6_1404_41BD_E3D3BBA20DC6"
 ],
 "partial": false,
 "label": "leftroom",
 "id": "panorama_66F48F21_7053_FF72_41CC_338C0456A8D8",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 63.91,
 "pitch": -5.76
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 100.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6B0EC07B_78BA_7684_41D4_DCE3EB8F0BDB",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 51.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6C0511D6_78BA_798D_41C0_C0D848CD28E9",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 4.83,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   },
   {
    "easing": "linear",
    "targetYaw": 81.68,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   },
   {
    "easing": "cubic_out",
    "targetYaw": 86.51,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 52.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6FE57459_78BA_7E87_41DA_3ADD87FD5E4F",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 51.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6DF5A1E9_78BA_7984_41C5_75623A6716F2",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 64.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6CC550DC_78BA_77BC_41C1_A9DDFD30088A",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -0.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6E193408_78BA_7E84_41DD_A5220BF71278",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -42.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6EC6C326_78BA_7A8C_41B9_C6577F7BF461",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 140.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6CB780EA_78BA_7785_41D6_4A7252231FC5",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_t.jpg",
 "partial": true,
 "label": "rightcooridoor",
 "id": "panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6833DF27_78C9_AA8B_41D7_218E52138C53",
   "backwardYaw": -109.56,
   "yaw": -127.2,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649",
   "backwardYaw": -113.24,
   "yaw": 3.15,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_68963652_78C9_FA84_41D3_30E9234A7AC4",
   "backwardYaw": 68.4,
   "yaw": -94.24,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 62.1,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6854E312_78CE_5A84_41DC_30A4C479169B",
  "this.overlay_6803A47B_78C6_5F7B_41C1_6A052BD688F2",
  "this.overlay_69AFD036_78CA_568C_41BF_B01840300243"
 ],
 "class": "Panorama",
 "pitch": -7.99,
 "hfov": 263.39
},
{
 "thumbnailUrl": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_t.jpg",
 "label": "165",
 "id": "panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "rowCount": 15,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "rowCount": 15,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "rowCount": 15,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "rowCount": 15,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "rowCount": 15,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "backwardYaw": 137.87,
   "yaw": -128.09,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "backwardYaw": 137.87,
   "yaw": -50.95,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 78.05,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_330B46B1_2096_C79E_414D_EE196269949D",
  "this.overlay_34F412D5_209B_5F87_41B7_5D443005399A"
 ],
 "class": "Panorama",
 "pitch": -11.07,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -174.88,
  "class": "PanoramaCameraPosition",
  "pitch": -8.18
 },
 "id": "panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 97.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6C1B21BF_78BA_79FC_41BE_AD142C273A4E",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -176.11,
  "class": "PanoramaCameraPosition",
  "pitch": -0.41
 },
 "id": "panorama_60C35C53_7035_61D6_41D1_96B6807993FF_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -175.29,
  "class": "PanoramaCameraPosition",
  "pitch": -4.49
 },
 "id": "panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 4.83,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   },
   {
    "easing": "linear",
    "targetYaw": 81.68,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   },
   {
    "easing": "cubic_out",
    "targetYaw": 86.51,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 85.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6FB49492_78BA_7F84_41B2_2211C8EA7928",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -64.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6E7D3380_78BA_7984_41D5_7D014C50F583",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -75.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6EE7630C_78BA_7A9C_41DC_2E4819FC0D9F",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 5.31,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 5.31,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 5.31,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 9.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6FD53469_78BA_7E87_41CB_12CE80F5E2B6",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -11.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6E088421_78BA_7E84_41DA_6E798FBFF08F",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": -8.19
 },
 "id": "panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 4.83,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   },
   {
    "easing": "linear",
    "targetYaw": 81.68,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   },
   {
    "easing": "cubic_out",
    "targetYaw": 86.51,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -176.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6E932357_78BA_7A8B_41CB_8370C278AAAE",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 4.83,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   },
   {
    "easing": "linear",
    "targetYaw": 81.68,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   },
   {
    "easing": "cubic_out",
    "targetYaw": 86.51,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 85.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6FC4847E_78BA_7F7C_41B7_85DDCBB21A5E",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 54.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6DC78215_78BA_7A8F_41D8_974E7A2D3C55",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_t.jpg",
 "label": "labcoridoor",
 "id": "panorama_62D183DF_72CD_4663_41D0_062874C5F8E2",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18",
   "backwardYaw": 60.58,
   "yaw": -79.25,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0",
   "backwardYaw": 159.11,
   "yaw": 78.87,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 61.06,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_62A9550E_72C4_C3E5_41CA_485470CFFD35",
  "this.overlay_637C86D9_72C4_CE6F_41D0_A8AEB8F2290F",
  "this.overlay_630E0AB0_72C7_463D_41D8_A013EBB6B20F"
 ],
 "class": "Panorama",
 "pitch": -3.79,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 56.11,
  "class": "PanoramaCameraPosition",
  "pitch": -3.68
 },
 "id": "panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 73.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6D720266_78BA_7A8C_41D0_FEDD8722E0C9",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_t.jpg",
 "label": "lab102",
 "id": "panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2",
   "backwardYaw": -79.25,
   "yaw": 60.58,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_62830609_72C7_41EF_41CB_5673A5B66BA1",
   "backwardYaw": -9.38,
   "yaw": 176.49,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 64.88,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_63E529C5_72C3_4267_41D8_62C5880B7C03",
  "this.overlay_6432FAD2_72C3_467D_41D4_9CF6239DAB9A"
 ],
 "class": "Panorama",
 "pitch": -5.15,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -134.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6DE7E1FA_78BA_7984_41C9_FABDBE1D8F03",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 161.37,
  "class": "PanoramaCameraPosition",
  "pitch": -6.55
 },
 "id": "panorama_63584076_72C4_C225_41D9_7003B7355FB0_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -129.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6E4F33BF_78BA_79FC_41D7_8990568DF015",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_t.jpg",
 "partial": false,
 "label": "2ndrightcoridoor",
 "id": "panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "backwardYaw": 3.15,
   "yaw": -113.24,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
   "backwardYaw": -90.51,
   "yaw": 142.53,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 89.94,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_66625856_72CD_C265_41D7_3F8701B00E2D",
  "this.overlay_65369CD6_765C_C265_41D1_54E96BF7AF00"
 ],
 "class": "Panorama",
 "pitch": -2.7,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6B2BE00B_78BA_769B_41AA_D078DDC75709",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -158.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6D6D927E_78BA_7B7D_41C2_71D1707294D6",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_t.jpg",
 "label": "163",
 "id": "panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
   "backwardYaw": 163.01,
   "yaw": 141.62,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 74.76,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_302D5BD4_20AD_4D85_41B8_F9DD191D9F97"
 ],
 "class": "Panorama",
 "pitch": -9.31,
 "hfov": 360,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_t.jpg",
 "partial": false,
 "label": "lab",
 "id": "panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6",
   "backwardYaw": 5.46,
   "yaw": 39.26,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D",
   "backwardYaw": 170.44,
   "yaw": 168.74,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 84.29,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_60A0DC6E_6FF6_E1CE_41BC_3DAF4075F002",
  "this.overlay_6055C2F0_6FF6_A6D2_41C6_D0504FFB7E8E"
 ],
 "class": "Panorama",
 "pitch": -5,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_t.jpg",
 "partial": false,
 "label": "lab3",
 "id": "panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 74.17,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_7FA80A1D_6FED_6152_41D0_915457C0472D"
 ],
 "class": "Panorama",
 "pitch": -5.12,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -129.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6E3F13D4_78BA_798C_41C4_9CF18876808A",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -16.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6C82E139_78BA_7684_41CA_9211A25C233A",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -111.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6CD9F0B8_78BA_7785_41D4_D327BA0CC0DE",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_t.jpg",
 "label": "corridor1",
 "id": "panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
   "backwardYaw": 94.32,
   "yaw": 145,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
   "backwardYaw": -85.67,
   "yaw": -25.06,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E",
   "backwardYaw": -23.38,
   "yaw": 25.19,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 83.14,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2E01F13C_27CE_FD93_418E_D00C7D71635D",
  "this.overlay_2E01E13C_27CE_FD93_41B0_E300E032BAE9",
  "this.overlay_2E01913D_27CE_FD8D_41B0_F4A692BC5FD2"
 ],
 "class": "Panorama",
 "pitch": -0.28,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 96.25,
  "class": "PanoramaCameraPosition",
  "pitch": -5.73
 },
 "id": "panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_t.jpg",
 "label": "leftroom",
 "id": "panorama_6833DF27_78C9_AA8B_41D7_218E52138C53",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "backwardYaw": -127.2,
   "yaw": -109.56,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "backwardYaw": -127.2,
   "yaw": -43.21,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 63.91,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6AA92E5C_78C9_EABC_41C1_C794B9FFD48E",
  "this.overlay_6AF5D2A2_78CE_BB85_41D1_D188597B1E20"
 ],
 "class": "Panorama",
 "pitch": -5.76,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -104.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6B2D402F_78BA_769B_4171_85A1E87088B2",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -101.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6C3901A0_78BA_7985_41AB_8A037C634F98",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 156.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6C49618A_78BA_7985_41CC_4EB2748CCC56",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_t.jpg",
 "label": "164",
 "id": "panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "backwardYaw": 50.86,
   "yaw": -82.14,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "backwardYaw": 50.86,
   "yaw": -144.95,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 85.11,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_755DB10D_65B5_772B_41C4_00F2A279D95A",
  "this.overlay_74FCDDDB_65B2_AF2F_41D4_69CA87397091"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_t.jpg",
 "label": "staira",
 "id": "panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
   "backwardYaw": 25.19,
   "yaw": -23.38,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
   "backwardYaw": 104.17,
   "yaw": 64.27,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 72.9,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2E1CDA60_27CE_AFB4_41A5_F7426B7FECE0",
  "this.overlay_58B8AED6_5546_AC6F_41B6_7E26E95B3B8B"
 ],
 "class": "Panorama",
 "pitch": -2.02,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -115.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6D83825A_78BA_7A85_41B0_E190421726D9",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -154.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6EF572F9_78BA_7B84_41C8_8E4C5E666263",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -64.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6E6D039C_78BA_79BC_4184_C8C143EB2EAE",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_t.jpg",
 "label": "labcoridoor1",
 "id": "panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "rowCount": 15,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "rowCount": 15,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "rowCount": 15,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "rowCount": 15,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "height": 7680,
      "width": 7680,
      "rowCount": 15,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
   "backwardYaw": 179.23,
   "yaw": 21.03,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C",
   "backwardYaw": 168.74,
   "yaw": 170.44,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF",
   "backwardYaw": 60.76,
   "yaw": -125.17,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 65.55,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_618446F2_6FF2_EED6_41BB_34A5952BEDF6",
  "this.overlay_6176939F_6FFF_A74E_41D0_8D9F295097C2",
  "this.overlay_60C9DA1B_6FF3_A156_41B4_A22292FB47BC"
 ],
 "class": "Panorama",
 "pitch": -8.24,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -158.09,
  "class": "PanoramaCameraPosition",
  "pitch": -15.13
 },
 "id": "panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 159.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6B253049_78BA_7684_419B_E3F9934A21A4",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_t.jpg",
 "partial": false,
 "label": "room2",
 "id": "panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
   "backwardYaw": -63.22,
   "yaw": 29.69,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 84.7,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_62660C43_6DC4_C263_41D3_3E8F8E668547"
 ],
 "class": "Panorama",
 "pitch": -2.81,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_t.jpg",
 "label": "right room",
 "id": "panorama_68963652_78C9_FA84_41D3_30E9234A7AC4",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "backwardYaw": -94.24,
   "yaw": 68.4,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "backwardYaw": -94.24,
   "yaw": 140.48,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 62.88,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6BD3DF15_78CF_EA8C_41D5_6EBD41E4832C",
  "this.overlay_6A8CE6AE_78CE_BB9C_41DB_EB9AD1803C48"
 ],
 "class": "Panorama",
 "pitch": -5.8,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -20.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6EFAC2E8_78BA_7B84_41D4_A7B304DFCE54",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -121.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6D3EF2A9_78BA_7B84_41D0_77B90E08CB9B",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -119.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6FFB3434_78BA_7E8D_41BC_F6A041A9C944",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_t.jpg",
 "label": "left",
 "id": "panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D",
   "backwardYaw": 21.03,
   "yaw": 179.23,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
   "backwardYaw": -25.06,
   "yaw": -85.67,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0",
   "backwardYaw": 29.69,
   "yaw": -63.22,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613",
   "backwardYaw": 58.98,
   "yaw": -15.87,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 64.86,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2E3257F3_27CE_6495_41B1_03504D7EBDAA",
  "this.overlay_62A03976_6FD3_E3DE_41C1_FDC5CDF26976",
  "this.overlay_620CCBA2_702F_E776_41C1_50B308F2F3C6",
  "this.overlay_7DF4AF74_6DC5_FE25_41CB_C3D88A6FA1A8"
 ],
 "class": "Panorama",
 "pitch": -7.56,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 94.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6C5F4177_78BA_768B_41D0_FFAEB174D9FE",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 70.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6CF6D09C_78BA_77BC_41BD_2A00C9A597AC",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_t.jpg",
 "label": "lab102.2",
 "id": "panorama_62830609_72C7_41EF_41CB_5673A5B66BA1",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18",
   "backwardYaw": 176.49,
   "yaw": -9.38,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 65.17,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_64E823A1_723F_C6DF_41AE_AC9001E868AA"
 ],
 "class": "Panorama",
 "pitch": -5.16,
 "hfov": 360,
 "partial": false
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_t.jpg",
 "partial": false,
 "label": "room9",
 "id": "panorama_6579408D_7247_42E7_41BC_2A988AD9953C",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "height": 7168,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 63.39,
 "pitch": -5.4
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 164.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6EB69337_78BA_7A8B_41B4_4AA66863C756",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 7.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6E2E93F0_78BA_7984_41C7_EDA17A9A969C",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -145.8,
  "class": "PanoramaCameraPosition",
  "pitch": -4.87
 },
 "id": "panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -37.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6DA0722A_78BA_7A84_41D2_F845B823D150",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_t.jpg",
 "label": "conference",
 "id": "panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "height": 6656,
      "width": 6656,
      "rowCount": 13,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "backwardYaw": 115.61,
   "yaw": 45.26,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "backwardYaw": 115.61,
   "yaw": -17.81,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 76.89,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_7749B0BD_65D6_D56B_41C7_7ABEA5F55642",
  "this.overlay_7731F521_65D2_DF1A_41C2_F3E7CF28AB5D"
 ],
 "class": "Panorama",
 "pitch": -6.75,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -96.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6E5F53AE_78BA_799C_41D0_2D447A1175D5",
 "class": "PanoramaCamera"
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "minWidth": 100,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadHeight": 15,
 "class": "ViewerArea",
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "borderSize": 0,
 "progressBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "shadow": false,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "paddingLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 1900,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "minHeight": 50,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_6CB780EA_78BA_7785_41D6_4A7252231FC5); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 13.19,
   "yaw": -129.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BA0F6745_AB8C_CFD5_41E5_3958CE687D57",
   "pitch": -12.61,
   "yaw": -129.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.19,
   "distance": 100
  }
 ],
 "id": "overlay_A5F03DCD_AB8C_42D4_41E3_EF335D747B4B",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 8.3,
   "yaw": -175.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_1_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2CDB1635_27CE_679C_41AB_B9D5D513632C",
   "pitch": -17.72,
   "yaw": -175.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.3,
   "distance": 100
  }
 ],
 "id": "overlay_2D623BF2_27CE_EC97_41B8_69B15940F49C",
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A, this.camera_6FD53469_78BA_7E87_41CB_12CE80F5E2B6); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 8.58,
   "yaw": 9.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_1_HS_1_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2CDB3636_27CE_679C_41C2_675370C71252",
   "pitch": -10.1,
   "yaw": 9.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.58,
   "distance": 100
  }
 ],
 "id": "overlay_2D622BF2_27CE_EC97_41B7_707F7B7133BB",
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D, this.camera_6DC78215_78BA_7A8F_41D8_974E7A2D3C55); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 16.8,
   "yaw": 60.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_658895FF_7033_A2CE_41B5_5686CE0997A5",
   "pitch": -20.21,
   "yaw": 60.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.8,
   "distance": 100
  }
 ],
 "id": "overlay_61118D3D_7037_E352_41DB_D9CAFC4E92D4",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA, this.camera_6DD7C201_78BA_7A84_41D5_E4C5F4B9B0AA); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 20.72,
   "yaw": -172.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_1_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_659745FF_7033_A2CE_41D2_FC9AB5CE0BDC",
   "pitch": -16.32,
   "yaw": -172.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.72,
   "distance": 100
  }
 ],
 "id": "overlay_611F8621_7035_6172_41D7_6BFE4C4F7884",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A, this.camera_6EB69337_78BA_7A8B_41B4_4AA66863C756); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 7.76,
   "yaw": 58.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7D6FE93F_6DC3_4223_41D5_DB630CB04F32",
   "pitch": -3.83,
   "yaw": 58.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.76,
   "distance": 100
  }
 ],
 "id": "overlay_7D6F2A04_6DFF_41E5_41C2_8816C37AFAA2",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D, this.camera_6E5F53AE_78BA_799C_41D0_2D447A1175D5); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 13.26,
   "yaw": 75.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D852B71_8348_2362_41D8_2263BA7E52F6",
   "pitch": -30.87,
   "yaw": 75.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.26,
   "distance": 100
  }
 ],
 "id": "overlay_8D9C4032_8348_DCE6_41C9_15041FDC3BEA",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A, this.camera_6DE7E1FA_78BA_7984_41C9_FABDBE1D8F03); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 8.79,
   "yaw": 115.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_73F773D8_65DE_DB29_41D6_5DECD0CA123C",
   "pitch": 0.6,
   "yaw": 115.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.79,
   "distance": 100
  }
 ],
 "id": "overlay_6A97DFD8_65BF_AB2A_41C3_3E50220C5DA6",
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965, this.camera_6C0511D6_78BA_798D_41C0_C0D848CD28E9); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 13.62,
   "yaw": 137.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7388F3D8_65DE_DB29_41D3_E661C0F6773E",
   "pitch": 0.32,
   "yaw": 137.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.62,
   "distance": 100
  }
 ],
 "id": "overlay_6A36C49D_65BD_DD2A_41C4_B37802ADF778",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6, this.camera_6C1B21BF_78BA_79FC_41BE_AD142C273A4E); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 14.03,
   "yaw": 50.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_738883D8_65DE_DB29_41D8_0BD42A5DFC3C",
   "pitch": 0.85,
   "yaw": 50.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.03,
   "distance": 100
  }
 ],
 "id": "overlay_6A77C71E_65B3_7B26_41D2_00F45DD39300",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6, this.camera_6C0BA1C9_78BA_7984_41D7_DACCC178BD00); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 10.34,
   "yaw": -87.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_738833D8_65DE_DB29_41D8_13C704DE6E4B",
   "pitch": -0.95,
   "yaw": -87.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.34,
   "distance": 100
  }
 ],
 "id": "overlay_778A81BE_65D5_7766_41C5_A6B5B445518E",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965, this.camera_6DF5A1E9_78BA_7984_41C5_75623A6716F2); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 8.67,
   "yaw": -136.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7389C3D8_65DE_DB29_41D6_08F78DF82023",
   "pitch": -5.05,
   "yaw": -136.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.67,
   "distance": 100
  }
 ],
 "id": "overlay_77AC7450_65D6_DD39_4194_F5631E76AD62",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784, this.camera_6EA1334B_78BA_7A84_41D0_855F02B09951); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 5.5,
   "yaw": -170.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_1_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2CDD962D_27CE_678C_41A9_68D9C4CAEA47",
   "pitch": -5.89,
   "yaw": -170.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.5,
   "distance": 100
  }
 ],
 "id": "overlay_2E0F5BBC_27CE_AC93_4188_ECB314955772",
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF, this.camera_6E2E93F0_78BA_7984_41C7_EDA17A9A969C); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 19.82,
   "yaw": 93.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_618A54DB_7033_E2D7_41D2_0835F93B2AFC",
   "pitch": -13.23,
   "yaw": 93.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.82,
   "distance": 100
  }
 ],
 "id": "overlay_61BB297B_7032_E3D6_41D3_E7B64B6A14DE",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D, this.camera_6C7D6150_78BA_7685_41D5_DB501BF9740A); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.48,
   "yaw": -20.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.62,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2F0C29F3_209A_CD83_41BB_3FACFD6D1478",
   "pitch": -4.62,
   "yaw": -20.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.48,
   "distance": 100
  }
 ],
 "id": "overlay_2E47963C_209B_C686_41BF_A176F5C8EEDB",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97, this.camera_6B2BE00B_78BA_769B_41AA_D078DDC75709); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 5.3,
   "yaw": 94.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2CDB6637_27CE_679C_41BB_1B15208287E2",
   "pitch": -2.74,
   "yaw": 94.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.3,
   "distance": 100
  }
 ],
 "id": "overlay_2D8B8F0D_27CE_A58C_41C1_EFF6C48936DD",
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 5.68,
   "yaw": 83.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_3_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91DD483D_86AB_FC05_41BB_FAD345916D60",
   "pitch": -9.82,
   "yaw": 83.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.68,
   "distance": 100
  }
 ],
 "id": "overlay_7376A1CF_7DAA_6C05_41CC_41AE122D490D",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2C1A3955_2095_CA86_41BC_F803A92D6453, this.camera_6B253049_78BA_7684_419B_E3F9934A21A4); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 20.33,
   "yaw": -29.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31AF709F_2095_DB82_41A0_08A1BFA42A8E",
   "pitch": -6.28,
   "yaw": -29.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.33,
   "distance": 100
  }
 ],
 "id": "overlay_2F9AE2D0_2097_5F9E_417F_7C0822DCC9FC",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB, this.camera_6B10A066_78BA_768C_41C8_9BFA06346211); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 14.22,
   "yaw": 163.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_5_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31EE65DA_20B7_C58D_41B4_8A3334FDFA98",
   "pitch": -28.41,
   "yaw": 163.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.22,
   "distance": 100
  }
 ],
 "id": "overlay_2F7F3A1E_20B6_CE85_41BB_8ECBCD786C87",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 13.32,
   "yaw": -175.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_6_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3208D456_2095_FA85_41BD_923A8DF60131",
   "pitch": -20.44,
   "yaw": -175.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.32,
   "distance": 100
  }
 ],
 "id": "overlay_305E4CEA_2096_CB82_41B7_7E68997D1CF0",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_6CC550DC_78BA_77BC_41C1_A9DDFD30088A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 15.65,
   "yaw": 154.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6B8D57FE_72CF_4E25_419F_E56C3EE4BE0F",
   "pitch": -29.74,
   "yaw": 154.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.65,
   "distance": 100
  }
 ],
 "id": "overlay_67D9CD83_72C3_C2E3_41D2_98E01CCB813D",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2, this.camera_6C3901A0_78BA_7985_41AB_8A037C634F98); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 21.32,
   "yaw": 159.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66C26848_7244_C26D_41C1_B3A2C3F7384D",
   "pitch": -21.66,
   "yaw": 159.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.32,
   "distance": 100
  }
 ],
 "id": "overlay_612CC06F_72CD_C223_41C2_56DE8B6299F2",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_6C29C1B3_78BA_7984_41C3_FEB36DC17369); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 17.07,
   "yaw": -106.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_1_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66C2D848_7244_C26D_418C_EBE7E276B59C",
   "pitch": -23.23,
   "yaw": -106.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.07,
   "distance": 100
  }
 ],
 "id": "overlay_62C7CA2E_72CC_C625_41D6_44B5A63D6A34",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 12.38,
   "yaw": -85.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0_HS_2_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6677999B_7243_C2E3_41A2_AE213968F862",
   "pitch": -19.21,
   "yaw": -85.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.38,
   "distance": 100
  }
 ],
 "id": "overlay_65923DA3_7245_C223_41D1_FE1BFE70C46D",
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47, this.camera_6D93D23C_78BA_7AFC_41D3_DD24A76D9AD0); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 14.5,
   "yaw": -39.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BA0E1744_AB8C_CFCB_41AF_4BE2DAD80CD8",
   "pitch": -16.35,
   "yaw": -39.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.5,
   "distance": 100
  }
 ],
 "id": "overlay_A67546E7_AB8C_4ED4_41CA_09A559A3AF75",
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E, this.camera_6D83825A_78BA_7A85_41B0_E190421726D9); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 15.43,
   "yaw": 104.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B57D31C_5541_95E3_41CD_B3D801DEC717",
   "pitch": -18.44,
   "yaw": 104.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.43,
   "distance": 100
  }
 ],
 "id": "overlay_581356E7_5543_BC2D_41D3_1067E1CAA752",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_63584076_72C4_C225_41D9_7003B7355FB0, this.camera_6D720266_78BA_7A8C_41D0_FEDD8722E0C9); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 17.87,
   "yaw": 81.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_2_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_671B72D0_72DC_C67D_41C7_E66624298A04",
   "pitch": -18.45,
   "yaw": 81.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.87,
   "distance": 100
  }
 ],
 "id": "overlay_6155A733_72C3_CE23_41CA_96783A0F5A35",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649, this.camera_6DA0722A_78BA_7A84_41D2_F845B823D150); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 13.97,
   "yaw": -90.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_3_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66F2BF21_72C7_7FDF_41BC_B2E06D4108CB",
   "pitch": -12.92,
   "yaw": -90.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.97,
   "distance": 100
  }
 ],
 "id": "overlay_6768CCFD_72DC_C227_41D0_30ABBF7555DC",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64882088_72C3_C2ED_41D0_0CC0426D5922, this.camera_6DB1B22A_78BA_7A84_41D9_E1B90B5E2384); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 17.12,
   "yaw": -115.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_4_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66F22F21_72C7_7FDF_41C7_1B515F89D7AB",
   "pitch": -28.98,
   "yaw": -115.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.12,
   "distance": 50
  }
 ],
 "id": "overlay_6955A86A_72C5_C22D_41DC_240C10260780",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 15.2,
   "yaw": -173.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7CD542DB_6FEF_66D6_41BC_64852276CDD4",
   "pitch": -9.88,
   "yaw": -173.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.2,
   "distance": 100
  }
 ],
 "id": "overlay_6057515A_6FF2_E3D6_41CB_9577DD48D455",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C, this.camera_6CCAE0C7_78BA_778B_41D3_710CD80D2267); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 16.83,
   "yaw": 5.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7CD4B2DB_6FEF_66D6_41CC_715E40B0D18D",
   "pitch": -15.61,
   "yaw": 5.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.83,
   "distance": 100
  }
 ],
 "id": "overlay_7FE3BEF8_6FF3_9ED2_41CA_F4E9C9BAB020",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.69,
   "yaw": -112.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91D99840_86AB_FC7B_41DF_A6C5BA796AC4",
   "pitch": -24.6,
   "yaw": -112.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.69,
   "distance": 100
  }
 ],
 "id": "overlay_70307665_7DA6_1404_41BD_E3D3BBA20DC6",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649, this.camera_6CEC10B3_78BA_7784_41C8_4D50EDF1EEF5); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 16.11,
   "yaw": 3.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_602022CA_78CA_5B84_41D8_0E85F119521B",
   "pitch": -26.38,
   "yaw": 3.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.11,
   "distance": 100
  }
 ],
 "id": "overlay_6854E312_78CE_5A84_41DC_30A4C479169B",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_68963652_78C9_FA84_41D3_30E9234A7AC4, this.camera_6CD9F0B8_78BA_7785_41D4_D327BA0CC0DE); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 7.17,
   "yaw": -94.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6021A2CA_78CA_5B84_41D9_D7485563227F",
   "pitch": -4.36,
   "yaw": -94.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.17,
   "distance": 100
  }
 ],
 "id": "overlay_6803A47B_78C6_5F7B_41C1_6A052BD688F2",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6833DF27_78C9_AA8B_41D7_218E52138C53, this.camera_6CF6D09C_78BA_77BC_41BD_2A00C9A597AC); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 7.16,
   "yaw": -127.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6021D2CA_78CA_5B84_41BA_BE06E010CEAA",
   "pitch": -5.56,
   "yaw": -127.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.16,
   "distance": 100
  }
 ],
 "id": "overlay_69AFD036_78CA_568C_41BF_B01840300243",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_6ED7431B_78BA_7A84_41D1_F0438F948586); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 8.23,
   "yaw": -128.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_330BC3FC_209F_5D86_41AE_F461D94B2853",
   "pitch": -1.65,
   "yaw": -128.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.23,
   "distance": 100
  }
 ],
 "id": "overlay_330B46B1_2096_C79E_414D_EE196269949D",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_6EC6C326_78BA_7A8C_41B9_C6577F7BF461); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 8.31,
   "yaw": -50.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_330BA3FC_209F_5D86_41A1_C6271D6C346D",
   "pitch": 0.96,
   "yaw": -50.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.31,
   "distance": 100
  }
 ],
 "id": "overlay_34F412D5_209B_5F87_41B7_5D443005399A",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_63584076_72C4_C225_41D9_7003B7355FB0, this.camera_6EFAC2E8_78BA_7B84_41D4_A7B304DFCE54); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 16.88,
   "yaw": 78.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66C32848_7244_C26D_41D0_D33553A197BC",
   "pitch": -26.72,
   "yaw": 78.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.88,
   "distance": 100
  }
 ],
 "id": "overlay_62A9550E_72C4_C3E5_41CA_485470CFFD35",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18, this.camera_6D0B52DB_78BA_7B84_41AD_FC39BA558C7C); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.28,
   "yaw": -79.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66C39848_7244_C26D_41DB_085476A99441",
   "pitch": -1.52,
   "yaw": -79.25,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.28,
   "distance": 100
  }
 ],
 "id": "overlay_637C86D9_72C4_CE6F_41D0_A8AEB8F2290F",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.64,
   "yaw": -120.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66C3F848_7244_C26D_41D5_67C17974DB37",
   "pitch": -2.75,
   "yaw": -120.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.64,
   "distance": 100
  }
 ],
 "id": "overlay_630E0AB0_72C7_463D_41D8_A013EBB6B20F",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2, this.camera_6B0EC07B_78BA_7684_41D4_DCE3EB8F0BDB); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 13.82,
   "yaw": 60.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_1_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66CCB848_7244_C26D_41BB_FEC240383672",
   "pitch": -29.72,
   "yaw": 60.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.82,
   "distance": 100
  }
 ],
 "id": "overlay_63E529C5_72C3_4267_41D8_62C5880B7C03",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_62830609_72C7_41EF_41CB_5673A5B66BA1, this.camera_6CFAF088_78BA_7784_41B3_EE31051B7616); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 15.92,
   "yaw": 176.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_1_HS_1_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66CD2848_7244_C26D_41BA_9141058AC125",
   "pitch": -29.92,
   "yaw": 176.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.92,
   "distance": 100
  }
 ],
 "id": "overlay_6432FAD2_72C3_467D_41D4_9CF6239DAB9A",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_6E83036B_78BA_7A84_41C8_19EA90463CEE); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 17.45,
   "yaw": 142.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6B4D9FC0_78BA_6985_41CA_536118F08C72",
   "pitch": -18.74,
   "yaw": 142.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.45,
   "distance": 100
  }
 ],
 "id": "overlay_66625856_72CD_C265_41D7_3F8701B00E2D",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_6E932357_78BA_7A8B_41CB_8370C278AAAE); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 18.52,
   "yaw": -113.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_1_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_73571A63_78BA_AA84_41DC_53C532975B47",
   "pitch": -29.59,
   "yaw": -113.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.52,
   "distance": 100
  }
 ],
 "id": "overlay_65369CD6_765C_C265_41D1_54E96BF7AF00",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D, this.camera_6C82E139_78BA_7684_41CA_9211A25C233A); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 11.28,
   "yaw": 141.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_300B3A44_20AB_CE85_415F_5C619EF42DC6",
   "pitch": -3.97,
   "yaw": 141.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.28,
   "distance": 100
  }
 ],
 "id": "overlay_302D5BD4_20AD_4D85_41B8_F9DD191D9F97",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6, this.camera_6D2822BF_78BA_7BFB_41C5_AA18DBD929CE); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 19.31,
   "yaw": 39.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7EDB20AA_6FF2_A176_41D6_3C14DF671036",
   "pitch": -21.6,
   "yaw": 39.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.31,
   "distance": 100
  }
 ],
 "id": "overlay_60A0DC6E_6FF6_E1CE_41BC_3DAF4075F002",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D, this.camera_6D18A2CF_78BA_7B9C_41DD_ECBC513F8B38); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.15,
   "yaw": 168.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7EDAF0AA_6FF2_A176_4135_F456FF20AC30",
   "pitch": -26.02,
   "yaw": 168.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.15,
   "distance": 100
  }
 ],
 "id": "overlay_6055C2F0_6FF6_A6D2_41C6_D0504FFB7E8E",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 7.08,
   "yaw": -45.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7E3C41E5_6FD2_A2F3_41C5_5528FA74BA28",
   "pitch": -7.51,
   "yaw": -45.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.08,
   "distance": 100
  }
 ],
 "id": "overlay_7FA80A1D_6FED_6152_41D0_915457C0472D",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E, this.camera_6C49618A_78BA_7985_41CC_4EB2748CCC56); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 10.69,
   "yaw": 25.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2CDC8632_27CE_6794_41B8_18F587A32BED",
   "pitch": -22.92,
   "yaw": 25.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.69,
   "distance": 100
  }
 ],
 "id": "overlay_2E01F13C_27CE_FD93_418E_D00C7D71635D",
 "data": {
  "label": "stairs"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D, this.camera_6C6CB164_78BA_768C_41BE_D712DF218AB5); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.6,
   "yaw": 145,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_1_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2CDCA633_27CE_6794_41C2_481AAE50FED9",
   "pitch": -4.23,
   "yaw": 145,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.6,
   "distance": 100
  }
 ],
 "id": "overlay_2E01E13C_27CE_FD93_41B0_E300E032BAE9",
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A, this.camera_6C5F4177_78BA_768B_41D0_FFAEB174D9FE); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.91,
   "yaw": -25.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_2_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.29,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2CDCF634_27CE_679C_41B3_2D6F6A66500C",
   "pitch": -4.29,
   "yaw": -25.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.91,
   "distance": 100
  }
 ],
 "id": "overlay_2E01913D_27CE_FD8D_41B0_F4A692BC5FD2",
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_6FF57445_78BA_7E8C_41D3_2A1E964BD3F4); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.23,
   "yaw": -109.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_602142CA_78CA_5B84_41B7_8BBDCC794071",
   "pitch": -5.35,
   "yaw": -109.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.23,
   "distance": 100
  }
 ],
 "id": "overlay_6AA92E5C_78C9_EABC_41C1_C794B9FFD48E",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_6FE57459_78BA_7E87_41DA_3ADD87FD5E4F); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 9.82,
   "yaw": -43.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_602EC2CA_78CA_5B84_4193_909C86471BC6",
   "pitch": -2.28,
   "yaw": -43.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.82,
   "distance": 100
  }
 ],
 "id": "overlay_6AF5D2A2_78CE_BB85_41D1_D188597B1E20",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_6E4F33BF_78BA_79FC_41D7_8990568DF015); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 6.41,
   "yaw": -82.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_74EBF32A_65B3_BB6E_41B7_2D785927695F",
   "pitch": 9.92,
   "yaw": -82.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.41,
   "distance": 100
  }
 ],
 "id": "overlay_755DB10D_65B5_772B_41C4_00F2A279D95A",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_6E3F13D4_78BA_798C_41C4_9CF18876808A); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 5.71,
   "yaw": -144.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_74EA232A_65B3_BB6E_419F_527EFEA376BE",
   "pitch": 9.92,
   "yaw": -144.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.71,
   "distance": 100
  }
 ],
 "id": "overlay_74FCDDDB_65B2_AF2F_41D4_69CA87397091",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_6EE7630C_78BA_7A9C_41DC_2E4819FC0D9F); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 7.62,
   "yaw": 64.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_1_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2CDB4636_27CE_679C_41B5_D2D577829786",
   "pitch": -4.2,
   "yaw": 64.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.62,
   "distance": 50
  }
 ],
 "id": "overlay_2E1CDA60_27CE_AFB4_41A5_F7426B7FECE0",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97, this.camera_6EF572F9_78BA_7B84_41C8_8E4C5E666263); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.56,
   "yaw": -23.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B57531C_5541_95E3_41AF_0DD511DB92A6",
   "pitch": -35.56,
   "yaw": -23.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.56,
   "distance": 100
  }
 ],
 "id": "overlay_58B8AED6_5546_AC6F_41B6_7E26E95B3B8B",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF, this.camera_6FFB3434_78BA_7E8D_41BC_F6A041A9C944); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 20.75,
   "yaw": -125.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6184AFB6_6FF6_BF5E_41A1_EB310FF5615A",
   "pitch": -34.87,
   "yaw": -125.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.75,
   "distance": 100
  }
 ],
 "id": "overlay_618446F2_6FF2_EED6_41BB_34A5952BEDF6",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C, this.camera_6E088421_78BA_7E84_41DA_6E798FBFF08F); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 13.57,
   "yaw": 170.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.71,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_61273346_6FFE_A73E_41D1_A23BB5C8F892",
   "pitch": -36.71,
   "yaw": 170.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.57,
   "distance": 100
  }
 ],
 "id": "overlay_6176939F_6FFF_A74E_41D0_8D9F295097C2",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A, this.camera_6E193408_78BA_7E84_41DD_A5220BF71278); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 17.21,
   "yaw": 21.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0_HS_2_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_613B096B_6FF2_A3F6_41D3_D4564C949377",
   "pitch": -16.02,
   "yaw": 21.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.21,
   "distance": 100
  }
 ],
 "id": "overlay_60C9DA1B_6FF3_A156_41B4_A22292FB47BC",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A, this.camera_6CA15103_78BA_7684_41D4_7D80519D07F0); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.28,
   "yaw": 29.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_623D6446_6DC5_4265_41D8_D156A0ECF425",
   "pitch": -2.23,
   "yaw": 29.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.28,
   "distance": 100
  }
 ],
 "id": "overlay_62660C43_6DC4_C263_41D3_3E8F8E668547",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_6FC4847E_78BA_7F7C_41B7_85DDCBB21A5E); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 9.4,
   "yaw": 68.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_602E72CA_78CA_5B84_41A5_0791443B885C",
   "pitch": -3.24,
   "yaw": 68.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.4,
   "distance": 100
  }
 ],
 "id": "overlay_6BD3DF15_78CF_EA8C_41D5_6EBD41E4832C",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_6FB49492_78BA_7F84_41B2_2211C8EA7928); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 9.41,
   "yaw": 140.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_602FC2CA_78CA_5B84_41BD_4191C6E93176",
   "pitch": -2.42,
   "yaw": 140.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.41,
   "distance": 100
  }
 ],
 "id": "overlay_6A8CE6AE_78CE_BB9C_41DB_EB9AD1803C48",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97, this.camera_6D5CF290_78BA_7B84_41AD_BAF82B6CAC6A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 6,
   "yaw": -85.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_1_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2CDB8637_27CE_679C_41C0_E12F5887FBA0",
   "pitch": -4.17,
   "yaw": -85.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6,
   "distance": 100
  }
 ],
 "id": "overlay_2E3257F3_27CE_6495_41B1_03504D7EBDAA",
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D, this.camera_6D6D927E_78BA_7B7D_41C2_71D1707294D6); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 6.19,
   "yaw": 179.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_604AA761_6FD2_EFF2_41C2_16AD244CB609",
   "pitch": -17.51,
   "yaw": 179.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.19,
   "distance": 100
  }
 ],
 "id": "overlay_62A03976_6FD3_E3DE_41C1_FDC5CDF26976",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0, this.camera_6D4EE294_78BA_7B8C_41D2_D5DC325C0059); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 7.66,
   "yaw": -63.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_2_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6257BD30_702E_A352_41B3_607E6A8F1721",
   "pitch": -21.54,
   "yaw": -63.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.66,
   "distance": 100
  }
 ],
 "id": "overlay_620CCBA2_702F_E776_41C1_50B308F2F3C6",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613, this.camera_6D3EF2A9_78BA_7B84_41D0_77B90E08CB9B); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 16.53,
   "yaw": -15.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7E0DF243_6DFC_C663_41D8_D022C3A2240D",
   "pitch": -0.78,
   "yaw": -15.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.53,
   "distance": 100
  }
 ],
 "id": "overlay_7DF4AF74_6DC5_FE25_41CB_C3D88A6FA1A8",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18, this.camera_6C90511C_78BA_76BC_41B3_EC6C247F122C); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 16.55,
   "yaw": -9.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_1_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66CC2848_7244_C26D_41C8_A62BE351C742",
   "pitch": -26.66,
   "yaw": -9.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.55,
   "distance": 100
  }
 ],
 "id": "overlay_64E823A1_723F_C6DF_41AE_AC9001E868AA",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_6E7D3380_78BA_7984_41D5_7D014C50F583); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 9,
   "yaw": 45.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_73F603D4_65DE_DB39_41D8_B97831B22AB7",
   "pitch": 2.21,
   "yaw": 45.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9,
   "distance": 100
  }
 ],
 "id": "overlay_7749B0BD_65D6_D56B_41C7_7ABEA5F55642",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_6E6D039C_78BA_79BC_4184_C8C143EB2EAE); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 3.49,
   "yaw": -17.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_73F7D3D4_65DE_DB39_41CE_AAE5E6855923",
   "pitch": 0.54,
   "yaw": -17.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.49,
   "distance": 100
  }
 ],
 "id": "overlay_7731F521_65D2_DF1A_41C2_F3E7CF28AB5D",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_1_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_BA0F6745_AB8C_CFD5_41E5_3958CE687D57",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_1_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2CDB1635_27CE_679C_41AB_B9D5D513632C",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_1_HS_1_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2CDB3636_27CE_679C_41C2_675370C71252",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_1_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_658895FF_7033_A2CE_41B5_5686CE0997A5",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_1_HS_1_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_659745FF_7033_A2CE_41D2_FC9AB5CE0BDC",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_7D6FE93F_6DC3_4223_41D5_DB630CB04F32",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_8D852B71_8348_2362_41D8_2263BA7E52F6",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_73F773D8_65DE_DB29_41D6_5DECD0CA123C",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_7388F3D8_65DE_DB29_41D3_E661C0F6773E",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_738883D8_65DE_DB29_41D8_0BD42A5DFC3C",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_738833D8_65DE_DB29_41D8_13C704DE6E4B",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_4_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_7389C3D8_65DE_DB29_41D6_08F78DF82023",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_1_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2CDD962D_27CE_678C_41A9_68D9C4CAEA47",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_618A54DB_7033_E2D7_41D2_0835F93B2AFC",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2F0C29F3_209A_CD83_41BB_3FACFD6D1478",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2CDB6637_27CE_679C_41BB_1B15208287E2",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_3_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_91DD483D_86AB_FC05_41BB_FAD345916D60",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_4_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_31AF709F_2095_DB82_41A0_08A1BFA42A8E",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_5_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_31EE65DA_20B7_C58D_41B4_8A3334FDFA98",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_6_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_3208D456_2095_FA85_41BD_923A8DF60131",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_6B8D57FE_72CF_4E25_419F_E56C3EE4BE0F",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_66C26848_7244_C26D_41C1_B3A2C3F7384D",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_1_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_66C2D848_7244_C26D_418C_EBE7E276B59C",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0_HS_2_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_6677999B_7243_C2E3_41A2_AE213968F862",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_BA0E1744_AB8C_CFCB_41AF_4BE2DAD80CD8",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_1_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_5B57D31C_5541_95E3_41CD_B3D801DEC717",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_2_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_671B72D0_72DC_C67D_41C7_E66624298A04",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_3_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_66F2BF21_72C7_7FDF_41BC_B2E06D4108CB",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_4_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_66F22F21_72C7_7FDF_41C7_1B515F89D7AB",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_7CD542DB_6FEF_66D6_41BC_64852276CDD4",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0_HS_1_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_7CD4B2DB_6FEF_66D6_41CC_715E40B0D18D",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_91D99840_86AB_FC7B_41DF_A6C5BA796AC4",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_602022CA_78CA_5B84_41D8_0E85F119521B",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_6021A2CA_78CA_5B84_41D9_D7485563227F",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_6021D2CA_78CA_5B84_41BA_BE06E010CEAA",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_330BC3FC_209F_5D86_41AE_F461D94B2853",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_330BA3FC_209F_5D86_41A1_C6271D6C346D",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_66C32848_7244_C26D_41D0_D33553A197BC",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_66C39848_7244_C26D_41DB_085476A99441",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_66C3F848_7244_C26D_41D5_67C17974DB37",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_1_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_66CCB848_7244_C26D_41BB_FEC240383672",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_1_HS_1_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_66CD2848_7244_C26D_41BA_9141058AC125",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_6B4D9FC0_78BA_6985_41CA_536118F08C72",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_1_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_73571A63_78BA_AA84_41DC_53C532975B47",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_300B3A44_20AB_CE85_415F_5C619EF42DC6",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_7EDB20AA_6FF2_A176_41D6_3C14DF671036",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0_HS_1_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_7EDAF0AA_6FF2_A176_4135_F456FF20AC30",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_7E3C41E5_6FD2_A2F3_41C5_5528FA74BA28",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2CDC8632_27CE_6794_41B8_18F587A32BED",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_1_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2CDCA633_27CE_6794_41C2_481AAE50FED9",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_2_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2CDCF634_27CE_679C_41B3_2D6F6A66500C",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_602142CA_78CA_5B84_41B7_8BBDCC794071",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_602EC2CA_78CA_5B84_4193_909C86471BC6",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_74EBF32A_65B3_BB6E_41B7_2D785927695F",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_74EA232A_65B3_BB6E_419F_527EFEA376BE",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_1_HS_0_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2CDB4636_27CE_679C_41B5_D2D577829786",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_5B57531C_5541_95E3_41AF_0DD511DB92A6",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_1_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_6184AFB6_6FF6_BF5E_41A1_EB310FF5615A",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0_HS_1_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_61273346_6FFE_A73E_41D1_A23BB5C8F892",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0_HS_2_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_613B096B_6FF2_A3F6_41D3_D4564C949377",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_623D6446_6DC5_4265_41D8_D156A0ECF425",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_602E72CA_78CA_5B84_41A5_0791443B885C",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_602FC2CA_78CA_5B84_41BD_4191C6E93176",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_1_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_2CDB8637_27CE_679C_41C0_E12F5887FBA0",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_1_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_604AA761_6FD2_EFF2_41C2_16AD244CB609",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_2_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_6257BD30_702E_A352_41B3_607E6A8F1721",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_7E0DF243_6DFC_C663_41D8_D022C3A2240D",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_1_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_66CC2848_7244_C26D_41C8_A62BE351C742",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_73F603D4_65DE_DB39_41D8_B97831B22AB7",
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_73F7D3D4_65DE_DB39_41CE_AAE5E6855923",
 "class": "AnimatedImageResource"
}],
 "borderSize": 0,
 "mobileMipmappingEnabled": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "scripts": {
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getKey": function(key){  return window[key]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "minHeight": 20,
 "data": {
  "name": "Player445"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%",
 "downloadEnabled": false
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
