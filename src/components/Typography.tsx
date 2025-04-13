import styles from './typhography.module.css';

interface TypographyProps {
  name: React.ReactNode,
  age: number,
  colors?: string[],
  first_name?: string,
  last_name?: string,
  onClick?: () => void,
  children?: React.ReactNode,
  component1?: React.ElementType,
  component2?: React.ReactNode
}

function Typography({ 
  name, 
  age, 
  colors = [],
  first_name,
  last_name,
  children,
  component1: Component1,
  component2,
  ...restProps
}: TypographyProps) {
  console.log('Typography', {
    name, 
    age, 
    colors,
    first_name,
    last_name,
    restProps,
    likeBird: restProps['like-bird'],
    component2
  })

  return (
    <div 
      className={`text-sm ${styles['text-color']}`}
    >
      Name: {name} <br/>
      Age: {age} <br />
      This is children: {children} <br />
      Component1: <Component1 /> 1<br />
      Component2: {component2} 2
    </div>
  )
}

export default Typography