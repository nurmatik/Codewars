function arrayPlusArray(arr1, arr2) {
    arr1 = arr1.reduce((sum, arr) => sum + arr, 0);
    arr2 = arr2.reduce((sum, arr) => sum + arr, 0);
  return  arr1 + arr2; //something went wrong
}