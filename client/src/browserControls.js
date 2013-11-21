/**
   * These are browser controls.
   * Browser controls are groups of inputs working in concert
   *
   * _listen - A function that binds necessary event listeners to the <input> elements
   */
  var browserControls = {
    
    /**
     * fieldset data-device-type="orientation"
     *
     * A group of two or three ranges
     **/
    Orientation: {
      
      /**
       * On deviceorientation check to see if there are inputs for each of the three axes
       * If so, move that range input
       **/
      _listen: function(el, browserControl) {
        window.addEventListener('deviceorientation', function(event) {
          _each(['alpha', 'beta', 'gamma'], function (prefix) {
            if (browserControl[prefix+'Input']) {
              boards[browserControl._board][browserControl[prefix+'Input']].move((event[prefix]+180)/2);
            }
          }, this);          
        });
      },
      
      _update: function(alpha, beta, gamma) {
        //todo
      },
      
      /**
       * Bind each of the inputs associated with the browser control with
       * the appropriate axis
       **/
       _initialize: function(el, browserControl) {
        var inputs = document.getElementById(this._element).getElementsByTagName('input');
        for (i = 0; i < inputs.length; i++) {
          if (inputs[i].hasAttribute('data-axis')) {
            _each(['alpha', 'beta', 'gamma'], function (prefix) {
              if (inputs[i].getAttribute('data-axis') === prefix) {
                this[prefix+'Input'] = inputs[i].id;
              }
            }, this);
          }
        }
        
      }
    }
  }