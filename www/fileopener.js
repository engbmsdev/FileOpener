// forked from https://github.com/markeeftb/FileOpener

module.exports = {
    open: function (url, opt_success, opt_failure, newTask) {
        if (typeof opt_success == 'undefined') {
            opt_success = function () {
                console.log("success!");
            }
        }
        if (typeof opt_failure == 'undefined') {
            opt_failure = function (error) {
                console.log(error);
            }
        }
        if (typeof newTask == 'undefined'){
          newTask = true
        }

        cordova.exec(opt_success, opt_failure, "FileOpener", "openFile", [url, newTask]);
    }
}
