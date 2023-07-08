const getAddressCity = (address)=>{
    return address?.city ?? 'Unknown';
}

const address = { street: '123 Main St', country: 'USA' };
const data = getAddressCity(address);
console.log(data);