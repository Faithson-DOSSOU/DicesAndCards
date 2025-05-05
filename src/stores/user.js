import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        role: 'player',
    }),

    getters: {
        isAdmin: (state) => state.role === 'admin',
    },

    actions: {
        setRole(newRole) {
            this.role = newRole
        },
        // Exemples de méthodes de login/logout
        loginAsPlayer() {
            this.setRole('player')
        },
        loginAsAdmin() {
            this.setRole('admin')
        },
        logout() {
            this.setRole('player')
        }
    }
})
