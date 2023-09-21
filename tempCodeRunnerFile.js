function capitalize(a) {
  if (typeof a === "string") {
    let cap = a.charAt(0);
    let cut = a.slice(1);
    let majuscule = cap.toUpperCase;
    return `${majuscule}${cut}`;
  } else {
    return null;
  }
}

const a = "rabbit";
const result = capitalize(a);
console.log(result);