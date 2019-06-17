module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let enhancement = item.enhancement;
  enhancement>0 && enhancement<20 ? (enhancement += 1):enhancement;
  return { ...item, enhancement:enhancement };
}

function fail(item) {
  let enhancement = item.enhancement;
  let durability = item.durability;
  enhancement < 15 ? (durability -= 5) : (durability -= 10);
  enhancement > 16 ? (enhancement -= 1) : enhancement;
  const newItem = item;
  return { ...newItem, enhancement: enhancement, durability: durability };
}
function repair(item) {
  item.durability = 100;
  const newItem = item;
  return { ...newItem };
}

function get(item) {
  return { ...item };
}
