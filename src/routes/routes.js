import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'Home'}))

router.get('/about-us', (req, res) => res.render('about-us', { title: 'About Us'}))

router.get('/contact-us', (req, res) => res.render('contact-us', { title: 'Contact Us'}))

export default router