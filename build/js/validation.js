'use strict';

(function () {

  var formUpload = document.querySelector('.form__upload');
  var buttonSubmit = formUpload.querySelector('.button');

  function CustomValidation() {
    this.invalidities = [];
    this.validityChecks = [];
  }

  CustomValidation.prototype = {
    addInvalidity: function(message) {
      this.invalidities.push(message);
    },

    getInvalidities: function() {
      return this.invalidities.join('. \n');
    },

    checkValidity: function(input) {

      for (var i = 0; i < this.validityChecks.length; i++ ) {
        var isInvalid = this.validityChecks[i].isInvalid(input);


        if(isInvalid) {
          this.addInvalidity(this.validityChecks[i].invalidityMessage);
        }
      }
    }
  };

    var emailValidityChecks = [
      {
        isInvalid: function(input) {
        return input.value === '';

        },
        invalidityMessage: 'Введите E-mail',
      },
      {
        isInvalid: function(input) {
        return !input.value.match(/[@]/g);

        },
        invalidityMessage: 'E-mail должен содержать символ "@"',
      }
    ];

    var userNameValidityChecks = [

      {
        isInvalid: function(input) {
        return input.value === '';

        },
        invalidityMessage: 'Введите Никнейм',
      },

      {
        isInvalid: function(input) {
          var firstLetter = input.value.charAt(0).match(/[^a-zA-Z]/g);
          return firstLetter ? true : false;

        },
        invalidityMessage: 'Ник-нейм должен начинаться только с буквы',
      },
      {
        isInvalid: function(input) {
          return input.value.length < 3;

        },
        invalidityMessage: 'Ник-нейм должен содержать минимум 3 символа',
      },
      {
        isInvalid: function(input) {
          var illegalCharacters = input.value.match(/[^a-zA-Z0-9_;]/g);
          return illegalCharacters ? true : false;
        },
        invalidityMessage: 'Ник-нейм должен содержать только буквы, цифры, cимволы (_) и (;)',

      }

    ];

  function checkInput (input) {

    input.CustomValidation.invalidities = [];

    input.CustomValidation.checkValidity(input);

    if (input.CustomValidation.invalidities.length == 0 && input.value != '' ) {

      input.setCustomValidity('');

    } else {

      var message = input.CustomValidation.getInvalidities();
      input.setCustomValidity(message);
    }
  };

  var emailFeld = document.querySelector('#e-mail');
  var userNamefeld = document.querySelector('#user-name');

  emailFeld.CustomValidation = new CustomValidation();
  emailFeld.CustomValidation.validityChecks = emailValidityChecks;

  userNamefeld.CustomValidation = new CustomValidation();
  userNamefeld.CustomValidation.validityChecks = userNameValidityChecks;



  var inputs = document.querySelectorAll('input[required]');

  for (var i = 0; i < inputs.length; i++ ) {

    inputs[i].addEventListener('input', function() {
          checkInput(this);
    });
  };

  formUpload.addEventListener('submit', function(evt) {
    evt.preventDefault();
    for (var i = 0; i < inputs.length; i++) {
      checkInput(inputs[i]);
    };

    for (var i = 0; i < inputs.length; i++ ) {
      if (inputs[i].CustomValidation.invalidities.length === 0 && inputs[i].value !== "") {

        var object = {};
        var formData = new FormData(formUpload);

        formData.forEach(function(value, key) {
          object[key] = value;
        });

        var json = JSON.stringify(object);
        console.log(json);
      }
    };
  });

})();
'use strict';

(function () {

  var formUpload = document.querySelector('.form__upload');
  var buttonSubmit = formUpload.querySelector('.button');

  function CustomValidation() {
    this.invalidities = [];
    this.validityChecks = [];
  }

  CustomValidation.prototype = {
    addInvalidity: function(message) {
      this.invalidities.push(message);
    },

    getInvalidities: function() {
      return this.invalidities.join('. \n');
    },

    checkValidity: function(input) {

      for (var i = 0; i < this.validityChecks.length; i++ ) {
        var isInvalid = this.validityChecks[i].isInvalid(input);


        if(isInvalid) {
          this.addInvalidity(this.validityChecks[i].invalidityMessage);
        }
      }
    }
  };

    var emailValidityChecks = [
      {
        isInvalid: function(input) {
        return input.value === '';

        },
        invalidityMessage: 'Введите E-mail',
      },
      {
        isInvalid: function(input) {
        return !input.value.match(/[@]/g);

        },
        invalidityMessage: 'E-mail должен содержать символ "@"',
      }
    ];

    var userNameValidityChecks = [

      {
        isInvalid: function(input) {
        return input.value === '';

        },
        invalidityMessage: 'Введите Никнейм',
      },

      {
        isInvalid: function(input) {
          var firstLetter = input.value.charAt(0).match(/[^a-zA-Z]/g);
          return firstLetter ? true : false;

        },
        invalidityMessage: 'Ник-нейм должен начинаться только с буквы',
      },
      {
        isInvalid: function(input) {
          return input.value.length < 3;

        },
        invalidityMessage: 'Ник-нейм должен содержать минимум 3 символа',
      },
      {
        isInvalid: function(input) {
          var illegalCharacters = input.value.match(/[^a-zA-Z0-9_;]/g);
          return illegalCharacters ? true : false;
        },
        invalidityMessage: 'Ник-нейм должен содержать только буквы, цифры, cимволы (_) и (;)',

      }

    ];

  function checkInput (input) {

    input.CustomValidation.invalidities = [];

    input.CustomValidation.checkValidity(input);

    if (input.CustomValidation.invalidities.length == 0 && input.value != '' ) {

      input.setCustomValidity('');

    } else {

      var message = input.CustomValidation.getInvalidities();
      input.setCustomValidity(message);
    }
  };

  var emailFeld = document.querySelector('#e-mail');
  var userNamefeld = document.querySelector('#user-name');

  emailFeld.CustomValidation = new CustomValidation();
  emailFeld.CustomValidation.validityChecks = emailValidityChecks;

  userNamefeld.CustomValidation = new CustomValidation();
  userNamefeld.CustomValidation.validityChecks = userNameValidityChecks;



  var inputs = document.querySelectorAll('input[required]');

  for (var i = 0; i < inputs.length; i++ ) {

    inputs[i].addEventListener('input', function() {
          checkInput(this);
    });
  };

  formUpload.addEventListener('submit', function(evt) {
    evt.preventDefault();
    for (var i = 0; i < inputs.length; i++) {
      checkInput(inputs[i]);
    };

    for (var i = 0; i < inputs.length; i++ ) {
      if (inputs[i].CustomValidation.invalidities.length === 0 && inputs[i].value !== "") {

        var object = {};
        var formData = new FormData(formUpload);

        formData.forEach(function(value, key) {
          object[key] = value;
        });

        var json = JSON.stringify(object);
        console.log(json);
      }
    };
  });

})();
