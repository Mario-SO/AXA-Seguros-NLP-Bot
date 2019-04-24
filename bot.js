// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { CardFactory } = require('botbuilder');

// Import AdaptiveCard content.
const FlightItineraryCard = require('./resources/FlightItineraryCard.json');
const ImageGalleryCard = require('./resources/ImageGalleryCard.json');
const LargeWeatherCard = require('./resources/LargeWeatherCard.json');
const RestaurantCard = require('./resources/RestaurantCard.json');
const SolitaireCard = require('./resources/SolitaireCard.json');

// Create array of AdaptiveCard content, this will be used to send a random card to the user.
const CARDS = [
    FlightItineraryCard,
    ImageGalleryCard,
    LargeWeatherCard,
    RestaurantCard,
    SolitaireCard
];

const { NlpManager } = require('node-nlp');
const trainnlp = require('./train-nlp');

const threshold = 0.5;
const nlpManager = new NlpManager({ languages: ['en'] });

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
            
			// const randomlySelectedCard = CARDS[Math.floor((Math.random() * CARDS.length - 1) + 1)];
            await context.sendActivity({
                text: answer
            });
			//attachments: [CardFactory.adaptiveCard(randomlySelectedCard)]
        } else {
            await context.sendActivity(`[${ context.activity.type } event detected]`);
        }
    }
}

exports.AdaptiveCardsBot = AdaptiveCardsBot;
