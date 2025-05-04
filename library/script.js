(function(){
    var script = {
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_06F70832_1CC6_5475_41B9_88088342E615_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -151.24,
   "backwardYaw": -176.37,
   "distance": 1,
   "panorama": "this.panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -3.88,
   "backwardYaw": 40.96,
   "distance": 1,
   "panorama": "this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E",
 "thumbnailUrl": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_t.jpg",
 "label": "Panorama5",
 "pitch": -0.01,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_t.jpg"
  }
 ],
 "vfov": 74,
 "class": "Panorama",
 "overlays": [
  "this.overlay_07FC5484_1D46_7C1D_41B9_689C98BF1C28",
  "this.overlay_4BC64D88_5931_5561_41D2_F41FECC7D21A"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -166.86,
  "pitch": 0
 },
 "id": "panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -83.15,
  "pitch": 0
 },
 "id": "camera_A4A74175_80F2_22DA_41BB_B1AC5051EABC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_D827ACFC_D371_2565_41B6_427B2920453F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D827ACFC_D371_2565_41B6_427B2920453F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_06F70832_1CC6_5475_41B9_88088342E615",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_06F70832_1CC6_5475_41B9_88088342E615_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_31002405_206D_14F7_41BB_D64EF95E9EA6",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303",
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 73.32,
   "backwardYaw": -137.48,
   "distance": 1,
   "panorama": "this.panorama_D827ACFC_D371_2565_41B6_427B2920453F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 170.46,
   "backwardYaw": -137.48,
   "distance": 1,
   "panorama": "this.panorama_D827ACFC_D371_2565_41B6_427B2920453F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -10.09,
   "backwardYaw": -25.66,
   "distance": 1,
   "panorama": "this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -101.8,
   "backwardYaw": -25.66,
   "distance": 1,
   "panorama": "this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D",
 "thumbnailUrl": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_t.jpg",
 "label": "GE1",
 "pitch": -1.71,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_t.jpg"
  }
 ],
 "vfov": 81.34,
 "class": "Panorama",
 "overlays": [
  "this.overlay_10B3220B_1FE5_061B_4182_C4EE46D8E298",
  "this.overlay_1083EE1A_1FE4_FE05_41A1_05A76758E4DF",
  "this.overlay_0FE2F39D_1FE5_063F_41AA_299E87EF5C02",
  "this.overlay_0FB61194_1FFB_020D_41BD_7490206FD624"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_31002405_206D_14F7_41BB_D64EF95E9EA6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -155.37,
   "backwardYaw": 87.56,
   "distance": 1,
   "panorama": "this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 32.26,
   "backwardYaw": -129.99,
   "distance": 1,
   "panorama": "this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A",
 "thumbnailUrl": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_t.jpg",
 "label": "F1-3",
 "pitch": 0.01,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_t.jpg"
  }
 ],
 "vfov": 76,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0CF6DE1F_1CDE_6C2B_41A1_C84EA417EB22",
  "this.overlay_0CB9215F_1CDE_742A_41B3_56293DB99C84",
  "this.overlay_5F0F22D7_51AA_479A_41A0_FC2A4BE60045"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 42.52,
  "pitch": 0
 },
 "id": "camera_A43D7270_80F2_26DA_41D4_34EA52F96FC3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 28.76,
  "pitch": 0
 },
 "id": "camera_A4B10139_80F2_224A_41D2_2642FA29580B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -95.35,
  "pitch": 0
 },
 "id": "camera_A4E470BE_80F2_2247_41D9_B07F651A47A2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -176.37,
   "backwardYaw": -151.24,
   "distance": 1,
   "panorama": "this.panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 31.48,
   "backwardYaw": 145.9,
   "distance": 1,
   "panorama": "this.panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C",
 "thumbnailUrl": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_t.jpg",
 "label": "Panorama6",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_t.jpg"
  }
 ],
 "vfov": 75,
 "class": "Panorama",
 "overlays": [
  "this.overlay_063BF533_1D46_5C7B_41B3_402BF04614D2",
  "this.overlay_068EC392_1D4E_B435_41B0_68B80B521139"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -137.48,
   "backwardYaw": 73.32,
   "distance": 1,
   "panorama": "this.panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 143.77,
   "backwardYaw": 73.32,
   "distance": 1,
   "panorama": "this.panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "GE0",
 "id": "panorama_D827ACFC_D371_2565_41B6_427B2920453F",
 "thumbnailUrl": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_t.jpg",
 "pitch": -0.55,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_t.jpg"
  }
 ],
 "vfov": 83.01,
 "class": "Panorama",
 "overlays": [
  "this.overlay_DD062C3B_D373_24E3_41D4_F37CA4911967",
  "this.overlay_C850A1C5_D834_68B9_41C2_A36E41B53E37"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -18.46,
  "pitch": 0
 },
 "id": "camera_A4BEC161_80F2_22FA_41B5_9FE6D7195F0D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.5,
  "pitch": 0
 },
 "id": "camera_A77F6EB6_80F2_3E46_41BD_056F7BF8E256",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_A58713BD_80F2_2645_4185_9BD0EDD38D7E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -106.68,
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 4.64,
   "backwardYaw": -106.72,
   "distance": 1,
   "panorama": "this.panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7",
 "thumbnailUrl": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_t.jpg",
 "label": "GM1",
 "pitch": -2.37,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_t.jpg"
  }
 ],
 "vfov": 79.72,
 "class": "Panorama",
 "overlays": [
  "this.overlay_C918AB6A_D84C_B84A_41B4_EF891B5FDDB8",
  "this.overlay_48FB99F0_596E_FCA1_41D0_C42F1C4B2443"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -151.32,
   "backwardYaw": 136.48,
   "distance": 1,
   "panorama": "this.panorama_31002405_206D_14F7_41BB_D64EF95E9EA6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069",
 "thumbnailUrl": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_t.jpg",
 "label": "F2-2",
 "pitch": 4.86,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_t.jpg"
  }
 ],
 "vfov": 78.29,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4C921ECB_5B83_D6B4_41D6_9FB46E62ED19",
  "this.overlay_4811703D_5B86_49CC_41CF_70560E6A2D11",
  "this.overlay_4F9EE24D_5B86_CE4C_41D6_5066C09CD1EF"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.33,
  "pitch": 0
 },
 "id": "camera_A4AFA189_80F2_224A_41E0_55C434E1F061",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 42.52,
  "pitch": 0
 },
 "id": "camera_A4261284_80F2_263B_41D0_471F5C71237B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.86,
  "pitch": -11.46
 },
 "id": "panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -88.24,
  "pitch": 0
 },
 "id": "camera_A4C0A10F_80F2_2246_41B0_F5231A843A1E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 96.85,
   "backwardYaw": -81.18,
   "distance": 1,
   "panorama": "this.panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -25.66,
   "backwardYaw": -10.09,
   "distance": 1,
   "panorama": "this.panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "G1",
 "id": "panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A",
 "thumbnailUrl": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_t.jpg"
  }
 ],
 "vfov": 84.79,
 "class": "Panorama",
 "overlays": [
  "this.overlay_D776B519_D84C_A9C9_41CA_9E6F99FA57BF",
  "this.overlay_D758154D_D84C_A849_419E_669BF13D329B",
  "this.overlay_D6B6E93C_D84C_59CF_41E1_AAD09B1F6943",
  "this.overlay_D6C9E417_D854_AFD9_41BC_5F0313940920",
  "this.overlay_1223600E_1CCE_542D_41A0_88529815786F"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 143.64,
   "backwardYaw": -124.77,
   "distance": 1,
   "panorama": "this.panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -71.67,
   "backwardYaw": 131.63,
   "distance": 1,
   "panorama": "this.panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88",
 "thumbnailUrl": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_t.jpg",
 "label": "F3-2",
 "pitch": -1.92,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_t.jpg"
  }
 ],
 "vfov": 83.19,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4E63BFAF_5EA2_BDC3_41D1_EE8A532E4C06",
  "this.overlay_4EA4007A_5EAE_E34C_419B_BD51418A5130"
 ]
},
{
 "class": "PlayList",
 "id": "playList_A7BE2E5B_80F2_3ECE_41C9_C170A5DD043C",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_camera"
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14",
 "thumbnailUrl": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_t.jpg",
 "label": "F1-1",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_t.jpg"
  }
 ],
 "vfov": 80,
 "class": "Panorama",
 "overlays": [
  "this.overlay_131E397A_1CC2_74F5_41B8_7D933025FF25"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 65.25,
  "pitch": 0
 },
 "id": "camera_A433E25A_80F2_26CE_41D4_DEA1F9BB2905",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -48.37,
  "pitch": 0
 },
 "id": "camera_A5CE4356_80F2_26C6_41DD_F1F8C60CB9FF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -177.51,
   "backwardYaw": -155.18,
   "distance": 1,
   "panorama": "this.panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -129.99,
   "backwardYaw": 32.26,
   "distance": 1,
   "panorama": "this.panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -16.24,
   "backwardYaw": 179.96,
   "distance": 1,
   "panorama": "this.panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817",
 "thumbnailUrl": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_t.jpg",
 "label": "F1-2",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6144,
      "colCount": 12,
      "rowCount": 12,
      "height": 6144
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6144,
      "colCount": 12,
      "rowCount": 12,
      "height": 6144
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6144,
      "colCount": 12,
      "rowCount": 12,
      "height": 6144
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6144,
      "colCount": 12,
      "rowCount": 12,
      "height": 6144
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6144,
      "colCount": 12,
      "rowCount": 12,
      "height": 6144
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6144,
      "colCount": 12,
      "rowCount": 12,
      "height": 6144
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_t.jpg"
  }
 ],
 "vfov": 92.8,
 "class": "Panorama",
 "overlays": [
  "this.overlay_1359FF38_1CC2_6C75_41A9_0DC475A00C00",
  "this.overlay_0D8EB6D2_1CC2_BC35_41A8_36DA4C94B6C2",
  "this.overlay_41BE7D4F_51BA_428A_41CE_89D8D1FD4F15",
  "this.overlay_41426E19_51FA_5E96_41B0_FB3994B67A11"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 131.48,
   "backwardYaw": -158.93,
   "distance": 1,
   "panorama": "this.panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112",
 "thumbnailUrl": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_t.jpg",
 "label": "F2-3",
 "pitch": 4.67,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_t.jpg"
  }
 ],
 "vfov": 82.65,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4B98AA67_5B86_FE7C_41B5_C0105473FCDF",
  "this.overlay_557045B7_5B86_CADC_41CD_E51B187AACCE"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 53.7,
  "pitch": 0
 },
 "id": "camera_A4F8F096_80F2_2246_41E0_8611E8FDBB45",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 44.1,
  "pitch": 0
 },
 "id": "camera_A5915396_80F2_2647_41D5_2D33E2666958",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 163.76,
  "pitch": 0
 },
 "id": "camera_A5EEE318_80F2_264A_41CF_D2370453ADF6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -34.1,
  "pitch": 0
 },
 "id": "camera_A4B9214D_80F2_22CA_41E0_43FA8366559B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 107.18,
  "pitch": 0
 },
 "id": "camera_A452121A_80F2_264E_41C9_0A824E23034B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "playList_A7CFDE3B_80F2_3E4E_41DC_EEDD295A95D1",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -161.99,
  "pitch": 0
 },
 "id": "camera_9B09905A_80F2_22CE_41D6_8C602249BA9F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -96,
  "pitch": 0
 },
 "id": "camera_A5DBF32D_80F2_264A_41C0_BB4051EEC48F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.49,
  "pitch": 0
 },
 "id": "camera_A56933FC_80F2_25CA_41D0_C22F3DD6E48A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.12,
  "pitch": 0
 },
 "id": "camera_A5A4E380_80F2_263B_41B0_4931CFEA28BC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -139.04,
  "pitch": 0
 },
 "id": "camera_A7723EA2_80F2_3E7E_41DD_4097667B1124",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 73.28,
  "pitch": 0
 },
 "id": "camera_9B1A501C_80F2_224B_41B7_CB432D59BF3D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 161.54,
   "backwardYaw": 152.21,
   "distance": 1,
   "panorama": "this.panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 84,
   "backwardYaw": -150.34,
   "distance": 1,
   "panorama": "this.panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9",
 "thumbnailUrl": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_t.jpg",
 "label": "GL2",
 "pitch": -6.36,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_t.jpg"
  }
 ],
 "vfov": 55.93,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4188818E_51EA_458D_41D2_523F6C571BB7",
  "this.overlay_41981B8E_51EA_C58A_41BD_3DA75BA7F552"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -151.76,
   "backwardYaw": 125.74,
   "distance": 1,
   "panorama": "this.panorama_06F70832_1CC6_5475_41B9_88088342E615"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5",
 "thumbnailUrl": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_t.jpg",
 "label": "f1-lab2",
 "pitch": -3.24,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_t.jpg"
  }
 ],
 "vfov": 80.01,
 "class": "Panorama",
 "overlays": [
  "this.overlay_05730B68_1CC2_D4EC_418F_68174C22BB62",
  "this.overlay_054CF7C0_1CC3_DC15_41BA_75226379992C"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -158.93,
   "backwardYaw": 131.48,
   "distance": 1,
   "panorama": "this.panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 84.65,
   "backwardYaw": -126.3,
   "distance": 1,
   "panorama": "this.panorama_31002405_206D_14F7_41BB_D64EF95E9EA6"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7",
 "thumbnailUrl": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_t.jpg",
 "label": "F2-4",
 "pitch": 4.09,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_t.jpg"
  }
 ],
 "vfov": 79.81,
 "class": "Panorama",
 "overlays": [
  "this.overlay_546C625C_5BBD_CE4C_41C6_77E826D7EEA6",
  "this.overlay_4ACFD88F_5BBF_DACC_41CC_46AB08922C00"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 104.04,
  "pitch": -4.18
 },
 "id": "panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -133.33,
   "backwardYaw": 133.3,
   "distance": 1,
   "panorama": "this.panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 91.76,
   "backwardYaw": -114.75,
   "distance": 1,
   "panorama": "this.panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303",
 "thumbnailUrl": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_t.jpg",
 "label": "F3-4",
 "pitch": -2.39,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_t.jpg"
  }
 ],
 "vfov": 79.23,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4FF63D85_5EA3_DDC4_41B6_F45EDF8B5CD8",
  "this.overlay_4C040CFC_5EA2_E345_41D5_EA2C273DFEC0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -6.67,
   "backwardYaw": -179.5,
   "distance": 1,
   "panorama": "this.panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C",
 "thumbnailUrl": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_t.jpg",
 "label": "GM2",
 "pitch": -1.49,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_t.jpg"
  }
 ],
 "vfov": 77.71,
 "class": "Panorama",
 "overlays": [
  "this.overlay_C9796E73_D84F_B859_41D4_404D928E10A1",
  "this.overlay_CB7B1929_DBCD_B9C9_4190_4B17B6CD415F"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 108.33,
  "pitch": 0
 },
 "id": "camera_A4C89123_80F2_227E_4190_A4F981CDA7D8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 3.63,
  "pitch": 0
 },
 "id": "camera_A78B9E8D_80F2_3E45_41B8_3784984AF1C7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 87.56,
   "backwardYaw": -155.37,
   "distance": 1,
   "panorama": "this.panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 40.96,
   "backwardYaw": -3.88,
   "distance": 1,
   "panorama": "this.panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -72.82,
   "backwardYaw": -135.9,
   "distance": 1,
   "panorama": "this.panorama_06F70832_1CC6_5475_41B9_88088342E615"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA",
 "thumbnailUrl": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_t.jpg",
 "label": "F1-4",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_t.jpg"
  }
 ],
 "vfov": 62,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0C4BF08F_1CC2_F42B_41AE_947B537959EC",
  "this.overlay_0C1C9534_1CC3_BC7E_41B0_823D8C40AD5B",
  "this.overlay_5F030C54_51A6_C29E_41BB_548B61AB8BAF",
  "this.overlay_4BC50FA8_5951_54A1_41D3_745A0BF479F9"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -90.69,
  "pitch": 0
 },
 "id": "camera_A4EC10D3_80F2_23DD_41DF_FB0013B25818",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -148.52,
  "pitch": 0
 },
 "id": "camera_A57323D2_80F2_25DF_41D8_C3BEAF39A7EC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 46.67,
  "pitch": 0
 },
 "id": "camera_9B1E6031_80F2_225A_41D2_052819FA28BF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 28.24,
  "pitch": 0
 },
 "id": "camera_A45F0230_80F2_265A_41AA_B4FFA4EF3FB9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -54.26,
  "pitch": 0
 },
 "id": "camera_A5557411_80F2_225A_41BB_919B3F12D846",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.08,
  "pitch": 0
 },
 "id": "camera_A5E5D303_80F2_263D_41D6_317A01F8A809",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 93.72,
  "pitch": -5.06
 },
 "id": "panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 24.82,
  "pitch": 0
 },
 "id": "camera_A407A2C4_80F2_263B_41B6_1AC1B290A6DD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -171.76,
  "pitch": -0.55
 },
 "id": "panorama_D827ACFC_D371_2565_41B6_427B2920453F_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -48.52,
  "pitch": 0
 },
 "id": "camera_A4F2B082_80F2_223E_41D4_294B45931F6D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 89.31,
   "backwardYaw": 18.01,
   "distance": 1,
   "panorama": "this.panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -11.92,
   "backwardYaw": 30.59,
   "distance": 1,
   "panorama": "this.panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A",
 "thumbnailUrl": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_t.jpg",
 "label": "F1R1",
 "pitch": -2.01,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 8704,
      "colCount": 17,
      "rowCount": 17,
      "height": 8704
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 8704,
      "colCount": 17,
      "rowCount": 17,
      "height": 8704
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/r/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 8704,
      "colCount": 17,
      "rowCount": 17,
      "height": 8704
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/b/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 8704,
      "colCount": 17,
      "rowCount": 17,
      "height": 8704
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_0/l/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_t.jpg"
  }
 ],
 "vfov": 62.99,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0E86B260_1CC2_5415_41AD_9DB2E690A412",
  "this.overlay_0E217EC7_1CC2_AC1B_41A2_4AFEA4BE1FEE",
  "this.overlay_0FF3BACF_1CC2_B42B_41A0_A7FAE33133DD"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 24.63,
  "pitch": 0
 },
 "id": "camera_A5BB236B_80F2_26CD_41C5_BEED83AF978F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -114.75,
   "backwardYaw": 91.76,
   "distance": 1,
   "panorama": "this.panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_31002405_206D_14F7_41BB_D64EF95E9EA6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 131.63,
   "backwardYaw": -71.67,
   "distance": 1,
   "panorama": "this.panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5",
 "thumbnailUrl": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_t.jpg",
 "label": "F3-1",
 "pitch": -1.15,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_t.jpg"
  }
 ],
 "vfov": 82.71,
 "class": "Panorama",
 "overlays": [
  "this.overlay_5054800F_5EA1_62C4_41B6_4CD046120DA0",
  "this.overlay_4F56E61F_5EA3_6EC3_41D2_3FE754C1A964",
  "this.overlay_4DD5740D_5EA7_62C4_41BE_6F175F07F134"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_A59A13AA_80F2_264F_41D5_9385E40AF1ED",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -106.68,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -36.36,
  "pitch": 0
 },
 "id": "camera_9B057046_80F2_22C6_41E0_02CADEDBE65B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.76,
  "pitch": -9.82
 },
 "id": "panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 154.34,
  "pitch": 0
 },
 "id": "camera_A41A92AF_80F2_2645_41CF_3607A8D92F1D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -166.99,
  "pitch": 0
 },
 "id": "panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 136.48,
   "backwardYaw": -151.32,
   "distance": 1,
   "panorama": "this.panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -126.3,
   "backwardYaw": 84.65,
   "distance": 1,
   "panorama": "this.panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_31002405_206D_14F7_41BB_D64EF95E9EA6",
 "thumbnailUrl": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_t.jpg",
 "label": "F2-1",
 "pitch": 3.43,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_t.jpg"
  }
 ],
 "vfov": 77.13,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3116E04A_2067_0D7D_41B0_C529932C4FE5",
  "this.overlay_33332EDA_207B_151C_41BF_FD288D6D8ABC",
  "this.overlay_49A50D7E_5B82_7A4C_41C8_07E8F76F624B"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 154.34,
  "pitch": 0
 },
 "id": "camera_A4131299_80F2_264C_4173_B72139C911F9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -153.99,
  "pitch": -6.14
 },
 "id": "panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "playList_A7B73E48_80F2_3ECA_4192_0E0E07B3D8D9",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 50.01,
  "pitch": 0
 },
 "id": "camera_A4DA10FB_80F2_23CE_41D5_764FD301B1E8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.44,
  "pitch": 0
 },
 "id": "camera_A4D260E7_80F2_23C5_41DC_032CD9941383",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 152.21,
   "backwardYaw": 161.54,
   "distance": 1,
   "panorama": "this.panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -81.18,
   "backwardYaw": 96.85,
   "distance": 1,
   "panorama": "this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C",
 "thumbnailUrl": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_t.jpg",
 "label": "GL1",
 "pitch": -5.06,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_t.jpg"
  }
 ],
 "vfov": 80,
 "class": "Panorama",
 "overlays": [
  "this.overlay_C99CD076_D85D_A85B_41CD_B698CA2350D4",
  "this.overlay_41A4D778_51EE_CE96_41BE_50A3CD10D0D6"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.04,
  "pitch": 0
 },
 "id": "camera_A5FA02EF_80F2_27C6_41D0_C288C1556BDF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 21.07,
  "pitch": 0
 },
 "id": "camera_A494019D_80F2_224A_41D2_2F2550A46CCB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 28.68,
  "pitch": 0
 },
 "id": "camera_A4FFA0AA_80F2_224F_418D_9CBD2BA16C05",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 55.23,
  "pitch": 0
 },
 "id": "camera_A5C57341_80F2_263A_41DA_7837CBA60CBA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -179.5,
   "backwardYaw": -6.67,
   "distance": 1,
   "panorama": "this.panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257",
 "thumbnailUrl": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_t.jpg",
 "label": "GM3",
 "pitch": -2.7,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_t.jpg"
  }
 ],
 "vfov": 82.76,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4B548063_5951_6BA7_41D4_10492913848C"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 98.82,
  "pitch": 0
 },
 "id": "camera_A47E51F2_80F2_25DE_41C5_3BBD57AAB3B3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -46.7,
  "pitch": 0
 },
 "id": "camera_A446F245_80F2_263A_41E0_8C8C76B8A4EF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.36,
  "pitch": 0
 },
 "id": "camera_A57D53E7_80F2_25C6_41C1_A2A5BC522922",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -147.74,
  "pitch": 0
 },
 "id": "camera_A5F112DA_80F2_27CF_419F_141F5957DE52",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -47.41,
  "pitch": -2.11
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 145.9,
   "backwardYaw": 31.48,
   "distance": 1,
   "panorama": "this.panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620",
 "thumbnailUrl": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_t.jpg",
 "label": "Panorama7",
 "pitch": -0.01,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_t.jpg"
  }
 ],
 "vfov": 76,
 "class": "Panorama",
 "overlays": [
  "this.overlay_06DA344B_1D42_BC2A_41B0_4E0D0F945F56"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -27.79,
  "pitch": 0
 },
 "id": "camera_A48121B2_80F2_225E_41C7_CDF7D19974F2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994",
 "thumbnailUrl": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_t.jpg",
 "label": "F1R3",
 "pitch": -4.16,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_t.jpg"
  }
 ],
 "vfov": 80.69,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0F859363_1CC6_541B_41B9_902F7001E3A4"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 29.66,
  "pitch": 0
 },
 "id": "camera_A488A1C7_80F2_25C6_41DE_43EE41BE2A2D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 18.01,
   "backwardYaw": 89.31,
   "distance": 1,
   "panorama": "this.panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE",
 "thumbnailUrl": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_t.jpg",
 "label": "F1R2",
 "pitch": 0.01,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_t.jpg"
  }
 ],
 "vfov": 66,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0B9CA677_1CC6_5CFA_41B6_ED4217C7B292",
  "this.overlay_0B2E370B_1CC6_7C2B_41B3_B9D2D032E413"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -135.9,
   "backwardYaw": -72.82,
   "distance": 1,
   "panorama": "this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 125.74,
   "backwardYaw": -151.76,
   "distance": 1,
   "panorama": "this.panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_06F70832_1CC6_5475_41B9_88088342E615",
 "thumbnailUrl": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_t.jpg",
 "label": "f1-lab1",
 "pitch": -3.24,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_t.jpg"
  }
 ],
 "vfov": 80.14,
 "class": "Panorama",
 "overlays": [
  "this.overlay_041199A1_1CC2_B417_41B7_31E298B1F1D7",
  "this.overlay_4BD91A17_5951_5F60_41D4_761933E89161"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -149.41,
  "pitch": 0
 },
 "id": "camera_9B0FE06E_80F2_22C6_41CE_848C814EBA1B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 133.3,
   "backwardYaw": -133.33,
   "distance": 1,
   "panorama": "this.panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -124.77,
   "backwardYaw": 143.64,
   "distance": 1,
   "panorama": "this.panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522",
 "thumbnailUrl": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_t.jpg",
 "label": "F3-3",
 "pitch": -2.86,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_t.jpg"
  }
 ],
 "vfov": 81.28,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4F0C79BB_5EAF_65CC_41BC_DA9A8BDD6E66",
  "this.overlay_4C736B31_5EA1_A6DC_41D7_3B6D484C18E6"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -106.72,
   "backwardYaw": 4.64,
   "distance": 1,
   "panorama": "this.panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -155.18,
   "backwardYaw": -177.51,
   "distance": 1,
   "panorama": "this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "G2",
 "id": "panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889",
 "thumbnailUrl": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_t.jpg"
  }
 ],
 "vfov": 68,
 "class": "Panorama",
 "overlays": [
  "this.overlay_D61D10E2_D853_A87A_41E5_1BDAA2591CBD",
  "this.overlay_D6745D2C_D85D_B9CF_41D2_DA64D79B15DE",
  "this.overlay_106E3C29_1CC3_AC17_4192_CD36BA170A74"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 30.59,
   "backwardYaw": -11.92,
   "distance": 1,
   "panorama": "this.panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 179.96,
   "backwardYaw": -16.24,
   "distance": 1,
   "panorama": "this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38",
 "thumbnailUrl": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_t.jpg",
 "label": "f1-r1.1",
 "pitch": -2.7,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_t.jpg"
  }
 ],
 "vfov": 83.03,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0D6E71DB_1CCF_D42B_41B2_71FEBDA8B4CE",
  "this.overlay_0D36DD0E_1CC1_EC2D_41B4_5F30099ED763",
  "this.overlay_0EF244DF_1CC1_FC2B_4199_823A924DD830",
  "this.overlay_41226A14_51AA_469E_41D0_1E336FB07AB7"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_A4688206_80F2_2646_41D9_A727ADF24077",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.91,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -43.52,
  "pitch": 0
 },
 "id": "camera_A47551DC_80F2_25CA_41D9_D283A7883599",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "playList_A7CFBE3B_80F2_3E4E_417B_51A845D9B228",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -150.34,
   "backwardYaw": 84,
   "distance": 1,
   "panorama": "this.panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9"
  }
 ],
 "hfovMin": "126%",
 "hfov": 360,
 "label": "GL3",
 "id": "panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21",
 "thumbnailUrl": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_t.jpg",
 "pitch": -4.18,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6144,
      "colCount": 12,
      "rowCount": 12,
      "height": 6144
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6144,
      "colCount": 12,
      "rowCount": 12,
      "height": 6144
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6144,
      "colCount": 12,
      "rowCount": 12,
      "height": 6144
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6144,
      "colCount": 12,
      "rowCount": 12,
      "height": 6144
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6144,
      "colCount": 12,
      "rowCount": 12,
      "height": 6144
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_t.jpg"
  }
 ],
 "vfov": 73.77,
 "class": "Panorama",
 "overlays": [
  "this.overlay_5FE32850_51AE_4296_4183_C0B2B17E494B"
 ]
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 1,
 "minWidth": 100,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingLeft": 0,
 "progressBarBorderRadius": 0,
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "minHeight": 50,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "shadow": false,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.67,
   "image": "this.AnimatedImageResource_00A5EBEB_1D47_EBEB_41BA_D2A93D492774",
   "pitch": -11.61,
   "yaw": -151.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_07FC5484_1D46_7C1D_41B9_689C98BF1C28",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C, this.camera_A78B9E8D_80F2_3E45_41B8_3784984AF1C7); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.24,
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
   "pitch": -11.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.63,
   "image": "this.AnimatedImageResource_4CD91902_5937_3D60_41B5_EDFD006C797C",
   "pitch": -13.2,
   "yaw": -3.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4BC64D88_5931_5561_41D2_F41FECC7D21A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA, this.camera_A7723EA2_80F2_3E7E_41DD_4097667B1124); this.setMediaBehaviour(this.playList_A7B73E48_80F2_3ECA_4192_0E0E07B3D8D9, 0, this.panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.63,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.88,
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
   "pitch": -13.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.64,
   "image": "this.AnimatedImageResource_0C27D9B5_1FE7_020F_41B2_0DAD448500F7",
   "pitch": -26.38,
   "yaw": -10.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_10B3220B_1FE5_061B_4182_C4EE46D8E298",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A, this.camera_A4131299_80F2_264C_4173_B72139C911F9); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.32,
   "image": "this.AnimatedImageResource_0C2469B5_1FE7_020F_41B9_97424031E9E1",
   "pitch": -27.63,
   "yaw": -101.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1083EE1A_1FE4_FE05_41A1_05A76758E4DF",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A, this.camera_A41A92AF_80F2_2645_41CF_3607A8D92F1D); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "exit"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.05,
   "image": "this.AnimatedImageResource_0DCBCD94_1FFB_020D_4198_8C9344B3903F",
   "pitch": -25.84,
   "yaw": 73.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0FE2F39D_1FE5_063F_41AA_299E87EF5C02",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D827ACFC_D371_2565_41B6_427B2920453F, this.camera_A43D7270_80F2_26DA_41D4_34EA52F96FC3); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.32,
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
   "pitch": -25.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "exit 2"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.84,
   "image": "this.AnimatedImageResource_0DCB8D94_1FFB_020D_41B6_0919D71F551C",
   "pitch": -29.23,
   "yaw": 170.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0FB61194_1FFB_020D_41BD_7490206FD624",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D827ACFC_D371_2565_41B6_427B2920453F, this.camera_A4261284_80F2_263B_41D0_471F5C71237B); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.46,
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
   "pitch": -29.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.34,
   "image": "this.AnimatedImageResource_04643CA5_1CC3_AC1F_4198_E2F3C8A4DFF6",
   "pitch": -14.95,
   "yaw": 32.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0CF6DE1F_1CDE_6C2B_41A1_C84EA417EB22",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817, this.camera_A4DA10FB_80F2_23CE_41D5_764FD301B1E8); this.setMediaBehaviour(this.playList_A7CFBE3B_80F2_3E4E_417B_51A845D9B228, 0, this.panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.34,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.26,
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
   "pitch": -14.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.47,
   "image": "this.AnimatedImageResource_0465DCA6_1CC3_AC1D_41B1_3F31AB3B180F",
   "pitch": -10.81,
   "yaw": -155.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0CB9215F_1CDE_742A_41B3_56293DB99C84",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA, this.camera_A4D260E7_80F2_23C5_41DC_032CD9941383); this.setMediaBehaviour(this.playList_A7B73E48_80F2_3ECA_4192_0E0E07B3D8D9, 0, this.panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.47,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.37,
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
   "pitch": -10.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "stairs"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.73,
   "image": "this.AnimatedImageResource_5E9C7C5B_51A5_C28A_41D0_F4103802F1E5",
   "pitch": -17.46,
   "yaw": 133.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5F0F22D7_51AA_479A_41A0_FC2A4BE60045",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.73,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.42,
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
   "pitch": -17.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.98,
   "image": "this.AnimatedImageResource_00A55BEB_1D47_EBEB_41B7_7BA8EDBFD0BA",
   "pitch": -18.85,
   "yaw": 31.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_063BF533_1D46_5C7B_41B3_402BF04614D2",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620, this.camera_A4B9214D_80F2_22CA_41E0_43FA8366559B); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.48,
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
   "pitch": -18.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.07,
   "image": "this.AnimatedImageResource_00A52BEC_1D47_EBED_41AE_511F9E646EDC",
   "pitch": -16.71,
   "yaw": -176.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_068EC392_1D4E_B435_41B0_68B80B521139",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E, this.camera_A4B10139_80F2_224A_41D2_2642FA29580B); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.07,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -176.37,
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
   "pitch": -16.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.95,
   "image": "this.AnimatedImageResource_CB28E552_D875_A85B_41E2_7F28357EECE3",
   "pitch": -28.89,
   "yaw": -137.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DD062C3B_D373_24E3_41D4_F37CA4911967",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D, this.camera_A59A13AA_80F2_264F_41D5_9385E40AF1ED); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 19.95,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.22,
   "image": "this.AnimatedImageResource_34F7E0B0_206B_0D2C_41A0_7434180667C1",
   "pitch": -22.76,
   "yaw": 143.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C850A1C5_D834_68B9_41C2_A36E41B53E37",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D, this.camera_A58713BD_80F2_2645_4185_9BD0EDD38D7E); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.22,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 143.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.02,
   "image": "this.AnimatedImageResource_4F8AABEB_5953_3CA7_41A1_8D19899E76B3",
   "pitch": -20.33,
   "yaw": -174.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C918AB6A_D84C_B84A_41B4_EF891B5FDDB8",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.02,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.64,
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
   "pitch": -20.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.93,
   "image": "this.AnimatedImageResource_4F8D1BEB_5953_3CA7_41D1_492A1F28C2FF",
   "pitch": -5.87,
   "yaw": 4.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_48FB99F0_596E_FCA1_41D0_C42F1C4B2443",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889, this.camera_9B1A501C_80F2_224B_41B7_CB432D59BF3D); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.64,
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
   "pitch": -5.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.03,
   "image": "this.AnimatedImageResource_48C62002_5C7E_C9B4_41C7_5B426888C14F",
   "pitch": -19.6,
   "yaw": 86.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4C921ECB_5B83_D6B4_41D6_9FB46E62ED19",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.03,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.94,
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
   "pitch": -19.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 08a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.58,
   "image": "this.AnimatedImageResource_48C64002_5C7E_C9B4_41C0_F3930B6A5C72",
   "pitch": -26.11,
   "yaw": -151.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4811703D_5B86_49CC_41CF_70560E6A2D11",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_31002405_206D_14F7_41BB_D64EF95E9EA6, this.camera_A47551DC_80F2_25CA_41D9_D283A7883599); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.32,
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
   "pitch": -26.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.27,
   "image": "this.AnimatedImageResource_48C9E006_5C7E_C9BC_4137_0C3C00F76534",
   "pitch": -23.93,
   "yaw": -58.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4F9EE24D_5B86_CE4C_41D6_5066C09CD1EF",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.7,
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
   "pitch": -23.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "exit"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.29,
   "image": "this.AnimatedImageResource_CB88D890_D834_B8D7_41DF_1EE8243FF621",
   "pitch": -22.19,
   "yaw": -25.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D776B519_D84C_A9C9_41CA_9E6F99FA57BF",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D, this.camera_A4688206_80F2_2646_41D9_A727ADF24077); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.66,
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
   "pitch": -22.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "multi-purpose"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.24,
   "image": "this.AnimatedImageResource_CB881890_D834_B8D7_41DA_2ABC282EAAB1",
   "pitch": -14.71,
   "yaw": -134.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D758154D_D84C_A849_419E_669BF13D329B",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.24,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -134.99,
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
   "pitch": -14.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "lincoln corner"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.48,
   "image": "this.AnimatedImageResource_CB898890_D834_B8D7_41B6_8688EF359BAC",
   "pitch": -16.86,
   "yaw": 96.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D6B6E93C_D84C_59CF_41E1_AAD09B1F6943",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C, this.camera_A47E51F2_80F2_25DE_41C5_3BBD57AAB3B3); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 96.85,
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
   "pitch": -16.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "middle"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.8,
   "image": "this.AnimatedImageResource_CB89B890_D834_B8D7_41D1_A757496AED73",
   "pitch": -20.56,
   "yaw": -168.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D6C9E417_D854_AFD9_41BC_5F0313940920",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.4,
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
   "pitch": -20.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "stairs"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.05,
   "image": "this.AnimatedImageResource_046CEC90_1CC3_AC36_41B1_8DA849568C1E",
   "pitch": -7.27,
   "yaw": -156.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1223600E_1CCE_542D_41A0_88529815786F",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_A7CFDE3B_80F2_3E4E_41DC_EEDD295A95D1, 0, this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A); this.setMediaBehaviour(this.playList_A7CFBE3B_80F2_3E4E_417B_51A845D9B228, 0, this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -156.26,
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
   "pitch": -7.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.66,
   "image": "this.AnimatedImageResource_48BF69AD_5EA1_A5C7_41D7_2B681D265D17",
   "pitch": -25.5,
   "yaw": -71.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4E63BFAF_5EA2_BDC3_41D1_EE8A532E4C06",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5, this.camera_A5CE4356_80F2_26C6_41DD_F1F8C60CB9FF); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.66,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.67,
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
   "pitch": -25.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.53,
   "image": "this.AnimatedImageResource_48BEE9AD_5EA1_A5C7_41B3_A308A7BB2E46",
   "pitch": -25.79,
   "yaw": 143.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4EA4007A_5EAE_E34C_419B_BD51418A5130",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522, this.camera_A5C57341_80F2_263A_41DA_7837CBA60CBA); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.53,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 143.64,
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
   "pitch": -25.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.42,
   "image": "this.AnimatedImageResource_04644CA1_1CC3_AC17_41B2_D1A31F0B6DDB",
   "pitch": -19.31,
   "yaw": -12.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_131E397A_1CC2_74F5_41B8_7D933025FF25",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_A7BE2E5B_80F2_3ECE_41C9_C170A5DD043C, 0, this.panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.58,
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
   "pitch": -19.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.22,
   "image": "this.AnimatedImageResource_0465ACA2_1CC3_AC15_41B4_BA414A1E6916",
   "pitch": -13.59,
   "yaw": 129.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1359FF38_1CC2_6C75_41A9_0DC475A00C00",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_A7CFDE3B_80F2_3E4E_41DC_EEDD295A95D1, 0, this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.22,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 129.68,
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
   "pitch": -13.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.46,
   "image": "this.AnimatedImageResource_04649CA4_1CC3_AC1D_419C_3A627AA232BA",
   "pitch": -8.28,
   "yaw": -129.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0D8EB6D2_1CC2_BC35_41A8_36DA4C94B6C2",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A, this.camera_A5F112DA_80F2_27CF_419F_141F5957DE52); this.setMediaBehaviour(this.playList_A7BE2E5B_80F2_3ECE_41C9_C170A5DD043C, 0, this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -129.99,
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
   "pitch": -8.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.96,
   "image": "this.AnimatedImageResource_5E59AAE2_51A6_47BA_41C6_712657CA59B5",
   "pitch": -13.54,
   "yaw": -16.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_41BE7D4F_51BA_428A_41CE_89D8D1FD4F15",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38, this.camera_A5FA02EF_80F2_27C6_41D0_C288C1556BDF); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 17.96,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.24,
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
   "pitch": -13.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.74,
   "image": "this.AnimatedImageResource_41FB8B08_51E5_C676_41C3_1BD2395B22C4",
   "pitch": -27.74,
   "yaw": -177.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_41426E19_51FA_5E96_41B0_FB3994B67A11",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889, this.camera_A407A2C4_80F2_263B_41B6_1AC1B290A6DD); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 12.74,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.51,
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
   "pitch": -27.74
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.86,
   "image": "this.AnimatedImageResource_54AD5C43_5B85_D9B4_4145_AFD88F304A67",
   "pitch": -29.42,
   "yaw": -110.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4B98AA67_5B86_FE7C_41B5_C0105473FCDF",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3007AB9F_206D_7313_41BE_3EC202B71186, this.camera_4B46B0AA_5BBE_4AF5_41C6_41672129F854)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -110.35,
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
   "pitch": -29.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.73,
   "image": "this.AnimatedImageResource_4ED34EC2_5BBE_36B4_419D_9380A013EBB2",
   "pitch": -14.85,
   "yaw": 131.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_557045B7_5B86_CADC_41CD_E51B187AACCE",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7, this.camera_A494019D_80F2_224A_41D2_2F2550A46CCB); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 12.73,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 131.48,
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
   "pitch": -14.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.6,
   "image": "this.AnimatedImageResource_4125800C_51EA_428E_41D3_5B9256F7B9A2",
   "pitch": -2.71,
   "yaw": 84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4188818E_51EA_458D_41D2_523F6C571BB7",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21, this.camera_A488A1C7_80F2_25C6_41DE_43EE41BE2A2D); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.6,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84,
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
   "pitch": -2.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.33,
   "image": "this.AnimatedImageResource_41B77364_51E5_C6BE_41C3_9CD14DC18B0A",
   "pitch": -7.12,
   "yaw": 161.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_41981B8E_51EA_C58A_41BD_3DA75BA7F552",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C, this.camera_A48121B2_80F2_225E_41C7_CDF7D19974F2); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.33,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 161.54,
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
   "pitch": -7.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.48,
   "image": "this.AnimatedImageResource_01C173B5_1CC6_747F_41B9_D8CBD09EAE4D",
   "pitch": -19.8,
   "yaw": -151.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_05730B68_1CC2_D4EC_418F_68174C22BB62",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06F70832_1CC6_5475_41B9_88088342E615, this.camera_A5557411_80F2_225A_41BB_919B3F12D846); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.76,
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
   "pitch": -19.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.6,
   "image": "this.AnimatedImageResource_01C1C3B5_1CC6_747F_41B5_593C5F5188A4",
   "pitch": -13.44,
   "yaw": -170.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_054CF7C0_1CC3_DC15_41BA_75226379992C",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_A7B73E48_80F2_3ECA_4192_0E0E07B3D8D9, 0, this.panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.6,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.97,
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
   "pitch": -13.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.48,
   "image": "this.AnimatedImageResource_4ED2DEC2_5BBE_36B4_41D3_0AB8A26CA022",
   "pitch": -18.38,
   "yaw": 84.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_546C625C_5BBD_CE4C_41C6_77E826D7EEA6",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_31002405_206D_14F7_41BB_D64EF95E9EA6, this.camera_A4F8F096_80F2_2246_41E0_8611E8FDBB45); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.65,
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
   "pitch": -18.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.2,
   "image": "this.AnimatedImageResource_4ED26EC2_5BBE_36B4_41D6_29691C982E42",
   "pitch": -23.21,
   "yaw": -158.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4ACFD88F_5BBF_DACC_41CC_46AB08922C00",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112, this.camera_A4F2B082_80F2_223E_41D4_294B45931F6D); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.93,
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
   "pitch": -23.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.36,
   "image": "this.AnimatedImageResource_48A159AD_5EA1_A5C7_41D3_85C1439011E3",
   "pitch": -35.79,
   "yaw": 91.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4FF63D85_5EA3_DDC4_41B6_F45EDF8B5CD8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5, this.camera_A433E25A_80F2_26CE_41D4_DEA1F9BB2905); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.76,
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
   "pitch": -35.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.42,
   "image": "this.AnimatedImageResource_48A0A9AD_5EA1_A5C7_41D4_E5B5E1C620E3",
   "pitch": -37.56,
   "yaw": -133.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4C040CFC_5EA2_E345_41D5_EA2C273DFEC0",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522, this.camera_A446F245_80F2_263A_41E0_8C8C76B8A4EF); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -133.33,
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
   "pitch": -37.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.87,
   "image": "this.AnimatedImageResource_CBBEFE33_DBF4_7BD9_41E2_D9F1C283E6DA",
   "pitch": -28.61,
   "yaw": -6.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C9796E73_D84F_B859_41D4_404D928E10A1",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257, this.camera_A77F6EB6_80F2_3E46_41BD_056F7BF8E256); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.67,
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
   "pitch": -28.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.1,
   "image": "this.AnimatedImageResource_CBBEDE33_DBF4_7BD9_41C1_0EE593463AC1",
   "pitch": -14.48,
   "yaw": -5.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CB7B1929_DBCD_B9C9_4190_4B17B6CD415F",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.1,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.69,
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
   "pitch": -14.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.01,
   "image": "this.AnimatedImageResource_04653CA7_1CC3_AC1B_416F_AC2F62712B19",
   "pitch": -17.99,
   "yaw": 87.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0C4BF08F_1CC2_F42B_41AE_947B537959EC",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A, this.camera_A5BB236B_80F2_26CD_41C5_BEED83AF978F); this.setMediaBehaviour(this.playList_A7BE2E5B_80F2_3ECE_41C9_C170A5DD043C, 0, this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.01,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.56,
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
   "pitch": -17.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "items": [
  {
   "hfov": 7.13,
   "image": "this.AnimatedImageResource_047ADCA8_1CC3_AC15_41A5_023D7AF87591",
   "pitch": -14.61,
   "yaw": 104.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_0C1C9534_1CC3_BC7E_41B0_823D8C40AD5B",
 "maps": [
  {
   "hfov": 7.13,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.83,
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
   "pitch": -14.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "room"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.39,
   "image": "this.AnimatedImageResource_5E9B2C5C_51A5_C28E_41C9_8B5B24DCB3D4",
   "pitch": -6.49,
   "yaw": 40.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5F030C54_51A6_C29E_41BB_548B61AB8BAF",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E, this.camera_A5A4E380_80F2_263B_41B0_4931CFEA28BC); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 40.96,
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
   "pitch": -6.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "lab"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.4,
   "image": "this.AnimatedImageResource_4F54607B_5951_EBA7_41C5_847E95E016FD",
   "pitch": -8.31,
   "yaw": -72.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4BC50FA8_5951_54A1_41D3_745A0BF479F9",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06F70832_1CC6_5475_41B9_88088342E615, this.camera_A5915396_80F2_2647_41D5_2D33E2666958); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -72.82,
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
   "pitch": -8.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.13,
   "image": "this.AnimatedImageResource_0467FC9C_1CC3_AC2D_41AA_ECAE0E0D88CE",
   "pitch": -22.53,
   "yaw": -11.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E86B260_1CC2_5415_41AD_9DB2E690A412",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38, this.camera_9B0FE06E_80F2_22C6_41CE_848C814EBA1B); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.13,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.92,
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
   "pitch": -22.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "exit"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.31,
   "image": "this.AnimatedImageResource_04679C9D_1CC3_AC2F_4182_EB9FDDA8C715",
   "pitch": -18.17,
   "yaw": -31.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E217EC7_1CC2_AC1B_41A2_4AFEA4BE1FEE",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_A7CFBE3B_80F2_3E4E_417B_51A845D9B228, 0, this.panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -31.3,
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
   "pitch": -18.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.41,
   "image": "this.AnimatedImageResource_04671C9F_1CC3_AC2B_4196_757ACAE0CCBC",
   "pitch": -14.96,
   "yaw": 89.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0FF3BACF_1CC2_B42B_41A0_A7FAE33133DD",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE, this.camera_9B09905A_80F2_22CE_41D6_8C602249BA9F); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.41,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.31,
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
   "pitch": -14.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.59,
   "image": "this.AnimatedImageResource_48BFB9AD_5EA1_A5C7_41BA_A5C4FB4FDB84",
   "pitch": -16.81,
   "yaw": 131.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5054800F_5EA1_62C4_41B6_4CD046120DA0",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88, this.camera_A4C89123_80F2_227E_4190_A4F981CDA7D8); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 131.63,
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
   "pitch": -16.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.51,
   "image": "this.AnimatedImageResource_48BF19AD_5EA1_A5C7_4187_9BBF9ADEB046",
   "pitch": -19.04,
   "yaw": -114.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4F56E61F_5EA3_6EC3_41D2_3FE754C1A964",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303, this.camera_A4C0A10F_80F2_2246_41B0_F5231A843A1E); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -114.75,
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
   "pitch": -19.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.44,
   "image": "this.AnimatedImageResource_4D812EEA_5EA7_7F4D_41C5_A5DAD2575248",
   "pitch": -33.24,
   "yaw": 62.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4DD5740D_5EA7_62C4_41BE_6F175F07F134",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.11,
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
   "pitch": -33.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.23,
   "image": "this.AnimatedImageResource_35FA3C78_2065_351D_41A7_634F59F636AE",
   "pitch": -12.87,
   "yaw": 136.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3116E04A_2067_0D7D_41B0_C529932C4FE5",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069, this.camera_A4FFA0AA_80F2_224F_418D_9CBD2BA16C05); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.23,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 136.48,
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
   "pitch": -12.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.17,
   "image": "this.AnimatedImageResource_35FAEC78_2065_351D_41B6_B122577A14EF",
   "pitch": -32.67,
   "yaw": 59.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_33332EDA_207B_151C_41BF_FD288D6D8ABC",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_A7CFBE3B_80F2_3E4E_417B_51A845D9B228, 0, this.panorama_31002405_206D_14F7_41BB_D64EF95E9EA6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.17,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 59.5,
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
   "pitch": -32.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.57,
   "image": "this.AnimatedImageResource_4F9E6E64_5B8E_367C_41A0_6945557D15B9",
   "pitch": -20.62,
   "yaw": -126.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_49A50D7E_5B82_7A4C_41C8_07E8F76F624B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7, this.camera_A4E470BE_80F2_2247_41D9_B07F651A47A2); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.57,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -126.3,
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
   "pitch": -20.62
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.67,
   "image": "this.AnimatedImageResource_41B41363_51E5_C6BA_41C6_93FEAB0B2FDB",
   "pitch": -14.39,
   "yaw": 152.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C99CD076_D85D_A85B_41CD_B698CA2350D4",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9, this.camera_A4BEC161_80F2_22FA_41B5_9FE6D7195F0D); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 152.21,
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
   "pitch": -14.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.76,
   "image": "this.AnimatedImageResource_41B7C364_51E5_C6BE_41C3_C2B0302F1820",
   "pitch": -5.85,
   "yaw": -81.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_41A4D778_51EE_CE96_41BE_50A3CD10D0D6",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A, this.camera_A4A74175_80F2_22DA_41BB_B1AC5051EABC); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 10.76,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -81.18,
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
   "pitch": -5.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.82,
   "image": "this.AnimatedImageResource_4A3218F0_5957_3CA1_41BE_874C62E6DA8C",
   "pitch": -15.68,
   "yaw": -179.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4B548063_5951_6BA7_41D4_10492913848C",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C, this.camera_A4AFA189_80F2_224A_41E0_55C434E1F061); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.5,
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
   "pitch": -15.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.51,
   "image": "this.AnimatedImageResource_00A69BEC_1D47_EBED_4196_6A260FFD97AC",
   "pitch": -18.81,
   "yaw": 145.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_06DA344B_1D42_BC2A_41B0_4E0D0F945F56",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C, this.camera_A57323D2_80F2_25DF_41D8_C3BEAF39A7EC); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 145.9,
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
   "pitch": -18.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.44,
   "image": "this.AnimatedImageResource_0464BCA0_1CC3_AC15_41A7_DA944F2EDE9A",
   "pitch": -14.95,
   "yaw": -7.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0F859363_1CC6_541B_41B9_902F7001E3A4",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.02,
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
   "pitch": -14.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.81,
   "image": "this.AnimatedImageResource_074F09BE_1CC2_F46D_41B9_4421AA2B440F",
   "pitch": -10.81,
   "yaw": 18.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0B9CA677_1CC6_5CFA_41B6_ED4217C7B292",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A, this.camera_A4EC10D3_80F2_23DD_41DF_FB0013B25818); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.01,
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
   "pitch": -10.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.53,
   "image": "this.AnimatedImageResource_074FE9BE_1CC2_F46D_41BB_FF4E1F16539A",
   "pitch": -19.74,
   "yaw": -155.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0B2E370B_1CC6_7C2B_41B3_B9D2D032E413",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.53,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.43,
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
   "pitch": -19.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.33,
   "image": "this.AnimatedImageResource_01C673B4_1CC6_747D_4188_0AD697DEDB0B",
   "pitch": -12.58,
   "yaw": 125.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_041199A1_1CC2_B417_41B7_31E298B1F1D7",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5, this.camera_A45F0230_80F2_265A_41AA_B4FFA4EF3FB9); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.33,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 125.74,
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
   "pitch": -12.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "exit"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.5,
   "image": "this.AnimatedImageResource_4F5CF06B_5951_EBA7_41C0_F140F00842BF",
   "pitch": -3.14,
   "yaw": -135.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4BD91A17_5951_5F60_41D4_761933E89161",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA, this.camera_A452121A_80F2_264E_41C9_0A824E23034B); this.setMediaBehaviour(this.playList_A7B73E48_80F2_3ECA_4192_0E0E07B3D8D9, 0, this.panorama_06F70832_1CC6_5475_41B9_88088342E615)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.9,
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
   "pitch": -3.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.01,
   "image": "this.AnimatedImageResource_48BE79AD_5EA1_A5C7_41C7_11E5010C73DB",
   "pitch": -19.58,
   "yaw": 133.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4F0C79BB_5EAF_65CC_41BC_DA9A8BDD6E66",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303, this.camera_9B1E6031_80F2_225A_41D2_052819FA28BF); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.01,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.3,
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
   "pitch": -19.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.62,
   "image": "this.AnimatedImageResource_48A1D9AD_5EA1_A5C7_41CB_00948C8BF977",
   "pitch": -20.13,
   "yaw": -124.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4C736B31_5EA1_A6DC_41D7_3B6D484C18E6",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88, this.camera_9B057046_80F2_22C6_41E0_02CADEDBE65B); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -124.77,
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
   "pitch": -20.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.78,
   "image": "this.AnimatedImageResource_CB891890_D834_B8D7_418F_F7AA6C13E1F2",
   "pitch": -22.77,
   "yaw": -106.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D61D10E2_D853_A87A_41E5_1BDAA2591CBD",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7, this.camera_A57D53E7_80F2_25C6_41C1_A2A5BC522922); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.72,
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
   "pitch": -22.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.41,
   "image": "this.AnimatedImageResource_CB896890_D834_B8D7_41D6_CA0E62F93F52",
   "pitch": -11.9,
   "yaw": -12.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D6745D2C_D85D_B9CF_41D2_DA64D79B15DE",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.41,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.82,
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
   "pitch": -11.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "stairs"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.01,
   "image": "this.AnimatedImageResource_04638C95_1CC3_AC3F_41AE_AE61FD270B1E",
   "pitch": -9.03,
   "yaw": -155.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_106E3C29_1CC3_AC17_4192_CD36BA170A74",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817, this.camera_A56933FC_80F2_25CA_41D0_C22F3DD6E48A); this.setMediaBehaviour(this.playList_A7CFBE3B_80F2_3E4E_417B_51A845D9B228, 0, this.panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.01,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.18,
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
   "pitch": -9.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.49,
   "image": "this.AnimatedImageResource_04611C9A_1CC3_AC35_41BC_5134F98D9565",
   "pitch": -21.43,
   "yaw": 30.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0D6E71DB_1CCF_D42B_41B2_71FEBDA8B4CE",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A, this.camera_A5E5D303_80F2_263D_41D6_317A01F8A809); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.59,
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
   "pitch": -21.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.84,
   "image": "this.AnimatedImageResource_0466BC9B_1CC3_AC2B_41A8_A87D98218969",
   "pitch": -13.01,
   "yaw": -42.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0D36DD0E_1CC1_EC2D_41B4_5F30099ED763",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -42.05,
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
   "pitch": -13.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.98,
   "image": "this.AnimatedImageResource_04665C9B_1CC3_AC2B_41B9_6E63D77F0792",
   "pitch": -7.66,
   "yaw": -54.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0EF244DF_1CC1_FC2B_4199_823A924DD830",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.5,
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
   "pitch": -7.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "exit"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.62,
   "image": "this.AnimatedImageResource_5E3C9946_51AD_C2FA_41BF_07F95A8CDF05",
   "pitch": 0.07,
   "yaw": 179.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_41226A14_51AA_469E_41D0_1E336FB07AB7",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817, this.camera_A5EEE318_80F2_264A_41CF_D2370453ADF6); this.setMediaBehaviour(this.playList_A7CFBE3B_80F2_3E4E_417B_51A845D9B228, 0, this.panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.96,
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
   "pitch": 0.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01 Right"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.68,
   "image": "this.AnimatedImageResource_5E877C52_51A5_C29A_41C6_FA114E0AD050",
   "pitch": -5.13,
   "yaw": -150.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_5FE32850_51AE_4296_4183_C0B2B17E494B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9, this.camera_A5DBF32D_80F2_264A_41C0_BB4051EEC48F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -150.34,
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
   "pitch": -5.13
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_00A5EBEB_1D47_EBEB_41BA_D2A93D492774",
 "levels": [
  {
   "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4CD91902_5937_3D60_41B5_EDFD006C797C",
 "levels": [
  {
   "url": "media/panorama_01AC9AE2_1D3E_B41A_41A9_5F7CDF6D514E_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0C27D9B5_1FE7_020F_41B2_0DAD448500F7",
 "levels": [
  {
   "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0C2469B5_1FE7_020F_41B9_97424031E9E1",
 "levels": [
  {
   "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0DCBCD94_1FFB_020D_4198_8C9344B3903F",
 "levels": [
  {
   "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0DCB8D94_1FFB_020D_41B6_0919D71F551C",
 "levels": [
  {
   "url": "media/panorama_DED81BCF_D372_E3A3_41B6_F289C1DCE14D_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04643CA5_1CC3_AC1F_4198_E2F3C8A4DFF6",
 "levels": [
  {
   "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0465DCA6_1CC3_AC1D_41B1_3F31AB3B180F",
 "levels": [
  {
   "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5E9C7C5B_51A5_C28A_41D0_F4103802F1E5",
 "levels": [
  {
   "url": "media/panorama_11E3D894_1CCE_B43E_41B4_83083F1C540A_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 510
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_00A55BEB_1D47_EBEB_41B7_7BA8EDBFD0BA",
 "levels": [
  {
   "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_00A52BEC_1D47_EBED_41AE_511F9E646EDC",
 "levels": [
  {
   "url": "media/panorama_04867EC7_1D3E_EC1A_41BC_2970966F133C_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_CB28E552_D875_A85B_41E2_7F28357EECE3",
 "levels": [
  {
   "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_34F7E0B0_206B_0D2C_41A0_7434180667C1",
 "levels": [
  {
   "url": "media/panorama_D827ACFC_D371_2565_41B6_427B2920453F_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F8AABEB_5953_3CA7_41A1_8D19899E76B3",
 "levels": [
  {
   "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F8D1BEB_5953_3CA7_41D1_492A1F28C2FF",
 "levels": [
  {
   "url": "media/panorama_DD56300B_D7CC_67C9_41D5_351FA162FEC7_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_48C62002_5C7E_C9B4_41C7_5B426888C14F",
 "levels": [
  {
   "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_48C64002_5C7E_C9B4_41C0_F3930B6A5C72",
 "levels": [
  {
   "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_48C9E006_5C7E_C9BC_4137_0C3C00F76534",
 "levels": [
  {
   "url": "media/panorama_484AE12D_5B82_CBCC_41BC_938A1F4DE069_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_CB88D890_D834_B8D7_41DF_1EE8243FF621",
 "levels": [
  {
   "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_CB881890_D834_B8D7_41DA_2ABC282EAAB1",
 "levels": [
  {
   "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_CB898890_D834_B8D7_41B6_8688EF359BAC",
 "levels": [
  {
   "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_CB89B890_D834_B8D7_41D1_A757496AED73",
 "levels": [
  {
   "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_046CEC90_1CC3_AC36_41B1_8DA849568C1E",
 "levels": [
  {
   "url": "media/panorama_DCC0E215_D7CC_6BD9_41C8_0A10CB9A204A_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_48BF69AD_5EA1_A5C7_41D7_2B681D265D17",
 "levels": [
  {
   "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_48BEE9AD_5EA1_A5C7_41B3_A308A7BB2E46",
 "levels": [
  {
   "url": "media/panorama_55B73256_5EA2_E745_41C6_FBFBC0441A88_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04644CA1_1CC3_AC17_41B2_D1A31F0B6DDB",
 "levels": [
  {
   "url": "media/panorama_1164D068_1CCE_7415_41AB_7D9DC966BB14_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0465ACA2_1CC3_AC15_41B4_BA414A1E6916",
 "levels": [
  {
   "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04649CA4_1CC3_AC1D_419C_3A627AA232BA",
 "levels": [
  {
   "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5E59AAE2_51A6_47BA_41C6_712657CA59B5",
 "levels": [
  {
   "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_41FB8B08_51E5_C676_41C3_1BD2395B22C4",
 "levels": [
  {
   "url": "media/panorama_11DF8524_1CCE_5C1E_41B3_7228B100F817_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_54AD5C43_5B85_D9B4_4145_AFD88F304A67",
 "levels": [
  {
   "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4ED34EC2_5BBE_36B4_419D_9380A013EBB2",
 "levels": [
  {
   "url": "media/panorama_306F20CD_206D_0D74_41B7_FBEDDB6F8112_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4125800C_51EA_428E_41D3_5B9256F7B9A2",
 "levels": [
  {
   "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_41B77364_51E5_C6BE_41C3_9CD14DC18B0A",
 "levels": [
  {
   "url": "media/panorama_DD566D56_D7CC_D85B_4185_2A6C2160BCC9_0_HS_3_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_01C173B5_1CC6_747F_41B9_D8CBD09EAE4D",
 "levels": [
  {
   "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_01C1C3B5_1CC6_747F_41B5_593C5F5188A4",
 "levels": [
  {
   "url": "media/panorama_0B320B5E_1CC6_B42D_41B8_67083FCB33A5_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4ED2DEC2_5BBE_36B4_41D3_0AB8A26CA022",
 "levels": [
  {
   "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4ED26EC2_5BBE_36B4_41D6_29691C982E42",
 "levels": [
  {
   "url": "media/panorama_306E14AD_206D_1534_4174_AFBC1BF4E6B7_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_48A159AD_5EA1_A5C7_41D3_85C1439011E3",
 "levels": [
  {
   "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_48A0A9AD_5EA1_A5C7_41D4_E5B5E1C620E3",
 "levels": [
  {
   "url": "media/panorama_5587B9EE_5EA2_A545_41B8_385B8B4E4303_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_CBBEFE33_DBF4_7BD9_41E2_D9F1C283E6DA",
 "levels": [
  {
   "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_CBBEDE33_DBF4_7BD9_41C1_0EE593463AC1",
 "levels": [
  {
   "url": "media/panorama_DD51C4E0_D7CC_6877_41E1_A2BBBDF0B58C_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04653CA7_1CC3_AC1B_416F_AC2F62712B19",
 "levels": [
  {
   "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_047ADCA8_1CC3_AC15_41A5_023D7AF87591",
 "levels": [
  {
   "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5E9B2C5C_51A5_C28E_41C9_8B5B24DCB3D4",
 "levels": [
  {
   "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F54607B_5951_EBA7_41C5_847E95E016FD",
 "levels": [
  {
   "url": "media/panorama_11E4CDCE_1CCE_EC2D_41AE_2CB522E56BEA_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0467FC9C_1CC3_AC2D_41AA_ECAE0E0D88CE",
 "levels": [
  {
   "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04679C9D_1CC3_AC2F_4182_EB9FDDA8C715",
 "levels": [
  {
   "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04671C9F_1CC3_AC2B_4196_757ACAE0CCBC",
 "levels": [
  {
   "url": "media/panorama_0C9FD644_1CC6_7C1D_41B5_49E7A2C6C25A_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_48BFB9AD_5EA1_A5C7_41BA_A5C4FB4FDB84",
 "levels": [
  {
   "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_48BF19AD_5EA1_A5C7_4187_9BBF9ADEB046",
 "levels": [
  {
   "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4D812EEA_5EA7_7F4D_41C5_A5DAD2575248",
 "levels": [
  {
   "url": "media/panorama_5565893E_5EA2_A2C4_41CE_4EC67DAD9FF5_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_35FA3C78_2065_351D_41A7_634F59F636AE",
 "levels": [
  {
   "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_35FAEC78_2065_351D_41B6_B122577A14EF",
 "levels": [
  {
   "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F9E6E64_5B8E_367C_41A0_6945557D15B9",
 "levels": [
  {
   "url": "media/panorama_31002405_206D_14F7_41BB_D64EF95E9EA6_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_41B41363_51E5_C6BA_41C6_93FEAB0B2FDB",
 "levels": [
  {
   "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_41B7C364_51E5_C6BE_41C3_C2B0302F1820",
 "levels": [
  {
   "url": "media/panorama_DD518914_D7CC_F9DF_41D4_023414A50C8C_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4A3218F0_5957_3CA1_41BE_874C62E6DA8C",
 "levels": [
  {
   "url": "media/panorama_DD522781_D7CF_A8B9_41B3_9CCE064A8257_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_00A69BEC_1D47_EBED_4196_6A260FFD97AC",
 "levels": [
  {
   "url": "media/panorama_0484455C_1D3E_DC2D_41B4_2B16620C7620_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0464BCA0_1CC3_AC15_41A7_DA944F2EDE9A",
 "levels": [
  {
   "url": "media/panorama_0C9C7D30_1CC1_AC76_41BB_7ED71F9C0994_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_074F09BE_1CC2_F46D_41B9_4421AA2B440F",
 "levels": [
  {
   "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_074FE9BE_1CC2_F46D_41BB_FF4E1F16539A",
 "levels": [
  {
   "url": "media/panorama_0C9C1B76_1CC6_54FD_41BA_FF6862FE5AEE_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_01C673B4_1CC6_747D_4188_0AD697DEDB0B",
 "levels": [
  {
   "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4F5CF06B_5951_EBA7_41C0_F140F00842BF",
 "levels": [
  {
   "url": "media/panorama_06F70832_1CC6_5475_41B9_88088342E615_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_48BE79AD_5EA1_A5C7_41C7_11E5010C73DB",
 "levels": [
  {
   "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_48A1D9AD_5EA1_A5C7_41CB_00948C8BF977",
 "levels": [
  {
   "url": "media/panorama_5589C6C5_5EA2_EF44_4166_8BAD0F194522_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_CB891890_D834_B8D7_418F_F7AA6C13E1F2",
 "levels": [
  {
   "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_CB896890_D834_B8D7_41D6_CA0E62F93F52",
 "levels": [
  {
   "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04638C95_1CC3_AC3F_41AE_AE61FD270B1E",
 "levels": [
  {
   "url": "media/panorama_DD6C0599_D7CC_A8C9_41E4_30E6FBA07889_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04611C9A_1CC3_AC35_41BC_5134F98D9565",
 "levels": [
  {
   "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0466BC9B_1CC3_AC2B_41A8_A87D98218969",
 "levels": [
  {
   "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04665C9B_1CC3_AC2B_41B9_6E63D77F0792",
 "levels": [
  {
   "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5E3C9946_51AD_C2FA_41BF_07F95A8CDF05",
 "levels": [
  {
   "url": "media/panorama_0D46B33B_1CC6_546B_4140_7C093EA87A38_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5E877C52_51A5_C29A_41C6_FA114E0AD050",
 "levels": [
  {
   "url": "media/panorama_DD51DF86_D7CC_B8BB_41C6_25B97A350B21_0_HS_1_0.png",
   "width": 536,
   "class": "ImageResourceLevel",
   "height": 804
  }
 ]
}],
 "horizontalAlign": "left",
 "data": {
  "name": "Player775"
 },
 "children": [
  "this.MainViewer"
 ],
 "id": "rootPlayer",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 20,
 "start": "this.init()",
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "verticalAlign": "top",
 "defaultVRPointer": "laser",
 "scripts": {
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "registerKey": function(key, value){  window[key] = value; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "unregisterKey": function(key){  delete window[key]; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "existsKey": function(key){  return key in window; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingLeft": 0,
 "downloadEnabled": false,
 "paddingRight": 0,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "borderRadius": 0,
 "gap": 10,
 "class": "Player",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
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
