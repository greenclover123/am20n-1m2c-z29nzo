gdjs.whitevoidCode = {};
gdjs.whitevoidCode.localVariables = [];
gdjs.whitevoidCode.idToCallbackMap = new Map();
gdjs.whitevoidCode.GDwyObjects1= [];
gdjs.whitevoidCode.GDwyObjects2= [];
gdjs.whitevoidCode.GDwyObjects3= [];
gdjs.whitevoidCode.GDwyObjects4= [];
gdjs.whitevoidCode.GDwyObjects5= [];


gdjs.whitevoidCode.asyncCallback12417500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.whitevoidCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("wy"), gdjs.whitevoidCode.GDwyObjects5);

{for(var i = 0, len = gdjs.whitevoidCode.GDwyObjects5.length ;i < len;++i) {
    gdjs.whitevoidCode.GDwyObjects5[i].getBehavior("Text").setText("removal.html");
}
}
gdjs.whitevoidCode.localVariables.length = 0;
}
gdjs.whitevoidCode.idToCallbackMap.set(12417500, gdjs.whitevoidCode.asyncCallback12417500);
gdjs.whitevoidCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.whitevoidCode.localVariables);
for (const obj of gdjs.whitevoidCode.GDwyObjects4) asyncObjectsList.addObject("wy", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.whitevoidCode.asyncCallback12417500(runtimeScene, asyncObjectsList)), 12417500, asyncObjectsList);
}
}

}


};gdjs.whitevoidCode.asyncCallback13143508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.whitevoidCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("wy"), gdjs.whitevoidCode.GDwyObjects4);

{for(var i = 0, len = gdjs.whitevoidCode.GDwyObjects4.length ;i < len;++i) {
    gdjs.whitevoidCode.GDwyObjects4[i].getBehavior("Text").setText("heaven isn't what it seems");
}
}

{ //Subevents
gdjs.whitevoidCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.whitevoidCode.localVariables.length = 0;
}
gdjs.whitevoidCode.idToCallbackMap.set(13143508, gdjs.whitevoidCode.asyncCallback13143508);
gdjs.whitevoidCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.whitevoidCode.localVariables);
for (const obj of gdjs.whitevoidCode.GDwyObjects3) asyncObjectsList.addObject("wy", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.whitevoidCode.asyncCallback13143508(runtimeScene, asyncObjectsList)), 13143508, asyncObjectsList);
}
}

}


};gdjs.whitevoidCode.asyncCallback12740900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.whitevoidCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("wy"), gdjs.whitevoidCode.GDwyObjects3);

{for(var i = 0, len = gdjs.whitevoidCode.GDwyObjects3.length ;i < len;++i) {
    gdjs.whitevoidCode.GDwyObjects3[i].getBehavior("Text").setText("it showed me something i can't describe");
}
}

{ //Subevents
gdjs.whitevoidCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.whitevoidCode.localVariables.length = 0;
}
gdjs.whitevoidCode.idToCallbackMap.set(12740900, gdjs.whitevoidCode.asyncCallback12740900);
gdjs.whitevoidCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.whitevoidCode.localVariables);
for (const obj of gdjs.whitevoidCode.GDwyObjects2) asyncObjectsList.addObject("wy", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.whitevoidCode.asyncCallback12740900(runtimeScene, asyncObjectsList)), 12740900, asyncObjectsList);
}
}

}


};gdjs.whitevoidCode.asyncCallback14201156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.whitevoidCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("wy"), gdjs.whitevoidCode.GDwyObjects2);

{for(var i = 0, len = gdjs.whitevoidCode.GDwyObjects2.length ;i < len;++i) {
    gdjs.whitevoidCode.GDwyObjects2[i].hide(false);
}
}

{ //Subevents
gdjs.whitevoidCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.whitevoidCode.localVariables.length = 0;
}
gdjs.whitevoidCode.idToCallbackMap.set(14201156, gdjs.whitevoidCode.asyncCallback14201156);
gdjs.whitevoidCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.whitevoidCode.localVariables);
for (const obj of gdjs.whitevoidCode.GDwyObjects1) asyncObjectsList.addObject("wy", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.whitevoidCode.asyncCallback14201156(runtimeScene, asyncObjectsList)), 14201156, asyncObjectsList);
}
}

}


};gdjs.whitevoidCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("wy"), gdjs.whitevoidCode.GDwyObjects1);
{for(var i = 0, len = gdjs.whitevoidCode.GDwyObjects1.length ;i < len;++i) {
    gdjs.whitevoidCode.GDwyObjects1[i].hide();
}
}

{ //Subevents
gdjs.whitevoidCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.whitevoidCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.whitevoidCode.GDwyObjects1.length = 0;
gdjs.whitevoidCode.GDwyObjects2.length = 0;
gdjs.whitevoidCode.GDwyObjects3.length = 0;
gdjs.whitevoidCode.GDwyObjects4.length = 0;
gdjs.whitevoidCode.GDwyObjects5.length = 0;

gdjs.whitevoidCode.eventsList4(runtimeScene);
gdjs.whitevoidCode.GDwyObjects1.length = 0;
gdjs.whitevoidCode.GDwyObjects2.length = 0;
gdjs.whitevoidCode.GDwyObjects3.length = 0;
gdjs.whitevoidCode.GDwyObjects4.length = 0;
gdjs.whitevoidCode.GDwyObjects5.length = 0;


return;

}

gdjs['whitevoidCode'] = gdjs.whitevoidCode;
