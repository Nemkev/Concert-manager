import { PubSub } from "apollo-server-express";

let score = 0;
const nums = [];
const pubsub = new PubSub();

const NEW_NUM = "NEW_NUM";

export default {
  Query: {
    getNums: () => nums
  },
  Mutation: {
    addNum: () => {
      nums.push(score);
      pubsub.publish(NEW_NUM, { newNum: score });
      score += 1;
      return nums;
    }
  },
  Subscription: {
    newNum: {
      subscribe: () => {
        return pubsub.asyncIterator(NEW_NUM);
      }
    }
  }
};
