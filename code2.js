gdjs.LobbyCode = {};
gdjs.LobbyCode.localVariables = [];
gdjs.LobbyCode.idToCallbackMap = new Map();
gdjs.LobbyCode.GDNon_9595hostObjects1= [];
gdjs.LobbyCode.GDNon_9595hostObjects2= [];
gdjs.LobbyCode.GDBlueButtonWithShadowObjects1= [];
gdjs.LobbyCode.GDBlueButtonWithShadowObjects2= [];
gdjs.LobbyCode.GDSmallPlasticGreenRoundSliderObjects1= [];
gdjs.LobbyCode.GDSmallPlasticGreenRoundSliderObjects2= [];
gdjs.LobbyCode.GDHOSTTextObjects1= [];
gdjs.LobbyCode.GDHOSTTextObjects2= [];
gdjs.LobbyCode.GDSelectedNumberObjects1= [];
gdjs.LobbyCode.GDSelectedNumberObjects2= [];
gdjs.LobbyCode.GDBlueButtonWithShadow2Objects1= [];
gdjs.LobbyCode.GDBlueButtonWithShadow2Objects2= [];


gdjs.LobbyCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.LobbyCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDBlueButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDBlueButtonWithShadowObjects1[k] = gdjs.LobbyCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isCurrentPlayerHost());
}
if (isConditionTrue_0) {
{gdjs.multiplayer.leaveGameLobby();
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isCurrentPlayerHost();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SmallPlasticGreenRoundSlider"), gdjs.LobbyCode.GDSmallPlasticGreenRoundSliderObjects1);
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4));
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber((( gdjs.LobbyCode.GDSmallPlasticGreenRoundSliderObjects1.length === 0 ) ? 0 :gdjs.LobbyCode.GDSmallPlasticGreenRoundSliderObjects1[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow2"), gdjs.LobbyCode.GDBlueButtonWithShadow2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDBlueButtonWithShadow2Objects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDBlueButtonWithShadow2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDBlueButtonWithShadow2Objects1[k] = gdjs.LobbyCode.GDBlueButtonWithShadow2Objects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDBlueButtonWithShadow2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isCurrentPlayerHost();
}
if (isConditionTrue_0) {
{gdjs.multiplayerMessageManager.sendCustomMessage("gametime", "GAME TIME!");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("0");
variables._declare("message", variable);
}
gdjs.LobbyCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayerMessageManager.hasCustomMessageBeenReceived("gametime");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isCurrentPlayerHost());
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}
gdjs.LobbyCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isCurrentPlayerHost();
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Host");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Non-host");
}
}

}


};

gdjs.LobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyCode.GDNon_9595hostObjects1.length = 0;
gdjs.LobbyCode.GDNon_9595hostObjects2.length = 0;
gdjs.LobbyCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.LobbyCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.LobbyCode.GDSmallPlasticGreenRoundSliderObjects1.length = 0;
gdjs.LobbyCode.GDSmallPlasticGreenRoundSliderObjects2.length = 0;
gdjs.LobbyCode.GDHOSTTextObjects1.length = 0;
gdjs.LobbyCode.GDHOSTTextObjects2.length = 0;
gdjs.LobbyCode.GDSelectedNumberObjects1.length = 0;
gdjs.LobbyCode.GDSelectedNumberObjects2.length = 0;
gdjs.LobbyCode.GDBlueButtonWithShadow2Objects1.length = 0;
gdjs.LobbyCode.GDBlueButtonWithShadow2Objects2.length = 0;

gdjs.LobbyCode.eventsList0(runtimeScene);
gdjs.LobbyCode.GDNon_9595hostObjects1.length = 0;
gdjs.LobbyCode.GDNon_9595hostObjects2.length = 0;
gdjs.LobbyCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.LobbyCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.LobbyCode.GDSmallPlasticGreenRoundSliderObjects1.length = 0;
gdjs.LobbyCode.GDSmallPlasticGreenRoundSliderObjects2.length = 0;
gdjs.LobbyCode.GDHOSTTextObjects1.length = 0;
gdjs.LobbyCode.GDHOSTTextObjects2.length = 0;
gdjs.LobbyCode.GDSelectedNumberObjects1.length = 0;
gdjs.LobbyCode.GDSelectedNumberObjects2.length = 0;
gdjs.LobbyCode.GDBlueButtonWithShadow2Objects1.length = 0;
gdjs.LobbyCode.GDBlueButtonWithShadow2Objects2.length = 0;


return;

}

gdjs['LobbyCode'] = gdjs.LobbyCode;
