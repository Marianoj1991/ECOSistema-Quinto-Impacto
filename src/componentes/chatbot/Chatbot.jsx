import zIndex from '@mui/material/styles/zIndex';
import ChatBot from 'react-simple-chatbot';

export default function Chatbot() {
  return (
    <>
      <ChatBot
        steps={[
          {
            id: 'intro',
            message: 'Bienvenido a mi ECOSchatbot. ¿Cómo te llamas?',
            trigger: '1'
          },
          {
            id: '1',
            user: true,
            trigger: '2'
          },
          {
            id: '2',
            message: 'Encantado de conocerte {previousValue}',
            trigger: '3'
          },
          {
            id: '3',
            message: 'Qué te gustaría saber?',
            trigger: 'select'
          },
          {
            id: 'select',
            options: [
              { value: 'y', label: '¿Quienes somos?', trigger: 'quienesSomos' },
              {
                value: 'n',
                label: '¿Como crearte un usuario?',
                trigger: 'crearUsuario'
              },
              { value: 't', label: 'Salir', trigger: 'finChat' }
            ]
          },
          {
            id: 'quienesSomos',
            message:
              'Somos una plataforma para conectar proveedores cuyo producto o servicio es de tipo sustentable con consumidores (empresas, organismos, usuarios) que busquen cambiar sus hábitos de consumo o mejorar su cadena de valor.',
            trigger: '3'
          },
          {
            id: 'crearUsuario',
            message:
              'Para crear un usuario tienes que hacer click en el boton superior derecho que dice ingresar y loguearte con tu cuenta de google, es rápido y fácil',
            trigger: '3'
          },
          {
            id: 'finChat',
            message:
              'Espero haber sido de ayuda, que tengas un buen día, adios.',
            end: true
          }
        ]} floating={true} placeholder={'Escribe tu mensaje'} style={{zIndex: '9999'}}
      />
    </>
  )
}