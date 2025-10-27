import royal from '../../../public/royal.png'
import golden from '../../../public/golden.png'
import premier from '../../../public/premier.png'
import natural from '../../../public/natural.png'
import whiskas from '../../../public/whiskas.png'
import Image from 'next/image'
import { FacebookLogoIcon, InstagramLogoIcon, TiktokLogoIcon } from '@phosphor-icons/react/dist/ssr'

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Premier", logo: premier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
]

export function Footer() {
  return (
    <section className='bg-[#E65D40] py-16 text-white'>
      <div className='container mx-auto px-4'>

        <div className='border-b border-white/20 pb-8'>
          <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-5 gap-8'>
          {brands.map((item, index) => (
            <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
              <Image
                src={item.logo}
                alt={item.name}
                width={100}
                height={50}
                quality={100}
                style={{
                  width: "auto",
                  height: "auto"
                }}
                className='object-contain'
              />
            </div>
          ))}
        </div>

        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>Amo Pet</h3>
            <p className='mb-4'>O cuidado que o seu amigo pet merece</p>
            <a target='_blank'
              href={`https://wa.me/551699999999?text=Olá vim pelo site e gostaria de mais informações`}
              className='bg-green-500 px-4 py-2 rounded-md'
            >
              Contato via WhatsApp
            </a>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
            <p>Email: contato@amopet.com.br</p>
            <p>Telefone: (XX) 99999-9999</p>
            <p>Endereço: Rua X, Centro - Araraquara, SP</p>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-2'>Redes sociais</h3>
            <div className='flex gap-4'>
              <a href="#"
                target='_blank'
              >
                <FacebookLogoIcon className='w-8 h-8' />
              </a>
              <a href="#"
                target='_blank'
              >
                <InstagramLogoIcon className='w-8 h-8' />
              </a>
              <a href="#"
                target='_blank'
              >
                <TiktokLogoIcon className='w-8 h-8' />
              </a>
            </div>
          </div>
        </footer>

      </div>
    </section>
  )
}