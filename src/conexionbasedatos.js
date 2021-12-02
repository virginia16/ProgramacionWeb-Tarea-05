import { MongoClient } from 'mongodb'

const url = 'mongodb+srv://virgina16:virgina16@cluster0.tgxco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const cont = new MongoClient(url);

const dbnombre = 'basedatost5';
(async () => {
	try {
		await cont.connect();
		console.log('Servidor conectado correctamente');
		const db = cont.db(dbnombre);
		const collection = db.collection('contactos');
		return 'done.';
	} catch (error) {
		console.error(error);
	}
})();
async function insertData(body) {
	try {
		await cont.connect();
		console.log('Servidor conectado correctamente');
		const db = cont.db(dbnombre);
		const collection = db.collection('contactos');
		await collection.insertMany(body);
	} catch (error) {
		if (error) {
			console.log(error);
		}

	}
}
export default insertData;
