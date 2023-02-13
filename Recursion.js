console.log("<===Recursion===>");

const obj = {
  lvl1: "level-1",
  child1: {
    lvl2: "level-2",
    child2: {
      lvl3: "level-3",
      child3: "okk",
      lvl3_2: "level-3",
      child3_2: {
        lvl4: "level-4",
        child4: "kkk",
      },
    },
  },
};

let level = "Dir";

function Recursion(obj, key) {
  if (typeof obj == "object") {
    level += " > " + key;
    console.log(level);
    for (let x in obj) {
      Recursion(obj[x], x);
    }
  } else {
    return;
  }
}

Recursion(obj, "obj");
