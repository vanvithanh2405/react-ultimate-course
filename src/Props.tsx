// import React from 'react'

import Typography from "./components/Typography"


/* note when render component in jsx
- name function should be UpperCase
- syntax like html tag: <xx />
const objA = { name: 'xx', theme mode: 'abc' } 
access properties object
objA.name
objA['theme mode']
const name  = xxx;

destructuring operator / rename default value
// const name = objA.name
const { name: nameObjA } = objA;

// rest operator -> get all remain properties
const { name, ...rest } = objA;

// speard operator -> dàn trải/phân rã các properties thay vì đi khai báo từng cái
*/


/* Điều kiển để render component vào trong 1 jsx
- phải có tag đóng/mở như html: <xx />
- name must be PascalCase
*/

function ProductItem({ name, className, ...restProps }: any) {
  return (
    <div className={className}>
      Product Item: {name} <br />
      <button {...restProps}>Delete</button>
    </div>
  )
}

function Props() {
  const user = {
    first_name: 'tony',
    last_name: 'nguyen'
  }

  return (
    <div>
      <h1>Props</h1>

      <Typography 
        {...user} // spread operator alway write top
        colors={['red',' pink']} // array
        name={
          <div>
              Tony Bolid
          </div>
        } // string or ReactNode
        age={18}  // number
        first_name="huy"
        onClick={() => {}}
        like-bird="edge"
        component1={ProductItem}
        component2={<ProductItem />}
      >
        abcded
      </Typography>

      <h4>Demo: Rest Operator</h4>
      <ProductItem 
        name="laptop"
        onClick={() => {}}
        type="button"
        disabled={true}
        className="product"
      />
    </div>
  )
}

export default Props