import { Server } from 'miragejs'

new Server({
  routes () {
    this.namespace = '/api'

    this.get('/movies', () => {
        return {
            movies: [
                {
                    id: 1,
                    name: "Interstellar"
                },
                {
                    id: 2,
                    name: "Batman"
                }
            ]
        }
    })
  }
})