
import axios from 'axios'


const gettingTasks = async () => {
const response = await axios.get('http://localhost:5500/api/tasks');
console.log(response);

}

gettingTasks()