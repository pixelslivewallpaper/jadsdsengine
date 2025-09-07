var jadsdsEngine = new JadsdsEngine('mycanvas');
var jadsdsEngineB = new JadsdsEngine('mycanvasb');
var jadsdsEngineC = new JadsdsEngine('mycanvasc');
var jadsdsEngineD = new JadsdsEngine('mycanvasd');

window.onload = function () {
    loadNewAnimationA("dcintromirror");
    loadNewAnimationB("water6");
    loadNewAnimationC("water5");
    loadNewAnimationD("night");
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

function loadNewAnimationD(nameAni) {
    jadsdsEngineD.fixCanvasSize = false;
    jadsdsEngineD.antiAlias = false;
    jadsdsEngineD.stopAnimationWhenIsNotVisible = true;
    jadsdsEngineD.loadAnimation(nameAni);
}

