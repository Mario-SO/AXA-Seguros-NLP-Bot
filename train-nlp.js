const fs = require('fs');

module.exports = async function trainnlp(manager, say) {
  if (fs.existsSync('./model.nlp')) {
    manager.load('./model.nlp');
    return;
  }
  // Accidente
  manager.addDocument('es', 'he tenido un accidente', 'accidents');
  manager.addDocument('es', 'se ha roto el coche', 'accidents');
  manager.addDocument('es', 'se ha roto la moto', 'accidents');
  manager.addDocument('es', 'el coche está estropeado', 'accidents');
  manager.addDocument('es', 'la moto está estropeada', 'accidents');
  manager.addDocument('es', 'se ha roto la moto', 'accidents');
  manager.addDocument('es', 'el coche no arranca', 'accidents');
  manager.addDocument('es', 'la moto no arranca', 'accidents');
  manager.addDocument('es', 'no funciona el coche', 'accidents');
  manager.addDocument('es', 'el coche tiene una avería', 'accidents');
  manager.addDocument('es', 'la moto tiene una avería', 'accidents');
  manager.addDocument('es', 'el coche está averiado', 'accidents');
  manager.addDocument('es', 'la moto no arranca', 'accidents');
  manager.addDocument('es', 'he recibido un golpe', 'accidents');
  manager.addDocument('es', 'me he golpeado en el coche', 'accidents');
  manager.addDocument('es', 'he tenido un problema con mi coche', 'accidents'); 
  manager.addDocument('es', 'he tenido un problema con mi moto', 'accidents');
  manager.addDocument('es', 'me he caido en moto', 'accidents');
  manager.addDocument('es', 'me he caido en coche', 'accidents');
  manager.addDocument('es', 'mi vehivulo ha tenido un accidente', 'accidents');
  manager.addDocument('es', 'mi coche ha tenido un accidente', 'accidents');
  manager.addDocument('es', 'se han chocado conmigo', 'accidents');
  manager.addDocument('es', 'mi moto se ha hecho trizas', 'accidents');
  manager.addDocument('es', 'mi coche se ha hecho trizas', 'accidents');
  manager.addDocument('es', 'me he golpeado en el coche', 'accidents');
  manager.addDocument('es', 'ayuda, he tenido un problema', 'accidents');
  manager.addDocument('es', 'ayuda, me he chocado', 'accidents');
  manager.addDocument('es', 'ayuda, me he caido con la moto', 'accidents');
  manager.addDocument('es', 'me he chocado con el coche', 'accidents');

  manager.addAnswer('es', 'accidents', 'JO que faena la verdad, vamos a ver que podemos hacer');
  manager.addAnswer('es', 'accidents', 'Jopetas eso es un problema. Danos tus datos y nosotros nos encargamos');
  manager.addAnswer('es', 'accidents', 'Vamos a gestionar el accidente, por favor, rellene el siguiente formulario y NO SE MUEVA:');
 
  // Nuevo seguro
  manager.addDocument('es', 'quiero contratar un seguro de un vehículo', 'seguro');
  manager.addDocument('es', 'me he comprado un coche', 'seguro');
  manager.addDocument('es', 'me he comprado una moto', 'seguro');
  manager.addDocument('es', 'darme de alta con el coche', 'seguro');
  manager.addDocument('es', 'crear nuevo seguro de vehículo', 'seguro');
  manager.addDocument('es', 'quiero un seguro de coche', 'seguro');
  manager.addDocument('es', 'nuevo seguro de coche', 'seguro');
  manager.addDocument('es', 'me gustaria un nuevo seguro de moto', 'seguro');
  manager.addDocument('es', 'me gustaria un nuevo seguro', 'seguro');
  manager.addDocument('es', 'nuevo seguro para mi vehiculo', 'seguro');
  manager.addDocument('es', 'contratar seguro', 'seguro');
  manager.addDocument('es', 'nueva poliza de moto', 'seguro');
  manager.addDocument('es', 'nueva poliza para mi moto', 'seguro');
  manager.addDocument('es', 'nueva poliza coche', 'seguro');
  manager.addDocument('es', 'poliza nueva', 'seguro');
  
  manager.addAnswer('es', 'seguro', 'Perfecto $$ vamos a $$ gestionar $$ su nuevo seguro');
  manager.addAnswer('es', 'seguro', 'Muy bien, gracias por confiar en AXA :)');
  manager.addAnswer('es', 'seguro', 'Muchas gracias. Estamos encantados de que confie en AXA-bot');

  // Accidente traducido al inglés
  manager.addDocument('en', 'Ive had an accident', 'accidents2');
  manager.addDocument('en', 'My car broke', 'accidents2');
  manager.addDocument('en', 'My motorcycle broke', 'accidents2');
  manager.addDocument('en', 'My car is broken', 'accidents2');
  manager.addDocument('en', 'My motorcycle is broken', 'accidents2');
  manager.addDocument('en', 'My motor broke', 'accidents2');
  manager.addDocument('en', 'My car doesn\'t start' , 'accidents2');
  manager.addDocument('en', 'Motorcycle doesn\'t start', 'accidents2');
  manager.addDocument('en', 'My car is not working', 'accidents2');
  manager.addDocument('en', 'My car has a problem', 'accidents2');
  manager.addDocument('en', 'My motorcycle has a problem', 'accidents2');
  manager.addDocument('en', 'The car is broken', 'accidents2');
  manager.addDocument('en', 'I crashed', 'accidents2');
  manager.addDocument('en', 'I crashed with my car', 'accidents2');
  manager.addDocument('en', 'I had a problem with my car', 'accidents2'); 
  manager.addDocument('en', 'I crashed with my motorcycle', 'accidents2');
  manager.addDocument('en', 'I fell from my motorcycle', 'accidents2');
  manager.addDocument('en', 'I fell from my car', 'accidents2');
  manager.addDocument('en', 'My car got smashed', 'accidents2');
  manager.addDocument('en', 'My motorcycle got smashed', 'accidents2');

  manager.addAnswer('en', 'accidents', 'WAOH thats a petty, lets see what can we do');
  manager.addAnswer('en', 'accidents', 'Thats a real problem, fill the following form and let us do the hard work');
  manager.addAnswer('en', 'accidents', 'We will process your information, please DONT MOVE! Oh wait... you cant :)');

  
  say('Training, please wait..');
  const hrstart = process.hrtime();
  await manager.train();
  const hrend = process.hrtime(hrstart);
  console.info('Trained (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
  say('Trained!');
  manager.save('./model.nlp', true);
};