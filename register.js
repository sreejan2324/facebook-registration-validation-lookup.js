(function () {
    var optionTag;
    var tag;
    var cityTag;
    function init() {
        bindEvents();
        bulidCountryDropDown();
        buildState();
        bulidCityDropDown();
    }

    function getAllControls() {
        var controls = {};
        controls.firstName = document.getElementById("txtFirstName");
        controls.lastName = document.getElementById("txtLastName");
        controls.register = document.getElementById("btnRegister");
        controls.password = document.getElementById("txtPassword");
        controls.terms = document.getElementById("chkAgree");
        controls.age = document.getElementById("txtAge");
        controls.country = document.getElementById("ddlCountry");
        controls.state = document.getElementById("ddlState");
        controls.city = document.getElementById("ddlCity");
        controls.gender = document.getElementsByName("gender");
        

        return controls;
    }

    function registerUser() {
        var userDetails = {};
        var controls = getAllControls();
        userDetails.firstName = controls.firstName.value;
        userDetails.lastName = controls.lastName.value;
        userDetails.age = controls.age.value;
        userDetails.terms = controls.terms.checked;
        userDetails.password = controls.password.value;
        userDetails.gender = getGender(controls.gender);
        userDetails.country = controls.country.value;
        userDetails.state = controls.state.value;
        userDetails.city = controls.city.value;
        console.log(userDetails);
    }

    function getGender(genderList) {

        for (var i = 0; i < genderList.length; i++) {
            //step 3 do something.
            if (genderList[i].checked) {

                return genderList[i].value;
            }

        }

    }
   
    function bulidCountryDropDown() {
        /*step1 get the country list
        step2 get the country dropdown.
        step3 loop through the list of countries
         for each country build the option tag
        step append the option tag as a child to dropdown*/

        var countryList = lookup.getCountryList();
        var ddlCountry = getAllControls().country;
        for (var i = 0; i < countryList.length; i++) {
            createOptionTag(countryList[i], ddlCountry);
        }
    }

    function buildState() {
        var stateList =lookdown.getStateList();
        var ddlState=getAllControls().state;
        for (var i = 0; i < stateList.length; i++) {
            createTag(stateList[i],ddlState);
        
    }
    }
    
    function bulidCityDropDown() {
        
        var cityList = lookcity.getCityList();
        var ddlCity = getAllControls().city;
        for (var i = 0; i < cityList.length; i++) {
            createCityTag(cityList[i], ddlCity);
        }
    }

    function createOptionTag(data, ctrl) {
         optionTag = document.createElement("option");
        optionTag.value = data.code;
        optionTag.textContent = data.name;
        //console.log(optionTag);
        ctrl.appendChild(optionTag);
    }

    
    function createTag(data, ctrl) {
         tag = document.createElement("option");
        tag.value = data.code;
        tag.textContent = data.name;
        //console.log(tag);
        if(optionTag.textContent==tag.textContent){
            return tag.value;
        }
        ctrl.appendChild(tag);
    }
    
    function createCityTag(data, ctrl) {
         cityTag = document.createElement("option");
        cityTag.value = data.country;
        cityTag.textContent = data.city;
        //console.log(optionTag);
        ctrl.appendChild(cityTag);
    }

    function bindEvents() {
        var controls = getAllControls();

        controls.country.addEventListener("change", loadStateList);
    
        controls.register.addEventListener("click", registerUser);
        controls.age.addEventListener("keypress", validation.numbersOnly);
        
        controls.firstName.addEventListener("keypress", validations.alphabetsOnly);
        controls.lastName.addEventListener("keypress", validations.alphabetsOnly);

    }


    function loadStateList() {
        console.log(this.value);
    };
    init();
    
    
     function loadStateList1() {
        console.log(this.value);
    };
    init();
    
   
    


})();