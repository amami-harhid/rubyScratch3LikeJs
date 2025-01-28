function createStage(name) {
    P.stage = new P.Stage(name);
}
function addImage(imgName) {
    P.stage.addImage(P.images[imgName]);
}
P.preload = function() {
    rubyVM.eval("preload");
}

P.prepare = function() {
    rubyVM.eval("prepare")
}

P.setting = function() {
    rubyVM.eval("setting")
}