//Get a single fact for a single number
async function getFact(){
    let favNum = prompt('Give me a number and I will give you a fact.')
    let fact = await axios.get(`http://numbersapi.com/${favNum}/math`)
        document.body.appendChild(par);
        par.innerHTML = fact.data;
    };

//Getting 3 number facts. The favNum and 2 Above the FavNum
async function threeDifNumFacts(){
    let favNum = prompt('Give me a number, I will give you a fact about that number and 2 above that number.')

    let fact1Prom = axios.get(`http://numbersapi.com/${favNum ++}/math`)
    let fact2Prom = axios.get(`http://numbersapi.com/${(favNum ++)}/math`)
    let fact3Prom = axios.get(`http://numbersapi.com/${(favNum)}/math`)

    let fact1 = await fact1Prom
    let fact2 = await fact2Prom
    let fact3 = await fact3Prom

    let par =  document.createElement('p');
    document.body.appendChild(par);
    par.innerHTML = fact1.data;

    let par1 =  document.createElement('p');
    document.body.appendChild(par1);
    par1.innerHTML = fact2.data;
    
    let par2 =  document.createElement('p');
    document.body.appendChild(par2);
    par2.innerHTML = fact3.data;
    };

function handleError(err) {
    console.log('Ohhhh nooo');
    console.log(err);
}
//4 facts on my favorite number
async function fourFacts() {
    let favNum = prompt('Give me a number and I will give you 4 facts related to that number.')
    let url = `http://numbersapi.com/${favNum}/math`

    let fact1Prom = axios.get(url).catch(handleError)
    let fact2Prom = axios.get(url)
    let fact3Prom = axios.get(url)
    let fact4Prom = axios.get(url)

    let fact1 = await fact1Prom
    let fact2 = await fact2Prom
    let fact3 = await fact3Prom
    let fact4 = await fact4Prom

    let par1 =  document.createElement('p');
    document.body.appendChild(par1);
    par1.innerHTML = fact1.data;

    let par2 =  document.createElement('p');
    document.body.appendChild(par2);
    par2.innerHTML = fact2.data;

    let par3 =  document.createElement('p');
    document.body.appendChild(par3);
    par3.innerHTML = fact3.data;

    let par4 =  document.createElement('p');
    document.body.appendChild(par4);
    par4.innerHTML = fact4.data;
};
