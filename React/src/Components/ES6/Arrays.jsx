import { React } from 'react'

const Arrays = () => {


  const Destructuring = () => {
    const Students = ['Chris', 'Kevin', 'Remy'];

    const FirstName = Students[0];

    return(<h1>Hello, Im {FirstName}</h1>);
  }

  const SpreadOperators = () => {
    const Days = ['Monday', 'Tuesday', 'Wednesday'];
    const Months = ['January', 'February', 'March'];

    const DaysAndMonths = [...Days, ...Months];
    const AddedDays = [...Days, 'Thursday', 'Friday'];

    return(
      <>
        <h1>Days and Months: {DaysAndMonths}</h1>
        <h1>Added Days: {AddedDays}</h1>
      </>
    )
  }
    
  return (
    // Destructuring()
    SpreadOperators()
  );
}

export default Arrays;

