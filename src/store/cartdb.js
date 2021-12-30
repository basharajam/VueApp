const DB_NAME = 'catdb';
const DB_VERSION = 1;
let DB;


export default {

	async getDb() {
		return new Promise((resolve, reject) => {

			if(DB) { return resolve(DB); }
			console.log('OPENING DB', DB);
			let request = window.indexedDB.open(DB_NAME, DB_VERSION);
			
			request.onerror = e => {
				console.log('Error opening db', e);
				reject('Error');
			};
	
			request.onsuccess = e => {
				DB = e.target.result;
				resolve(DB);
			};
			
			request.onupgradeneeded = e => {
				console.log('onupgradeneeded');
				let db = e.target.result;
				db.createObjectStore("items", { autoIncrement: true, keyPath:'id' });
			};
		});
	},
	async getCartItems() {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['items'],'readonly');
			trans.oncomplete = () => {
				resolve(items);
			};
			
			let store = trans.objectStore('items');
			let items = [];
			
			store.openCursor().onsuccess = e => {
				let cursor = e.target.result;
				if (cursor) {
					items.push(cursor.value)
					cursor.continue();
				}
			};

		});
	},
    async saveCartItem(item) {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['items'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('items');
			store.put(item);

		});
	
	},

    async deleteCratItem(item) {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['items'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('items');
			store.delete(item.id);
		});	
	},
    async updateQty(item){

        let db = await this.getDb();
        return new Promise(resolve => {

			let trans = db.transaction(['items'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

            //find item 

			let citem=[];
			let store = trans.objectStore('items');
			store.openCursor().onsuccess = e => {
				let cursor = e.target.result;
				if (cursor) {
                    if(cursor.value.item.id === item.item.id){
                        citem.push(cursor.value)
                    }
					cursor.continue();
				}
			};

			// let store = trans.objectStore('items');
			// store.delete(items.id);
            // store.put(items);
		});	

    }

}
