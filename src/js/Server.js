import { Server } from 'miragejs'
console.log('Mirage is active')
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