import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        role: 'player',
        nom: '',
        prenom: '',
        email: ''
    }),

    getters: {
        isAdmin: (state) => state.role === 'admin',
    },

    actions: {
        setRole(newRole) {
            this.role = newRole
        },

        // ✅ Nouvelle méthode pour tout enregistrer depuis le backend
        setUser(user) {
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
