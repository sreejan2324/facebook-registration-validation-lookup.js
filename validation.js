(function (validations) {
    validations.alphabetsOnly = function (evt) {
        console.log(evt);
        if ((evt.keyCode >= 65 && evt.keyCode <= 90) ||
            (evt.keyCode >= 97 && evt.keyCode <= 122)) {

        } else {
            evt.preventDefault();
        }
    };
})(window.validations = {});