import wixData from 'wix-data';
Function getData(){ 
	let query = wixData.query('Secretchat');

	return query.limit(1000).find().then(results => {
	console.log('getData,results', results);
	return results.item;

	});
}

$w.onReady ( () =>{

	$w("#Messagewrite").onAfterSave( () => {
		getData().then((items) => {
			$w("#Message1").data = items;
		});
	});
});

