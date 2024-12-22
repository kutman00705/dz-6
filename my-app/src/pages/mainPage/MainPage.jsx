import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [users, setUsers] = useState([]);

    // Функция для добавления пользователя
    const onSubmit = (data) => {
        setUsers([...users, data]);
        reset(); // Очистка полей ввода
    };

    // Функция для удаления пользователя
    const handleDelete = (index) => {
        setUsers(users.filter((_, i) => i !== index));
    };

    // Функция для очистки таблицы
    const handleClearTable = () => {
        setUsers([]);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Форма добавления пользователя</h1>

            {/* Форма */}
            <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '20px' }}>
                <div>
                    <label>Name:</label>
                    <input {...register('name', { required: true })} />
                    {errors.name && <span style={{ color: 'red' }}>Поле обязательно</span>}
                </div>
                <div>
                    <label>Username:</label>
                    <input {...register('username', { required: true })} />
                    {errors.username && <span style={{ color: 'red' }}>Поле обязательно</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input {...register('email', { required: true })} />
                    {errors.email && <span style={{ color: 'red' }}>Поле обязательно</span>}
                </div>
                <div>
                    <label>Phone:</label>
                    <input {...register('phone', { required: true })} />
                    {errors.phone && <span style={{ color: 'red' }}>Поле обязательно</span>}
                </div>
                <div>
                    <label>Website:</label>
                    <input {...register('website')} />
                </div>
                <button type="submit" style={{ marginRight: '10px' }}>Создать</button>
                <button type="button" onClick={handleClearTable}>Очистить таблицу</button>
            </form>

            {/* Таблица пользователей */}
            {users.length === 0 ? (
                <p>Таблица пуста</p>
            ) : (
                <table border="1" cellPadding="10" cellSpacing="0">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website || '—'}</td>
                            <td>
                                <button onClick={() => handleDelete(index)}>Удалить</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default App;