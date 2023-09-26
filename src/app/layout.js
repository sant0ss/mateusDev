import './css/globals.css'
import './css/animation.css'
import './css/mobile.css'

export const metadata = {
  title: 'Mateus Santos - DevWeb',
  description: 'Desenvolvedor Full Stack, UI e UX Designer apaixonado por criar experiências digitais excepcionais. Combino funcionalidade robusta com design cativante para entregar projetos de alta qualidade.',
  keywords: 'Desenvolvedor Full Stack, Desenvolvimento Web, Front-end, Back-end, UI Design, UX Design, Design Responsivo, Prototipagem, HTML5, CSS3, JavaScript, React.js, Node.js, PHP, Banco de Dados, Usabilidade, Teste de Usuário, Wireframing, Experiência do Cliente, Portfolio Online',
  author: 'Mateus Santos',
  robots: 'index, follow'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className='font-exo2 text-white w-full h-screen bg-gradient-to-l from-indigo-950 via-teal-600 to-indigo-950 background-animate'>{children}</body>
    </html>
  )
}
