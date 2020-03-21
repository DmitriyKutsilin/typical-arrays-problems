
exports.min = function min (array) {
  let minimum = Math.min.apply(null, array);
  if (array && array.length) {
    return minimum;
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  let maximum = Math.max.apply(null, array);
  if (array && array.length) {
    return maximum;
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  let numberSum = 0;
  if (array && array.length) {
    for (let i = 0; i < array.length; i++) {
    numberSum += array[i];
  }
    let average = numberSum / array.length;
    return average;
  } else {
    return 0;
  }
}

