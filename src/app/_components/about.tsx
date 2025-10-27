import Image from "next/image";
import about1Img from "../../../public/about-1.png"
import about2Img from "../../../public/about-2.png"
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto ">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative"
          data-aos="fade-down-right"
          >
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto do cachorro e gato"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={about2Img}
                alt="Foto do gato"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10"
          data-aos="fade-down-left"
          >
            <h2 className="text-4xl font-bold">SOBRE</h2>

            <p>🐾 Bem-vindo à Amo Pet!

              Aqui, o amor pelos animais vem em primeiro lugar! Somos mais do que um pet shop — somos um espaço dedicado ao bem-estar, saúde e felicidade do seu melhor amigo.
              Oferecemos uma linha completa de produtos e serviços para cães, gatos e outros pets: rações premium, brinquedos, acessórios, banho e tosa,
              além de atendimento personalizado feito por quem realmente entende e ama os animais.
              Nosso compromisso é cuidar do seu pet com carinho e responsabilidade, garantindo sempre os melhores produtos e um ambiente seguro e acolhedor.
              Venha nos visitar ou faça seu pedido online e descubra como é fácil cuidar do seu pet com quem entende do assunto! 🐶🐱💙</p>

            <ul>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2010.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aqui a qualidade é o nosso foco.
              </li>
            </ul>

            <div className="flex gap-2">
              <a target='_blank'
                href={`https://wa.me/551699999999?text=Olá vim pelo site e gostaria de mais informações`}
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>

              <a href="#"
                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da loja
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}