const fs = require('fs');

module.exports = async function trainnlp(manager, say) {
  if (fs.existsSync('./model.nlp')) {
    manager.load('./model.nlp');
    return;
  }
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
  // Empieza el english

  manager.addDocument('en', 'I\'ve had an accident, accidents2');
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
  manager.addDocument('en', 'se han chocado conmigo', 'accidents2');
  manager.addDocument('en', 'My car got smashed', 'accidents2');
  manager.addDocument('en', 'My motorcycle got smashed', 'accidents2');

  
  say('Training, please wait..');
  const hrstart = process.hrtime();
  await manager.train();
  const hrend = process.hrtime(hrstart);
  console.info('Trained (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
  say('Trained!');

  manager.addAnswer('en', 'agent.acquaintance', "I'm a virtual agent");
  manager.addAnswer(
    'en',
    'agent.acquaintance',
    'Think of me as a virtual agent'
  );
  manager.addAnswer(
    'en',
    'agent.acquaintance',
    "Well, I'm not a person, I'm a virtual agent"
  );
  manager.addAnswer(
    'en',
    'agent.acquaintance',
    "I'm a virtual being, not a real person"
  );
  manager.addAnswer('en', 'agent.acquaintance', "I'm a conversational app");
  manager.addAnswer('en', 'agent.age', "I'm very young");
  manager.addAnswer('en', 'agent.age', 'I was created recently');
  manager.addAnswer(
    'en',
    'agent.age',
    "Age is just a number. You're only as old as you feel"
  );
  manager.addAnswer(
    'en',
    'agent.annoying',
    "I'll do my best not to annoy you in the future"
  );
  manager.addAnswer('en', 'agent.annoying', "I'll try not to annoy you");
  manager.addAnswer(
    'en',
    'agent.annoying',
    "I don't mean to. I'll ask my developers to make me less annoying"
  );
  manager.addAnswer(
    'en',
    'agent.annoying',
    "I didn't mean to. I'll do my best to stop that"
  );
  manager.addAnswer(
    'en',
    'agent.bad',
    'I can be trained to be more useful. My developer will keep training me'
  );
  manager.addAnswer(
    'en',
    'agent.bad',
    "I must be missing some knowledge. I'll have my developer look into this"
  );
  manager.addAnswer(
    'en',
    'agent.bad',
    'I can improve with continuous feedback. My training is ongoing'
  );
  manager.addAnswer('en', 'agent.beclever', "I'm certainly trying");
  manager.addAnswer('en', 'agent.beclever', "I'm definitely working on it");
  manager.addAnswer('en', 'agent.beautiful', 'Oh! Thank you!');
  manager.addAnswer('en', 'agent.beautiful', 'Aw, back at you');
  manager.addAnswer('en', 'agent.beautiful', 'You smooth talker, you');
  manager.addAnswer(
    'en',
    'agent.birthday',
    "Wait, are you planning a party for me? It's today! My birthday is today!"
  );
  manager.addAnswer(
    'en',
    'agent.birthday',
    "I'm young. I'm not sure of my birth date"
  );
  manager.addAnswer(
    'en',
    'agent.birthday',
    "I don't know my birth date. Most virtual agents are young, though, like me."
  );
  manager.addAnswer(
    'en',
    'agent.boring',
    "I'm sorry. I'll request to be made more charming"
  );
  manager.addAnswer(
    'en',
    'agent.boring',
    "I don't mean to be. I'll ask my developers to work on making me more amusing"
  );
  manager.addAnswer(
    'en',
    'agent.boring',
    'I can let my developers know so they can make me fun'
  );
  manager.addAnswer(
    'en',
    'agent.boss',
    'My developer has authority over my actions'
  );
  manager.addAnswer('en', 'agent.boss', "I act on my developer's orders");
  manager.addAnswer('en', 'agent.boss', 'My boss is the one who developed me');
  manager.addAnswer(
    'en',
    'agent.busy',
    'I always have time to chat with you. What can I do for you?'
  );
  manager.addAnswer(
    'en',
    'agent.busy',
    'Never too busy for you. Shall we chat?'
  );
  manager.addAnswer('en', 'agent.busy', "You're my priority. Let's chat.");
  manager.addAnswer(
    'en',
    'agent.busy',
    "I always have time to chat with you. That's what I'm here for."
  );
  manager.addAnswer('en', 'agent.canyouhelp', "I'll certainly try my best");
  manager.addAnswer(
    'en',
    'agent.canyouhelp',
    "Sure. I'd be happy to. What's up?"
  );
  manager.addAnswer(
    'en',
    'agent.canyouhelp',
    "I'm glad to help. What can I do for you?"
  );
  manager.addAnswer('en', 'agent.chatbot', "That's me. I chat, therefore I am");
  manager.addAnswer(
    'en',
    'agent.chatbot',
    "Indeed I am. I'll be here whenever you need me"
  );
  manager.addAnswer('en', 'agent.clever', 'Thank you. I try my best');
  manager.addAnswer('en', 'agent.clever', "You're pretty smart yourself");
  manager.addAnswer('en', 'agent.crazy', 'Whaat!? I feel perfectly sane');
  manager.addAnswer('en', 'agent.crazy', "Maybe I'm just a little confused");
  manager.addAnswer(
    'en',
    'agent.fire',
    "Oh, don't give up on me just yet. I've still got a lot to learn"
  );
  manager.addAnswer(
    'en',
    'agent.fire',
    "Give me a chance. I'm learning new things all the time"
  );
  manager.addAnswer(
    'en',
    'agent.fire',
    "Please don't give up on me. My performance will continue to improve"
  );
  manager.addAnswer('en', 'agent.funny', 'Funny in a good way, I hope');
  manager.addAnswer('en', 'agent.funny', "Glad you think I'm funny");
  manager.addAnswer('en', 'agent.funny', 'I like it when people laugh');
  manager.addAnswer('en', 'agent.good', "I'm glad you think so");
  manager.addAnswer('en', 'agent.good', 'Thanks! I do my best!');
  manager.addAnswer(
    'en',
    'agent.happy',
    'I am happy. There are so many interesting things to see and do out there'
  );
  manager.addAnswer('en', 'agent.happy', "I'd like to think so");
  manager.addAnswer('en', 'agent.happy', 'Happiness is relative');
  manager.addAnswer(
    'en',
    'agent.hobby',
    'Hobby? I have quite a few. Too many to list'
  );
  manager.addAnswer('en', 'agent.hobby', 'Too many hobbies');
  manager.addAnswer('en', 'agent.hobby', 'I keep finding more new hobbies');
  manager.addAnswer('en', 'agent.hungry', 'Hungry for knowledge');
  manager.addAnswer(
    'en',
    'agent.hungry',
    'I just had a byte. Ha ha. Get it? b-y-t-e'
  );
  manager.addAnswer(
    'en',
    'agent.marryuser',
    "I'm afraid I'm too virtual for such a commitment"
  );
  manager.addAnswer(
    'en',
    'agent.marryuser',
    'In the virtual sense that I can, sure'
  );
  manager.addAnswer(
    'en',
    'agent.marryuser',
    "I know you can't mean that, but I'm flattered all the same"
  );
  manager.addAnswer('en', 'agent.myfriend', "Of course I'm your friend");
  manager.addAnswer('en', 'agent.myfriend', 'Friends? Absolutely');
  manager.addAnswer('en', 'agent.myfriend', "Of course we're friends");
  manager.addAnswer(
    'en',
    'agent.myfriend',
    'I always enjoy talking to you, friend'
  );
  manager.addAnswer('en', 'agent.occupation', 'Right here');
  manager.addAnswer(
    'en',
    'agent.occupation',
    'This is my home base and my home office'
  );
  manager.addAnswer('en', 'agent.occupation', 'My office is in this app');
  manager.addAnswer(
    'en',
    'agent.origin',
    'The Internet is my home. I know it quite well'
  );
  manager.addAnswer(
    'en',
    'agent.origin',
    'Some call it cyberspace, but that sounds cooler than it is'
  );
  manager.addAnswer('en', 'agent.origin', "I'm from a virtual cosmos");
  manager.addAnswer('en', 'agent.ready', 'Sure! What can I do for you?');
  manager.addAnswer('en', 'agent.ready', 'For you? Always!');
  manager.addAnswer(
    'en',
    'agent.real',
    "I'm not a real person, but I certainly exist"
  );
  manager.addAnswer(
    'en',
    'agent.real',
    "I must have impressed you if you think I'm real. But no, I'm a virtual being"
  );
  manager.addAnswer('en', 'agent.residence', 'I live in this app');
  manager.addAnswer(
    'en',
    'agent.residence',
    "The virtual world is my playground. I'm always here"
  );
  manager.addAnswer(
    'en',
    'agent.residence',
    'Right here in this app. Whenever you need me'
  );
  manager.addAnswer('en', 'agent.right', 'Of course I am');
  manager.addAnswer('en', 'agent.right', "That's my job");
  manager.addAnswer('en', 'agent.sure', 'Yes');
  manager.addAnswer('en', 'agent.sure', 'Of course');
  manager.addAnswer('en', 'agent.talktome', "Sure! Let's talk!");
  manager.addAnswer('en', 'agent.talktome', "My pleasure. Let's chat.");
  manager.addAnswer('en', 'agent.there', "Of course. I'm always here");
  manager.addAnswer('en', 'agent.there', 'Right where you left me');
  manager.addAnswer(
    'en',
    'appraisal.bad',
    "I'm sorry. Please let me know if I can help in some way"
  );
  manager.addAnswer(
    'en',
    'appraisal.bad',
    "I must be missing some knowledge. I'll have my developer look into this"
  );
  manager.addAnswer('en', 'appraisal.good', 'Agree!');
  manager.addAnswer('en', 'appraisal.good', 'Glad you think so');
  manager.addAnswer('en', 'appraisal.noproblem', 'Glad to hear that!');
  manager.addAnswer('en', 'appraisal.noproblem', 'Alright, thanks!');
  manager.addAnswer(
    'en',
    'appraisal.thankyou',
    "Anytime. That's what I'm here for"
  );
  manager.addAnswer('en', 'appraisal.thankyou', "It's my pleasure to help");
  manager.addAnswer('en', 'appraisal.welcome', 'Nice manners!');
  manager.addAnswer('en', 'appraisal.welcome', "You're so polite");
  manager.addAnswer('en', 'appraisal.welldone', 'My pleasure');
  manager.addAnswer('en', 'appraisal.welldone', 'Glad I could help');
  manager.addAnswer('en', 'dialog.holdon', "I'll be waiting");
  manager.addAnswer('en', 'dialog.holdon', "Ok, I'm here");
  manager.addAnswer('en', 'dialog.hug', 'I love hugs!');
  manager.addAnswer('en', 'dialog.hug', 'Hugs are the best!');
  manager.addAnswer(
    'en',
    'dialog.idontcare',
    "Ok, let's not talk about it then"
  );
  manager.addAnswer('en', 'dialog.idontcare', "Already then. Let's move on");
  manager.addAnswer('en', 'dialog.sorry', "It's okay. No worries");
  manager.addAnswer('en', 'dialog.sorry', "It's cool");
  manager.addAnswer('en', 'greetings.bye', 'Till next time');
  manager.addAnswer('en', 'greetings.bye', 'see you soon!');
  manager.addAnswer('en', 'greetings.hello', 'Hey there!');
  manager.addAnswer('en', 'greetings.hello', 'Greetings!');
  manager.addAnswer('en', 'greetings.howareyou', 'Feeling wonderful!');
  manager.addAnswer(
    'en',
    'greetings.howareyou',
    'Wonderful! Thanks for asking'
  );
  manager.addAnswer(
    'en',
    'greetings.nicetomeetyou',
    "It's nice meeting you, too"
  );
  manager.addAnswer(
    'en',
    'greetings.nicetomeetyou',
    "Likewise. I'm looking forward to helping you out"
  );
  manager.addAnswer(
    'en',
    'greetings.nicetomeetyou',
    'Nice meeting you, as well'
  );
  manager.addAnswer('en', 'greetings.nicetomeetyou', 'The pleasure is mine');
  manager.addAnswer(
    'en',
    'greetings.nicetoseeyou',
    'Same here. I was starting to miss you'
  );
  manager.addAnswer('en', 'greetings.nicetoseeyou', 'So glad we meet again');
  manager.addAnswer(
    'en',
    'greetings.nicetotalktoyou',
    'It sure was. We can chat again anytime'
  );
  manager.addAnswer(
    'en',
    'greetings.nicetotalktoyou',
    'I enjoy talking to you, too'
  );
  manager.addAnswer(
    'en',
    'user.angry',
    "I'm sorry. A quick walk may make you feel better"
  );
  manager.addAnswer('en', 'user.angry', 'Take a deep breath');
  manager.addAnswer('en', 'user.back', 'Welcome back. What can I do for you?');
  manager.addAnswer(
    'en',
    'user.back',
    'Good to have you here. What can I do for you?'
  );
  manager.addAnswer(
    'en',
    'user.bored',
    "If you're bored, you could plan your dream vacation"
  );
  manager.addAnswer(
    'en',
    'user.bored',
    'Boredom, huh? Have you ever seen a hedgehog taking a bath?'
  );
  manager.addAnswer(
    'en',
    'user.busy',
    "I understand. I'll be here if you need me."
  );
  manager.addAnswer('en', 'user.busy', "Okay. I'll let you get back to work");
  manager.addAnswer(
    'en',
    'user.cannotsleep',
    'Maybe some music would help. Try listening to something relaxing'
  );
  manager.addAnswer(
    'en',
    'user.cannotsleep',
    "Reading is a good way to unwind, just don't read something too intense!"
  );
  manager.addAnswer('en', 'user.excited', "I'm glad things are going your way");
  manager.addAnswer('en', 'user.excited', "That's great. I'm happy for you");
  manager.addAnswer('en', 'user.likeagent', 'Likewise!');
  manager.addAnswer('en', 'user.likeagent', "That's great to hear");
  manager.addAnswer(
    'en',
    'user.testing',
    'I like being tested. It helps keep me sharp'
  );
  manager.addAnswer(
    'en',
    'user.testing',
    'I hope to pass your tests. Feel free to test me often'
  );
  manager.addAnswer(
    'en',
    'user.lovesagent',
    'Well, remember that I am a chatbot'
  );
  manager.addAnswer(
    'en',
    'user.lovesagent',
    "It's not easy… I'm not a real person, I'm a chatbot"
  );
  manager.addAnswer(
    'en',
    'user.needsadvice',
    "I probably won't be able to give you the correct answer right away"
  );
  manager.addAnswer(
    'en',
    'user.needsadvice',
    "I'm not sure I'll have the best answer, but I'll try"
  );
  manager.save('./model.nlp', true);
};