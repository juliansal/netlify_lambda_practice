
const fetchUsers = async () => await (await fetch('http://localhost:9000/getusers')).json();

fetchUsers().then(data => {
	userList = document.querySelector('#users');

	data.forEach(user => {
		const li = document.createElement('li');
		const link = document.createElement('a');
		li.className = 'list-group-item';
		link.appendChild(document.createTextNode(user.login));
		link.href = user.html_url;
		link.target = '_blank';
		li.appendChild(link);
		userList.appendChild(li);
	});
})