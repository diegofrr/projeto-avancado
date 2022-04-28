const PLANETS_URL = 'https://swapi.dev/api/planets/?page=2';

let planets = fetch(PLANETS_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        let frozenPlanets = data.results.filter(p => (p.climate.includes('frozen')));
        console.log('Planetas com clima "frozen":', frozenPlanets);
        let planetsMap = data.results.map((planet, index) => ({
            index: index,
            name: planet.name,
            isTemperate: planet.climate.includes('temperate')
        }));

        let temperatePlanets = planetsMap.reduce((total, planet) => {
            if (planet.isTemperate) { total++ }
            return total;
        }, 0)
        console.log(`Existem ${temperatePlanets} planetas com o clima "temperate".`)
    })
    .catch(error => console.log(error))
    .finally(
        // caso necessite executar
        // algo quando o carregamento
        // for finalizado
    )

async function getPeople(requestURL) {
    try {
        let response = await
        fetch(requestURL);
        let people = await response.json();
        console.log('Lista de pessoas:', people.results);
        let peopleWithGreenSkinColor =
            people.results.filter(p => (p.skin_color === 'green'));
        console.log('Pessoas com cor de pele verde: ', peopleWithGreenSkinColor)

        // People with mass more than 100
        let peopleWMassMT100 = people.results.filter(p => (p.mass > 100));
        console.log('Pessoas com massa superior a 100:', peopleWMassMT100);


        // People with height more than or equal to 180
        let peopleWHeightMTorEqual180 = people.results.reduce((total, people) => {
            if (people.height >= 180) { total++ }
            return total;
        }, 0)
        console.log('Quantidade de pessoas com altura superior ou igual a 180:', peopleWHeightMTorEqual180);

        let allPeopleName = people.results.map((people) => (people.name));
        console.log('Nome de todos os personagens:', allPeopleName)

    } catch (error) {
        console.log(error);
    }
}

getPeople('https://swapi.dev/api/people/?page=2');