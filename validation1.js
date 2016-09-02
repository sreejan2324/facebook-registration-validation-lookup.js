(function (validation) {
    validation.numbersOnly = function (evt) {
        console.log(evt);
        if ((evt.key>=1 || evt.key<=100)) {

            
        } else {
            evt.preventDefault();
        }
    };
})(window.validation = {});