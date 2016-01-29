
window.onload = function () {
    loadNewAnimation();
};

function loadNewAnimation() {

    document.getElementById("divzGraveyard").style.left = "1620px";
    document.getElementById("divzGraveyard").style.top = "1074px";//+50

    var jadsdsEnginezGraveyard = new JadsdsEngine('zGraveyard');
    jadsdsEnginezGraveyard.fixCanvasSize = false;
    jadsdsEnginezGraveyard.loadAnimationScreen = "mapzGraveyardLoading";
    jadsdsEnginezGraveyard.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezGraveyard.loadAnimation('mapzGraveyard');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzCastle").style.left = "1536px";
    document.getElementById("divzCastle").style.top = "1587px";

    var jadsdsEnginezCastle = new JadsdsEngine('zCastle');
    jadsdsEnginezCastle.fixCanvasSize = false;
    jadsdsEnginezCastle.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezCastle.loadAnimationScreen = "mapzCastleLoading";
    jadsdsEnginezCastle.loadAnimation('mapzCastle');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzSwamp").style.left = "1024px";
    document.getElementById("divzSwamp").style.top = "3635px";

    var jadsdsEnginezSwamp = new JadsdsEngine('zSwamp');
    jadsdsEnginezSwamp.fixCanvasSize = false;
    jadsdsEnginezSwamp.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezSwamp.loadAnimationScreen = "mapzSwampLoading";
    jadsdsEnginezSwamp.loadAnimation('mapzSwamp');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzLost").style.left = "73px";
    document.getElementById("divzLost").style.top = "75px";

    var jadsdsEnginezLost = new JadsdsEngine('zLost');
    jadsdsEnginezLost.fixCanvasSize = false;
    jadsdsEnginezLost.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezLost.loadAnimationScreen = "mapzLostLoading";
    jadsdsEnginezLost.loadAnimation('mapzLost');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzKakariko").style.left = "0px";
    document.getElementById("divzKakariko").style.top = "1589px";

    var jadsdsEnginezKakariko = new JadsdsEngine('zKakariko');
    jadsdsEnginezKakariko.fixCanvasSize = false;
    jadsdsEnginezKakariko.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezKakariko.loadAnimationScreen = "mapzKakarikoLoading";
    jadsdsEnginezKakariko.loadAnimation('mapzKakariko');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzFTeller").style.left = "622px";
    document.getElementById("divzFTeller").style.top = "1086px";

    var jadsdsEnginezFTeller = new JadsdsEngine('zFTeller');
    jadsdsEnginezFTeller.fixCanvasSize = false;
    jadsdsEnginezFTeller.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezFTeller.loadAnimationScreen = "mapzFTellerLoading";
    jadsdsEnginezFTeller.loadAnimation('mapzFTeller');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzMagic").style.left = "2974px";
    document.getElementById("divzMagic").style.top = "1082px";

    var jadsdsEnginezMagic = new JadsdsEngine('zMagic');
    jadsdsEnginezMagic.fixCanvasSize = false;
    jadsdsEnginezMagic.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezMagic.loadAnimationScreen = "mapzMagicLoading";
    jadsdsEnginezMagic.loadAnimation('mapzMagic');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzLibrary").style.left = "62px";
    document.getElementById("divzLibrary").style.top = "2611px";

    var jadsdsEnginezLibrary = new JadsdsEngine('zLibrary');
    jadsdsEnginezLibrary.fixCanvasSize = false;
    jadsdsEnginezLibrary.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezLibrary.loadAnimationScreen = "mapzLibraryLoading";
    jadsdsEnginezLibrary.loadAnimation('mapzLibrary');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzLink").style.left = "1536px"; 
    document.getElementById("divzLink").style.top = "2611px";

    var jadsdsEnginezLink = new JadsdsEngine('zLink');
    jadsdsEnginezLink.fixCanvasSize = false;
    jadsdsEnginezLink.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezLink.loadAnimationScreen = "mapzLinkLoading";
    jadsdsEnginezLink.loadAnimation('mapzLink');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzDesert").style.left = "0px";
    document.getElementById("divzDesert").style.top = "3115px";

    var jadsdsEnginezDesert = new JadsdsEngine('zDesert');
    jadsdsEnginezDesert.fixCanvasSize = false;
    jadsdsEnginezDesert.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezDesert.loadAnimationScreen = "mapzDesertLoading";
    jadsdsEnginezDesert.loadAnimation('mapzDesert');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzSwampb").style.left = "2323px";
    document.getElementById("divzSwampb").style.top = "3635px";

    var jadsdsEnginezSwampb = new JadsdsEngine('zSwampb');
    jadsdsEnginezSwampb.fixCanvasSize = false;
    jadsdsEnginezSwampb.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezSwampb.loadAnimationScreen = "mapzSwampbLoading";
    jadsdsEnginezSwampb.loadAnimation('mapzSwampb');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzSwampc").style.left = "1762px";
    document.getElementById("divzSwampc").style.top = "3110px";

    var jadsdsEnginezSwampc = new JadsdsEngine('zSwampc');
    jadsdsEnginezSwampc.fixCanvasSize = false;
    jadsdsEnginezSwampc.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezSwampc.loadAnimationScreen = "mapzSwampcLoading";
    jadsdsEnginezSwampc.loadAnimation('mapzSwampc');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzLake").style.left = "2789px";
    document.getElementById("divzLake").style.top = "3635px";

    var jadsdsEnginezLake = new JadsdsEngine('zLake');
    jadsdsEnginezLake.fixCanvasSize = false;
    jadsdsEnginezLake.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezLake.loadAnimationScreen = "mapzLakeLoading";
    jadsdsEnginezLake.loadAnimation('mapzLake');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzLakeb").style.left = "2595px";
    document.getElementById("divzLakeb").style.top = "3110px";

    var jadsdsEnginezLakeb = new JadsdsEngine('zLakeb');
    jadsdsEnginezLakeb.fixCanvasSize = false;
    jadsdsEnginezLakeb.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezLakeb.loadAnimationScreen = "mapzLakebLoading";
    jadsdsEnginezLakeb.loadAnimation('mapzLakeb');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzLakec").style.left = "3594px";
    document.getElementById("divzLakec").style.top = "2611px";

    var jadsdsEnginezLakec = new JadsdsEngine('zLakec');
    jadsdsEnginezLakec.fixCanvasSize = false;
    jadsdsEnginezLakec.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezLakec.loadAnimationScreen = "mapzLakecLoading";
    jadsdsEnginezLakec.loadAnimation('mapzLakec');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzPalace").style.left = "2560px";
    document.getElementById("divzPalace").style.top = "2611px";

    var jadsdsEnginezPalace = new JadsdsEngine('zPalace');
    jadsdsEnginezPalace.fixCanvasSize = false;
    jadsdsEnginezPalace.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezPalace.loadAnimationScreen = "mapzPalaceLoading";
    jadsdsEnginezPalace.loadAnimation('mapzPalace');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzPalaceb").style.left = "2560px";
    document.getElementById("divzPalaceb").style.top = "1587px";

    var jadsdsEnginezPalaceb = new JadsdsEngine('zPalaceb');
    jadsdsEnginezPalaceb.fixCanvasSize = false;
    jadsdsEnginezPalaceb.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezPalaceb.loadAnimationScreen = "mapzPalacebLoading";
    jadsdsEnginezPalaceb.loadAnimation('mapzPalaceb');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzPalacec").style.left = "3430px";
    document.getElementById("divzPalacec").style.top = "1766px";

    var jadsdsEnginezPalacec = new JadsdsEngine('zPalacec');
    jadsdsEnginezPalacec.fixCanvasSize = false;
    jadsdsEnginezPalacec.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezPalacec.loadAnimationScreen = "mapzPalacecLoading";
    jadsdsEnginezPalacec.loadAnimation('mapzPalacec');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzPalaced").style.left = "3114px";
    document.getElementById("divzPalaced").style.top = "2105px";

    var jadsdsEnginezPalaced = new JadsdsEngine('zPalaced');
    jadsdsEnginezPalaced.fixCanvasSize = false;
    jadsdsEnginezPalaced.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezPalaced.loadAnimationScreen = "mapzPalacedLoading";
    jadsdsEnginezPalaced.loadAnimation('mapzPalaced');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzForest").style.left = "1009px";
    document.getElementById("divzForest").style.top = "2611px";

    var jadsdsEnginezForest = new JadsdsEngine('zForest');
    jadsdsEnginezForest.fixCanvasSize = false;
    jadsdsEnginezForest.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezForest.loadAnimationScreen = "mapzForestLoading";
    jadsdsEnginezForest.loadAnimation('mapzForest');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzKakarikob").style.left = "974px";
    document.getElementById("divzKakarikob").style.top = "1568px";

    var jadsdsEnginezKakarikob = new JadsdsEngine('zKakarikob');
    jadsdsEnginezKakarikob.fixCanvasSize = false;
    jadsdsEnginezKakarikob.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezKakarikob.loadAnimationScreen = "mapzKakarikobLoading";
    jadsdsEnginezKakarikob.loadAnimation('mapzKakarikob');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzLostb").style.left = "1075px";
    document.getElementById("divzLostb").style.top = "156px";

    var jadsdsEnginezLostb = new JadsdsEngine('zLostb');
    jadsdsEnginezLostb.fixCanvasSize = false;
    jadsdsEnginezLostb.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezLostb.loadAnimationScreen = "mapzLostbLoading";
    jadsdsEnginezLostb.loadAnimation('mapzLostb');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzMagicb").style.left = "3584px";
    document.getElementById("divzMagicb").style.top = "562px";

    var jadsdsEnginezMagicb = new JadsdsEngine('zMagicb');
    jadsdsEnginezMagicb.fixCanvasSize = false;
    jadsdsEnginezMagicb.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezMagicb.loadAnimationScreen = "mapzMagicbLoading";
    jadsdsEnginezMagicb.loadAnimation('mapzMagicb');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzMountain").style.left = "1536px";
    document.getElementById("divzMountain").style.top = "50px";

    var jadsdsEnginezMountain = new JadsdsEngine('zMountain');
    jadsdsEnginezMountain.fixCanvasSize = false;
    jadsdsEnginezMountain.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezMountain.loadAnimationScreen = "mapzMountainLoading";
    jadsdsEnginezMountain.loadAnimation('mapzMountain');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzMountainc").style.left = "3584px";
    document.getElementById("divzMountainc").style.top = "50px";

    var jadsdsEnginezMountainc = new JadsdsEngine('zMountainc');
    jadsdsEnginezMountainc.fixCanvasSize = false;
    jadsdsEnginezMountainc.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezMountainc.loadAnimationScreen = "mapzMountaincLoading";
    jadsdsEnginezMountainc.loadAnimation('mapzMountainc');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzMountainb").style.left = "2416px";
    document.getElementById("divzMountainb").style.top = "50px";

    var jadsdsEnginezMountainb = new JadsdsEngine('zMountainb');
    jadsdsEnginezMountainb.fixCanvasSize = false;
    jadsdsEnginezMountainb.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezMountainb.loadAnimationScreen = "mapzMountainbLoading";
    jadsdsEnginezMountainb.loadAnimation('mapzMountainb');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzLostc").style.left = "73px";
    document.getElementById("divzLostc").style.top = "556px";

    var jadsdsEnginezLostc = new JadsdsEngine('zLostc');
    jadsdsEnginezLostc.fixCanvasSize = false;
    jadsdsEnginezLostc.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezLostc.loadAnimationScreen = "mapzLostcLoading";
    jadsdsEnginezLostc.loadAnimation('mapzLostc');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzPalacee").style.left = "3752px";
    document.getElementById("divzPalacee").style.top = "2304px";

    var jadsdsEnginezPalacee = new JadsdsEngine('zPalacee');
    jadsdsEnginezPalacee.fixCanvasSize = false;
    jadsdsEnginezPalacee.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezPalacee.loadAnimationScreen = "mapzPalaceeLoading";
    jadsdsEnginezPalacee.loadAnimation('mapzPalacee');

    //-----------------------------------------------------------------------------------------------------
    document.getElementById("divzSwampd").style.left = "1551px";
    document.getElementById("divzSwampd").style.top = "3231px";

    var jadsdsEnginezSwampd = new JadsdsEngine('zSwampd');
    jadsdsEnginezSwampd.fixCanvasSize = false;
    jadsdsEnginezSwampd.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezSwampd.loadAnimationScreen = "mapzSwampdLoading";
    jadsdsEnginezSwampd.loadAnimation('mapzSwampd');

    //-----------------------------------------------------------------------------------------------------

    //var jadsdsEngineMapzAudioL = new JadsdsEngine('zAudioL');
    //jadsdsEngineMapzAudioL.loadAnimation('mapzAudioL');

    //-----------------------------------------------------------------------------------------------------
}

