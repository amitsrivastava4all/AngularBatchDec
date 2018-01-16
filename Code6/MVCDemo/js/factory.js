app.factory("initfactory", () => {
    console.log("Factory Start...");
    var object = {
        initCap(str) {
            return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
        }
    }
    console.log("Factory Return ",object);
    return object;
});