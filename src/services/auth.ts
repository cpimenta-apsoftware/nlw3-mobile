export function entrar() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'fdsalfjasldfjalsfjalskjdflasjfl',
        usuario: {
          nome: 'Caique',
          email: 'cpimenta.apsoftware@gmail.com'
        }
      });
    }, 2000);
  });
}