import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import RandomNumbers from "./RandomNumbers.jsx";

const App = () => {
  let mockData = {
    users: [
      { id: 1, name: 'Jan Kowalski', age: 30 },
      { id: 2, name: 'Anna Nowak', age: 25 }
    ],
    success: true
  };

  const [data, setData] = useState([]);
  function mockApiFetch() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 2000); // Symulacja opóźnienia
    });
  }

  useEffect(() => {
   mockApiFetch()
       .then(data => setData(data.users))
       .catch(err => console.log(err));
  }, []);

  function deleteUserById(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = mockData.users.findIndex(user => user.id === userId);
        if (index !== -1) {
          mockData.users.splice(index, 1);
          resolve({ success: true, message: 'Użytkownik został usunięty.' });
        } else {
          reject(new Error('Nie znaleziono użytkownika o podanym ID.'));
        }
      }, 2000); // Symulacja opóźnienia
    });
  }

  return (
      <ul>
        {data.map((item, i) => <li key={i}>{item}</li>)}
        <button></button>
      </ul>
  );

};


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
