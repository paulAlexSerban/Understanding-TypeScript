/**
 * Object Types
 */

const personV1: {
  name: string,
  age: number
} = {
  name: 'John',
  age: 34,
}

console.log(personV1);

const personV2 = {
  name: 'John',
  age: 34,
}

console.log(personV2);


const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
} = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}