
window.onload = function () {
    loadNewAnimation();
};

var jadsdsEnginemapzdxTalTalMountainb, jadsdsEnginemapzdxForest, jadsdsEnginemapzdxMabeb;

function loadNewAnimation() {
    document.getElementById("divGameBoy").style.display = "none";

    document.getElementById("divzdxTalTalMountainc").style.left = "0px";
    document.getElementById("divzdxTalTalMountainc").style.top = "50px";//+50

    var jadsdsEnginemapmapzdxTalTalMountainc = new JadsdsEngine('mapzdxTalTalMountainc');
    jadsdsEnginemapmapzdxTalTalMountainc.fixCanvasSize = false;
    jadsdsEnginemapmapzdxTalTalMountainc.loadAnimationScreen = "zdxTalTalMountaincLoading";
    jadsdsEnginemapmapzdxTalTalMountainc.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapmapzdxTalTalMountainc.loadAnimation('zdxTalTalMountainc');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzdxTalTalMountainb").style.left = "960px";
    document.getElementById("divzdxTalTalMountainb").style.top = "50px";

    jadsdsEnginemapzdxTalTalMountainb = new JadsdsEngine('mapzdxTalTalMountainb');
    jadsdsEnginemapzdxTalTalMountainb.fixCanvasSize = false;
    jadsdsEnginemapzdxTalTalMountainb.loadAnimationScreen = "zdxTalTalMountainbLoading";
    jadsdsEnginemapzdxTalTalMountainb.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzdxTalTalMountainb.loadAnimation('zdxTalTalMountainb');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzdxTalTalMountain").style.left = "1816px";
    document.getElementById("divzdxTalTalMountain").style.top = "50px";

    var jadsdsEnginemapzdxTalTalMountain = new JadsdsEngine('mapzdxTalTalMountain');
    jadsdsEnginemapzdxTalTalMountain.fixCanvasSize = false;
    jadsdsEnginemapzdxTalTalMountain.loadAnimationScreen = "zdxTalTalMountainLoading";
    jadsdsEnginemapzdxTalTalMountain.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzdxTalTalMountain.loadAnimation('zdxTalTalMountain');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzdxForest").style.left = "0px";
    document.getElementById("divzdxForest").style.top = "562px";

    jadsdsEnginemapzdxForest = new JadsdsEngine('mapzdxForest');
    jadsdsEnginemapzdxForest.fixCanvasSize = false;
    jadsdsEnginemapzdxForest.loadAnimationScreen = "zdxForestLoading";
    jadsdsEnginemapzdxForest.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzdxForest.loadAnimation('zdxForest');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzdxCastle").style.left = "960px";
    document.getElementById("divzdxCastle").style.top = "530px";

    var jadsdsEnginemapzdxCastle = new JadsdsEngine('mapzdxCastle');
    jadsdsEnginemapzdxCastle.fixCanvasSize = false;
    jadsdsEnginemapzdxCastle.loadAnimationScreen = "zdxCastleLoading";
    jadsdsEnginemapzdxCastle.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzdxCastle.loadAnimation('zdxCastle');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzdxFalls").style.left = "1904px";
    document.getElementById("divzdxFalls").style.top = "530px";

    var jadsdsEnginemapzdxFalls = new JadsdsEngine('mapzdxFalls');
    jadsdsEnginemapzdxFalls.fixCanvasSize = false;
    jadsdsEnginemapzdxFalls.loadAnimationScreen = "zdxFallsLoading";
    jadsdsEnginemapzdxFalls.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzdxFalls.loadAnimation('zdxFalls');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzdxMabe").style.left = "0px";
    document.getElementById("divzdxMabe").style.top = "1090px";

    var jadsdsEnginemapzdxMabe = new JadsdsEngine('mapzdxMabe');
    jadsdsEnginemapzdxMabe.fixCanvasSize = false;
    jadsdsEnginemapzdxMabe.loadAnimationScreen = "zdxMabeLoading";
    jadsdsEnginemapzdxMabe.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzdxMabe.loadAnimation('zdxMabe');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzdxUkuku").style.left = "736px";
    document.getElementById("divzdxUkuku").style.top = "1090px";

    var jadsdsEnginemapzdxUkuku = new JadsdsEngine('mapzdxUkuku');
    jadsdsEnginemapzdxUkuku.fixCanvasSize = false;
    jadsdsEnginemapzdxUkuku.loadAnimationScreen = "zdxUkukuLoading";
    jadsdsEnginemapzdxUkuku.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzdxUkuku.loadAnimation('zdxUkuku');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzdxFaceShrine").style.left = "1904px";
    document.getElementById("divzdxFaceShrine").style.top = "1026px";

    var jadsdsEnginemapzdxFaceShrine = new JadsdsEngine('mapzdxFaceShrine');
    jadsdsEnginemapzdxFaceShrine.fixCanvasSize = false;
    jadsdsEnginemapzdxFaceShrine.loadAnimationScreen = "zdxFaceShrineLoading";
    jadsdsEnginemapzdxFaceShrine.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzdxFaceShrine.loadAnimation('zdxFaceShrine');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzdxMabeb").style.left = "0px";
    document.getElementById("divzdxMabeb").style.top = "1570px";

    jadsdsEnginemapzdxMabeb = new JadsdsEngine('mapzdxMabeb');
    jadsdsEnginemapzdxMabeb.fixCanvasSize = false;
    jadsdsEnginemapzdxMabeb.loadAnimationScreen = "zdxMabebLoading";
    jadsdsEnginemapzdxMabeb.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzdxMabeb.loadAnimation('zdxMabeb');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzdxLake").style.left = "960px";
    document.getElementById("divzdxLake").style.top = "1570px";

    var jadsdsEnginemapzdxLake = new JadsdsEngine('mapzdxLake');
    jadsdsEnginemapzdxLake.fixCanvasSize = false;
    jadsdsEnginemapzdxLake.loadAnimationScreen = "zdxLakeLoading";
    jadsdsEnginemapzdxLake.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzdxLake.loadAnimation('zdxLake');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzdxDesert").style.left = "1792px";
    document.getElementById("divzdxDesert").style.top = "1570px";

    var jadsdsEnginemapzdxDesert = new JadsdsEngine('mapzdxDesert');
    jadsdsEnginemapzdxDesert.fixCanvasSize = false;
    jadsdsEnginemapzdxDesert.loadAnimationScreen = "zdxDesertLoading";
    jadsdsEnginemapzdxDesert.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzdxDesert.loadAnimation('zdxDesert');

    //-----------------------------------------------------------------------------------------------------

    //var jadsdsEngineMapzAudioD = new JadsdsEngine('zAudioD');
    //jadsdsEngineMapzAudioD.loadAnimation('mapzAudio');

    //-----------------------------------------------------------------------------------------------------
}

function changaClasses() {
    document.getElementById("divzdxTalTalMountainc").className = "divZeldaGameBoy";
    document.getElementById("divzdxTalTalMountainb").className = "divZeldaGameBoy";
    document.getElementById("divzdxTalTalMountain").className = "divZeldaGameBoy";
    document.getElementById("divzdxForest").className = "divZeldaGameBoy";
    document.getElementById("divzdxCastle").className = "divZeldaGameBoy";
    document.getElementById("divzdxFalls").className = "divZeldaGameBoy";
    document.getElementById("divzdxMabe").className = "divZeldaGameBoy";
    document.getElementById("divzdxUkuku").className = "divZeldaGameBoy";
    document.getElementById("divzdxFaceShrine").className = "divZeldaGameBoy";
    document.getElementById("divzdxMabeb").className = "divZeldaGameBoy";
    document.getElementById("divzdxLake").className = "divZeldaGameBoy";
    document.getElementById("divzdxDesert").className = "divZeldaGameBoy";
}

function secrets(a) {
    switch (a) {
        case 1:
            jadsdsEnginemapzdxForest.runAction("Secret");
            break;
        case 2:
            jadsdsEnginemapzdxTalTalMountainb.runAction("Secret");
            break;
        case 3:
            document.getElementById("divGameBoy").style.display = "";
            changaClasses();
            break;
    }
}

