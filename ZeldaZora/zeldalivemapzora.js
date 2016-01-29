
window.onload = function () {
    loadNewAnimation();
};

function loadNewAnimation() {
    document.getElementById("divzZora").style.left = "0px";
    document.getElementById("divzZora").style.top = "50px";

    var jadsdsEnginezZora = new JadsdsEngine('zZora');
    jadsdsEnginezZora.fixCanvasSize = false;
    jadsdsEnginezZora.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginezZora.loadAnimationScreen = "mapzZoraLoading";
    jadsdsEnginezZora.loadAnimation('mapzZora');

    //----------------------------------------------------------------------------------------------

    //var jadsdsEngineMapzAudioL = new JadsdsEngine('zAudioL');
    //jadsdsEngineMapzAudioL.loadAnimation('mapzAudioL');

    //-----------------------------------------------------------------------------------------------------
}

