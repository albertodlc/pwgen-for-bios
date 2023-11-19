import { monotonicTime } from "../../src/polyfills/performancePolyfill.js";

describe("Check performance.now polyfill", () => {
    it("monotonicTime should return number", () => {
        expect(typeof monotonicTime()).toEqual("number");
    });
});
