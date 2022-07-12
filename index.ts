import { client, content } from 'plone-restapi-client'

client.init('http://localhost:8080/Plone')

client.auth('admin', 'admin').then(() => {
  content.get('/my-page').then(console.log)
})
