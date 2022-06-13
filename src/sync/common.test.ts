import { Color, State } from "./common";

describe("Color", () => {
  test.each([
    ["BerryRed", 30],
    ["Red", 31],
    ["Orange", 32],
    ["Yellow", 33],
    ["OliveGreen", 34],
    ["LimeGreen", 35],
    ["Green", 36],
    ["MintGreen", 37],
    ["Teal", 38],
    ["SkyBlue", 39],
    ["LightBlue", 40],
    ["Blue", 41],
    ["Grape", 42],
    ["Violet", 43],
    ["Lavender", 44],
    ["Magenta", 45],
    ["Salmon", 46],
    ["Charcoal", 47],
    ["Grey", 48],
    ["Taupe", 49],
  ])("verify that the name %s matches the ID %d", (name, id) => {
    expect(Color[name]).toEqual(id);
  });
});

describe("State", () => {
  test.each([
    ["No", 0],
    ["Yes", 1],
  ])("verify the %s state value is %d", (name, value) => {
    expect(State[name]).toEqual(value);
  });
});
