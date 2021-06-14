import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

function App() {
  const [coins, setCoins] = useState([]);
  const [num, setNum] = useState();
  const [coin, setCoin] = useState({});

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/list`)
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setNum(json.length);
      });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(function () {
      fetch(`https://api.coingecko.com/api/v3/coins/list`)
        .then((res) => res.json())
        .then((json) => {
          if (json.length > num) {
            json.forEach((el) => {
              let val = coins
                .map((coin) => {
                  return coin.id;
                })
                .indexOf(el.id);
              if (val === -1) {
                setCoin(el);
                setCoins(json);
                setNum(json.length);
                // fetchCoinData(el.id)
                sendAlert(el);
                console.log(el);
              }
            });
          }
          console.log(json.length);
        });
    }, 60000);

    return () => clearInterval(intervalId);
  }, [coins, num]);

  const sendAlert = (obj) => {

    fetch(`https://api.coingecko.com/api/v3/coins/${obj.id}`)
    .then(res => res.json())
    .then(json => {
      let contractName = json.asset_platform_id && json.asset_platform_id
      let str = `Name : ${json.name} || Platform : ${contractName} || Contract : ${json.platforms[contractName]}`
      obj.str = str
      obj.ccList = "internap627@gmail.com, Thebrightbrains1@gmail.com, Bob123bill1231@gmail.com, cryptoguru11@hotmail.com, Abdulhakeem15th@gmail.com, ishy_osman@hotmail.com, Moaweys1010@gmail.com, Abubakara1996@gmail.com, Jeilani90@gmail.com, zcrypto03@gmail.com, hrchub1@gmail.com, Cheekymarketuk@gmail.com, hillflos00@gmail.com, moonshooterz1988@gmail.com"

      emailjs
      .send(
        "service_pdhtum6",
        "template_7k3gm5e",
        obj,
        "user_wDbnaIvWCLYgVPps0l1dl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    })


  };

  // const fetchCoinData = (id) => {
  //   fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       sendAlert(json);
  //     });
  // };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
