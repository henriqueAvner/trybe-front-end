const user = {
    name: 'Avner',
    lastName: 'Brito',
  };

function Header() {
    return (
         <h1>
        {`Olá, ${user.name} ${user.lastName}`}
        </h1>
    );
}


export default Header;