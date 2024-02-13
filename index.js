function fetchProducts() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve([
        {
          id: 1,
          title: "Product 1",
          price: 100,
        },
        {
          id: 2,
          title: "Product 2",
          price: 200,
        },
        {
          id: 3,
          title: "Product 3",
          price: 300,
        },
        {
          id: 4,
          title: "Product 4",
          price: 100,
        },
        {
          id: 5,
          title: "Product 5",
          price: 200,
        },
        {
          id: 6,
          title: "Product 6",
          price: 300,
        },
        {
          id: 7,
          title: "Product 7",
          price: 100,
        },
        {
          id: 8,
          title: "Product 8",
          price: 200,
        },
        {
          id: 9,
          title: "Product 9",
          price: 300,
        },
        {
          id: 10,
          title: "Product 10",
          price: 400,
        },
      ]);
    }, 0);
  });
}

// CHALLENGE 1 complete the function so that it returns one product that has the productId which matches this argument
// async function fetchProductById(id)
// fetchProductById(1)
// output { id: 1, title: 'Product 1', price: 100 }

// CHALLENGE 2 use the fetchProductById function from challenge 1 to return all the ids in a product array id array
// async function fetchProductsById(idArr)
// fetchProductsById([1, 2, 3])
/* output [
    { id: 1, title: 'Product 1', price: 100 },
    { id: 2, title: 'Product 2', price: 200 },
    { id: 3, title: 'Product 3', price: 300 }
  ]*/

// CHALLENGE 3 use the fetch products by id to  apply a discount to all the products price and return the new array
// async function applyDiscount(idArr, discount)
// applyDiscount([1, 2, 3], 0.5)
/**
   *output 
   * [
    { id: 1, title: 'Product 1', price: 50 },
    { id: 2, title: 'Product 2', price: 100 },
    { id: 3, title: 'Product 3', price: 150 }
  ]
   */

// CHALLENGE 4 use the apply discount function to first return the new products and then sum all those products together and return the sum
// async function sumDiscountedProducts(idArr, discount)
// sumDiscountedProducts([1, 2, 3], 0.5)
/**
 * output 300
 */

// CHALLENGE 5 find all the pairs of products which sum together to match the promo async function findMatchingPromotion(idArr, discount, promo)
// async function findMatchingPromotion(ids, discount, promo)
// findMatchingPromotion([1, 2, 3], 0.5, 200)
/**
   * output   [
    [
      { id: 1, title: 'Product 1', price: 50 },
      { id: 3, title: 'Product 3', price: 150 }
    ],
    [
      { id: 2, title: 'Product 2', price: 100 },
      { id: 2, title: 'Product 2', price: 100 }
    ],
    [
      { id: 3, title: 'Product 3', price: 150 },
      { id: 1, title: 'Product 1', price: 50 }
    ]
  ]
   */
