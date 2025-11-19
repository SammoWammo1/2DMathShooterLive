gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.GDReloadObjects1_1final = [];

gdjs.Game_32SceneCode.GDShootButtonObjects1_1final = [];

gdjs.Game_32SceneCode.forEachIndex2 = 0;

gdjs.Game_32SceneCode.forEachObjects2 = [];

gdjs.Game_32SceneCode.forEachTemporary2 = null;

gdjs.Game_32SceneCode.forEachTotalCount2 = 0;

gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDBackgroundObjects1= [];
gdjs.Game_32SceneCode.GDBackgroundObjects2= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects1= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects2= [];
gdjs.Game_32SceneCode.GDMoveJoystickObjects1= [];
gdjs.Game_32SceneCode.GDMoveJoystickObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2= [];
gdjs.Game_32SceneCode.GDBulletObjects1= [];
gdjs.Game_32SceneCode.GDBulletObjects2= [];
gdjs.Game_32SceneCode.GDHPObjects1= [];
gdjs.Game_32SceneCode.GDHPObjects2= [];
gdjs.Game_32SceneCode.GDAmmoObjects1= [];
gdjs.Game_32SceneCode.GDAmmoObjects2= [];
gdjs.Game_32SceneCode.GDShootButtonObjects1= [];
gdjs.Game_32SceneCode.GDShootButtonObjects2= [];
gdjs.Game_32SceneCode.GDThingObjects1= [];
gdjs.Game_32SceneCode.GDThingObjects2= [];
gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1= [];
gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2= [];
gdjs.Game_32SceneCode.GDQuestionObjects1= [];
gdjs.Game_32SceneCode.GDQuestionObjects2= [];
gdjs.Game_32SceneCode.GDReloadObjects1= [];
gdjs.Game_32SceneCode.GDReloadObjects2= [];
gdjs.Game_32SceneCode.GDWinnerTextObjects1= [];
gdjs.Game_32SceneCode.GDWinnerTextObjects2= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Game_32SceneCode.GDBulletObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Game_32SceneCode.GDBulletObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects2});
gdjs.Game_32SceneCode.asyncCallback11909996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

gdjs.copyArray(runtimeScene.getObjects("WinnerText"), gdjs.Game_32SceneCode.GDWinnerTextObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Winner");
}
{gdjs.evtsExt__ObjectPickingTools__PickLowestVariableValueAction.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects, "deaths", null);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWinnerTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWinnerTextObjects2[i].getBehavior("Text").setText("PLAYER " + gdjs.evtTools.common.toString(((gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(1).getAsNumber()) + " WINS WITH " + gdjs.evtTools.common.toString(((gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(4).getAsNumber()) + " DEATHS!!");
}
}
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(11909996, gdjs.Game_32SceneCode.asyncCallback11909996);
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
for (const obj of gdjs.Game_32SceneCode.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(120), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback11909996(runtimeScene, asyncObjectsList)), 11909996, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1 */

for (gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2[i].getVariableNumber(gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2[i].getVariables().getFromIndex(0)) != runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2[k] = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2[i].SetLabelTextOp(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() - gdjs.randomInRange(1, 10)), null);
}
}
}
}

}


};gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1 */

for (gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2[i].getVariableNumber(gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2[i].getVariables().getFromIndex(0)) != runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2[k] = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2[i].SetLabelTextOp(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() - gdjs.randomInRange(1, 10)), null);
}
}
}
}

}


};gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Game_32SceneCode.GDBulletObjects1});
gdjs.Game_32SceneCode.asyncCallback13208524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].setPosition(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(2).getAsNumber(),gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(3).getAsNumber());
}
}
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(13208524, gdjs.Game_32SceneCode.asyncCallback13208524);
gdjs.Game_32SceneCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
for (const obj of gdjs.Game_32SceneCode.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback13208524(runtimeScene, asyncObjectsList)), 13208524, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.Game_32SceneCode.GDShootButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Game_32SceneCode.GDShootButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ShootButton"), gdjs.Game_32SceneCode.GDShootButtonObjects2);
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDShootButtonObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDShootButtonObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDShootButtonObjects2[k] = gdjs.Game_32SceneCode.GDShootButtonObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDShootButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDShootButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDShootButtonObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDShootButtonObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDShootButtonObjects1_1final.push(gdjs.Game_32SceneCode.GDShootButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDShootButtonObjects1_1final, gdjs.Game_32SceneCode.GDShootButtonObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").AmmoQuantity(null) == 0) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ammo"), gdjs.Game_32SceneCode.GDAmmoObjects1);
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
gdjs.Game_32SceneCode.GDBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterXInScene()) - 100, (gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterYInScene()) + 20, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects, (gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterXInScene()) + 50 * gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0).getAsNumber(), (gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterYInScene()), 500, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBulletObjects1[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").SetAmmoQuantityOp(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").AmmoQuantity(null) - (1), null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDAmmoObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDAmmoObjects1[i].getBehavior("Text").setText("=-+ " + gdjs.evtTools.common.toString((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getBehavior("FireBullet").AmmoQuantity(null))) + " SHOTS +-=");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.Game_32SceneCode.GDShootButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Game_32SceneCode.GDShootButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ShootButton"), gdjs.Game_32SceneCode.GDShootButtonObjects2);
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDShootButtonObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDShootButtonObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDShootButtonObjects2[k] = gdjs.Game_32SceneCode.GDShootButtonObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDShootButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDShootButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDShootButtonObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDShootButtonObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDShootButtonObjects1_1final.push(gdjs.Game_32SceneCode.GDShootButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDShootButtonObjects1_1final, gdjs.Game_32SceneCode.GDShootButtonObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").AmmoQuantity(null) == 0) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ammo"), gdjs.Game_32SceneCode.GDAmmoObjects1);
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
gdjs.Game_32SceneCode.GDBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterXInScene()) + 50, (gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterYInScene()) + 20, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects, (gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterXInScene()) + 50 * gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0).getAsNumber(), (gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterYInScene()), 500, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBulletObjects1[i].getBehavior("MultiplayerObject").takeObjectOwnership();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").SetAmmoQuantityOp(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").AmmoQuantity(null) - (1), null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDAmmoObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDAmmoObjects1[i].getBehavior("Text").setText("=-+ " + gdjs.evtTools.common.toString((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getBehavior("FireBullet").AmmoQuantity(null))) + " SHOTS +-=");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(-(1));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").SetAmmoQuantityOp(10, null);
}
}
{gdjs.multiplayerVariablesManager.disableVariableSynchronization(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}
{gdjs.multiplayerVariablesManager.disableVariableSynchronization(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}
{gdjs.multiplayerVariablesManager.disableVariableSynchronization(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}
{gdjs.multiplayerVariablesManager.disableVariableSynchronization(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.Game_32SceneCode.GDReloadObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Game_32SceneCode.GDReloadObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Reload"), gdjs.Game_32SceneCode.GDReloadObjects2);
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDReloadObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDReloadObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDReloadObjects2[k] = gdjs.Game_32SceneCode.GDReloadObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDReloadObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDReloadObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDReloadObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDReloadObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDReloadObjects1_1final.push(gdjs.Game_32SceneCode.GDReloadObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "r");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDReloadObjects1_1final, gdjs.Game_32SceneCode.GDReloadObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Question"), gdjs.Game_32SceneCode.GDQuestionObjects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Math");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(2, 12));
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(2, 12));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(1, 3));
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDQuestionObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDQuestionObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()) + "x" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1[k] = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1[i].getVariableNumber(gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1[i].getVariables().getFromIndex(0)) == runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1[k] = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ammo"), gdjs.Game_32SceneCode.GDAmmoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Math");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").SetAmmoQuantityOp(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").AmmoQuantity(null) + (1), null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDAmmoObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDAmmoObjects1[i].getBehavior("Text").setText("=-+ " + gdjs.evtTools.common.toString((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getBehavior("FireBullet").AmmoQuantity(null))) + " SHOTS +-=");
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1[k] = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1[i].getVariableNumber(gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1[i].getVariables().getFromIndex(0)) != runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1[k] = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Question"), gdjs.Game_32SceneCode.GDQuestionObjects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Math");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(2, 12));
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(2, 12));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.randomInRange(2, 12) * gdjs.randomInRange(2, 12));
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(1, 3));
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDQuestionObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDQuestionObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()) + "x" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber()));
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1);

for (gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2[i].getVariableNumber(gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2[i].getVariables().getFromIndex(0)) == runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2[k] = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2[i].SetLabelTextOp(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber()), null);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Game_32SceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBulletObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(4)).add(1);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].hide();
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("MultiplayerObject").setPlayerObjectOwnership(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(1).getAsNumber());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].activateBehavior("SmoothCamera", true);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].activateBehavior("RemapForPlatformer", true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer()) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].activateBehavior("SmoothCamera", false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].activateBehavior("RemapForPlatformer", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isPlayerConnected(((gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(1).getAsNumber()));
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)).setNumber((gdjs.Game_32SceneCode.GDPlayerObjects1[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(3)).setNumber((gdjs.Game_32SceneCode.GDPlayerObjects1[i].getPointY("")));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MoveJoystick"), gdjs.Game_32SceneCode.GDMoveJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDMoveJoystickObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDMoveJoystickObjects1[i].IsDirectionPushed4Way("Left", null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDMoveJoystickObjects1[k] = gdjs.Game_32SceneCode.GDMoveJoystickObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDMoveJoystickObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MoveJoystick"), gdjs.Game_32SceneCode.GDMoveJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDMoveJoystickObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDMoveJoystickObjects1[i].IsDirectionPushed4Way("Right", null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDMoveJoystickObjects1[k] = gdjs.Game_32SceneCode.GDMoveJoystickObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDMoveJoystickObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32SceneCode.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDJumpButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDJumpButtonObjects1[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDJumpButtonObjects1[k] = gdjs.Game_32SceneCode.GDJumpButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects1.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects2.length = 0;
gdjs.Game_32SceneCode.GDHPObjects1.length = 0;
gdjs.Game_32SceneCode.GDHPObjects2.length = 0;
gdjs.Game_32SceneCode.GDAmmoObjects1.length = 0;
gdjs.Game_32SceneCode.GDAmmoObjects2.length = 0;
gdjs.Game_32SceneCode.GDShootButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDShootButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDThingObjects1.length = 0;
gdjs.Game_32SceneCode.GDThingObjects2.length = 0;
gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.Game_32SceneCode.GDQuestionObjects1.length = 0;
gdjs.Game_32SceneCode.GDQuestionObjects2.length = 0;
gdjs.Game_32SceneCode.GDReloadObjects1.length = 0;
gdjs.Game_32SceneCode.GDReloadObjects2.length = 0;
gdjs.Game_32SceneCode.GDWinnerTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDWinnerTextObjects2.length = 0;

gdjs.Game_32SceneCode.eventsList7(runtimeScene);
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects1.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects2.length = 0;
gdjs.Game_32SceneCode.GDHPObjects1.length = 0;
gdjs.Game_32SceneCode.GDHPObjects2.length = 0;
gdjs.Game_32SceneCode.GDAmmoObjects1.length = 0;
gdjs.Game_32SceneCode.GDAmmoObjects2.length = 0;
gdjs.Game_32SceneCode.GDShootButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDShootButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDThingObjects1.length = 0;
gdjs.Game_32SceneCode.GDThingObjects2.length = 0;
gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.Game_32SceneCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.Game_32SceneCode.GDQuestionObjects1.length = 0;
gdjs.Game_32SceneCode.GDQuestionObjects2.length = 0;
gdjs.Game_32SceneCode.GDReloadObjects1.length = 0;
gdjs.Game_32SceneCode.GDReloadObjects2.length = 0;
gdjs.Game_32SceneCode.GDWinnerTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDWinnerTextObjects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
