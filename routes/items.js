const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

/**
 * @swagger
 * tags:
 *   name: Items
 *   description: Операции с ресурсом "items"
 */

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Получить список всех элементов
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: Список всех элементов
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       title:
 *                         type: string
 *                     example:
 *                       id: "jQthDQAAQBAJ"
 *                       title: "Undefined"
 */
router.get('/', itemsController.getItems);

/**
 * @swagger
 * /items/{id}:
 *   get:
 *     summary: Получить элемент по ID
 *     tags: [Items]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Запрашиваемый элемент
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 item:
 *                   type: object
 *                   properties:
 *                     kind:
 *                       type: string
 *                     id:
 *                       type: string
 *                     etag:
 *                       type: string
 *                     selfLink:
 *                       type: string
 *                     volumeInfo:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                         authors:
 *                           type: array
 *                           items:
 *                             type: string
 *                         publisher:
 *                           type: string
 *                         publishedDate:
 *                           type: string
 *                         description:
 *                           type: string
 *                         industryIdentifiers:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               type:
 *                                 type: string
 *                               identifier:
 *                                 type: string
 *                         readingModes:
 *                           type: object
 *                           properties:
 *                             text:
 *                               type: boolean
 *                             image:
 *                               type: boolean
 *                         pageCount:
 *                           type: integer
 *                         printType:
 *                           type: string
 *                         categories:
 *                           type: array
 *                           items:
 *                             type: string
 *                         maturityRating:
 *                           type: string
 *                         allowAnonLogging:
 *                           type: boolean
 *                         contentVersion:
 *                           type: string
 *                         panelizationSummary:
 *                           type: object
 *                           properties:
 *                             containsEpubBubbles:
 *                               type: boolean
 *                             containsImageBubbles:
 *                               type: boolean
 *                         imageLinks:
 *                           type: object
 *                           properties:
 *                             smallThumbnail:
 *                               type: string
 *                             thumbnail:
 *                               type: string
 *                         language:
 *                           type: string
 *                         previewLink:
 *                           type: string
 *                         infoLink:
 *                           type: string
 *                         canonicalVolumeLink:
 *                           type: string
 *                     saleInfo:
 *                       type: object
 *                       properties:
 *                         country:
 *                           type: string
 *                         saleability:
 *                           type: string
 *                         isEbook:
 *                           type: boolean
 *                     accessInfo:
 *                       type: object
 *                       properties:
 *                         country:
 *                           type: string
 *                         viewability:
 *                           type: string
 *                         embeddable:
 *                           type: boolean
 *                         publicDomain:
 *                           type: boolean
 *                         textToSpeechPermission:
 *                           type: string
 *                         epub:
 *                           type: object
 *                           properties:
 *                             isAvailable:
 *                               type: boolean
 *                         pdf:
 *                           type: object
 *                           properties:
 *                             isAvailable:
 *                               type: boolean
 *                             acsTokenLink:
 *                               type: string
 *                         webReaderLink:
 *                           type: string
 *                         accessViewStatus:
 *                           type: string
 *                         quoteSharingAllowed:
 *                           type: boolean
 *                     searchInfo:
 *                       type: object
 *                       properties:
 *                         textSnippet:
 *                           type: string
 *                   example:
 *                     kind: "books#volume"
 *                     id: "jQthDQAAQBAJ"
 *                     etag: "h9i6cJHqOpA"
 *                     selfLink: "https://www.googleapis.com/books/v1/volumes/jQthDQAAQBAJ"
 *                     volumeInfo:
 *                       title: "Undefined"
 *                       authors:
 *                         - "Madeleine Rheinheimer"
 *                       publisher: "Lulu.com"
 *                       publishedDate: "2016-11-10"
 *                       description: "\"Undefined\" was created to change the belief that one must look a certain way in order to fit the mold of perfection. After all, perfection is overrated, and can never be defined by a certain image or standard. This story is for all the girls and boys, young and old, who are tired of comparing themselves to the standards. This story is for everyone who is ready to embrace their unique existence, and color outside the lines. This story is for those of you who are undefined."
 *                       industryIdentifiers:
 *                         - type: "ISBN_13"
 *                           identifier: "9781483458427"
 *                         - type: "ISBN_10"
 *                           identifier: "1483458423"
 *                       readingModes:
 *                         text: false
 *                         image: true
 *                       pageCount: 34
 *                       printType: "BOOK"
 *                       categories:
 *                         - "Self-esteem"
 *                       maturityRating: "NOT_MATURE"
 *                       allowAnonLogging: false
 *                       contentVersion: "0.1.0.0.preview.1"
 *                       panelizationSummary:
 *                         containsEpubBubbles: false
 *                         containsImageBubbles: false
 *                       imageLinks:
 *                         smallThumbnail: "http://books.google.com/books/content?id=jQthDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
 *                         thumbnail: "http://books.google.com/books/content?id=jQthDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
 *                       language: "en"
 *                       previewLink: "http://books.google.kg/books?id=jQthDQAAQBAJ&pg=PT33&dq=undefined&hl=&cd=1&source=gbs_api"
 *                       infoLink: "http://books.google.kg/books?id=jQthDQAAQBAJ&dq=undefined&hl=&source=gbs_api"
 *                       canonicalVolumeLink: "https://books.google.com/books/about/Undefined.html?hl=&id=jQthDQAAQBAJ"
 *                     saleInfo:
 *                       country: "KG"
 *                       saleability: "NOT_FOR_SALE"
 *                       isEbook: false
 *                     accessInfo:
 *                       country: "KG"
 *                       viewability: "PARTIAL"
 *                       embeddable: true
 *                       publicDomain: false
 *                       textToSpeechPermission: "ALLOWED"
 *                       epub:
 *                         isAvailable: false
 *                       pdf:
 *                         isAvailable: true
 *                         acsTokenLink: "http://books.google.kg/books/download/Undefined-sample-pdf.acsm?id=jQthDQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
 *                       webReaderLink: "http://play.google.com/books/reader?id=jQthDQAAQBAJ&hl=&source=gbs_api"
 *                       accessViewStatus: "SAMPLE"
 *                       quoteSharingAllowed: false
 *                     searchInfo:
 *                       textSnippet: "... <b>Undefined</b> removes the barrier of differences. The positive words pair well with Hylan Miller&#39;s bright illustrations. – Dr. Diane Wells Rivers, author of Sugar Sandwich, Professional Educator The young writer of <b>Undefined</b>, has layered an&nbsp;..."
 */
router.get('/:id', itemsController.getItemById);

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Создать новый элемент
 *     tags: [Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               kind:
 *                 type: string
 *               id:
 *                 type: string
 *               etag:
 *                 type: string
 *               selfLink:
 *                 type: string
 *               volumeInfo:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   authors:
 *                     type: array
 *                     items:
 *                       type: string
 *                   publisher:
 *                     type: string
 *                   publishedDate:
 *                     type: string
 *                   description:
 *                     type: string
 *                   industryIdentifiers:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         type:
 *                           type: string
 *                         identifier:
 *                           type: string
 *                   readingModes:
 *                     type: object
 *                     properties:
 *                       text:
 *                         type: boolean
 *                       image:
 *                         type: boolean
 *                   pageCount:
 *                     type: integer
 *                   printType:
 *                     type: string
 *                   categories:
 *                     type: array
 *                     items:
 *                       type: string
 *                   maturityRating:
 *                     type: string
 *                   allowAnonLogging:
 *                     type: boolean
 *                   contentVersion:
 *                     type: string
 *                   panelizationSummary:
 *                     type: object
 *                     properties:
 *                       containsEpubBubbles:
 *                         type: boolean
 *                       containsImageBubbles:
 *                         type: boolean
 *                   imageLinks:
 *                     type: object
 *                     properties:
 *                       smallThumbnail:
 *                         type: string
 *                       thumbnail:
 *                         type: string
 *                   language:
 *                     type: string
 *                   previewLink:
 *                     type: string
 *                   infoLink:
 *                     type: string
 *                   canonicalVolumeLink:
 *                     type: string
 *               saleInfo:
 *                 type: object
 *                 properties:
 *                   country:
 *                     type: string
 *                   saleability:
 *                     type: string
 *                   isEbook:
 *                     type: boolean
 *               accessInfo:
 *                 type: object
 *                 properties:
 *                   country:
 *                     type: string
 *                   viewability:
 *                     type: string
 *                   embeddable:
 *                     type: boolean
 *                   publicDomain:
 *                     type: boolean
 *                   textToSpeechPermission:
 *                     type: string
 *                   epub:
 *                     type: object
 *                     properties:
 *                       isAvailable:
 *                         type: boolean
 *                   pdf:
 *                     type: object
 *                     properties:
 *                       isAvailable:
 *                         type: boolean
 *                         acsTokenLink:
 *                           type: string
 *                   webReaderLink:
 *                     type: string
 *                   accessViewStatus:
 *                     type: string
 *                   quoteSharingAllowed:
 *                     type: boolean
 *               searchInfo:
 *                 type: object
 *                 properties:
 *                   textSnippet:
 *                     type: string
 *           example:
 *             kind: "books#volume"
 *             id: "jQthDQtest123"
 *             etag: "h9i6cJHqOpA"
 *             selfLink: "https://www.googleapis.com/books/v1/volumes/jQthDQAAQBAJ"
 *             volumeInfo:
 *               title: "Undefined"
 *               authors:
 *                 - "Madeleine Rheinheimer"
 *               publisher: "Lulu.com"
 *               publishedDate: "2016-11-10"
 *               description: "\"Undefined\" was created to change the belief that one must look a certain way in order to fit the mold of perfection. After all, perfection is overrated, and can never be defined by a certain image or standard. This story is for all the girls and boys, young and old, who are tired of comparing themselves to the standards. This story is for everyone who is ready to embrace their unique existence, and color outside the lines. This story is for those of you who are undefined."
 *               industryIdentifiers:
 *                 - type: "ISBN_13"
 *                   identifier: "9781483458427"
 *                 - type: "ISBN_10"
 *                   identifier: "1483458423"
 *               readingModes:
 *                 text: false
 *                 image: true
 *               pageCount: 34
 *               printType: "BOOK"
 *               categories:
 *                 - "Self-esteem"
 *               maturityRating: "NOT_MATURE"
 *               allowAnonLogging: false
 *               contentVersion: "0.1.0.0.preview.1"
 *               panelizationSummary:
 *                 containsEpubBubbles: false
 *                 containsImageBubbles: false
 *               imageLinks:
 *                 smallThumbnail: "http://books.google.com/books/content?id=jQthDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
 *                 thumbnail: "http://books.google.com/books/content?id=jQthDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
 *               language: "en"
 *               previewLink: "http://books.google.kg/books?id=jQthDQAAQBAJ&pg=PT33&dq=undefined&hl=&cd=1&source=gbs_api"
 *               infoLink: "http://books.google.kg/books?id=jQthDQAAQBAJ&dq=undefined&hl=&source=gbs_api"
 *               canonicalVolumeLink: "https://books.google.com/books/about/Undefined.html?hl=&id=jQthDQAAQBAJ"
 *             saleInfo:
 *               country: "KG"
 *               saleability: "NOT_FOR_SALE"
 *               isEbook: false
 *             accessInfo:
 *               country: "KG"
 *               viewability: "PARTIAL"
 *               embeddable: true
 *               publicDomain: false
 *               textToSpeechPermission: "ALLOWED"
 *               epub:
 *                 isAvailable: false
 *               pdf:
 *                 isAvailable: true
 *                 acsTokenLink: "http://books.google.kg/books/download/Undefined-sample-pdf.acsm?id=jQthDQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
 *               webReaderLink: "http://play.google.com/books/reader?id=jQthDQAAQBAJ&hl=&source=gbs_api"
 *               accessViewStatus: "SAMPLE"
 *               quoteSharingAllowed: false
 *             searchInfo:
 *               textSnippet: "... <b>Undefined</b> removes the barrier of differences. The positive words pair well with Hylan Miller&#39;s bright illustrations. – Dr. Diane Wells Rivers, author of Sugar Sandwich, Professional Educator The young writer of <b>Undefined</b>, has layered an&nbsp;..."
 *     responses:
 *       201:
 *         description: Созданная запись
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 item:
 *                   type: object
 *                   properties:
 *                     kind:
 *                       type: string
 *                     id:
 *                       type: string
 *                     etag:
 *                       type: string
 *                     selfLink:
 *                       type: string
 *                     volumeInfo:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                         authors:
 *                           type: array
 *                           items:
 *                             type: string
 *                         publisher:
 *                           type: string
 *                         publishedDate:
 *                           type: string
 *                         description:
 *                           type: string
 *                         industryIdentifiers:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               type:
 *                                 type: string
 *                               identifier:
 *                                 type: string
 *                         readingModes:
 *                           type: object
 *                           properties:
 *                             text:
 *                               type: boolean
 *                             image:
 *                               type: boolean
 *                         pageCount:
 *                           type: integer
 *                         printType:
 *                           type: string
 *                         categories:
 *                           type: array
 *                           items:
 *                             type: string
 *                         maturityRating:
 *                           type: string
 *                         allowAnonLogging:
 *                           type: boolean
 *                         contentVersion:
 *                           type: string
 *                         panelizationSummary:
 *                           type: object
 *                           properties:
 *                             containsEpubBubbles:
 *                               type: boolean
 *                             containsImageBubbles:
 *                               type: boolean
 *                         imageLinks:
 *                           type: object
 *                           properties:
 *                             smallThumbnail:
 *                               type: string
 *                             thumbnail:
 *                               type: string
 *                         language:
 *                           type: string
 *                         previewLink:
 *                           type: string
 *                         infoLink:
 *                           type: string
 *                         canonicalVolumeLink:
 *                           type: string
 *                     saleInfo:
 *                       type: object
 *                       properties:
 *                         country:
 *                           type: string
 *                         saleability:
 *                           type: string
 *                         isEbook:
 *                           type: boolean
 *                     accessInfo:
 *                       type: object
 *                       properties:
 *                         country:
 *                           type: string
 *                         viewability:
 *                           type: string
 *                         embeddable:
 *                           type: boolean
 *                         publicDomain:
 *                           type: boolean
 *                         textToSpeechPermission:
 *                           type: string
 *                         epub:
 *                           type: object
 *                           properties:
 *                             isAvailable:
 *                               type: boolean
 *                         pdf:
 *                           type: object
 *                           properties:
 *                             isAvailable:
 *                               type: boolean
 *                               acsTokenLink:
 *                                 type: string
 *                         webReaderLink:
 *                           type: string
 *                         accessViewStatus:
 *                           type: string
 *                         quoteSharingAllowed:
 *                           type: boolean
 *                     searchInfo:
 *                       type: object
 *                       properties:
 *                         textSnippet:
 *                           type: string
 *                   example:
 *                     kind: "books#volume"
 *                     id: "jQthDQAAQBAJ"
 *                     etag: "h9i6cJHqOpA"
 *                     selfLink: "https://www.googleapis.com/books/v1/volumes/jQthDQAAQBAJ"
 *                     volumeInfo:
 *                       title: "Undefined"
 *                       authors:
 *                         - "Madeleine Rheinheimer"
 *                       publisher: "Lulu.com"
 *                       publishedDate: "2016-11-10"
 *                       description: "\"Undefined\" was created to change the belief that one must look a certain way in order to fit the mold of perfection. After all, perfection is overrated, and can never be defined by a certain image or standard. This story is for all the girls and boys, young and old, who are tired of comparing themselves to the standards. This story is for everyone who is ready to embrace their unique existence, and color outside the lines. This story is for those of you who are undefined."
 *                       industryIdentifiers:
 *                         - type: "ISBN_13"
 *                           identifier: "9781483458427"
 *                         - type: "ISBN_10"
 *                           identifier: "1483458423"
 *                       readingModes:
 *                         text: false
 *                         image: true
 *                       pageCount: 34
 *                       printType: "BOOK"
 *                       categories:
 *                         - "Self-esteem"
 *                       maturityRating: "NOT_MATURE"
 *                       allowAnonLogging: false
 *                       contentVersion: "0.1.0.0.preview.1"
 *                       panelizationSummary:
 *                         containsEpubBubbles: false
 *                         containsImageBubbles: false
 *                       imageLinks:
 *                         smallThumbnail: "http://books.google.com/books/content?id=jQthDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
 *                         thumbnail: "http://books.google.com/books/content?id=jQthDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
 *                       language: "en"
 *                       previewLink: "http://books.google.kg/books?id=jQthDQAAQBAJ&pg=PT33&dq=undefined&hl=&cd=1&source=gbs_api"
 *                       infoLink: "http://books.google.kg/books?id=jQthDQAAQBAJ&dq=undefined&hl=&source=gbs_api"
 *                       canonicalVolumeLink: "https://books.google.com/books/about/Undefined.html?hl=&id=jQthDQAAQBAJ"
 *                     saleInfo:
 *                       country: "KG"
 *                       saleability: "NOT_FOR_SALE"
 *                       isEbook: false
 *                     accessInfo:
 *                       country: "KG"
 *                       viewability: "PARTIAL"
 *                       embeddable: true
 *                       publicDomain: false
 *                       textToSpeechPermission: "ALLOWED"
 *                       epub:
 *                         isAvailable: false
 *                       pdf:
 *                         isAvailable: true
 *                         acsTokenLink: "http://books.google.kg/books/download/Undefined-sample-pdf.acsm?id=jQthDQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
 *                       webReaderLink: "http://play.google.com/books/reader?id=jQthDQAAQBAJ&hl=&source=gbs_api"
 *                       accessViewStatus: "SAMPLE"
 *                       quoteSharingAllowed: false
 *                     searchInfo:
 *                       textSnippet: "... <b>Undefined</b> removes the barrier of differences. The positive words pair well with Hylan Miller&#39;s bright illustrations. – Dr. Diane Wells Rivers, author of Sugar Sandwich, Professional Educator The young writer of <b>Undefined</b>, has layered an&nbsp;..."
 */
router.post('/', itemsController.createItem);

/**
 * @swagger
 * /items/{id}:
 *   put:
 *     summary: Обновить элемент по ID
 *     tags:
 *       - Items
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID элемента для обновления
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               item:
 *                 type: object
 *                 properties:
 *                   kind:
 *                     type: string
 *                   id:
 *                     type: string
 *                   etag:
 *                     type: string
 *                   selfLink:
 *                     type: string
 *                   volumeInfo:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                       authors:
 *                         type: array
 *                         items:
 *                           type: string
 *                       publisher:
 *                         type: string
 *                       publishedDate:
 *                         type: string
 *                       description:
 *                         type: string
 *                       industryIdentifiers:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             type:
 *                               type: string
 *                             identifier:
 *                               type: string
 *                       readingModes:
 *                         type: object
 *                         properties:
 *                           text:
 *                             type: boolean
 *                           image:
 *                             type: boolean
 *                       pageCount:
 *                         type: integer
 *                       printType:
 *                         type: string
 *                       categories:
 *                         type: array
 *                         items:
 *                           type: string
 *                       maturityRating:
 *                         type: string
 *                       allowAnonLogging:
 *                         type: boolean
 *                       contentVersion:
 *                         type: string
 *                       panelizationSummary:
 *                         type: object
 *                         properties:
 *                           containsEpubBubbles:
 *                             type: boolean
 *                           containsImageBubbles:
 *                             type: boolean
 *                       imageLinks:
 *                         type: object
 *                         properties:
 *                           smallThumbnail:
 *                             type: string
 *                           thumbnail:
 *                             type: string
 *                       language:
 *                         type: string
 *                       previewLink:
 *                         type: string
 *                       infoLink:
 *                         type: string
 *                       canonicalVolumeLink:
 *                         type: string
 *                   saleInfo:
 *                     type: object
 *                     properties:
 *                       country:
 *                         type: string
 *                       saleability:
 *                         type: string
 *                       isEbook:
 *                         type: boolean
 *                   accessInfo:
 *                     type: object
 *                     properties:
 *                       country:
 *                         type: string
 *                       viewability:
 *                         type: string
 *                       embeddable:
 *                         type: boolean
 *                       publicDomain:
 *                         type: boolean
 *                       textToSpeechPermission:
 *                         type: string
 *                       epub:
 *                         type: object
 *                         properties:
 *                           isAvailable:
 *                             type: boolean
 *                       pdf:
 *                         type: object
 *                         properties:
 *                           isAvailable:
 *                             type: boolean
 *                             acsTokenLink:
 *                               type: string
 *                       webReaderLink:
 *                         type: string
 *                       accessViewStatus:
 *                         type: string
 *                       quoteSharingAllowed:
 *                         type: boolean
 *                   searchInfo:
 *                     type: object
 *                     properties:
 *                       textSnippet:
 *                         type: string
 *             example:
 *               item:
 *                 kind: "books#volume"
 *                 id: "jQthDQtest123"
 *                 etag: "h9i6cJHqOpA"
 *                 selfLink: "https://www.googleapis.com/books/v1/volumes/jQthDQAAQBAJ"
 *                 volumeInfo:
 *                   title: "Test"
 *                   authors:
 *                     - "Test"
 *                   publisher: "Lulu.com"
 *                   publishedDate: "2016-11-11"
 *                   description: "\"Undefined\" was created to change the belief that one must look a certain way in order to fit the mold of perfection. After all, perfection is overrated, and can never be defined by a certain image or standard. This story is for all the girls and boys, young and old, who are tired of comparing themselves to the standards. This story is for everyone who is ready to embrace their unique existence, and color outside the lines. This story is for those of you who are undefined."
 *                   industryIdentifiers:
 *                     - type: "ISBN_13"
 *                       identifier: "9781483458427"
 *                     - type: "ISBN_10"
 *                       identifier: "1483458423"
 *                   readingModes:
 *                     text: false
 *                     image: true
 *                   pageCount: 34
 *                   printType: "BOOK"
 *                   categories:
 *                     - "Self-esteem"
 *                   maturityRating: "NOT_MATURE"
 *                   allowAnonLogging: false
 *                   contentVersion: "0.1.0.0.preview.1"
 *                   panelizationSummary:
 *                     containsEpubBubbles: false
 *                     containsImageBubbles: false
 *                   imageLinks:
 *                     smallThumbnail: "http://books.google.com/books/content?id=jQthDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
 *                     thumbnail: "http://books.google.com/books/content?id=jQthDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
 *                   language: "en"
 *                   previewLink: "http://books.google.kg/books?id=jQthDQAAQBAJ&pg=PT33&dq=undefined&hl=&cd=1&source=gbs_api"
 *                   infoLink: "http://books.google.kg/books?id=jQthDQAAQBAJ&dq=undefined&hl=&source=gbs_api"
 *                   canonicalVolumeLink: "https://books.google.com/books/about/Undefined.html?hl=&id=jQthDQAAQBAJ"
 *                 saleInfo:
 *                   country: "KG"
 *                   saleability: "NOT_FOR_SALE"
 *                   isEbook: false
 *                 accessInfo:
 *                   country: "KG"
 *                   viewability: "PARTIAL"
 *                   embeddable: true
 *                   publicDomain: false
 *                   textToSpeechPermission: "ALLOWED"
 *                   epub:
 *                     isAvailable: false
 *                   pdf:
 *                     isAvailable: true
 *                     acsTokenLink: "http://books.google.kg/books/download/Undefined-sample-pdf.acsm?id=jQthDQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
 *                   webReaderLink: "http://play.google.com/books/reader?id=jQthDQAAQBAJ&hl=&source=gbs_api"
 *                   accessViewStatus: "SAMPLE"
 *                   quoteSharingAllowed: false
 *                 searchInfo:
 *                   textSnippet: "... <b>Undefined</b> removes the barrier of differences. The positive words pair well with Hylan Miller&#39;s bright illustrations. – Dr. Diane Wells Rivers, author of Sugar Sandwich, Professional Educator The young writer of <b>Undefined</b>, has layered an&nbsp;..."
 *     responses:
 *       200:
 *         description: Обновленный элемент
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 item:
 *                   type: object
 *                   properties:
 *                     kind:
 *                       type: string
 *                     id:
 *                       type: string
 *                     etag:
 *                       type: string
 *                     selfLink:
 *                       type: string
 *                     volumeInfo:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                         authors:
 *                           type: array
 *                           items:
 *                             type: string
 *                         publisher:
 *                           type: string
 *                         publishedDate:
 *                           type: string
 *                         description:
 *                           type: string
 *                         industryIdentifiers:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               type:
 *                                 type: string
 *                               identifier:
 *                                 type: string
 *                         readingModes:
 *                           type: object
 *                           properties:
 *                             text:
 *                               type: boolean
 *                             image:
 *                               type: boolean
 *                         pageCount:
 *                           type: integer
 *                         printType:
 *                           type: string
 *                         categories:
 *                           type: array
 *                           items:
 *                             type: string
 *                         maturityRating:
 *                           type: string
 *                         allowAnonLogging:
 *                           type: boolean
 *                         contentVersion:
 *                           type: string
 *                         panelizationSummary:
 *                           type: object
 *                           properties:
 *                             containsEpubBubbles:
 *                               type: boolean
 *                             containsImageBubbles:
 *                               type: boolean
 *                         imageLinks:
 *                           type: object
 *                           properties:
 *                             smallThumbnail:
 *                               type: string
 *                             thumbnail:
 *                               type: string
 *                         language:
 *                           type: string
 *                         previewLink:
 *                           type: string
 *                         infoLink:
 *                           type: string
 *                         canonicalVolumeLink:
 *                           type: string
 *                     saleInfo:
 *                       type: object
 *                       properties:
 *                         country:
 *                           type: string
 *                         saleability:
 *                           type: string
 *                         isEbook:
 *                           type: boolean
 *                     accessInfo:
 *                       type: object
 *                       properties:
 *                         country:
 *                           type: string
 *                         viewability:
 *                           type: string
 *                         embeddable:
 *                           type: boolean
 *                         publicDomain:
 *                           type: boolean
 *                         textToSpeechPermission:
 *                           type: string
 *                         epub:
 *                           type: object
 *                           properties:
 *                             isAvailable:
 *                               type: boolean
 *                         pdf:
 *                           type: object
 *                           properties:
 *                             isAvailable:
 *                               type: boolean
 *                             acsTokenLink:
 *                               type: string
 *                         webReaderLink:
 *                           type: string
 *                         accessViewStatus:
 *                           type: string
 *                         quoteSharingAllowed:
 *                           type: boolean
 *                     searchInfo:
 *                       type: object
 *                       properties:
 *                         textSnippet:
 *                           type: string
 */
router.put('/:id', itemsController.updateItem);

/**
 * @swagger
 *
 * /items/{id}:
 *   delete:
 *     summary: Удалить элемент по ID
 *     tags:
 *       - Items
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Успешное удаление записи
 */
router.delete('/:id', itemsController.deleteItem);

module.exports = router;
