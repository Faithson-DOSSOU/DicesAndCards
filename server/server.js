// server.js
import express from 'express';
import cors    from 'cors';
import { pool } from './db.js';
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// --- Routes Utilisateur ---
app.get('/api/utilisateurs', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Utilisateur');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
})

// Exemple de GET pour login un utilisateur
app.get('/api/profile/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Utilisateur');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
})


// Exemple de POST pour créer un utilisateur
app.post('/api/utilisateurs', async (req, res) => {
    const { nom, prenom, email, mot_de_passe, role, statut_compte } = req.body
    try {
        const [result] = await pool.query(
            `INSERT INTO Utilisateur
       (nom, prenom, email, mot_de_passe, role, statut_compte)
       VALUES (?, ?, ?, ?, ?, ?)`,
            [nom, prenom, email, mot_de_passe, role, statut_compte]
        )
        res.status(201).json({ id: result.insertId })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Impossible de créer l’utilisateur' })
    }
})

// --- Autres routes pour Jeu, Categorie, etc. ---
// Exemple abrégé pour Jeux :
app.get('/api/jeux', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Jeu')
        res.json(rows)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Erreur serveur' })
    }
})

// Exemple abrégé pour Categories :
app.get('/api/categories', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Categorie')
        res.json(rows)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Erreur serveur' })
    }
})

// Démarrage du serveur
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`)
})
