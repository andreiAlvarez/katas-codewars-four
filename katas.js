// kata 1

const bowlingPins = arr => "7 8 9 10\n 4 5 6 \n  2 3  \n   1   ".split`\n`.map(
    v =>
      v.split` `.map(v => (arr.includes(v * 1) ? " " : v === "" ? "" : "I"))
        .join` `
  ).join`\n`;
