import { test } from "../src"
import assert from "assert"

const data = {
    Inarray1: [
        {
            $inarray: {
                in: "$Value.Objs",
                "?": {
                    $eq: ["$.#", "quiet"],
                },
            },
        },
        {
            Value: {
                Objs: ["the", "world", "is", "quiet", "here"],
            },
        },
    ],
    Inarray2: [
        {
            $inarray: {
                in: "$Value.Objs",
                "?": {
                    $eq: ["$.#", "clarinet"],
                },
            },
        },
        {
            Value: {
                Objs: ["flute", "saxophone", "trumpet", "bass guitar", "drums"],
            },
        },
    ],
}

describe("$inarray", () => {
    it("can find a string in a context array", () => {
        const [sm, vars] = data.Inarray1
        assert.strictEqual(test(sm, vars), true)
    })

    it("returns false if the item isn't present", () => {
        const [sm, vars] = data.Inarray2
        assert.strictEqual(test(sm, vars), false)
    })
})
