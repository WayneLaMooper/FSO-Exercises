const Course = (props) => (
  <div>
    <Header course={props.course.name}/>
    <Content parts={props.course.parts}/>
    <Total parts={props.course.parts}/>
  </div>
)

const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
  <div>
    {props.parts.map((part)=> <Part key={part.id} part={part}/>)}
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => <b>total of {props.parts.reduce((total, part)=> total + part.exercises, 0)} exercises</b>

export default Course