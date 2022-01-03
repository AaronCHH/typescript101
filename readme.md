# Readme
First TS project from course

## Install
```bash
npm install typescript ts-node
npm install axios
```
## Create index.ts and code
```js
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
	console.log(response.data);
```

## Compile and run
```bash
tsc index.ts
node index.js
```
or
```bash
ts-node index.ts
```

## Data
* [jsonplaceholder](https://jsonplaceholder.typicode.com/)