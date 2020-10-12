//Componente para cambiar el color de una entidad al interactuar con el ratón sobre éste

AFRAME.registerComponent('change-color-on-hover', {
    schema: {
      color: {default: 'green'}
    },

    init: function () {
      var data = this.data;
      var el = this.el;
      var defaultColor = el.getAttribute('material').color;

      el.addEventListener('mouseenter', function () {
        el.setAttribute('color', data.color);
      });

      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', defaultColor);
      });

      el.addEventListener('click', function () {
        el.setAttribute('color', "red");
      });
    }
  });

//Componente para modificar el DOM con queryselector y set/get getAttribute

AFRAME.registerComponent('foo', {
        init: function () {
          // Jugar con las entidades de la escena
          var sceneEl = document.querySelector('a-scene');
          var boxEl = sceneEl.querySelector('#caja');

          console.log(sceneEl.querySelectorAll('a-sphere, a-cylinder'));
          console.log(sceneEl.querySelectorAll('#polygon'));

          boxEl.addEventListener('click', function () {
            var condition1 = boxEl.getAttribute('animation');
            console.log(condition1 == null)
            if (condition1 == null){
                boxEl.setAttribute('animation', "property: position; from: -1 0.5 -3; to: -1 1.5 -3; dir: alternate; loop: true");
            }else{
                boxEl.removeAttribute('animation');
            };
          });
        }
      });
