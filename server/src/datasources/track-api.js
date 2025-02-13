const { RESTDataSource } = require('@apollo/datasource-rest');

class TrackAPI extends RESTDataSource {
    baseURL = 'https://odysser-lift-off-rest-api.herokuapp.com/';

    getTracksForHome() {
        return this.get('tracks')
    }

    getAuthor(authorId) {
        return this.get(`author/${authorId}`)
    }
}

module.exports = TrackApi;