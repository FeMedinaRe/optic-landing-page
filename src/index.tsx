import { Hono } from 'hono'
import { html } from 'hono/html'
import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Contact } from './components/Contact'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    Layout({
      children: html`${Hero()}${Services()}${Process()}${Contact()}`
    })
  )
})

export default app