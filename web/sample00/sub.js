function createStage(name) {
    console.log(P);
    console.log(`name=${name}`)
    P.stage = new P.Stage(name);
}
function addImage(imgName) {
    console.log(`P.stage=${P.stage}`);
    console.log(`P.images=${P.images}`);
    console.log(`P.images.Jurassic=${P.images.Jurassic}`);
    P.stage.addImage(P.images.Jurassic);
}
function setting() {
}
function test() {
    console.log('sub test');
}
function test2(a, b) {
    console.log(`sub test2 ${a},${b}`);
}

P.preload = function() {
    console.log(window)
    console.log(rubyVM)
    rubyVM.eval("preloader");
}

P.prepare = function() {
    rubyVM.eval("prepareer")
}