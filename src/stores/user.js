export const useUserStore = defineStore('user', {
    persist: true, // 🔥 ceci active la persistance

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
            this.id_utilisateur = user.id_utilisateur;
            this.nom = user.nom;
            this.prenom = user.prenom;
            this.email = user.email;
            this.role = user.role || 'player';
        },

        logout() {
            this.id_utilisateur = null;
            this.nom = '';
            this.prenom = '';
            this.email = '';
            this.role = 'player';
        }
    }
});
