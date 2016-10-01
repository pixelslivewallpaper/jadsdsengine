
var jadsdsEngine;

window.onload = function () {
    loadNewAnimation(getRandomAnimation());

    rotationAni();
    multiAni();
    phoneAnimation();
    examples();

    document.getElementById("TextArea5").value = decodeURIComponent(animationXMLEpartB);
    loadNewAnimationE();
    loadHelpUS("sgagb");
};

function loadNewAnimation(nameAni) {
    jadsdsEngine = new JadsdsEngine('mycanvas');
    jadsdsEngine.fixCanvasSize = false;
    jadsdsEngine.antiAlias = true;
    jadsdsEngine.stopAnimationWhenIsNotVisible = true;
    jadsdsEngine.loadAnimationScreen = "loadingindex";
    jadsdsEngine.loadAnimation(nameAni);
}

function getRandomAnimation() {
    var rNum = Math.floor(Math.random() * 4);
    var aniArray = new Array("sf3cintro", "sgagbintro", "sgagintro", "dcintro");
    return aniArray[rNum];
}

function rotationAni() {
    var jadsdsEngineR = new JadsdsEngine('mycanvasR');
    jadsdsEngineR.fixCanvasSize = false;
    jadsdsEngineR.antiAlias = true;
    jadsdsEngineR.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineR.loadAnimationScreen = "loadingforrotate";
    jadsdsEngineR.loadAnimation('rotatione');
}

function multiAni() {
    var jadsdsEnginemycanvas1 = new JadsdsEngine('mycanvas1');
    jadsdsEnginemycanvas1.fixCanvasSize = false;
    jadsdsEnginemycanvas1.antiAlias = true;
    jadsdsEnginemycanvas1.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemycanvas1.loadAnimationScreen = "loadingsmall";
    jadsdsEnginemycanvas1.loadAnimation('sgag');

    //-----------------------------------------------------------------------------------------------------
    var jadsdsEnginemycanvas2 = new JadsdsEngine('mycanvas2');
    jadsdsEnginemycanvas2.fixCanvasSize = false;
    jadsdsEnginemycanvas2.antiAlias = true;
    jadsdsEnginemycanvas2.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemycanvas2.loadAnimationScreen = "loadingsmall";
    jadsdsEnginemycanvas2.loadAnimation('sgagb');

    //-----------------------------------------------------------------------------------------------------
    var jadsdsEnginemycanvas3 = new JadsdsEngine('mycanvas3');
    jadsdsEnginemycanvas3.fixCanvasSize = false;
    jadsdsEnginemycanvas3.antiAlias = true;
    jadsdsEnginemycanvas3.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemycanvas3.loadAnimationScreen = "loadingsmall";
    jadsdsEnginemycanvas3.loadAnimation('dc');

    //-----------------------------------------------------------------------------------------------------
}

function phoneAnimation() {
    var jadsdsEnginephoneAnimation = new JadsdsEngine('phoneAni');
    jadsdsEnginephoneAnimation.fixCanvasSize = false;
    jadsdsEnginephoneAnimation.antiAlias = true;
    jadsdsEnginephoneAnimation.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginephoneAnimation.loadAnimation('sgag');

    var jadsdsEnginewebAni = new JadsdsEngine('webAni');
    jadsdsEnginewebAni.fixCanvasSize = false;
    jadsdsEnginewebAni.antiAlias = true;
    jadsdsEnginewebAni.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginewebAni.loadAnimation('sgagweb');
}

function examples() {
    var jadsdsEngineExaA = new JadsdsEngine('canvasRotation');
    jadsdsEngineExaA.fixCanvasSize = false;
    jadsdsEngineExaA.antiAlias = true;
    jadsdsEngineExaA.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineExaA.loadAnimation('exarotation');

    var jadsdsEngineExaB = new JadsdsEngine('canvasScale');
    jadsdsEngineExaB.fixCanvasSize = false;
    jadsdsEngineExaB.antiAlias = true;
    jadsdsEngineExaB.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineExaB.loadAnimation('exascale');

    var jadsdsEngineExaC = new JadsdsEngine('canvasVideo');
    jadsdsEngineExaC.fixCanvasSize = false;
    jadsdsEngineExaC.antiAlias = true;
    jadsdsEngineExaC.fpsToUse = 20;
    jadsdsEngineExaC.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineExaC.loadAnimation('exavideo');

    var jadsdsEngineExaD = new JadsdsEngine('canvasColorC');
    jadsdsEngineExaD.fixCanvasSize = false;
    jadsdsEngineExaD.antiAlias = true;
    jadsdsEngineExaD.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineExaD.loadAnimation('exacolorc');

    var jadsdsEngineExaE = new JadsdsEngine('canvasGif');
    jadsdsEngineExaE.fixCanvasSize = false;
    jadsdsEngineExaE.antiAlias = true;
    jadsdsEngineExaE.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineExaE.loadAnimation('exagif');

    var jadsdsEngineExaF = new JadsdsEngine('canvasMove');
    jadsdsEngineExaF.fixCanvasSize = false;
    jadsdsEngineExaF.antiAlias = true;
    jadsdsEngineExaF.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineExaF.loadAnimation('examove');

    var jadsdsEngineExaG = new JadsdsEngine('canvasPath');
    jadsdsEngineExaG.fixCanvasSize = false;
    jadsdsEngineExaG.antiAlias = true;
    jadsdsEngineExaG.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineExaG.loadAnimation('exapath');

    var jadsdsEngineExaH = new JadsdsEngine('canvasAudio');
    jadsdsEngineExaH.fixCanvasSize = false;
    jadsdsEngineExaH.antiAlias = true;
    jadsdsEngineExaH.fpsToUse = 2;
    jadsdsEngineExaH.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineExaH.loadAnimation('exasound');

    var jadsdsEngineExaI = new JadsdsEngine('canvasDrag');
    jadsdsEngineExaI.fixCanvasSize = false;
    jadsdsEngineExaI.antiAlias = true;
    jadsdsEngineExaI.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineExaI.loadAnimation('exadrag');

    var jadsdsEngineExaJ = new JadsdsEngine('canvasPa');
    jadsdsEngineExaJ.fixCanvasSize = false;
    jadsdsEngineExaJ.antiAlias = true;
    jadsdsEngineExaJ.fpsToUse = 2;
    jadsdsEngineExaJ.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineExaJ.loadAnimation('exacolorp');

    var jadsdsEngineExaK = new JadsdsEngine('canvasEndless');
    jadsdsEngineExaK.fixCanvasSize = false;
    jadsdsEngineExaK.antiAlias = true;
    jadsdsEngineExaK.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineExaK.loadAnimation('exaendless');

    var jadsdsEngineExaL = new JadsdsEngine('canvasEvents');
    jadsdsEngineExaL.fixCanvasSize = false;
    jadsdsEngineExaL.antiAlias = true;
    jadsdsEngineExaL.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineExaL.loadAnimation('exaevents');

}

var jadsdsEngineE = new JadsdsEngine('mycanvase');
var animationXMLEpartA = "%3C%3Fxml%20version%3D%221.0%22%3F%3E%0A%3Cdoc%3E";
var animationXMLEpartB = "%20%20%3Cbasic%20type%3D%22animations%22%3E%0A%20%20%20%20%3CscreenCanvasResolution%3E%0A%20%20%20%20%20%20%3Cwidth%3E240%3C%2Fwidth%3E%0A%20%20%20%20%20%20%3Cheight%3E360%3C%2Fheight%3E%0A%20%20%20%20%3C%2FscreenCanvasResolution%3E%0A%20%20%20%20%3CcanvasResolution%3E%0A%20%20%20%20%20%20%3CmaxWidth%3E144%3C%2FmaxWidth%3E%0A%20%20%20%20%20%20%3CmaxHeight%3E72%3C%2FmaxHeight%3E%0A%20%20%20%20%3C%2FcanvasResolution%3E%0A%20%20%20%20%3CbgColor%3E%23ff000000%3C%2FbgColor%3E%0A%20%20%20%20%3Ccamera%3E%0A%20%20%20%20%20%20%3CautoHorizontalScroll%3Etrue%3C%2FautoHorizontalScroll%3E%0A%20%20%20%20%20%20%3CiniPosition%3E0%3B0%3C%2FiniPosition%3E%0A%20%20%20%20%20%20%3CpixelsMove%3E2%3C%2FpixelsMove%3E%0A%20%20%20%20%20%20%3CcameraSpeed%3E1%3C%2FcameraSpeed%3E%0A%20%20%20%20%3C%2Fcamera%3E%0A%20%20%3C%2Fbasic%3E%0A%20%20%3Cimages%3E%0A%20%20%20%20%3Cimage%3E%0A%20%20%20%20%20%20%3CfileName%3ERushb0.png%3C%2FfileName%3E%0A%20%20%20%20%20%20%3CcreateBackgroundLayer%3E%0A%20%20%20%20%20%20%20%20%3CmaxWidth%3E80%3C%2FmaxWidth%3E%0A%20%20%20%20%20%20%20%20%3CmaxHeight%3E72%3C%2FmaxHeight%3E%0A%20%20%20%20%20%20%3C%2FcreateBackgroundLayer%3E%0A%20%20%20%20%3C%2Fimage%3E%0A%20%20%20%20%3Cimage%3E%0A%20%20%20%20%20%20%3CfileName%3ERushb1.png%3C%2FfileName%3E%0A%20%20%20%20%3C%2Fimage%3E%0A%20%20%3C%2Fimages%3E";
var animationXMLEpartC = "%3C%2Fdoc%3E";

function loadNewAnimationE() {
    jadsdsEngineE.unloadAnimation();
    jadsdsEngineE.loadAnimationByString = decodeURIComponent(animationXMLEpartA) + document.getElementById("TextArea5").value + decodeURIComponent(animationXMLEpartC);
    //jadsdsEngineE.fixCanvasSize = false;
    jadsdsEngineE.antiAlias = true;
    jadsdsEngineE.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineE.loadAnimation('parallax');
}

function resetE() {
    document.getElementById("TextArea5").value = decodeURIComponent(animationXMLEpartB);
    loadNewAnimationE();
}

var jadsdsEngineHelp = new JadsdsEngine('canvasHelp');
jadsdsEngineHelp.fixCanvasSize = false;
jadsdsEngineHelp.antiAlias = true;
jadsdsEngineHelp.stopAnimationWhenIsNotVisible = true;

function loadHelpUS(ani) {
    jadsdsEngineHelp.unloadAnimation();
    jadsdsEngineHelp.loadAnimation(ani);
}
