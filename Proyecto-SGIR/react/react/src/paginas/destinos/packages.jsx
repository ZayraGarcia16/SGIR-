import Main from "../destinos/main";
import PackageCard from "../destinos/packageCard";
import "./Packages.css" ;
import './packageCardStyle.css';
import { AiFillStar, AiOutlineStar} from 'react-icons/ai';
import Package1 from '../../assets/destinos/pack1.jpg';
import Package2 from '../../assets/destinos/pack2.webp';
import Package3 from '../../assets/destinos/pack3.jpeg';
import Package4 from '../../assets/destinos/pack4.jpg';
import Package5 from '../../assets/destinos/pack5.jpg';
import Package6 from '../../assets/destinos/pack6.jpg';
import packageImg from '../../assets/destinos/package.jpg';
import React from "react";
export default function Packages(){
    return(
        
        <div className="packageContainer">
         <Main cName01="main-text" title="Destinos Populares" text="Elige tu destino reservando los paquetes" mainImage={packageImg} cName="main-content" style={{ textAlign: "center" }} />
            <div className="package">
            <PackageCard cardImage={Package1} star={<><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>} cardTitle="Cartagena de Indias" cardDetail=" Cartagena es una ciudad histórica ubicada en la costa caribeña de Colombia. Famosa por su Ciudad Amurallada, Cartagena es un destino de playas exóticas y un centro histórico lleno de arquitectura colonial que ha sido declarado Patrimonio de la Humanidad por la UNESCO." 
              amount="$90,00" />


           <PackageCard cardImage={Package2} star={<><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>} cardTitle="Parque Nacional Natural Tayrona" cardDetail="Este parque es uno de los destinos más visitados en Colombia, ubicado a pocos kilómetros de Santa Marta. Es famoso por su belleza natural, sus playas paradisíacas y sus rutas de senderismo en medio de la selva tropical. Es ideal para los amantes del ecoturismo." 
           amount="$90,00"/> 
           <PackageCard 
            cardImage={Package3} 
                star={<><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>} 
                cardTitle="Ciudad Perdida" 
                cardDetail="Un antiguo sitio arqueológico de la civilización Tairona, ubicado en la Sierra Nevada de Santa Marta. Este es uno de los destinos de trekking más importantes de Colombia y uno de los mayores atractivos turísticos para los aventureros que buscan historia y naturaleza." 
                amount="$90,00" 
            />

              <PackageCard cardImage={Package4} star={<><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>} cardTitle="Cabo de la Vela" cardDetail=" Cabo de la Vela es uno de los destinos más emblemáticos de La Guajira. Es un lugar perfecto para quienes buscan escapar a la tranquilidad, rodeado por impresionantes dunas, playas solitarias y aguas cristalinas. Es el sitio ideal para disfrutar del paisaje desértico y el mar Caribe.
                " amount="$90,00"/>
                 <PackageCard cardImage={Package5} star={<><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>} cardTitle="Parque de la Leyenda Vallenata" cardDetail="Este parque es uno de los símbolos más importantes de Valledupar y está dedicado al folklore vallenato. Aquí se encuentra la Tumba de Consuelo Araujo Noguera, y el parque alberga monumentos a los grandes compositores de la música vallenata. Es el lugar ideal para disfrutar del ambiente cultural de la región." amount="$90,00"/>
                   <PackageCard cardImage={Package6} star={<><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>} cardTitle="Río Guatapurí" cardDetail=" El río Guatapurí es un lugar perfecto para disfrutar de un baño refrescante, especialmente en la famosa Poza de los Novios, donde las aguas son cristalinas. Este lugar es un destino turístico popular para relajarse y disfrutar de la naturaleza."
                   amount="$90,00"/>
          </div>

        </div>
    );
}