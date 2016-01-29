
window.onload = function () {
    loadNewAnimation();
};

function loadNewAnimation() {

    document.getElementById("divzmapzdarkf").style.left = "0px";
    document.getElementById("divzmapzdarkf").style.top = "50px";//+50

    var jadsdsEnginemapzdarkf = new JadsdsEngine('mapzdarkf');
    jadsdsEnginemapzdarkf.fixCanvasSize = false;
    jadsdsEnginemapzdarkf.loadAnimationScreen = "mapzdarkfLoading";
    jadsdsEnginemapzdarkf.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzdarkf.loadAnimation('mapzdarkf');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzmapzdarkfb").style.left = "1075px";
    document.getElementById("divzmapzdarkfb").style.top = "156px";

    var jadsdsEnginemapzdarkfb = new JadsdsEngine('mapzdarkfb');
    jadsdsEnginemapzdarkfb.fixCanvasSize = false;
    jadsdsEnginemapzdarkfb.loadAnimationScreen = "mapzdarkfbLoading";
    jadsdsEnginemapzdarkfb.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzdarkfb.loadAnimation('mapzdarkfb');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzmapzdarkfc").style.left = "19px";
    document.getElementById("divzmapzdarkfc").style.top = "1080px";

    var jadsdsEnginemapzdarkfc = new JadsdsEngine('mapzdarkfc');
    jadsdsEnginemapzdarkfc.fixCanvasSize = false;
    jadsdsEnginemapzdarkfc.loadAnimationScreen = "mapzdarkfcLoading";
    jadsdsEnginemapzdarkfc.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzdarkfc.loadAnimation('mapzdarkfc');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzmapzDarkMountain").style.left = "1536px";
    document.getElementById("divzmapzDarkMountain").style.top = "50px";

    jadsdsEnginemapzDarkMountain = new JadsdsEngine('mapzDarkMountain');
    jadsdsEnginemapzDarkMountain.fixCanvasSize = false;
    jadsdsEnginemapzDarkMountain.loadAnimationScreen = "mapzDarkMountainLoading";
    jadsdsEnginemapzDarkMountain.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzDarkMountain.loadAnimation('mapzDarkMountain');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzmapzDarkMountainb").style.left = "2464px";
    document.getElementById("divzmapzDarkMountainb").style.top = "50px";

    jadsdsEnginemapzDarkMountainb = new JadsdsEngine('mapzDarkMountainb');
    jadsdsEnginemapzDarkMountainb.fixCanvasSize = false;
    jadsdsEnginemapzDarkMountainb.loadAnimationScreen = "mapzDarkMountainbLoading";
    jadsdsEnginemapzDarkMountainb.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzDarkMountainb.loadAnimation('mapzDarkMountainb');
    jadsdsEnginemapzDarkMountainb.runFunctionAfterLoad = function () {
        document.getElementById("divzmapzDarkMountainClouds").style.visibility = "visible";
    }

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzmapzDarkMountainc").style.left = "3584px";
    document.getElementById("divzmapzDarkMountainc").style.top = "50px";

    jadsdsEnginemapzDarkMountainc = new JadsdsEngine('mapzDarkMountainc');
    jadsdsEnginemapzDarkMountainc.fixCanvasSize = false;
    jadsdsEnginemapzDarkMountainc.loadAnimationScreen = "mapzDarkMountaincLoading";
    jadsdsEnginemapzDarkMountainc.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzDarkMountainc.loadAnimation('mapzDarkMountainc');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzmapzDarkMountainClouds").style.left = "1536px";
    document.getElementById("divzmapzDarkMountainClouds").style.top = "50px";

    jadsdsEnginemapzDarkMountainClouds = new JadsdsEngine('mapzDarkMountainClouds');
    jadsdsEnginemapzDarkMountainClouds.fixCanvasSize = false;
    jadsdsEnginemapzDarkMountainClouds.loadAnimationScreen = "mapzDarkMountainCloudsLoading";
    jadsdsEnginemapzDarkMountainClouds.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzDarkMountainClouds.loadAnimation('mapzDarkMountainClouds');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzmapzGraveyardDark").style.left = "1536px";
    document.getElementById("divzmapzGraveyardDark").style.top = "1074px";

    jadsdsEnginemapzGraveyardDark = new JadsdsEngine('mapzGraveyardDark');
    jadsdsEnginemapzGraveyardDark.fixCanvasSize = false;
    jadsdsEnginemapzGraveyardDark.loadAnimationScreen = "mapzGraveyardDarkLoading";
    jadsdsEnginemapzGraveyardDark.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzGraveyardDark.loadAnimation('mapzGraveyardDark');

    //-----------------------------------------------------------------------------------------------------
    
    document.getElementById("divzmapzMagicDark").style.left = "2616px";
    document.getElementById("divzmapzMagicDark").style.top = "1074px";

    jadsdsEnginemapzMagicDark = new JadsdsEngine('mapzMagicDark');
    jadsdsEnginemapzMagicDark.fixCanvasSize = false;
    jadsdsEnginemapzMagicDark.loadAnimationScreen = "mapzMagicDarkLoading";
    jadsdsEnginemapzMagicDark.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzMagicDark.loadAnimation('mapzMagicDark');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzmapzPalacebDark").style.left = "2560px";
    document.getElementById("divzmapzPalacebDark").style.top = "1587px";

    jadsdsEnginemapzPalacebDark = new JadsdsEngine('mapzPalacebDark');
    jadsdsEnginemapzPalacebDark.fixCanvasSize = false;
    jadsdsEnginemapzPalacebDark.loadAnimationScreen = "mapzPalacebDarkLoading";
    jadsdsEnginemapzPalacebDark.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzPalacebDark.loadAnimation('mapzPalacebDark');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzmapzPalaceDark").style.left = "3072px";
    document.getElementById("divzmapzPalaceDark").style.top = "1586px";

    jadsdsEnginemapzPalaceDark = new JadsdsEngine('mapzPalaceDark');
    jadsdsEnginemapzPalaceDark.fixCanvasSize = false;
    jadsdsEnginemapzPalaceDark.loadAnimationScreen = "mapzPalaceDarkLoading";
    jadsdsEnginemapzPalaceDark.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzPalaceDark.loadAnimation('mapzPalaceDark');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzmapzKakarikoDark").style.left = "19px";
    document.getElementById("divzmapzKakarikoDark").style.top = "1651px";

    jadsdsEnginemapzKakarikoDark = new JadsdsEngine('mapzKakarikoDark');
    jadsdsEnginemapzKakarikoDark.fixCanvasSize = false;
    jadsdsEnginemapzKakarikoDark.loadAnimationScreen = "mapzKakarikoDarkLoading";
    jadsdsEnginemapzKakarikoDark.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzKakarikoDark.loadAnimation('mapzKakarikoDark');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzmapzKakarikobDark").style.left = "928px";
    document.getElementById("divzmapzKakarikobDark").style.top = "1560px";

    jadsdsEnginemapzKakarikobDark = new JadsdsEngine('mapzKakarikobDark');
    jadsdsEnginemapzKakarikobDark.fixCanvasSize = false;
    jadsdsEnginemapzKakarikobDark.loadAnimationScreen = "mapzKakarikobDarkLoading";
    jadsdsEnginemapzKakarikobDark.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzKakarikobDark.loadAnimation('mapzKakarikobDark');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzmapzPyramid").style.left = "1536px";
    document.getElementById("divzmapzPyramid").style.top = "1646px";

    jadsdsEnginemapzPyramid = new JadsdsEngine('mapzPyramid');
    jadsdsEnginemapzPyramid.fixCanvasSize = false;
    jadsdsEnginemapzPyramid.loadAnimationScreen = "mapzPyramidLoading";
    jadsdsEnginemapzPyramid.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzPyramid.loadAnimation('mapzPyramid');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzmapzKakarikocDark").style.left = "117px";
    document.getElementById("divzmapzKakarikocDark").style.top = "2684px";

    jadsdsEnginemapzKakarikocDark = new JadsdsEngine('mapzKakarikocDark');
    jadsdsEnginemapzKakarikocDark.fixCanvasSize = false;
    jadsdsEnginemapzKakarikocDark.loadAnimationScreen = "mapzKakarikocDarkLoading";
    jadsdsEnginemapzKakarikocDark.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzKakarikocDark.loadAnimation('mapzKakarikocDark');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzmapzLinkDark").style.left = "1604px";
    document.getElementById("divzmapzLinkDark").style.top = "2584px";

    jadsdsEnginemapzLinkDark = new JadsdsEngine('mapzLinkDark');
    jadsdsEnginemapzLinkDark.fixCanvasSize = false;
    jadsdsEnginemapzLinkDark.loadAnimationScreen = "mapzLinkDarkLoading";
    jadsdsEnginemapzLinkDark.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzLinkDark.loadAnimation('mapzLinkDark');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzmapzPalacecDark").style.left = "2617px";
    document.getElementById("divzmapzPalacecDark").style.top = "2611px";

    jadsdsEnginemapzPalacecDark = new JadsdsEngine('mapzPalacecDark');
    jadsdsEnginemapzPalacecDark.fixCanvasSize = false;
    jadsdsEnginemapzPalacecDark.loadAnimationScreen = "mapzPalacecDarkLoading";
    jadsdsEnginemapzPalacecDark.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzPalacecDark.loadAnimation('mapzPalacecDark');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzmapzSwampDark").style.left = "66px";
    document.getElementById("divzmapzSwampDark").style.top = "3217px";

    jadsdsEnginemapzSwampDark = new JadsdsEngine('mapzSwampDark');
    jadsdsEnginemapzSwampDark.fixCanvasSize = false;
    jadsdsEnginemapzSwampDark.loadAnimationScreen = "mapzSwampDarkLoading";
    jadsdsEnginemapzSwampDark.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzSwampDark.loadAnimation('mapzSwampDark');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzmapzSwampbDark").style.left = "1052px";
    document.getElementById("divzmapzSwampbDark").style.top = "3196px";

    jadsdsEnginemapzSwampbDark = new JadsdsEngine('mapzSwampbDark');
    jadsdsEnginemapzSwampbDark.fixCanvasSize = false;
    jadsdsEnginemapzSwampbDark.loadAnimationScreen = "mapzSwampbDarkLoading";
    jadsdsEnginemapzSwampbDark.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzSwampbDark.loadAnimation('mapzSwampbDark');

    //-----------------------------------------------------------------------------------------------------

    document.getElementById("divzmapzSwampcDark").style.left = "2558px";
    document.getElementById("divzmapzSwampcDark").style.top = "3210px";

    jadsdsEnginemapzSwampcDark = new JadsdsEngine('mapzSwampcDark');
    jadsdsEnginemapzSwampcDark.fixCanvasSize = false;
    jadsdsEnginemapzSwampcDark.loadAnimationScreen = "mapzSwampcDarkLoading";
    jadsdsEnginemapzSwampcDark.stopAnimationWhenIsNotVisible = true;
    jadsdsEnginemapzSwampcDark.loadAnimation('mapzSwampcDark');

    //-----------------------------------------------------------------------------------------------------

    //var jadsdsEngineMapzAudioD = new JadsdsEngine('zAudioD');
    //jadsdsEngineMapzAudioD.loadAnimation('mapzAudioD');

    //-----------------------------------------------------------------------------------------------------
}

