
window.onload = function () {

    rotationAni();

    document.getElementById("TextArea5").value = decodeURIComponent(animationXMLEpartB);
    loadNewAnimationE();
    loadHelpUS("sgagb");
    miniA();
    miniB();
    miniC();
};

function rotationAni() {
    var jadsdsEngineR = new JadsdsEngine('mycanvasR');
    jadsdsEngineR.fixCanvasSize = false;
    //jadsdsEngineR.renderMode = RenderMode.Advanced;
    jadsdsEngineR.antiAlias = true;
    jadsdsEngineR.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineR.loadAnimationScreen = "loadingforrotate";
    jadsdsEngineR.loadAnimation('rotatione');
}

function miniA() {
    var jadsdsEngineR = new JadsdsEngine('miniA');
    jadsdsEngineR.fixCanvasSize = false;
    jadsdsEngineR.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineR.loadAnimation('minirotateA');
}

function miniB() {
    var jadsdsEngineR = new JadsdsEngine('miniB');
    jadsdsEngineR.fixCanvasSize = false;
    jadsdsEngineR.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineR.loadAnimation('minirotateB');
}

function miniC() {
    var jadsdsEngineR = new JadsdsEngine('miniC');
    jadsdsEngineR.fixCanvasSize = false;
    jadsdsEngineR.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineR.loadAnimation('minirotateC');
}

var jadsdsEngineE = new JadsdsEngine('mycanvase');
var animationXMLEpartA = "%3C%3Fxml%20version%3D%221.0%22%3F%3E%0A%3Cdoc%3E%0A%20%20%3Cbasic%20type%3D%22animations%22%3E%0A%20%20%20%20%3CscreenCanvasResolution%3E%0A%20%20%20%20%20%20%3Cwidth%3E400%3C%2Fwidth%3E%0A%20%20%20%20%20%20%3Cheight%3E250%3C%2Fheight%3E%0A%20%20%20%20%3C%2FscreenCanvasResolution%3E%0A%20%20%20%20%3CcanvasResolution%3E%0A%20%20%20%20%20%20%3CmaxWidth%3E400%3C%2FmaxWidth%3E%0A%20%20%20%20%20%20%3CmaxHeight%3E250%3C%2FmaxHeight%3E%0A%20%20%20%20%3C%2FcanvasResolution%3E%0A%20%20%20%20%3CbgColor%3E%23fffafafa%3C%2FbgColor%3E%0A%20%20%3C%2Fbasic%3E";
var animationXMLEpartB = "%20%20%3Cimages%3E%0A%20%20%20%20%3Cimage%3E%0A%20%20%20%20%20%20%3CfileName%3Ebase.png%3C%2FfileName%3E%0A%20%20%20%20%3C%2Fimage%3E%0A%20%20%20%20%3Cimage%3E%0A%20%20%20%20%20%20%3CfileName%3Esquare.png%3C%2FfileName%3E%0A%20%20%20%20%20%20%3Cleft%3E126%3C%2Fleft%3E%0A%20%20%20%20%20%20%3Ctop%3E51%3C%2Ftop%3E%0A%20%20%20%20%20%20%3CimagePropertiesAnimation%3E%0A%20%20%20%20%20%20%20%20%3CpropetiesToAnimate%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cproperty%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CpropertyName%3ERotation%3C%2FpropertyName%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CminimumDegreesValue%3E0%3C%2FminimumDegreesValue%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CmaximumDegreesValue%3E360%3C%2FmaximumDegreesValue%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CupdateDegreesValue%3E6%3C%2FupdateDegreesValue%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CcurrentDegreesValue%3E0%3C%2FcurrentDegreesValue%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CrotationSpeed%3E1%3C%2FrotationSpeed%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CanimationRotationAction%3EIncrease%3C%2FanimationRotationAction%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fproperty%3E%0A%20%20%20%20%20%20%20%20%3C%2FpropetiesToAnimate%3E%0A%20%20%20%20%20%20%3C%2FimagePropertiesAnimation%3E%0A%20%20%20%20%3C%2Fimage%3E%0A%20%20%3C%2Fimages%3E";
var animationXMLEpartC = "%3C%2Fdoc%3E";

function loadNewAnimationE() {
    jadsdsEngineE.unloadAnimation();
    jadsdsEngineE.loadAnimationByString = decodeURIComponent(animationXMLEpartA) + document.getElementById("TextArea5").value + decodeURIComponent(animationXMLEpartC);
    jadsdsEngineE.fixCanvasSize = false;
    //jadsdsEngineE.renderMode = RenderMode.Advanced;
    //jadsdsEngineE.antiAlias = true;
    jadsdsEngineE.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineE.loadAnimationScreen = "loadingforrotate";
    jadsdsEngineE.loadAnimation('rotatione');
}

function resetE() {
    document.getElementById("TextArea5").value = decodeURIComponent(animationXMLEpartB);
    loadNewAnimationE();
}

var jadsdsEngineHelp = new JadsdsEngine('canvasHelp');
jadsdsEngineHelp.fixCanvasSize = false;
jadsdsEngineHelp.renderMode = RenderMode.Advanced;
jadsdsEngineHelp.antiAlias = true;
jadsdsEngineHelp.stopAnimationWhenIsNotVisible = true;

function loadHelpUS(ani) {
    jadsdsEngineHelp.unloadAnimation();
    jadsdsEngineHelp.loadAnimation(ani);
}

