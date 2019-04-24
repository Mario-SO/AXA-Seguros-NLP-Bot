// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { CardFactory } = require('botbuilder');

// Import AdaptiveCard content.
const FlightItineraryCard = require('./resources/FlightItineraryCard.json');
const ImageGalleryCard = require('./resources/ImageGalleryCard.json');
const LargeWeatherCard = require('./resources/LargeWeatherCard.json');
const RestaurantCard = require('./resources/RestaurantCard.json');
const SolitaireCard = require('./resources/SolitaireCard.json');
const AccidentsCard = require('./resources/Siniestro.json');
const InsuranceCard = require('./resources/Siniestro.json');

// Create array of AdaptiveCard content, this will be used to send a random card to the user.
const CARDS = [
    FlightItineraryCard,
    ImageGalleryCard,
    LargeWeatherCard,
    RestaurantCard,
    SolitaireCard,
	AccidentsCard,
	InsuranceCard
];

const { NlpManager } = require('node-nlp');
const trainnlp = require('./train-nlp');

const threshold = 0.5;
const nlpManager = new NlpManager({ languages: ['es', 'en'] });

/**
 * A bot that sends AdaptiveCards to the user when it receives a message.
 */
function say(message) {
// eslint-disable-next-line no-console
    console.log(message);
}

trainnlp(nlpManager, say);

class AdaptiveCardsBot {
    /**
     * Every conversation turn for our AdaptiveCardsBot will call this method.
     * There are no dialogs used, since it's "single turn" processing, meaning a single
     * request and response, with no stateful conversation.
     * @param turnContext A TurnContext instance containing all the data needed for processing this conversation turn.
     */

    async onTurn(context) {
        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
        if (context.activity.type === 'message') {
			console.log(context, context.activity.text);
			
			const result = await nlpManager.process(context.activity.text);
			const answer = result.score > threshold && result.answer ? result.answer : "Sorry, I don't understand";

			console.log(result, result.answer, answer);

			if (result.intent === 'accidents') {
				await context.sendActivity({
					text: answer,
					attachments: [CardFactory.adaptiveCard(AccidentsCard)]
				});
			}
			else if (result.intent === 'new') {
				await context.sendActivity({
					text: answer,
					attachments: [CardFactory.adaptiveCard(InsuranceCard)]
				});
			}
			else {
				await context.sendActivity({
					text: answer
				});
			}
			/*
			else if(answer === 'section1') {
			  message = '';
			}			
			
			else if(answer === 'section2') {
			  message = '';
			}
			
			else if(answer === 'section3') {
			  message = '';
			}

			else if(answer === 'section4') {
			  message = '';
			}
			*/
			//attachments: [CardFactory.adaptiveCard(randomlySelectedCard)]
        } else {
            await context.sendActivity(`[${ context.activity.type } event detected]`);
        }
    }
}

exports.AdaptiveCardsBot = AdaptiveCardsBot;
