// kata 1

const bowlingPins = arr => "7 8 9 10\n 4 5 6 \n  2 3  \n   1   ".split`\n`.map(
    v =>
      v.split` `.map(v => (arr.includes(v * 1) ? " " : v === "" ? "" : "I"))
        .join` `
  ).join`\n`;

// kata 2

const dismember = func => {
    let a = func.toString().match(/\(.*\)/)[0]
  if (a.length===2) return []
  return a.slice(1,-1).split`,`.map(v=>v.trim())
}

// solution 2

const dismember = func => (''+func).match(/(?<=\().*(?=\))/)[0].match(/\w+/g)||[];

// kata 3 

const encrypt = (text, rule) => text
    .split("")
    .map(v => String.fromCharCode((v.charCodeAt() + rule) % 256))
    .join(``);
