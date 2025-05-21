// server.js
import express from 'express';
import cors    from 'cors';
import { pool } from './db.js';
import dotenv from "dotenv";
import bcrypt from 'bcrypt';


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

// Route d'inscription
app.post('/api/signup', async (req, res) => {
    const { nom, prenom, email, password } = req.body;

    try {
        const [existing] = await pool.query('SELECT * FROM Utilisateur WHERE email = ?', [email]);
        if (existing.length > 0) {
            return res.status(409).json({ message: 'Utilisateur déjà existant' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query(
            `INSERT INTO Utilisateur (nom, prenom, email, mot_de_passe, role) VALUES (?, ?, ?, ?, ?)`,
            [nom, prenom, email, hashedPassword, 'joueur']
        );

        res.status(201).json({ message: 'Inscription réussie' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de l\'inscription' });
    }
});

// Route de connexion
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const [rows] = await pool.query('SELECT * FROM Utilisateur WHERE email = ?', [email]);

        if (rows.length === 0) {
            return res.status(401).json({ message: 'Email invalide' });
        }

        const user = rows[0];
        const isValid = await bcrypt.compare(password, user.mot_de_passe);

        if (!isValid) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

        res.status(200).json({
            message: 'Connexion réussie',
            user: {
                id: user.id_utilisateur,
                nom: user.nom,
                prenom: user.prenom,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
});


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

app.get('/api/jeux/:id', async (req, res) => {
    const jeuId = req.params.id;

    try {
        const [rows] = await pool.query('SELECT * FROM Jeu WHERE id_jeu = ?', [jeuId]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Jeu non trouvé' });
        }

        res.json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur lors de la récupération du jeu' });
    }
});


app.post('/api/reserver', async (req, res) => {
    const { id_utilisateur, id_jeu, id_table, date_debut, date_fin } = req.body;

    try {
        const [rows] = await pool.query(
            `CALL louer_jeu(?, ?, ?, ?, ?)`,
            [id_utilisateur, id_jeu, id_table, date_debut, date_fin]
        );

        res.status(200).json({ message: 'Réservation réussie' });
    } catch (error) {
        console.error('Erreur lors de la réservation :', error);

        // Gestion des signaux SQLSTATE personnalisés
        if (error.code === 'ER_SIGNAL_EXCEPTION') {
            res.status(400).json({ message: error.sqlMessage });
        } else {
            res.status(500).json({ message: 'Erreur serveur' });
        }
    }
});

app.get('/api/tables', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM TableJeu')
        res.json(rows)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Erreur serveur' })
    }
})

app.get('/api/evenements', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Evenement')
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