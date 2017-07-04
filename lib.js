'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count => {
      let arr = []
      for (let i = 0; i < count; i++) {
        arr.push(itemName)
      }
      return arr
    }

/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
    customers => {
      let arr2 = []
      customers.forEach(function (customer) {
        let arr = []
        entries(customer.shoppingList).forEach(item => {
          arr = [...arr, ...itemRepeater(item[0])(item[1])]
        })
        arr2.push(cart(customer.name, ...arr))
      })
      return arr2
    }

module.exports = {
  listing,
  customer,
  constructCarts
}
