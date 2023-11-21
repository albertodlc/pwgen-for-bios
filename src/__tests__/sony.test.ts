import { sonySolver } from "../sony";

describe("Sony BIOS", () => {
    test("Sony key for 1234567 is 9648669", () => {
        expect(sonySolver("1234567")).toEqual(["9648669"]);
    });
    test("test invalid keys", () => {
        expect(sonySolver("123456789")).toEqual([]);
        expect(sonySolver("123")).toEqual([]);
    });
});
