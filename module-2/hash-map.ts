function firstUniqChar(s: string) {
  let map = {};

  s.split("").forEach((v, i) => {
    if (map[v]) {
      map[v][1] += 1;
    } else {
      map[v] = [i, 1];
    }
  });

  const mapKeys = Object.keys(map);

  for (let key of mapKeys) {
    if (map[key][1] === 1) return key;
  }

  return -1;
}

console.log(firstUniqChar("loveleetcode"));
