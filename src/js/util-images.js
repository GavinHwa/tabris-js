(function() {

  util.imageToArray = function(value) {
    return [value.src, checkValue(value.width), checkValue(value.height), checkValue(value.scale)];
  };

  util.imageFromArray = function(value) {
    var result = {src: value[0]};
    if (value[1]) {
      result.width = value[1];
    }
    if (value[2]) {
      result.height = value[2];
    }
    if (value[3]) {
      result.scale = value[3];
    }
    return result;
  };

  function checkValue(value) {
    return value != null ? value : null;
  }

}());
