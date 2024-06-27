async function merge(
  arr: number[],
  l: number,
  m: number,
  r: number,
  setArr: any
) {
  let auxArr = [];
  let i = l;
  let j = m + 1;
  let k = l;

  while (i <= m && j <= r) {
    let col1 = document.getElementById(`sort-col-${arr[i]}`);
    let col2 = document.getElementById(`sort-col-${arr[j]}`);
    col1!.style.backgroundColor = "red";
    col2!.style.backgroundColor = "red";
    if (arr[i] < arr[j]) {
      auxArr[k++] = arr[i++];
    } else {
      auxArr[k++] = arr[j++];
    }
    await sleep(50);
    col1!.style.backgroundColor = "white";
    col2!.style.backgroundColor = "white";
  }

  for (; i <= m; i++) auxArr[k++] = arr[i];
  for (; j <= r; j++) auxArr[k++] = arr[j];

  for (i = l; i <= r; i++) arr[i] = auxArr[i];
  setArr([...arr]);
}

export async function iterMergeSort(arr: number[], setArr: any, wait = 500) {
  let low;
  let mid;
  let high;
  let p;
  for (p = 2; p <= arr.length; p *= 2) {
    for (let i = 0; i + p - 1 < arr.length; i += p) {
      low = i;
      high = i + p - 1;
      mid = Math.floor((low + high) / 2);
      merge(arr, low, mid, high, setArr);
      await sleep(wait);
    }
  }

  if (p / 2 < arr.length) {
    merge(arr, 0, p / 2 - 1, arr.length - 1, setArr);
  }
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
