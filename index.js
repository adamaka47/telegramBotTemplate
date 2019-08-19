const TelegramBot = require('node-telegram-bot-api') // подключаем фреймворк телеграма для nodeJS
const TOKEN = '**' // Передаем токен
const fs = require('fs')
console.log('Bot has been started...')  

const bot = new TelegramBot(TOKEN, {
	polling: {
		interval: 300,
		autoStart: true,
		params: {
			timeout: 10
		}
	}
})



// bot.on('message', msg => {
// 	const chatId = msg.chat.id
// 	bot.sendMessage(chatId, 'If you have a problem - write /help')
// })

// 	/start
bot.onText(/\/start/, msg => {
	const { id } = msg.chat
	const html = '<strong>Hello!</strong> Thank you for start this bot. Write /help if you want to see what can bot do. Pretty well, i want to talk with ' + '<strong> ' + msg.from.first_name + '</strong>' + '<i> you are beautiful today</i>! :3'
	bot.sendMessage(id, html, {
		parse_mode: 'HTML'
	})
})

	// /help
bot.onText(/\/help/, msg => {
	const { id } = msg.chat
	const html = 'I can help you, body. Choose the command you want (x. \n /start - Start now\n /help - Help me plz\n /dogsh1t - About my life\n /test - Work or not?\n /job - My currency job\n /age - My age\n /currency - View currency\n /photo - My photo\n /video - My video Blog\n /audio - Senpai"s voice\n /plan - My plan tomorrow'
	bot.sendMessage(id, html, {
		parse_mode: 'HTML'
	})
})


// /dogsh1t
bot.onText(/\/dogsh1t/, msg => {
	const { id } = msg.chat
	const html =  'My name is <strong>Adam</strong>. From <strong>Uzbekistan</strong>. I was bored, thats because i created this bot. It is my first. English LVL - <i>low</i>. Be Happy'
	bot.sendMessage(id, html, {
		parse_mode: 'HTML'
	})
})

bot.onText(/\/youshit/, msg => {
	const { id } = msg.chat
	const html =  'Сам заткнись, утырь ссаный'
	bot.sendMessage(id, html, {
		parse_mode: 'HTML'
	})
})

// 	// /test
bot.onText(/\/test/, msg => {
	const { id } = msg.chat
	const html = 'It is <strong>work!</strong>'
	bot.sendMessage(id, html, {
		parse_mode: 'HTML'
	})
})


// 	// /job
bot.onText(/\/job/, msg => {
	const { id } = msg.chat
	const html = 'I am <strong>janitor!</strong> I like that job ;3'
	bot.sendMessage(id, html, {
		parse_mode: 'HTML'
	})
})

// 	// /age
bot.onText(/\/age/, msg => {
	const { id } = msg.chat
	bot.sendMessage(id, 'age - 18 y. o.')
})

// 	// /nationality
// bot.onText(/\/nationality/, msg => {
// 	const { id } = msg.chat
// 	const html =  'Asian <strong>boii111iiiii1i1i1i1ii</strong>'
// 	bot.sendMessage(id, html, {
// 		parse_mode: 'HTML'
// 	})
// })

// 	// /country
bot.onText(/\/country/, msg => {
	const { id } = msg.chat
	const html = 'In my opinion, the best country - <strong>Uzbekistan</strong>, but now im living in Zimbabwe'
	bot.sendMessage(id, html, {
		parse_mode: 'HTML'
	})
})


	// currency
bot.onText(/\/currency/, msg => {
	const { id } = msg.chat
	const html = '<strong>USD:</strong>' + ' 65 rub\n' +  '<strong>EUR:</strong>' + ' 73 rub'
	bot.sendMessage(id, html, {
		parse_mode: 'HTML'
	})
})

	// pay
// bot.onText(/\/pay/, msg => {
// 	const chatId = msg.chat.id
// 	bot.sendInvoice(
// 		chatId,
// 		'BMW X5',
// 		'Beautiful car', 
// 		'payload',
// 		'381764678:TEST:9337',
// 		'random_param',
// 		'RUB',
// 		[
// 			{
// 				label: 'BMW X5',
// 				amount: 30000
// 			}
// 		],
// 		{
// 			photo_url: 'https://autoreview.ru/images/Article/1652/Article_165242_860_575.jpg',
// 			need_name: true,
// 			need_email: true,
// 		}
// 		)
// })




bot.onText(/\/photo/, msg => {
	bot.sendPhoto(msg.chat.id, './cat1.jpg', {
		caption: 'Beautiful kitten ;3'
	})
})


bot.onText(/\/audio/, msg => {
	bot.sendMessage(msg.chat.id, 'Start audio uploading...')
	fs.readFile(__dirname + '/phrase6.mp3', (err, data) => {
		bot.sendAudio(msg.chat.id, data).then(() => {
			bot.sendMessage(msg.chat.id, 'Uploading Finish')
		})
	})
})



bot.onText(/\/video/, msg => {
	const chatId = msg.chat.id
	bot.sendMessage(chatId, 'Sending our video...')
	fs.readFile(__dirname + '/dima.mp4', (err, video) => {
		bot.sendVideoNote(chatId, video)
	})
})




bot.onText(/\/geo/, msg => {
	bot.sendLocation(msg.chat.id, 59.924555, 27.353555)
})


bot.onText(/\/plan/, msg => {
	const { id } = msg.chat
	const html = '<strong>PLAN IN 20.05:</strong>\n' + '1) BS4 site\n' + '2) BS4 github\n' + '3) Mask\n' + '4) DARK EDGE\n' + '5) HCA - repeat' 
	bot.sendMessage(id, html, {
		parse_mode: 'HTML'
	})
})



// bot.onText(/\/contact/, msg => {
// 	bot.sendContact(msg.chat.id, '89234445512', 'Adaman',  {
// 		last_name: 'Dasten'
// 	})
// })





// bot.onText(/\/functions/, msg => {
// 		const chatId = msg.chat.id
// 		bot.sendMessage(chatId, 'Retry Keyboard...', {
// 			reply_markup: {
// 				keyboard: [
// 					[{
// 						text: 'Submit Geolocation',
// 						request_location: true
// 					}],
// 					[{
// 						text: 'Submit contact',
// 						request_contact: true
// 					}],
// 				],
// 				one_time_keyboard: false
// 			}
// })

// 	})





	// debug function

function debug(obj = {}) {
	return JSON.stringify(obj, null, 4)
}




// bot.on('message', msg => {
// 	const chatId = msg.chat.id
// 	bot.sendMessage(chatId, 'If you have a problem - write /help')
// })




// bot.on('message', msg => {
// 	const chatId = msg.chat.id

// 	if (msg.text === 'Close') {
// 		bot.sendMessage(chatId, 'Closing keyboard...', {
// 			reply_markup: {
// 				remove_keyboard: true
// 			}
// 		})
// 	} else if (msg.text === 'Submit') {
// 		bot.sendMessage(chatId, 'Submitting...', {
// 			reply_markup: {
// 				force_reply: true
// 			}
// 		})
// 	} else {

// 	bot.sendMessage(chatId, 'Retry Keyboard...', {
// 		reply_markup: {
// 			keyboard: [
// 				[{
// 					text: 'Submit Geolocation',
// 					request_location: true
// 				}],
// 				['Submit', 'Close'],
// 				[{
// 					text: 'Submit contact',
// 					request_contact: true
// 				}]
// 			],
// 			one_time_keyboard: false
// 		}
// 	})
// }
// })



	// PERENAPRAVLENIE

// const inline_keyboard = [
// 	[
// 		{
// 			text: 'Forward',
// 			callback_data: 'Forward'
// 		},
// 		{
// 			text: 'Reply',
// 			callback_data: 'Reply'
// 		},
// 	],
// 	[
// 		{
// 			text: 'Edit',
// 			callback_data: 'Edit'
// 		},
// 		{
// 			text: 'Delete',
// 			callback_data: 'Delete'
// 		}
// 	]
// ]

// bot.on('callback_query', query => {

// 	const { chat, message_id, text } = query.message

// 	switch (query.data) {
// 		case 'Forward':
// 			// KYDA, OTKYDA, CHTO
// 			bot.forwardMessage(chat.id, chat.id, message_id)
// 			break
// 		case 'Reply': 
// 			bot.sendMessage(chat.id, 'Answer letter', {
// 				reply_to_message_id: message_id
// 			})
// 			break
// 		case 'Edit':
// 			bot.editMessageText('text (edited)', {
// 				chat_id: chat.id,
// 				message_id: message_id,
// 				reply_markup: {
// 					inline_keyboard
// 				}
// 			})
// 			break
// 		case 'Delete':
// 			bot.deleteMessage(chat.id, message_id)
// 			break
// 	}

// 	bot.answerCallbackQuery({
// 		callback_query_id: query.id
// 	})
// })

// bot.onText(/\/start/, (msg, [source, match]) => {
// 	const chatId = msg.chat.   
// 	bot.sendMessage(chatId, 'Keyboard', {
// 		reply_markup: {
// 			inline_keyboard
// 		}
// 	})
// })


	// SEND PHOTO

// bot.onText(/\/pic/, msg => {
// 	bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + '/js.jpg'))
// })


// bot.onText(/\/pic2/, msg => {
// 	bot.sendPhoto(msg.chat.id, './js.jpg', {
// 		caption: 'JS the best'
// 	})
// })


	// SEND AUDIO


// bot.onText(/\/audio/, msg => {
// 	bot.sendAudio(msg.chat.id, './phrase6.mp3')
// })


// bot.onText(/\/audio2/, msg => {
// 	bot.sendMessage(msg.chat.id, 'Start audio uploading...')
// 	fs.readFile(__dirname + '/phrase6.mp3', (err, data) => {
// 		bot.sendAudio(msg.chat.id, data).then(() => {
// 			bot.sendMessage(msg.chat.id, 'Uploading Finish')
// 		})
// 	})
// })



	// SEND DOCUMENT

// bot.onText(/\/doc1/, msg => {
// 	bot.sendDocument(msg.chat.id, './tg.txt')
// })


// bot.onText(/\/doc2/, msg => {
// 	bot.sendMessage(msg.chat.id, 'Upload start...')
// 	fs.readFile(__dirname + '/ds.rtf', (err, file) => {
// 		bot.sendDocument(msg.chat.id, file, {
// 			caption: 'Document'
// 		}).then(() => {
// 			bot.sendMessage(msg.chat.id, 'Upload finish')
// 		})
// 	})
// })



	// SEND STICKER

// bot.onText(/\/s1/, msg => {
// 	bot.sendSticker(msg.chat.id, './we.webp')
// })

// bot.onText(/\/s2/, msg => {
// 	fs.readFile(__dirname + '/we.webp', (err, sticker) => {
// 		bot.sendSticker(msg.chat.id, sticker)
// 	})
// })



	// SEND VIDEO 

// bot.onText(/\/vidos1/, msg => {
// 	const chatId = msg.chat.id
// 	bot.sendMessage(chatId, 'Sending video...')
// 	bot.sendVideo(chatId, 's.MP4')
// })

// bot.onText(/\/vidos2/, msg => {
// 	const chatId = msg.chat.id
// 	bot.sendMessage(chatId, 'Sending video...')
// 	fs.readFile(__dirname + '/s.MP4', (err, video) => {
// 		bot.sendVideoNote(chatId, video)
// 	})
// })



	// SEND GEOLOCATION

// bot.onText(/\/geo/, msg => {
// 	bot.sendLocation(msg.chat.id, 59.924555, 27.353555)
// })




	// SEND CONTACT

// bot.onText(/\/contact/, msg => {
// 	bot.sendContact(msg.chat.id, '89234445512', 'Adaman',  {
// 		last_name: 'Dasten'
// 	})
// })




	// PAYMENT

// 381764678:TEST:9337



// INLINE QUERY

// bot.on('inline_query', query => {

// 	const results = []

// 	for (let i = 0; i < 5; i++) {
// 		results.push({
// 			type: 'article',
// 			id: i.toString(),
// 			title: 'Title ' + i,
// 			input_message_content: {
// 				message_text: 'Article #' + i 
// 			}
// 		})
// 	}

// 	bot.answerInlineQuery(query.id, results, {
// 		cache_time: 0
// 	})
// })






// INLINE KEYBOARD

// bot.on('message', msg => {
// 	const chatId = msg.chat.id

// 	bot.sendMessage(chatId, 'Inline Keyboard', {
// 		reply_markup: {
// 			inline_keyboard: [
// 				[
// 					{
// 						text: 'Yandex',
// 						url: 'https://yandex.ru'
// 					}
// 				],
// 				[
// 					{
// 						text: 'Reply',
// 						callback_data: 'reply'
// 					},
// 					{
// 						text: 'Forward',
// 						callback_data: 'forward'
// 					}
// 				]
// 			]
// 		}
// 	})
// })

// bot.on('callback_query', query => {
// 	// bot.sendMessage(query.message.chat.id, debug(query)) DEBUG
// 	bot.answerCallbackQuery(query.id, query.data)
// })







	// KEYBOARD

// bot.on('message', msg => {
// 	const chatId = msg.chat.id

// 	if (msg.text === 'Close') {
// 		bot.sendMessage(chatId, 'Closing keyboard...', {
// 			reply_markup: {
// 				remove_keyboard: true
// 			}
// 		})
// 	} else if (msg.text === 'Submit') {
// 		bot.sendMessage(chatId, 'Submitting...', {
// 			reply_markup: {
// 				force_reply: true
// 			}
// 		})
// 	} else {

// 	bot.sendMessage(chatId, 'Retry Keyboard...', {
// 		reply_markup: {
// 			keyboard: [
// 				[{
// 					text: 'Submit Geolocation',
// 					request_location: true
// 				}],
// 				['Submit', 'Close'],
// 				[{
// 					text: 'Submit contact',
// 					request_contact: true
// 				}]
// 			],
// 			one_time_keyboard: false
// 		}
// 	})
// }
// })


// bot.on('message', msg => {

// 	setTimeout(() => {
// 			bot.sendMessage(msg.chat.id, 'https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet', {
// 			// disable_web_page_preview: false, - включить или выключить превью
// 			// disable_notification: false - включить или выключить оповещение
// 		})		
// 	}, 4000)



// })


	// MARKDOWN



// bot.on('message', msg => {
// 	const markdown = '*Hello* ' + msg.from.first_name + ' _Italic text_'

// 	bot.sendMessage(msg.chat.id, markdown, {
// 		parse_mode: 'Markdown'
// 	})
// 	// https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet 
// })




	// HTML 5



// bot.on('message', msg => {
// 	const html = '<strong>Hello</strong> ' + '<strong>' + msg.from.first_name + '</strong>' + 

// 	'<pre>' + 

// //	debug(msg) + 

// 	'</pre>' + 

// 	'<i>, I am Busy!</i>'

// 	bot.sendMessage(msg.chat.id, html, {
// 		parse_mode: 'HTML'
// 	})
// })



	// CATCH TRY THEN



// bot.on('message', msg => {
// 	const { id } = msg.chat
// 	bot.sendMessage(id, debug(msg))
// 		.then(() => {
// 			console.log('Message sent')
// 		})
// 		.catch((error) => {
// 			console.error(error)
// 		})
// })

