           
            var Frases5=new Array()
            Frases5[0] = "La comunicación es importante, externa lo que sientes";
            Frases5[1] = "Cuando te sientas molesta aquí estaré, puedes sacar lo que tengas dentro que te escucharé";
            Frases5[2] = "Hay tres cosas en la vida que una vez que pasan ya no regresan; el tiempo, las palabras y las oportunidades";
            Frases5[3] = "Si quieres ser feliz en esta vida tendrás que aprender a amar, a perdonar y a olvidar";
            Frases5[4] = "Busca algo positivo en cada día, incluso cuando algunos días tengas que mirar un poco más​";
            Frases5[5] = "A lo mejor en este momento estés molesta, pero el sentimiento es temporal";
            Frases5[6] = "​Es mejor cuidar a una persona importante para nosotros, que pensar en nuestro coraje, el coraje no es para siempre";
            Frases5[7] = "Escucha esta canción :) https://www.youtube.com/watch?v=RJeI7pheBVU"
            Frases5[8] = "Escucha esta canción :) https://www.youtube.com/watch?v=54W8kktFE_o"
            var Q5 = Frases5.length;

            var numAleatorio5=Math.round(Math.random()*(Q5-1));

            function mostrarFrases5() {
            document.write(Frases5[numAleatorio5]);}
