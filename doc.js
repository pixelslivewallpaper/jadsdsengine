
var animationXMLpartA = "%3C%3Fxml%20version%3D%221.0%22%3F%3E%0A%3Cdoc%3E%0A%20%20%3Cbasic%20type%3D%22animations%22%3E%0A%20%20%20%20%3CscreenCanvasResolution%3E%0A%20%20%20%20%20%20%3Cwidth%3E420%3C%2Fwidth%3E%0A%20%20%20%20%20%20%3Cheight%3E480%3C%2Fheight%3E%0A%20%20%20%20%3C%2FscreenCanvasResolution%3E%0A%20%20%20%20%3CcanvasResolution%3E%0A%20%20%20%20%20%20%3CmaxWidth%3E620%3C%2FmaxWidth%3E%0A%20%20%20%20%20%20%3CmaxHeight%3E480%3C%2FmaxHeight%3E%0A%20%20%20%20%3C%2FcanvasResolution%3E%0A%20%20%20%20%3CbgColor%3E%23ffffffff%3C%2FbgColor%3E%0A%20%20%20%20%3Ccamera%3E%0A%20%20%20%20%20%20%3CautoHorizontalScroll%3Etrue%3C%2FautoHorizontalScroll%3E%0A%20%20%20%20%20%20%3CiniPositionInPixels%3E-150%3B0%3C%2FiniPositionInPixels%3E%0A%20%20%20%20%20%20%3CpixelsMove%3E-2%3C%2FpixelsMove%3E%0A%20%20%20%20%20%20%3CcameraSpeed%3E1%3C%2FcameraSpeed%3E%0A%20%20%20%20%3C%2Fcamera%3E%0A%20%20%3C%2Fbasic%3E";
var animationXMLpartB = "%20%20%3Cimages%3E%0A%20%20%20%20%3Cimage%3E%0A%20%20%20%20%20%20%3CfileName%3Earea.png%3C%2FfileName%3E%0A%20%20%20%20%20%20%3Cleft%3E214%3C%2Fleft%3E%0A%20%20%20%20%20%20%3Ctop%3E204%3C%2Ftop%3E%0A%20%20%20%20%3C%2Fimage%3E%0A%0A%0A%20%20%20%20%3Cimage%3E%0A%20%20%20%20%20%20%3Cframes%3E%0A%20%20%20%20%20%20%20%20%3CframeCollection%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cframe%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CfileName%3Edemo.png%3C%2FfileName%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fframe%3E%0A%20%20%20%20%20%20%20%20%3C%2FframeCollection%3E%0A%20%20%20%20%20%20%20%20%3CframeCollection%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cframe%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CfileName%3Edemo.png%3C%2FfileName%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CapplyAlterationsToThisFrame%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CalterationsToDo%3EFlipVertical%3C%2FalterationsToDo%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FapplyAlterationsToThisFrame%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fframe%3E%0A%20%20%20%20%20%20%20%20%3C%2FframeCollection%3E%0A%20%20%20%20%20%20%3C%2Fframes%3E%0A%20%20%20%20%20%20%3Cleft%3E414%3C%2Fleft%3E%0A%20%20%20%20%20%20%3Ctop%3E300%3C%2Ftop%3E%0A%20%20%20%20%20%20%3Cevents%3E%0A%20%20%20%20%20%20%20%20%3Cevent%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventType%3EDragAndDrop%3C%2FeventType%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CeventAction%3EDragAndDropMove%3C%2FeventAction%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FeventActions%3E%0A%20%20%20%20%20%20%20%20%3C%2Fevent%3E%0A%20%20%20%20%20%20%20%20%3Cevent%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventType%3EOnClickUp%3C%2FeventType%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CeventAction%3EEditPosition%3C%2FeventAction%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%3CnewCoordinates%3E262%3B256%3C%2FnewCoordinates%3E%0A%20%20%20%20%20%20%20%20%20%20%3CwhenIsInsideTheArea%3E214%3B204%3B405%3B395%3C%2FwhenIsInsideTheArea%3E%0A%20%20%20%20%20%20%20%20%3C%2Fevent%3E%0A%20%20%20%20%20%20%20%20%3Cevent%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventType%3EOnMouseOver%3C%2FeventType%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CeventAction%3EChangeFrameCollection%3C%2FeventAction%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%3CchangeFrameCollectionIndexTo%3E1%3C%2FchangeFrameCollectionIndexTo%3E%0A%20%20%20%20%20%20%20%20%3C%2Fevent%3E%0A%20%20%20%20%20%20%20%20%3Cevent%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventType%3EOnMouseOut%3C%2FeventType%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CeventAction%3EChangeFrameCollection%3C%2FeventAction%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%3CchangeFrameCollectionIndexTo%3E0%3C%2FchangeFrameCollectionIndexTo%3E%0A%20%20%20%20%20%20%20%20%3C%2Fevent%3E%0A%20%20%20%20%20%20%3C%2Fevents%3E%0A%20%20%20%20%3C%2Fimage%3E%0A%0A%0A%20%20%20%20%3Cimage%3E%0A%20%20%20%20%20%20%3CfileName%3Earea.png%3C%2FfileName%3E%0A%20%20%20%20%20%20%3CcreateBackgroundLayer%3E%0A%20%20%20%20%20%20%20%20%3CmaxWidth%3E500%3C%2FmaxWidth%3E%0A%20%20%20%20%20%20%20%20%3CmaxHeight%3E480%3C%2FmaxHeight%3E%0A%20%20%20%20%20%20%3C%2FcreateBackgroundLayer%3E%0A%20%20%20%20%20%20%3Cleft%3E204%3C%2Fleft%3E%0A%20%20%20%20%20%20%3Ctop%3E54%3C%2Ftop%3E%0A%20%20%20%20%3C%2Fimage%3E%0A%0A%0A%20%20%20%20%3Cimage%3E%0A%20%20%20%20%20%20%3Cframes%3E%0A%20%20%20%20%20%20%20%20%3CframeCollection%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cframe%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CfileName%3Edemo.png%3C%2FfileName%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fframe%3E%0A%20%20%20%20%20%20%20%20%3C%2FframeCollection%3E%0A%20%20%20%20%20%20%20%20%3CframeCollection%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cframe%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CfileName%3Edemo.png%3C%2FfileName%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CapplyAlterationsToThisFrame%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CalterationsToDo%3EFlipVertical%3C%2FalterationsToDo%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FapplyAlterationsToThisFrame%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fframe%3E%0A%20%20%20%20%20%20%20%20%3C%2FframeCollection%3E%0A%20%20%20%20%20%20%3C%2Fframes%3E%0A%20%20%20%20%20%20%3Cleft%3E100%3C%2Fleft%3E%0A%20%20%20%20%20%20%3Ctop%3E54%3C%2Ftop%3E%0A%20%20%20%20%20%20%3CcreateBackgroundLayer%3E%0A%20%20%20%20%20%20%20%20%3CmaxWidth%3E500%3C%2FmaxWidth%3E%0A%20%20%20%20%20%20%20%20%3CmaxHeight%3E480%3C%2FmaxHeight%3E%0A%20%20%20%20%20%20%3C%2FcreateBackgroundLayer%3E%0A%20%20%20%20%20%20%3Cevents%3E%0A%20%20%20%20%20%20%20%20%3Cevent%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventType%3EDragAndDrop%3C%2FeventType%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CeventAction%3EDragAndDropMove%3C%2FeventAction%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FeventActions%3E%0A%20%20%20%20%20%20%20%20%3C%2Fevent%3E%0A%20%20%20%20%20%20%20%20%3Cevent%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventType%3EOnClickUp%3C%2FeventType%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CeventAction%3EEditPosition%3C%2FeventAction%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%3CnewCoordinates%3E252%3B102%3C%2FnewCoordinates%3E%0A%20%20%20%20%20%20%20%20%20%20%3CwhenIsInsideTheArea%3E204%3B54%3B395%3B245%3C%2FwhenIsInsideTheArea%3E%0A%20%20%20%20%20%20%20%20%3C%2Fevent%3E%0A%20%20%20%20%20%20%20%20%3Cevent%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventType%3EOnMouseOver%3C%2FeventType%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CeventAction%3EChangeFrameCollection%3C%2FeventAction%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%3CchangeFrameCollectionIndexTo%3E1%3C%2FchangeFrameCollectionIndexTo%3E%0A%20%20%20%20%20%20%20%20%3C%2Fevent%3E%0A%20%20%20%20%20%20%20%20%3Cevent%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventType%3EOnMouseOut%3C%2FeventType%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CeventAction%3EChangeFrameCollection%3C%2FeventAction%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%3CchangeFrameCollectionIndexTo%3E0%3C%2FchangeFrameCollectionIndexTo%3E%0A%20%20%20%20%20%20%20%20%3C%2Fevent%3E%0A%20%20%20%20%20%20%3C%2Fevents%3E%0A%20%20%20%20%3C%2Fimage%3E%0A%20%20%3C%2Fimages%3E";
var animationXMLpartC = "%3C%2Fdoc%3E";

var animationXMLBpartA = "%3C%3Fxml%20version%3D%221.0%22%3F%3E%0A%3Cdoc%3E%0A%20%20%3Cbasic%20type%3D%22animations%22%3E%0A%20%20%20%20%3CscreenCanvasResolution%3E%0A%20%20%20%20%20%20%3Cwidth%3E256%3C%2Fwidth%3E%0A%20%20%20%20%20%20%3Cheight%3E224%3C%2Fheight%3E%0A%20%20%20%20%3C%2FscreenCanvasResolution%3E%0A%20%20%20%20%3CcanvasResolution%3E%0A%20%20%20%20%20%20%3CmaxWidth%3E256%3C%2FmaxWidth%3E%0A%20%20%20%20%20%20%3CmaxHeight%3E224%3C%2FmaxHeight%3E%0A%20%20%20%20%3C%2FcanvasResolution%3E%0A%20%20%20%20%3CbgColor%3E%23ff000000%3C%2FbgColor%3E%0A%20%20%3C%2Fbasic%3E%0A%20%20%3Cimages%3E";
var animationXMLBpartB = "%20%20%20%20%3Cimage%3E%0A%20%20%20%20%20%20%3Cframes%3E%0A%20%20%20%20%20%20%20%20%3CcolorCycling%3E%0A%20%20%20%20%20%20%20%20%20%20%3CfileName%3Ecycling.png%3C%2FfileName%3E%0A%20%20%20%20%20%20%20%20%20%20%3CbasicPaletteColor%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20255%2C255%2C0%2C0-%0A%20%20%20%20%20%20%20%20%20%20%20%20255%2C239%2C173%2C0-%0A%20%20%20%20%20%20%20%20%20%20%20%20255%2C222%2C123%2C0-%0A%20%20%20%20%20%20%20%20%20%20%20%20255%2C173%2C49%2C0-%0A%20%20%20%20%20%20%20%20%20%20%20%20255%2C173%2C0%2C0-%0A%20%20%20%20%20%20%20%20%20%20%20%20255%2C165%2C0%2C0-%0A%20%20%20%20%20%20%20%20%20%20%20%20255%2C156%2C0%2C0-%0A%20%20%20%20%20%20%20%20%20%20%20%20255%2C132%2C0%2C0%0A%20%20%20%20%20%20%20%20%20%20%3C%2FbasicPaletteColor%3E%0A%20%20%20%20%20%20%20%20%20%20%3C!--%3CbackwardAnimation%3Etrue%3C%2FbackwardAnimation%3E--%3E%0A%20%20%20%20%20%20%20%20%3C%2FcolorCycling%3E%0A%20%20%20%20%20%20%3C%2Fframes%3E%0A%20%20%20%20%20%20%3Cspeed%3E4%3C%2Fspeed%3E%0A%20%20%20%20%3C%2Fimage%3E";
var animationXMLBpartC = "%20%20%3C%2Fimages%3E%0A%3C%2Fdoc%3E";

var animationXMLCpartA = "%3C%3Fxml%20version%3D%221.0%22%3F%3E%0A%3Cdoc%3E%0A%20%20%3Cbasic%20type%3D%22animations%22%3E%0A%20%20%20%20%3CscreenCanvasResolution%3E%0A%20%20%20%20%20%20%3Cwidth%3E400%3C%2Fwidth%3E%0A%20%20%20%20%20%20%3Cheight%3E250%3C%2Fheight%3E%0A%20%20%20%20%3C%2FscreenCanvasResolution%3E%0A%20%20%20%20%3CcanvasResolution%3E%0A%20%20%20%20%20%20%3CmaxWidth%3E400%3C%2FmaxWidth%3E%0A%20%20%20%20%20%20%3CmaxHeight%3E250%3C%2FmaxHeight%3E%0A%20%20%20%20%3C%2FcanvasResolution%3E%0A%20%20%20%20%3CbgColor%3E%23ff000000%3C%2FbgColor%3E%0A%20%20%3C%2Fbasic%3E%0A%20%20%3Cimages%3E%0A%20%20%20%20%3Cimage%3E%0A%20%20%20%20%20%20%3CfileName%3Ebase.png%3C%2FfileName%3E%0A%20%20%20%20%3C%2Fimage%3E";
var animationXMLCpartB = "%20%20%20%20%3Cimage%3E%0A%20%20%20%20%20%20%3CfileName%3Esquare.png%3C%2FfileName%3E%0A%20%20%20%20%20%20%3Cleft%3E126%3C%2Fleft%3E%0A%20%20%20%20%20%20%3Ctop%3E51%3C%2Ftop%3E%0A%20%20%20%20%20%20%3CimagePropertiesAnimation%3E%0A%20%20%20%20%20%20%20%20%3CpropetiesToAnimate%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cproperty%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CpropertyName%3ERotation%3C%2FpropertyName%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CminimumDegreesValue%3E0%3C%2FminimumDegreesValue%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CmaximumDegreesValue%3E360%3C%2FmaximumDegreesValue%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CupdateDegreesValue%3E6%3C%2FupdateDegreesValue%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CcurrentDegreesValue%3E0%3C%2FcurrentDegreesValue%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CrotationSpeed%3E1%3C%2FrotationSpeed%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CanimationRotationAction%3EIncrease%3C%2FanimationRotationAction%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fproperty%3E%0A%20%20%20%20%20%20%20%20%3C%2FpropetiesToAnimate%3E%0A%20%20%20%20%20%20%3C%2FimagePropertiesAnimation%3E%0A%20%20%20%20%20%20%3Cevents%3E%0A%20%20%20%20%20%20%20%20%3Cevent%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventType%3EOnClickDown%3C%2FeventType%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CeventAction%3EChangePivot%3C%2FeventAction%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cpivot%3E0%3B0%3C%2Fpivot%3E%0A%20%20%20%20%20%20%20%20%3C%2Fevent%3E%0A%20%20%20%20%20%20%3C%2Fevents%3E%0A%20%20%20%20%3C%2Fimage%3E";
var animationXMLCpartC = "%20%20%3C%2Fimages%3E%0A%3C%2Fdoc%3E";

var animationXMLDpartA = "%3C%3Fxml%20version%3D%221.0%22%3F%3E%0A%3Cdoc%3E%0A%20%20%3Cbasic%20type%3D%22animations%22%3E%0A%20%20%20%20%3CscreenCanvasResolution%3E%0A%20%20%20%20%20%20%3Cwidth%3E400%3C%2Fwidth%3E%0A%20%20%20%20%20%20%3Cheight%3E250%3C%2Fheight%3E%0A%20%20%20%20%3C%2FscreenCanvasResolution%3E%0A%20%20%20%20%3CcanvasResolution%3E%0A%20%20%20%20%20%20%3CmaxWidth%3E400%3C%2FmaxWidth%3E%0A%20%20%20%20%20%20%3CmaxHeight%3E250%3C%2FmaxHeight%3E%0A%20%20%20%20%3C%2FcanvasResolution%3E%0A%20%20%20%20%3CbgColor%3E%23ffff9c35%3C%2FbgColor%3E%0A%20%20%3C%2Fbasic%3E";
var animationXMLDpartB = "%20%20%3CaudioPlayers%3E%0A%20%20%20%20%3CaudioPlayer%3E%0A%20%20%20%20%20%20%3CplayerID%3EbackgroundAudio%3C%2FplayerID%3E%0A%20%20%20%20%20%20%3CaudioFile%3Esound.m4a%3C%2FaudioFile%3E%0A%20%20%20%20%20%20%3CautoPlay%3Efalse%3C%2FautoPlay%3E%0A%20%20%20%20%3C%2FaudioPlayer%3E%0A%20%20%3C%2FaudioPlayers%3E%0A%20%20%3Cimages%3E%0A%20%20%20%20%3Cimage%3E%0A%20%20%20%20%20%20%3CfileName%3Estop.png%3C%2FfileName%3E%0A%20%20%20%20%20%20%3Cleft%3E60%3C%2Fleft%3E%0A%20%20%20%20%20%20%3Ctop%3E85%3C%2Ftop%3E%0A%20%20%20%20%20%20%3Cevents%3E%0A%20%20%20%20%20%20%20%20%3Cevent%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventType%3EOnClickDown%3C%2FeventType%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CeventAction%3EStopAudio%3C%2FeventAction%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%3CaudioPlayer%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CplayerID%3EbackgroundAudio%3C%2FplayerID%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FaudioPlayer%3E%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%3C%2Fevent%3E%0A%20%20%20%20%20%20%3C%2Fevents%3E%0A%20%20%20%20%3C%2Fimage%3E%0A%20%20%20%20%3Cimage%3E%0A%20%20%20%20%20%20%3CfileName%3Eplay.png%3C%2FfileName%3E%0A%20%20%20%20%20%20%3Cleft%3E160%3C%2Fleft%3E%0A%20%20%20%20%20%20%3Ctop%3E85%3C%2Ftop%3E%0A%20%20%20%20%20%20%3Cevents%3E%0A%20%20%20%20%20%20%20%20%3Cevent%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventType%3EOnClickDown%3C%2FeventType%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CeventAction%3EPlayAudio%3C%2FeventAction%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%3CaudioPlayer%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CplayerID%3EbackgroundAudio%3C%2FplayerID%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FaudioPlayer%3E%0A%20%20%20%20%20%20%20%20%3C%2Fevent%3E%0A%20%20%20%20%20%20%3C%2Fevents%3E%0A%20%20%20%20%3C%2Fimage%3E%0A%20%20%20%20%3Cimage%3E%0A%20%20%20%20%20%20%3CfileName%3Epause.png%3C%2FfileName%3E%0A%20%20%20%20%20%20%3Cleft%3E260%3C%2Fleft%3E%0A%20%20%20%20%20%20%3Ctop%3E85%3C%2Ftop%3E%0A%20%20%20%20%20%20%3Cevents%3E%0A%20%20%20%20%20%20%20%20%3Cevent%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventType%3EOnClickDown%3C%2FeventType%3E%0A%20%20%20%20%20%20%20%20%20%20%3CeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CeventAction%3EPauseAudio%3C%2FeventAction%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FeventActions%3E%0A%20%20%20%20%20%20%20%20%20%20%3CaudioPlayer%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CplayerID%3EbackgroundAudio%3C%2FplayerID%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FaudioPlayer%3E%20%20%0A%20%20%20%20%20%20%20%20%3C%2Fevent%3E%0A%20%20%20%20%20%20%3C%2Fevents%3E%0A%20%20%20%20%3C%2Fimage%3E%0A%20%20%3C%2Fimages%3E";
var animationXMLDpartC = "%3C%2Fdoc%3E";

var animationXMLEpartA = "%3C%3Fxml%20version%3D%221.0%22%3F%3E%0A%3Cdoc%3E";
var animationXMLEpartB = "%20%20%3Cbasic%20type%3D%22animations%22%3E%0A%20%20%20%20%3CscreenCanvasResolution%3E%0A%20%20%20%20%20%20%3Cwidth%3E240%3C%2Fwidth%3E%0A%20%20%20%20%20%20%3Cheight%3E360%3C%2Fheight%3E%0A%20%20%20%20%3C%2FscreenCanvasResolution%3E%0A%20%20%20%20%3CcanvasResolution%3E%0A%20%20%20%20%20%20%3CmaxWidth%3E144%3C%2FmaxWidth%3E%0A%20%20%20%20%20%20%3CmaxHeight%3E72%3C%2FmaxHeight%3E%0A%20%20%20%20%3C%2FcanvasResolution%3E%0A%20%20%20%20%3CbgColor%3E%23ff000000%3C%2FbgColor%3E%0A%20%20%20%20%3Ccamera%3E%0A%20%20%20%20%20%20%3CautoHorizontalScroll%3Etrue%3C%2FautoHorizontalScroll%3E%0A%20%20%20%20%20%20%3CiniPosition%3E0%3B0%3C%2FiniPosition%3E%0A%20%20%20%20%20%20%3CpixelsMove%3E2%3C%2FpixelsMove%3E%0A%20%20%20%20%20%20%3CcameraSpeed%3E1%3C%2FcameraSpeed%3E%0A%20%20%20%20%3C%2Fcamera%3E%0A%20%20%3C%2Fbasic%3E%0A%20%20%3Cimages%3E%0A%20%20%20%20%3Cimage%3E%0A%20%20%20%20%20%20%3CfileName%3ERushb0.png%3C%2FfileName%3E%0A%20%20%20%20%20%20%3CcreateBackgroundLayer%3E%0A%20%20%20%20%20%20%20%20%3CmaxWidth%3E80%3C%2FmaxWidth%3E%0A%20%20%20%20%20%20%20%20%3CmaxHeight%3E72%3C%2FmaxHeight%3E%0A%20%20%20%20%20%20%3C%2FcreateBackgroundLayer%3E%0A%20%20%20%20%3C%2Fimage%3E%0A%20%20%20%20%3Cimage%3E%0A%20%20%20%20%20%20%3CfileName%3ERushb1.png%3C%2FfileName%3E%0A%20%20%20%20%3C%2Fimage%3E%0A%20%20%3C%2Fimages%3E";
var animationXMLEpartC = "%3C%2Fdoc%3E";

var animationXMLFpartA = "%3C%3Fxml%20version%3D%221.0%22%3F%3E%0A%3Cdoc%3E%0A%20%20%3Cbasic%20type%3D%22animations%22%3E%0A%20%20%20%20%3CscreenCanvasResolution%3E%0A%20%20%20%20%20%20%3Cwidth%3E256%3C%2Fwidth%3E%0A%20%20%20%20%20%20%3Cheight%3E1280%3C%2Fheight%3E%0A%20%20%20%20%3C%2FscreenCanvasResolution%3E%0A%20%20%20%20%3CcanvasResolution%3E%0A%20%20%20%20%20%20%3CmaxWidth%3E256%3C%2FmaxWidth%3E%0A%20%20%20%20%20%20%3CmaxHeight%3E1280%3C%2FmaxHeight%3E%0A%20%20%20%20%3C%2FcanvasResolution%3E%0A%20%20%20%20%3CbgColor%3E%2300ffffff%3C%2FbgColor%3E";
var animationXMLFpartB = "%3CpostEffects%3E%0A%09%3Ceffect%3E%0A%09%09%3CeffectName%3Emode7snes%3C%2FeffectName%3E%0A%09%09%3Cprofile%3Effvi%3C%2Fprofile%3E%0A%09%3C%2Feffect%3E%0A%09%3C!--%3Ceffect%3E%0A%09%09%3CeffectName%3EModifyColor%3C%2FeffectName%3E%0A%09%09%3CmodifyColorType%3EGameBoy%3C%2FmodifyColorType%3E%0A%09%3C%2Feffect%3E--%3E%0A%3C%2FpostEffects%3E";
var animationXMLFpartC = "%20%20%3C%2Fbasic%3E%0A%20%20%3Cimages%3E%0A%20%20%20%20%3Cimage%3E%0A%20%20%20%20%20%20%3CfileName%3Eff3map.png%3C%2FfileName%3E%0A%20%20%20%20%20%20%3CmoveEndLessAnimation%3E%0A%20%20%20%20%20%20%20%20%3Cdirection%3EDown%3C%2Fdirection%3E%0A%20%20%20%20%20%20%20%20%3CpixelsMove%3E1%3C%2FpixelsMove%3E%0A%20%20%20%20%20%20%3C%2FmoveEndLessAnimation%3E%0A%20%20%20%20%20%20%3Cleft%3E0%3C%2Fleft%3E%0A%20%20%20%20%20%20%3Ctop%3E0%3C%2Ftop%3E%0A%20%20%20%20%20%20%3Cspeed%3E3%3C%2Fspeed%3E%0A%20%20%20%20%3C%2Fimage%3E%0A%20%20%3C%2Fimages%3E%0A%3C%2Fdoc%3E";

var jadsdsEngine = new JadsdsEngine('mycanvas');
var jadsdsEngineB = new JadsdsEngine('mycanvasb');
var jadsdsEngineC = new JadsdsEngine('mycanvasc');
var jadsdsEngineD = new JadsdsEngine('mycanvasd');
var jadsdsEngineE = new JadsdsEngine('mycanvase');
var jadsdsEngineF = new JadsdsEngine('mysubcanvas');

var jadsdsEngineMode7 = null;

window.onload = function () {
    document.getElementById("TextArea1").value = decodeURIComponent(animationXMLpartB);
    document.getElementById("TextArea2").value = decodeURIComponent(animationXMLBpartB);
    document.getElementById("TextArea3").value = decodeURIComponent(animationXMLCpartB);
    document.getElementById("TextArea4").value = decodeURIComponent(animationXMLDpartB);
    document.getElementById("TextArea5").value = decodeURIComponent(animationXMLEpartB);
    document.getElementById("TextArea6").value = decodeURIComponent(animationXMLFpartB);

    loadNewAnimationA("testd");
    loadNewAnimationB("colorcycling");
    loadNewAnimationC("rotationb");
    loadNewAnimationD("audiob");
    loadNewAnimationE("parallax");
    loadNewAnimationF("mode7d");
};

function loadNewAnimationA(nameAni) {
    jadsdsEngine.unloadAnimation();
    jadsdsEngine.loadAnimationByString = decodeURIComponent(animationXMLpartA) + document.getElementById("TextArea1").value + decodeURIComponent(animationXMLpartC);
    //jadsdsEngine.fixCanvasSize = false;
    jadsdsEngine.antiAlias = true;
    //jadsdsEngine.showFrameRate = true;
    jadsdsEngine.stopAnimationWhenIsNotVisible = true;
    jadsdsEngine.loadAnimation(nameAni);
}

function loadNewAnimationB(nameAni) {
    jadsdsEngineB.unloadAnimation();
    jadsdsEngineB.loadAnimationByString = decodeURIComponent(animationXMLBpartA) + document.getElementById("TextArea2").value + decodeURIComponent(animationXMLBpartC);
    //jadsdsEngineB.fixCanvasSize = false;
    jadsdsEngineB.antiAlias = true;
    //jadsdsEngineB.showFrameRate = true;
    jadsdsEngineB.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineB.loadAnimation(nameAni);
}

function loadNewAnimationC(nameAni) {
    jadsdsEngineC.unloadAnimation();
    jadsdsEngineC.loadAnimationByString = decodeURIComponent(animationXMLCpartA) + document.getElementById("TextArea3").value + decodeURIComponent(animationXMLCpartC);
    //jadsdsEngineC.fixCanvasSize = false;
    jadsdsEngineC.antiAlias = true;
    //jadsdsEngineC.showFrameRate = true;
    jadsdsEngineC.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineC.loadAnimation(nameAni);
}

function loadNewAnimationD(nameAni) {
    jadsdsEngineD.unloadAnimation();
    jadsdsEngineD.loadAnimationByString = decodeURIComponent(animationXMLDpartA) + document.getElementById("TextArea4").value + decodeURIComponent(animationXMLDpartC);
    //jadsdsEngineC.fixCanvasSize = false;
    jadsdsEngineC.antiAlias = true;
    //jadsdsEngineC.showFrameRate = true;
    jadsdsEngineD.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineD.loadAnimation(nameAni);
}

function loadNewAnimationE(nameAni) {
    jadsdsEngineE.unloadAnimation();
    jadsdsEngineE.loadAnimationByString = decodeURIComponent(animationXMLEpartA) + document.getElementById("TextArea5").value + decodeURIComponent(animationXMLEpartC);
    //jadsdsEngineE.fixCanvasSize = false;
    jadsdsEngineE.antiAlias = true;
    //jadsdsEngineE.showFrameRate = true;
    jadsdsEngineE.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineE.loadAnimation(nameAni);
}

function loadNewAnimationF(nameAni) {
    jadsdsEngineF.unloadAnimation();
    jadsdsEngineF.loadAnimationByString = decodeURIComponent(animationXMLFpartA) + document.getElementById("TextArea6").value + decodeURIComponent(animationXMLFpartC);
    jadsdsEngineF.fixCanvasSize = false;
    jadsdsEngineF.antiAlias = false;
    jadsdsEngineF.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineF.runFunctionAfterLoad = function () {
        mode7Main();
    }

    jadsdsEngineF.loadAnimation(nameAni);
}

function resetA() {
    document.getElementById("TextArea1").value = decodeURIComponent(animationXMLpartB);
    loadNewAnimationA('testd');
}

function resetB() {
    document.getElementById("TextArea2").value = decodeURIComponent(animationXMLBpartB);
    loadNewAnimationB('colorcycling');
}

function resetC() {
    document.getElementById("TextArea3").value = decodeURIComponent(animationXMLCpartB);
    loadNewAnimationC('rotationb');
}

function resetD() {
    document.getElementById("TextArea4").value = decodeURIComponent(animationXMLDpartB);
    loadNewAnimationD('audiob');
}

function resetE() {
    document.getElementById("TextArea5").value = decodeURIComponent(animationXMLEpartB);
    loadNewAnimationE('parallax');
}

function resetF() {
    document.getElementById("TextArea6").value = decodeURIComponent(animationXMLFpartB);
    loadNewAnimationF('mode7d');
}


function mode7Start() {

}

function mode7Main() {
    if (jadsdsEngineMode7 == null) {
        jadsdsEngineMode7 = new JadsdsEngine('mycanvasf');
        jadsdsEngineMode7.antiAlias = false;
        jadsdsEngineMode7.fixCanvasSize = false;
        jadsdsEngineMode7.stopAnimationWhenIsNotVisible = true;
        jadsdsEngineMode7.loadAnimation("mode7c");
    }
}