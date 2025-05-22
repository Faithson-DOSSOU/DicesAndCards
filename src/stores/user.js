import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        id_utilisateur: null,
        nom: '',
        prenom: '',
        email: '',
        role: 'player'
    }),

    getters: {
        isAdmin: (state) => state.role === 'admin',
    },

    actions: {
        setRole(newRole) {
            this.role = newRole
        },

        setUser(user) {
            this.id_utilisateur = user.id
            this.nom = user.nom
            this.prenom = user.prenom
            this.email = user.email
            this.role = user.role || 'player'
        },

        // Exemples de méthodes manuelles
        loginAsPlayer() {
            this.setRole('player')
        },

        loginAsAdmin() {
            this.setRole('admin')
        },

        logout() {
            this.nom = ''
            this.prenom = ''
            this.email = ''
            this.role = 'player'
        }
    }
})
