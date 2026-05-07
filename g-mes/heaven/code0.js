gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects3= [];
gdjs.Game_32SceneCode.GDPlayerObjects4= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects3= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects4= [];
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1= [];
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2= [];
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects3= [];
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects4= [];
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1= [];
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2= [];
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects3= [];
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects4= [];
gdjs.Game_32SceneCode.GDmovingangelObjects1= [];
gdjs.Game_32SceneCode.GDmovingangelObjects2= [];
gdjs.Game_32SceneCode.GDmovingangelObjects3= [];
gdjs.Game_32SceneCode.GDmovingangelObjects4= [];
gdjs.Game_32SceneCode.GDDialogBoxObjects1= [];
gdjs.Game_32SceneCode.GDDialogBoxObjects2= [];
gdjs.Game_32SceneCode.GDDialogBoxObjects3= [];
gdjs.Game_32SceneCode.GDDialogBoxObjects4= [];
gdjs.Game_32SceneCode.GDDialogTextObjects1= [];
gdjs.Game_32SceneCode.GDDialogTextObjects2= [];
gdjs.Game_32SceneCode.GDDialogTextObjects3= [];
gdjs.Game_32SceneCode.GDDialogTextObjects4= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDmovingangelObjects3Objects = Hashtable.newFrom({"movingangel": gdjs.Game_32SceneCode.GDmovingangelObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDmovingangelObjects3Objects = Hashtable.newFrom({"movingangel": gdjs.Game_32SceneCode.GDmovingangelObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDmovingangelObjects3Objects = Hashtable.newFrom({"movingangel": gdjs.Game_32SceneCode.GDmovingangelObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDmovingangelObjects3Objects = Hashtable.newFrom({"movingangel": gdjs.Game_32SceneCode.GDmovingangelObjects3});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.Game_32SceneCode.GDmovingangelObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDmovingangelObjects3Objects, gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), 0, "");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.Game_32SceneCode.GDmovingangelObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDmovingangelObjects3Objects, gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene), "");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.Game_32SceneCode.GDmovingangelObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDmovingangelObjects3Objects, 0, gdjs.random(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene)), "");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.Game_32SceneCode.GDmovingangelObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDmovingangelObjects3Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.random(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene)), "");
}
}

}


};gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{


const repeatCount2 = 15;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 4));
}

{ //Subevents: 
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //Subevents end.
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Wall_Obstacle": gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Plant_Obstacle": gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDmovingangelObjects1Objects = Hashtable.newFrom({"movingangel": gdjs.Game_32SceneCode.GDmovingangelObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Wall_Obstacle": gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Wall_Obstacle": gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1});
gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogBox"), gdjs.Game_32SceneCode.GDDialogBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText"), gdjs.Game_32SceneCode.GDDialogTextObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "", 0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WanderTimer");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDialogBoxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDialogBoxObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDialogTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDialogTextObjects1[i].hide();
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("movingangel"), gdjs.Game_32SceneCode.GDmovingangelObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDmovingangelObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDmovingangelObjects1[i].addPolarForce(gdjs.random(360), 10, 1);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDmovingangelObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDmovingangelObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDmovingangelObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDmovingangelObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDmovingangelObjects1[i].resetTimer("ActionTimer");
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Plant_Obstacle"), gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall_Obstacle"), gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects1Objects, false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects1Objects, false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playSound(runtimeScene, "its so dark.mp3", true, 0.6, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Wall_Obstacle"), gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("movingangel"), gdjs.Game_32SceneCode.GDmovingangelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDmovingangelObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDmovingangelObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDmovingangelObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDmovingangelObjects1[i].getBehavior("Bounce").BounceOff(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects1Objects, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("movingangel"), gdjs.Game_32SceneCode.GDmovingangelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDmovingangelObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDmovingangelObjects1[i].getVariableNumber(gdjs.Game_32SceneCode.GDmovingangelObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDmovingangelObjects1[k] = gdjs.Game_32SceneCode.GDmovingangelObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDmovingangelObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDmovingangelObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDmovingangelObjects1[i].getTimerElapsedTimeInSecondsOrNaN("ActionTimer") > gdjs.randomInRange(2, 4) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDmovingangelObjects1[k] = gdjs.Game_32SceneCode.GDmovingangelObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDmovingangelObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDmovingangelObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDmovingangelObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDmovingangelObjects1[i].clearForces();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDmovingangelObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDmovingangelObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDmovingangelObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDmovingangelObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDmovingangelObjects1[i].resetTimer("ActionTimer");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("movingangel"), gdjs.Game_32SceneCode.GDmovingangelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDmovingangelObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDmovingangelObjects1[i].getVariableNumber(gdjs.Game_32SceneCode.GDmovingangelObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDmovingangelObjects1[k] = gdjs.Game_32SceneCode.GDmovingangelObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDmovingangelObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDmovingangelObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDmovingangelObjects1[i].getTimerElapsedTimeInSecondsOrNaN("ActionTimer") > 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDmovingangelObjects1[k] = gdjs.Game_32SceneCode.GDmovingangelObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDmovingangelObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDmovingangelObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDmovingangelObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDmovingangelObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDmovingangelObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDmovingangelObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDmovingangelObjects1[i].addPolarForce(gdjs.random(360), 10, 1);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDmovingangelObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDmovingangelObjects1[i].resetTimer("ActionTimer");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PopUpTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PopUpTimer") > 2.5;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogBox"), gdjs.Game_32SceneCode.GDDialogBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText"), gdjs.Game_32SceneCode.GDDialogTextObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDialogBoxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDialogBoxObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDialogTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDialogTextObjects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PopUpTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PopUpTimer") > 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogBox"), gdjs.Game_32SceneCode.GDDialogBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText"), gdjs.Game_32SceneCode.GDDialogTextObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDialogBoxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDialogBoxObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDialogTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDialogTextObjects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(3);
}
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects3.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects4.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects4.length = 0;
gdjs.Game_32SceneCode.GDmovingangelObjects1.length = 0;
gdjs.Game_32SceneCode.GDmovingangelObjects2.length = 0;
gdjs.Game_32SceneCode.GDmovingangelObjects3.length = 0;
gdjs.Game_32SceneCode.GDmovingangelObjects4.length = 0;
gdjs.Game_32SceneCode.GDDialogBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDDialogBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDDialogBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDDialogBoxObjects4.length = 0;
gdjs.Game_32SceneCode.GDDialogTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDDialogTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDDialogTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDDialogTextObjects4.length = 0;

gdjs.Game_32SceneCode.eventsList2(runtimeScene);
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects3.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects4.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects4.length = 0;
gdjs.Game_32SceneCode.GDmovingangelObjects1.length = 0;
gdjs.Game_32SceneCode.GDmovingangelObjects2.length = 0;
gdjs.Game_32SceneCode.GDmovingangelObjects3.length = 0;
gdjs.Game_32SceneCode.GDmovingangelObjects4.length = 0;
gdjs.Game_32SceneCode.GDDialogBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDDialogBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDDialogBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDDialogBoxObjects4.length = 0;
gdjs.Game_32SceneCode.GDDialogTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDDialogTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDDialogTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDDialogTextObjects4.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
