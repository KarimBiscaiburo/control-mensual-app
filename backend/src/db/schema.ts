import pool from './db';

export default async function createTables() {

    // Tabla de usuarios
    // Utilizamos "users" en plural porque "user" en singular es una palabra reservada en SQL
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            user_id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            lastname VARCHAR(255),
            email VARCHAR(255) NOT NULL UNIQUE
        );
    `);

    // Tabla de categorias
    await pool.query(`
        CREATE TABLE IF NOT EXISTS category (
            category_id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(user_id),
            name VARCHAR(255) NOT NULL,
            type VARCHAR(255) NOT NULL
        );
    `);
            
    // Tabla de gastos
    // "NUMERIC" es mejor para datos que manejan decimales, como la plata
    await pool.query(`
        CREATE TABLE IF NOT EXISTS bill (
            bill_id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(user_id),
            amount NUMERIC NOT NULL,
            monthly_fee NUMERIC DEFAULT 1,
            category_id INT NOT NULL REFERENCES category(category_id),
            description VARCHAR(255),
            method VARCHAR(255) NOT NULL,
            is_paid BOOLEAN NOT NULL,
            date DATE DEFAULT NOW()
        );
    `);
    
    // Tabla de ingresos
    await pool.query(`
        CREATE TABLE IF NOT EXISTS income (
            income_id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(user_id),
            amount NUMERIC NOT NULL,
            category_id INT NOT NULL REFERENCES category(category_id),
            description VARCHAR(255),
            date DATE DEFAULT NOW()
        );
    `);

    // Tabla de prestamos
    await pool.query(`
        CREATE TABLE IF NOT EXISTS loan (
            loan_id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(user_id),
            amount NUMERIC NOT NULL,
            monthly_fee NUMERIC DEFAULT 1,
            description VARCHAR(255),
            date DATE DEFAULT NOW()
        );
    `);


    // Tarjeta de credito
    await pool.query(`
        CREATE TABLE IF NOT EXISTS creditCard (
            credit_card_id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(user_id),
            name VARCHAR(255) NOT NULL,
            close_date INT NOT NULL,
            amount_limit NUMERIC
        );
    `);
}