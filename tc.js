<script>
    var dictionary = [];



    function dict(card) {

        var s = document.getElementById("dictio").innerHTML;

        var res = s.split("\n");



        for (var i = 0; i < res.length; i++) {

            b = res[i].split(" - ");

            var out = "";



            if (undefined == b[1]) continue;

            if (undefined == b[0]) return card;



            if (b[0].trim() == card.trim()) return b[1];

        }



        return card;

    }



    function traduce() {

        document.getElementById("result").innerHTML = "";



        // gemas 0 '\t0\t'

        var s = document.getElementById("cards").value;

        var s = s.replace(/\t\d+\t/g, ", ");



        var res = s.split(", ");

        for (var i = 0; i < res.length - 1; i++) {

            c = res[i].split(" x ");

            tradu = dict(c[1]);



            document.getElementById("result").innerHTML += c[0] + "x " + tradu;



            // luis req format commas on one line

            if (document.getElementById('formatoComas').checked)

                document.getElementById("result").innerHTML += ", ";

            else

                document.getElementById("result").innerHTML += "<br>";



        }



        oro = document.getElementById("cards").value.split(/\t\d+\t/);

        document.getElementById("result").innerHTML += oro[1] + " oros";



    }
</script>



<form>



    <textarea id="cards" rows="10" cols="70">

2 x Goblin Hut, 17 x Archers, 31 x Spear Goblins, 39 x Bomber, 6 x Fireball, 15 x Three Musketeers, 4 x Mirror 0 1100

</textarea>



    <br>



    <button type="button" onclick="traduce()">Traducir!</button>

    <input id="formatoComas" type="checkbox" value="0">Formato con comas



</form>



<div id="result"></div>



<hr>



<pre>

<div id="dictio">Archers - Arqueras

Arrows - Flechas

Baby Dragon - Bebé dragón

Balloon - Globo bombástico

Bandit - Bandida {LEGENDARIA}

Barbarian Hut - Choza de bárbaros

Barbarians - Bárbaros

Bats - Murciélagos

Battle Ram - Ariete de batalla

Bomb Tower - Torre bombardera

Bomber - Bombardero

Bowler - Lanzarrocas

Cannon - Cañón

Cannon Cart - Cañón con ruedas

Clone - Clon

Dark Prince - Príncipe oscuro

Dart Goblin - Lanzadardos

Electric Wizard - Mago eléctrico {LEGENDARIA}

Elite Barbarians - Bárbaros de élite

Elixir Collector - Recolector de elixir

Executioner - Verdugo

Fireball - Bola de fuego

Fire Spirits - Espíritus de fuego

Freeze - Hielo

Furnace - Horno

Giant - Gigante

Giant Skeleton - Esqueleto Gigante

Goblins - Duendes

Goblin Barrel - Barril de duendes

Goblin Gang - Pandilla de duendes

Goblin Hut - Choza de duendes

Golem - Gólem

Graveyard - Cementerio {LEGENDARIA}

Guards - Guardias

Hog Rider - Montapuercos

Heal - Curación

Ice Golem - Gólem de hielo

Ice Spirit - Espíritu de hielo

Ice Wizard - Mago de hielo {LEGENDARIA}

Inferno Dragon - Dragón infernal {LEGENDARIA}

Inferno Tower - Torre infernal

Knight - Caballero

Lava Hound - Sabueso de lava {LEGENDARIA}

Lightning - Rayo

Lumberjack - Leñador {LEGENDARIA}

Mega Minion - Megaesbirro

Mega Knight - Mega Caballero {LEGENDARIA}

Miner - Minero {LEGENDARIA}

Mini P.E.K.K.A. - Mini P.E.K.K.A.

Minions - Esbirros

Minion Horde - Horda de esbirros

Mirror - Espejo

Mortar - Mortero

Musketeer - Mosquetera

Night Witch - Bruja nocturna {LEGENDARIA}

P.E.K.K.A - P.E.K.K.A

Prince - Príncipe

Princess - Princesa {LEGENDARIA}

Poison - Veneno

Rage - Furia

Rocket - Cohete

Royal Giant - Gigante noble

Skeleton Army - Ejército de esqueletos

Skeletons - Esqueletos

Sparky - Chispitas {SPARKY}

Spear Goblins - Duendes con lanza

Tesla - Torre Tesla

The Log - Tronco {LEGENDARIA}

Three Musketeers - Trío de mosqueteras

Tombstone - Lápida

Tornado - Tornado

Valkyrie - Valquiria

Witch - Bruja

Wizard - Mago

X-Bow - Ballesta

Zap - Descarga

Mega Knight - Mega Caballero {LEGENDARIA}

Skeleton Barrel - Barril de esqueletos

</div>

</pre>