import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
	// console.log(response.data);
	const todo = response.data;

	const ID = todo.id;
	const title = todo.title;
	const finished = todo.finished;

	console.log(
		`The Todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
    `,
	);
});
