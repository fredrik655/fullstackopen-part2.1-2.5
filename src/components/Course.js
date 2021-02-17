import React from 'react';

const Course = ({ course }) => {
  return ([
    <Header key="001" name={course.name}/>,
    <Content key="002" parts={course.parts}/>,
    <Total key="003" parts={course.parts} />
  ]); 
}

const Header = ({ name }) => {
  return <h1>{name}</h1>
}

const Content = ({ parts }) => {
  return (
    parts.map(c => <p key={c.id}> {`${c.name} ${c.exercises}`} </p>)
  );
}

const Total = ({ parts }) => {
  return (
    <strong>{`Total of ${parts.reduce((a,c) => (a + c.exercises), 0)} exercises`} </strong>
  );
}

export default Course;