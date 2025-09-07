var jadsdsEngine = new JadsdsEngine('mycanvas');
var jadsdsEngineB = new JadsdsEngine('mycanvasb');
var jadsdsEngineC = new JadsdsEngine('mycanvasc');
var jadsdsEngineF = new JadsdsEngine('mycanvasf');
var jadsdsEngineE = new JadsdsEngine('mycanvase');
var jadsdsEngineG = new JadsdsEngine('mycanvasg');
var jadsdsEngineH = new JadsdsEngine('mycanvash');

window.onload = function () {
    loadNewAnimationA("act2c");
    loadNewAnimationB("act2b");
    loadNewAnimationC("dkc2sun");
    loadNewAnimationF("dkc3");
    loadNewAnimationE("spacefull");
    loadNewAnimationG("metroid");
    loadNewAnimationH("dracula");
};

function loadNewAnimationA(nameAni) {
    jadsdsEngine.fixCanvasSize = false;
    jadsdsEngine.antiAlias = false;
    jadsdsEngine.stopAnimationWhenIsNotVisible = true;
    jadsdsEngine.loadAnimation(nameAni);
}

function loadNewAnimationB(nameAni) {
    jadsdsEngineB.fixCanvasSize = false;
    jadsdsEngineB.antiAlias = false;
    jadsdsEngineB.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineB.loadAnimation(nameAni);
}

function loadNewAnimationC(nameAni) {
    jadsdsEngineC.fixCanvasSize = false;
    jadsdsEngineC.antiAlias = false;
    jadsdsEngineC.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineC.loadAnimation(nameAni);
}

function loadNewAnimationF(nameAni) {
    jadsdsEngineF.fixCanvasSize = false;
    jadsdsEngineF.antiAlias = false;
    jadsdsEngineF.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineF.loadAnimation(nameAni);
}

function loadNewAnimationE(nameAni) {
    jadsdsEngineE.fixCanvasSize = false;
    jadsdsEngineE.antiAlias = false;
    jadsdsEngineE.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineE.loadAnimation(nameAni);
}

function loadNewAnimationG(nameAni) {
    jadsdsEngineG.fixCanvasSize = false;
    jadsdsEngineG.antiAlias = false;
    jadsdsEngineG.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineG.loadAnimation(nameAni);
}

function loadNewAnimationH(nameAni) {
    jadsdsEngineH.fixCanvasSize = false;
    jadsdsEngineH.antiAlias = false;
    jadsdsEngineH.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineH.loadAnimation(nameAni);
}
