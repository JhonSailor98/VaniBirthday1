var Frases2=new Array()
            Frases2[0] = "Cuando dudes de ti recuerda todo lo que has logrado hasta ahora, sigue adelante y la vida lo conpensará​";
            Frases2[1] = "Recuerda tus objetivos, agarralos fuerte y lucha por ellos";
            Frases2[2] = "Tu familia y tus amigos confian en ti no lo olvides";
            Frases2[3] = "Yo confio en que lograrás todo lo que te propongas, y aquí estaré para recordartelo";
            Frases2[4] = "​Dudar no es del todo malo, puedes encontrar algo mejor en el camino, solo no te lastimes en el proceso";
            Frases2[5] = "Eres fuerte, inteligente y valiente";
            Frases2[6] = "​El exito no se mide solo por un fracaso, si no como reaccionas ante ese fracaso, sigue adelante y aprende del error";
            Frases2[7] = "Los desafíos de la vida no están para paralizarte; están para ayudarte a descubrir quién eres​";
            Frases2[8] = "Nunca permitas que nadie te diga que no puedes hacer algo.";
            Frases2[9] = "Siempre que ha habido momentos difíciles, has salido adelante.";
            Frases2[10] = "Sueña que puedes, y podrás.";
            Frases2[11] = "Lucha por ti mismo, por lo que eres, por quién eres.";
            Frases2[12] = "Siempre parece imposible hasta que se hace.​";
            var Q2 = Frases2.length;

            var numAleatorio2=Math.round(Math.random()*(Q2-1));

            function mostrarFrases2() {
            document.write(Frases2[numAleatorio2]);}