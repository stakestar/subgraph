import { BigInt } from "@graphprotocol/graph-ts";

export const weightedAverage = (values: Array<BigInt>, weights: Array<BigInt>): BigInt => {
    let sum = new BigInt(0)
    let weightedSum = new BigInt(0)
    for (let i = 0; i < values.length; i++) {
        sum = sum.plus(values[i].times(weights[i]))
        weightedSum = weightedSum.plus(weights[i])
    }

    return weightedSum.equals(new BigInt(0)) ? new BigInt(0) : sum.div(weightedSum)
}