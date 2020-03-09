const main = [
  {
  billingProfile: 14,
  insuredInfo: {
    name: 'Luis',
    age: 23,
    birth: {
      home: 'myHome',
      othert: 'other'
    }
  }
},
{
  billingProfile: 16,
  insuredInfo: {
    name: 'Luis',
    age: 23,
    birth: {
      home: 'myHome',
      othert: 'other'
    }
  },
  otherData: 12,
  otherObject: {
    a: 12,
    b: {
      c: 12
    }
  }
}
]

function recursive() {
  let counter = 0;
  return function recursiveSearch(mainObject, comparasion) {
    const items = Object.keys(mainObject)
    items.map(key => {
      if(mainObject[key] === comparasion) {
        counter++;
      }
      else if(mainObject[key].constructor.name === 'Object') {
        return recursiveSearch(mainObject[key], comparasion)
      } else {}
    })
    return counter;
  }
}

const a = recursive();
console.log(a(main[1], 12));

