function bubble(arr) {
  const length = arr.length;
  let e = null,
    j = null;
  for (let i = 0; i < length; i++) {
    j = 0;
    for (; j < length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        e = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = e;
      }
    }
  }
  return arr;
}

export default bubble;
