'use strict';

let jsonobj ={
	bilar: [
		{
			"id": 1,
			"regnr": "ABC123",
			"marke": "Volvo",
			"modell": "V70 (III), 'FAS 2'",
			"arsmodell": 2008,
			"created_at": "2025-03-18T11:52:20.000000Z",
			"updated_at": "2025-03-18T11:52:20.000000Z"
		},
		{
			"id": 3,
			"regnr": "QQQ111",
			"marke": "Skoda",
			"modell": "Oktavia",
			"arsmodell": 2012,
			"created_at": "2025-03-18T11:53:09.000000Z",
			"updated_at": "2025-03-18T11:53:09.000000Z"
		},
		{
			"id": 4,
			"regnr": "WWW999",
			"marke": "Trabant",
			"modell": "Låda",
			"arsmodell": 1967,
			"created_at": "2025-03-18T11:53:44.000000Z",
			"updated_at": "2025-03-18T11:53:44.000000Z"
		},
		{
			"id": 5,
			"regnr": "F1SK3N",
			"marke": "KönigsÄgg",
			"modell": "Skrothög",
			"arsmodell": 1934,
			"created_at": "2025-03-22T10:07:35.000000Z",
			"updated_at": "2025-03-22T10:21:53.000000Z"
		}
	]
};

window.addEventListener('load', ()=>{

	updateTable();
	
});

function updateTable() {
	for(let i=0; i<jsonobj.bilar.length;i++) {
		//console.log(jsonobj.bilar[i].modell);
		let tr = document.createElement('tr');
		let td = document.createElement('td');

		td.textContent = jsonobj.bilar[i].marke;
		tr.addEventListener('click', removeCar);
		tr.appendChild(td);


		td = document.createElement('td');
		td.textContent = jsonobj.bilar[i].modell;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = jsonobj.bilar[i].arsmodell;
		tr.appendChild(td);

		td = document.createElement('td');
		let btn = document.createElement('a');
		btn.classList.add('btn', 'btn-danger');
		btn.setAttribute('data-radnummer', i);
		btn.textContent='ta bort';
		td.appendChild(btn);
		tr.appendChild(td);

		document.querySelector('.table-bordered').appendChild(tr);

	}
}


function removeCar(evt){
	console.log(evt.target.tagName);
	if(evt.target.tagName==='A') {
		console.log(evt.currentTarget);
		evt.currentTarget.remove();
	}

}