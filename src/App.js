import React from 'react';
import './index.css'; 

function App() {
  return (
    <div>

        <header>
        <h1>Hoja de vida</h1>
        </header>

        <section>

    <subtitulo>
        <h3>Sobre Mi:</h3>
    </subtitulo>
        <p>
            Mi nombre es Santiago Cano, criado en el pueblo de Chinchina y actual residente de la ciudad de
            Manizales hace 2 años, soy estudiante de la universidad de caldas, actualmente
            ademas de ser estudiante tambien me dedico al deporte de triatlon y he representado al
            departamento en muchas ocaciones, tambien trabajo en una empresa etiquetando productos o 
            realizando otras activadades propias de un funcionario.
        </p>

        <img src="Images/FotoSanti.jpeg" height="250" alt=""/>
<div>
    <subtitulo>
        <h3>Hobbies:</h3>
    </subtitulo>
        
        <p>       
            Mi principal hobbie actual es el deporte aunque mi sueño personal es que sea mi trabajo algun dia
            ademas de esto cuando me queda tiempo disfruto mucho jugar videojuegos y armar puzzles.           
        </p>
</div>
<div>

    <subtitulo>
        <h3>Experiencia Laboral:</h3>
    </subtitulo>
        <p>
            Como experiencias en el mundo laboral he tenido la fortuna de contar con varias entre ellas 
            asistente de fotografo y mesero, este ultimo siendo el trabajo en el cual mas experiencia tengo; 
            y actualmente me dedico a logistica en una empresa de lacteos.        
        </p>
</div>
<div>
    <subtitulo>
        <h3>Experiencia Academica:</h3>
        </subtitulo>
        <p>
            Graduado de bachiller en la IEST chinchina y actualmente cursando un tecnologo en sistemas 
            de la informacion en la universidad de Caldas.              
        </p>
</div>
<div>
    <subtitulo>
        <h3>Aptitudes:</h3>
        </subtitulo>
        <p>
            <ul>
                <li>Gran estado fisico.</li>
                <li>Nivel medio de ingles.</li>
                <li>Gran actitud.</li>
            </ul>
        </p>

</div>

    </section>
    <section>

            <subtitulo>
                <h2>Contactame:</h2>
                </subtitulo>

            <form action="">
                <div>
                    <blockquote><label for="asunto">Asunto: </label></blockquote>
                    <input type="text" placeholder="Ingrese el asunto" id="asunto"/>
                </div>
                <div>
                    <blockquote><label for="correo">Correo: </label></blockquote>
                    <input type="email" placeholder="Ingrese su correo personal" id="correo"/>
                </div>
                <div>
                    <blockquote><label for="mensaje">Mensaje: </label></blockquote>
                    <textarea id="mensaje" cols="30" rows="10">Ingrese el contenido de su mensaje</textarea>
                </div>

                <button type="submit">Enviar</button>

            </form>

        </section>
      </div>
  );
}

export default App;
