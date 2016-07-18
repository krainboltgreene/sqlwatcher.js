import {describe, it} from "mocha"
import {expect} from "chai"

import subject from "./index"

describe("sqlwatcher()", () => {
  it("is a function", () => {
    expect(subject).to.a("function")
  })
})
