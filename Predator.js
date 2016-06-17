var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function (carnivores) {
        carnivores = JSON.parse(this.responseText).carnivores;

        callbackToInvoke(carnivores)
      });

      loader.open("GET", "carnivores.json");
      loader.send();

    },

    loadHerbivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function (herbivores) {
        herbivores = JSON.parse(this.responseText).herbivores;

        callbackToInvoke(herbivores)
      });

      loader.open("GET", "herbivores.json");
      loader.send();

    }
  }
})();

