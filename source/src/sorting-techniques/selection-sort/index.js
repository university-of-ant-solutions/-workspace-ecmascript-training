function selection(arr) {
  let i,
    j,
    min_idx,
    temp;
  const length = arr.length;
  for (i = 0; i < length - 1; i++) {
    min_idx = i;
    for (j = i + 1; j < length; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    temp = arr[min_idx];
    arr[min_idx] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

export default selection;
