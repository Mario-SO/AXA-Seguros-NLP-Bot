// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { CardFactory } = require('botbuilder');

// Import AdaptiveCard content.
const AccidentsCard = require('./resources/Siniestro.json');
const InsuranceCard = require('./resources/CreacionSeguro.json');
const InsuranceCard2 = require('./resources/CreacionSeguro2.json');

const CARDS = [
	AccidentsCard,
	InsuranceCard,
	InsuranceCard2
];

const { NlpManager } = require('node-nlp');
const trainnlp = require('./train-nlp');

const threshold = 0.5;
const nlpManager = new NlpManager({ languages: ['es', 'en'] });

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
			if (context.activity.text === undefined) {
				console.log(context.activity.value);
				if (context.activity.value.x === 0) {
					let buffer = 'Confirmamos sus datos:\r\n\r\nNombre: ' + context.activity.value.Nombre + '\r\nApellidos:' + context.activity.value.Apellidos + '\r\nDNI:' + context.activity.value.DNI + '\r\nNumero Afectados:' + context.activity.value.NumeroAfectados + '\r\nLugar:' + context.activity.value.Lugar + '\r\n\r\nGracias por confiar en nosotros.';
					await context.sendActivity({
						text: buffer
					});
				}
				else if (context.activity.value.x === 1) {
					let buffer = 'Confirmamos sus datos:\r\n\r\nNombre: ' + context.activity.value.Nombre + '\r\nApellidos:' + context.activity.value.Apellidos + '\r\nDNI:' + context.activity.value.DNI + '\r\nMatrícula:' + context.activity.value.Matrícula + '\r\nModelo:' + context.activity.value.Modelo + '\r\nFecha:' + context.activity.value.Fecha + '\r\n\r\nGracias por confiar en nosotros.';
					await context.sendActivity({
						text: buffer
					});
				}
				else if (context.activity.value.x === 2) {
					let buffer = 'Do you agree with this data?\r\n\r\nName: ' + context.activity.value.Nombre + '\r\nSurname:' + context.activity.value.Apellidos + '\r\nID:' + context.activity.value.DNI + '\r\nPlate:' + context.activity.value.Matrícula + '\r\nBrand:' + context.activity.value.Modelo + '\r\nDate:' + context.activity.value.Fecha + '\r\n\r\nThank you for trusting us.';
					await context.sendActivity({
						text: buffer
					});
				}
			}
			else {
				const result = await nlpManager.process(context.activity.text);
				const answer = result.score > threshold && result.answer ? result.answer : "Lo siento muchisimo pero no he entendido nada";

				console.log(result, result.answer, answer);

				if (result.intent === 'accidents') {
					await context.sendActivity({
						text: answer,
						attachments: [CardFactory.adaptiveCard(AccidentsCard)]
					});
				}
				else if (result.intent === 'seguro') {
					await context.sendActivity({
						text: answer,
						attachments: [CardFactory.adaptiveCard(InsuranceCard)]
					});
				}
				else if (result.intent === 'accidents2') {
					await context.sendActivity({
						text: answer,
						attachments: [CardFactory.adaptiveCard(InsuranceCard2)]
					});
				}
				else {
					const result = await nlpManager.process(context.activity.text);
					//const answer = result.score > threshold && result.answer ? result.answer : "Im sorry but I did not understand";

					console.log(result, result.answer, answer);

					if (result.intent === 'accidents') {
						await context.sendActivity({
							text: answer,
							attachments: [CardFactory.adaptiveCard(AccidentsCard)]
						});
					}
					else if (result.intent === 'seguro') {
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
				}
			}
		} else {
			await context.sendActivity(`Muy buenas, ¿qué desea?`);
		}
	}
}

exports.AdaptiveCardsBot = AdaptiveCardsBot;
