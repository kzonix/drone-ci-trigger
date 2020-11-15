class DroneClient {
    constructor() {
    }

    async getUser(userId) { }
    async getUserRepositories(userId) { }
    async getRepositoryInfo(repoId) { }
    async getRepositoryBuilds(repoId) { }
}

module.exports = { DroneHttpClient: DroneClient, DroneClient: DroneClient }
