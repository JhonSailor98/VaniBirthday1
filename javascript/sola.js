           
            var Frases3=new Array()
            Frases3[0] = "Recuerda que tienes guarado en whatsapp a alguien que le pusiste mi preciosote, siempre podrás hablar con él";
            Frases3[1] = "Tienes un contacto en instagram (osea yo), y también puedes hablarme por esta red social";
            Frases3[2] = "A veces sentirse solo te hace cuestionarte quien está contigo y aprendes a conocerte a ti misma";
            Frases3[3] = "Ciertas personas no están listas para concoer a otras.";
            Frases3[4] = "​Siempre tendrás a familia y amigos que te van a apoyar, aunque no siempre estén cerca de ti";
            Frases3[5] = "Mandame mensaje :) estaré para ti y te escucharé";
            var Q3 = Frases3.length;

            var numAleatorio3=Math.round(Math.random()*(Q3-1));

            function mostrarFrases3() {
            document.write(Frases3[numAleatorio3]);}
