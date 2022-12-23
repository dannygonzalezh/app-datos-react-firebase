import React, { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase-config';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

function App() {

  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) })
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db, 'users', id)
    const newFields = {age: age + 1}
    await updateDoc(userDoc, newFields)
  };
  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
  }

  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

    return (
      <div className='app'>
        <h1 className='titulo-principal'>Nombre y Edad</h1>
        <input 
        className='nombre'
        placeholder='Name...' 
        onChange={(e) => {setNewName(e.target.value)}} />
        <input 
        className='edad'
        type='text' 
        placeholder='Age...' 
        onChange={(e) => {setNewAge(e.target.value)}}/>
        <button 
        className='boton-crear'
        onClick={createUser}>Create User</button>
           {users.map((user) => {
            return (
              <div className='contenedor-tarjeta'>
                <h1 className='titulo-nombre'>Name: {user.name}</h1>
                <h1 className='titulo-edad'>Age: {user.age}</h1>
                <button className='boton-incrementar' onClick={() => {updateUser(user.id, user.age)}}>Increase Age</button>
                <button className='boton-eliminar' onClick={() => {deleteUser(user.id)}}>Delete User</button>
              </div>
            )
           })}
     </div>
    );
}    


export default App;