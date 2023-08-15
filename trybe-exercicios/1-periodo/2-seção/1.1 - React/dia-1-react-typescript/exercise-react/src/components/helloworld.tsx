import Title from './title';
import ModuleDetails from './module-details';
import calculateAge from '../utils/age';

function HelloWorld() {
  const name = 'Avner';
  const birth = '24/01/1999';
  const age = calculateAge(birth);
  return (
    <>
      <h1>
        {`Olá ${name}. Atualmente, você tem ${age} anos`}
      </h1>
      <Title />
      <ModuleDetails />
    </>
  );
}

export default HelloWorld;
