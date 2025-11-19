gdjs.TitleCode = {};
gdjs.TitleCode.localVariables = [];
gdjs.TitleCode.idToCallbackMap = new Map();
gdjs.TitleCode.GDBlueButtonWithShadowObjects1= [];
gdjs.TitleCode.GDBlueButtonWithShadowObjects2= [];
gdjs.TitleCode.GDNewTextObjects1= [];
gdjs.TitleCode.GDNewTextObjects2= [];
gdjs.TitleCode.GDinstructionsObjects1= [];
gdjs.TitleCode.GDinstructionsObjects2= [];


gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.TitleCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBlueButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDBlueButtonWithShadowObjects1[k] = gdjs.TitleCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustStarted();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lobby", false);
}
}

}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.TitleCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.TitleCode.GDNewTextObjects1.length = 0;
gdjs.TitleCode.GDNewTextObjects2.length = 0;
gdjs.TitleCode.GDinstructionsObjects1.length = 0;
gdjs.TitleCode.GDinstructionsObjects2.length = 0;

gdjs.TitleCode.eventsList0(runtimeScene);
gdjs.TitleCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.TitleCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.TitleCode.GDNewTextObjects1.length = 0;
gdjs.TitleCode.GDNewTextObjects2.length = 0;
gdjs.TitleCode.GDinstructionsObjects1.length = 0;
gdjs.TitleCode.GDinstructionsObjects2.length = 0;


return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
