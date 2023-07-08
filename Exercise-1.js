const destructureExample = (object , array)=>{
    const {name,age} = object;
    const [firstIndex,,secoundIndex] = array;

    return {name,age};
}

const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];

const destructedData = destructureExample(obj,arr);
console.log(destructedData);