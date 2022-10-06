import React from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Select, Typography } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  NumberOutlined,
  ThunderboltFilled,
  ThunderboltOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import LineChart from './LineChart'

//正式環境接入api
// import { useGetCoinDetailsQuery } from '../services/cryptoApi'
// import { useGetCoinHistoryQuery } from "../services/cryptoApi";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetail = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = React.useState("7d");
  // 測試用接回來的物件
  const data = { status: "success", data: { coin: { uuid: "Qwsogvtv82FCd", symbol: "BTC", name: "BitCoin", description: '<p>Bitcoin is the first digital currency that allows users to send and receive money, without the interference of a central bank or government. Instead, a network of thousands of peers is controlling the transactions; a decentralized system.</p>\n\n<h3>Why does bitcoin have value?</h3>\n\n<p>Bitcoin&rsquo;s useful qualities (decentralized, borderless, secure) aren&rsquo;t the only reason the coin is worth so much. Due to its scarcity (and it&rsquo;s hard to produce), Bitcoin is often nicknamed &lsquo;Digital Gold&rsquo;, in reference to &lsquo;classic&rsquo; physical gold. Like gold, Bitcoin also has a finite supply of coins available; there will only ever be 21 million bitcoin. And now you know why the creation of new bitcoins is also called mining.</p>\n\n<h3>No inflation in bitcoin</h3>\n\n<p>Bitcoin was invented in response to a few concerns the inventor(s) had, such as inflation. Its supply is limited, so one cannot just devalue the currency by printing more, as governments often do with fiat currencies (USD, EUR, etc.).</p>\n\n<p>As people look for alternative places to keep their money rather than losing value in a negative interest rate account, Bitcoin becomes more appealing. Big global companies, such as Tesla and MicroStrategy already purchased serious amounts of Bitcoin. And it&#39;s only a matter of time that other companies will follow. This also ensures that the value remains or continues to increase.</p>\n\n<h3>Who built Bitcoin</h3>\n\n<p>In 2008, Bitcoin was invented by an anonymous person or group named Satoshi Nakamoto. In 2009, Bitcoin was released as open-source software. Nakamoto&rsquo;s real identity is still unknown, although there are many theories about who it might be. Decentralization is one of Bitcoin&rsquo;s most important principles, and that&rsquo;s why this anonymity is perfectly in line.</p>\n\n<h3>The technology of Bitcoin</h3>\n\n<p>The Bitcoin blockchain is a database, the so-called &lsquo;ledger&rsquo;, that consists of bitcoin transaction records. For new transactions to be added to the ledger, the nodes must agree that the transaction is real and valid. The blockchain is public and contains records of all the transactions taking place.</p>\n\n<h3>How to buy bitcoin?</h3>\n\n<p>Continue reading <a href="https://coinranking.com/blog/how-to-buy-your-first-bitcoin/" rel="nofollow noopener" target="_blank">this blog article</a> on how to buy your first bitcoin.</p>\n', color: "#f7931A", iconUrl: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg", websiteUrl: "https://bitcoin.org", links: [ { name: "bitcoin.org", type: "website", url: "https://bitcoin.org" }, { name: "bitcoinmagazine.com", url: "https://bitcoinmagazine.com/", type: "website", }, { name: "bitcointalk.org", url: "https://bitcointalk.org/", type: "bitcointalk", }, { name: "blockchain.com", url: "https://www.blockchain.com/explorer", type: "explorer", }, { name: "bitcoin/bitcoin", url: "https://github.com/bitcoin/bitcoin", type: "github", }, { name: "r/bitcoin", url: "https://www.reddit.com/r/bitcoin/", type: "reddit", }, { name: "Bitcoin_Magazine", url: "https://t.me/Bitcoin_Magazine", type: "telegram", }, { name: "bitcoin", url: "https://t.me/bitcoin", type: "telegram" }, { name: "Bitcoin Whitepaper", url: "https://bitcoin.org/bitcoin.pdf", type: "whitepaper", }, ], supply: { confirmed: true, supplyAt: 1664855100, max: "21000000", total: "19168575", circulating: "19168575", }, numberOfMarkets: 5101, numberOfExchanges: 154, "24hVolume": "1370869.2048852071", marketCap: "19155286.472421985", fullyDilutedMarketCap: "20985441.84538047", price: "0.9993067545411598", btcPrice: "1", priceAt: 1664855040, change: "-0.07", rank: 1, sparkline: [ "0.9997643029184592", "1.0001675705419553", "1.000097098645401", "1.0000443128723158", "0.9999793581481361", "0.9998058578838807", "1.000175531800722", "1.0001040351882418", "1.0000089539817765", "1.0000447061545692", "1.0007416804332347", "1.0000563719658202", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", ], allTimeHigh: { price: "68763.41083248306", timestamp: 1636502400 }, coinrankingUrl: "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc", tier: 1, lowVolume: false, listedAt: 1330214400, }, }, };
  const coinHistory = {"status":"success","data":{"change":"-0.01","history":[{"price":"593.20434501072998998858","timestamp":1664957100},{"price":"592.84626991167701482396","timestamp":1664956800},{"price":"591.97220441719997694707","timestamp":1664956500},{"price":"593.01028495165400607348","timestamp":1664956200},{"price":"592.8636525381163032422","timestamp":1664955900},{"price":"592.66722626107594217545","timestamp":1664955600},{"price":"592.58347376661102198124","timestamp":1664955300},{"price":"592.99321642381597720361","timestamp":1664955000},{"price":"592.86613566821606965847","timestamp":1664954700},{"price":"592.20361338798662577702","timestamp":1664954400},{"price":"591.72448027175195926302","timestamp":1664954100},{"price":"592.21196216759715584793","timestamp":1664953800},{"price":"592.19989528339818130016","timestamp":1664953500},{"price":"592.53776576193423366934","timestamp":1664953200},{"price":"591.9393496184813069712","timestamp":1664952900},{"price":"590.70944012809307174115","timestamp":1664952600},{"price":"590.80295965306501596773","timestamp":1664952300},{"price":"590.93993460129072837725","timestamp":1664952000},{"price":"591.97386085406357302319","timestamp":1664951700},{"price":"591.65631849263687006412","timestamp":1664951400},{"price":"591.88430496264393437463","timestamp":1664951100},{"price":"591.99869575881751018486","timestamp":1664950800},{"price":"591.82696401238669716252","timestamp":1664950500},{"price":"592.30774471947934017106","timestamp":1664950200},{"price":"592.53201634018454375444","timestamp":1664949900},{"price":"592.47194093889493525058","timestamp":1664949600},{"price":"592.3789281356080109442","timestamp":1664949300},{"price":"592.53984751153208925779","timestamp":1664949000},{"price":"592.75294085277061601963","timestamp":1664948700},{"price":"592.9084772009642508642","timestamp":1664948400},{"price":"593.0460589553464673203","timestamp":1664948100},{"price":"592.33416083098816705355","timestamp":1664947800},{"price":"592.69403338769612894008","timestamp":1664947500},{"price":"592.45232544605199430862","timestamp":1664947200},{"price":"592.3571788808343510806","timestamp":1664946900},{"price":"591.73574725010432895695","timestamp":1664946600},{"price":"592.24978913070846440475","timestamp":1664946300},{"price":"592.60139626081053642984","timestamp":1664946000},{"price":"592.60807069227646983957","timestamp":1664945700},{"price":"592.71484425823140512574","timestamp":1664945400},{"price":"592.53280297650179135228","timestamp":1664945100},{"price":"591.71036132889839538164","timestamp":1664944800},{"price":"591.34289556483602718719","timestamp":1664944500},{"price":"591.46435890306562828365","timestamp":1664944200},{"price":"592.34859751364009148362","timestamp":1664943900},{"price":"592.4012204710316916745","timestamp":1664943600},{"price":"591.96975703985441442024","timestamp":1664943300},{"price":"592.73742092861487353295","timestamp":1664943000},{"price":"592.91742945155765114319","timestamp":1664942700},{"price":"592.43323204595036868815","timestamp":1664942400},{"price":"592.09891300010653931873","timestamp":1664942100},{"price":"591.93076953433739294572","timestamp":1664941800},{"price":"592.21900537496916455897","timestamp":1664941500},{"price":"592.46815986013025665818","timestamp":1664941200},{"price":"591.06233639964194610748","timestamp":1664940900},{"price":"590.80769341506251674295","timestamp":1664940600},{"price":"590.95954056881602995958","timestamp":1664940300},{"price":"591.06241132715965995088","timestamp":1664940000},{"price":"591.18964513460615381991","timestamp":1664939700},{"price":"591.40842958597211608329","timestamp":1664939400},{"price":"590.68302303466892082751","timestamp":1664939100},{"price":"591.20871363656195528023","timestamp":1664938800},{"price":"591.71044489704510327614","timestamp":1664938500},{"price":"591.92033609958545748261","timestamp":1664938200},{"price":"590.98572855101510445855","timestamp":1664937900},{"price":"590.48419211127923530302","timestamp":1664937600},{"price":"590.55375179056418017646","timestamp":1664937300},{"price":"589.14714707426173942088","timestamp":1664937000},{"price":"589.48682944586416209758","timestamp":1664936700},{"price":"590.1118893674286070088","timestamp":1664936400},{"price":"591.72014925876401738855","timestamp":1664936100},{"price":"592.54382736146249684241","timestamp":1664935800},{"price":"593.62838630849185970419","timestamp":1664935500},{"price":"594.41075535745117892418","timestamp":1664935200},{"price":"594.88675707411313858125","timestamp":1664934900},{"price":"595.71545003973503676197","timestamp":1664934600},{"price":"596.21667511935656966068","timestamp":1664934300},{"price":"595.63773348231192581368","timestamp":1664934000},{"price":"595.09432154890418235715","timestamp":1664933700},{"price":"595.10544635135114150954","timestamp":1664933400},{"price":"594.94208964579026980893","timestamp":1664933100},{"price":"594.78371659119207655913","timestamp":1664932800},{"price":"594.69462784667726089275","timestamp":1664932500},{"price":"594.85478519848154689725","timestamp":1664932200},{"price":"594.74541467287532593215","timestamp":1664931900},{"price":"594.09627936883051893621","timestamp":1664931600},{"price":"594.71713356092860943366","timestamp":1664931300},{"price":"594.79145591593614617645","timestamp":1664931000},{"price":"595.10937775796836314422","timestamp":1664930700},{"price":"594.42499667049796306082","timestamp":1664930400},{"price":"593.98464794208332403075","timestamp":1664930100},{"price":"593.80342345956558760232","timestamp":1664929800},{"price":"593.53902827314471362145","timestamp":1664929500},{"price":"594.29884303017727924707","timestamp":1664929200},{"price":"594.28295739408799031543","timestamp":1664928900},{"price":"595.12578469749524405483","timestamp":1664928600},{"price":"595.91279175545516475765","timestamp":1664928300},{"price":"596.39619765756754654526","timestamp":1664928000},{"price":"595.89699972718709473618","timestamp":1664927700},{"price":"596.15159140486690261328","timestamp":1664927400},{"price":"596.27792509724325761072","timestamp":1664927100},{"price":"596.61039114652217481233","timestamp":1664926800},{"price":"596.98971855811671274132","timestamp":1664926500},{"price":"596.95369134439614895194","timestamp":1664926200},{"price":"597.23775085468319096182","timestamp":1664925900},{"price":"597.55844160412549457623","timestamp":1664925600},{"price":"597.68622396600332623775","timestamp":1664925300},{"price":"597.76538071584371407257","timestamp":1664925000},{"price":"597.30071283506416356111","timestamp":1664924700},{"price":"596.6879171584660067322","timestamp":1664924400},{"price":"596.3416991837105623939","timestamp":1664924100},{"price":"595.37574521818780365092","timestamp":1664923800},{"price":"595.06898411386763284247","timestamp":1664923500},{"price":"594.81202472295431801808","timestamp":1664923200},{"price":"595.14986462598050156071","timestamp":1664922900},{"price":"594.95018460099635845832","timestamp":1664922600},{"price":"595.23640002252992945232","timestamp":1664922300},{"price":"595.08484359998294645017","timestamp":1664922000},{"price":"595.88624980848488079816","timestamp":1664921700},{"price":"595.93341661738272506321","timestamp":1664921400},{"price":"596.01581754270585536556","timestamp":1664921100},{"price":"596.70111264992876588177","timestamp":1664920800},{"price":"596.21625499225516719773","timestamp":1664920500},{"price":"595.74390199330532640852","timestamp":1664920200},{"price":"595.61292085232619725388","timestamp":1664919900},{"price":"595.55087806985262988597","timestamp":1664919600},{"price":"596.4321748159723774036","timestamp":1664919300},{"price":"595.74443424911650676079","timestamp":1664919000},{"price":"595.0376836759008458608","timestamp":1664918700},{"price":"594.16195055764091029141","timestamp":1664918400},{"price":"593.84793513653491578174","timestamp":1664918100},{"price":"594.05483211722804284837","timestamp":1664917800},{"price":"595.15854547898423663013","timestamp":1664917500},{"price":"594.72186976630729419273","timestamp":1664917200},{"price":"594.08291925888281038579","timestamp":1664916900},{"price":"593.37806033442850634554","timestamp":1664916600},{"price":"593.45452578722998997611","timestamp":1664916300},{"price":"593.62538728019709888568","timestamp":1664916000},{"price":"593.47124396592107617184","timestamp":1664915700},{"price":"593.59999935987710880811","timestamp":1664915400},{"price":"592.6121116656622603885","timestamp":1664915100},{"price":"592.4022382289809899218","timestamp":1664914800},{"price":"592.13736186776848367143","timestamp":1664914500},{"price":"592.28078213881992004604","timestamp":1664914200},{"price":"592.14092353236370768625","timestamp":1664913900},{"price":"592.55182173660247661243","timestamp":1664913600},{"price":"592.00511112034990118696","timestamp":1664913300},{"price":"592.26805445614561887448","timestamp":1664913000},{"price":"592.07093860868180687127","timestamp":1664912700},{"price":"592.08389424898379443792","timestamp":1664912400},{"price":"591.50255196437711244899","timestamp":1664912100},{"price":"591.66376271313252715757","timestamp":1664911800},{"price":"591.67082387038032980133","timestamp":1664911500},{"price":"591.92912721436938341815","timestamp":1664911200},{"price":"591.79516976363925348463","timestamp":1664910900},{"price":"590.01578941986285173452","timestamp":1664910600},{"price":"589.66971069021613539337","timestamp":1664910300},{"price":"589.29639739679975566538","timestamp":1664910000},{"price":"589.32837575672420826106","timestamp":1664909700},{"price":"589.22830189171454676098","timestamp":1664909400},{"price":"590.12900789589327098592","timestamp":1664909100},{"price":"589.96967644394745224001","timestamp":1664908800},{"price":"589.80914780855702442089","timestamp":1664908500},{"price":"589.42920074196106659441","timestamp":1664908200},{"price":"589.38650464566497538219","timestamp":1664907900},{"price":"588.84857987598827081136","timestamp":1664907600},{"price":"589.20862498004517405803","timestamp":1664907300},{"price":"588.84453162399582267459","timestamp":1664907000},{"price":"589.06472068917577212173","timestamp":1664906700},{"price":"588.68056314673058774324","timestamp":1664906400},{"price":"589.57568887117259124792","timestamp":1664906100},{"price":"589.65600300374661677947","timestamp":1664905800},{"price":"589.51141335293998612138","timestamp":1664905500},{"price":"589.3249575038422431851","timestamp":1664905200},{"price":"588.41492383045059707672","timestamp":1664904900},{"price":"588.04656923552973524447","timestamp":1664904600},{"price":"588.0146122293833337304","timestamp":1664904300},{"price":"588.07608640752829210681","timestamp":1664904000},{"price":"587.73457631619870527068","timestamp":1664903700},{"price":"587.41323010457940411168","timestamp":1664903400},{"price":"586.79908859856711779347","timestamp":1664903100},{"price":"586.7025793550457537112","timestamp":1664902800},{"price":"586.40834814051072447178","timestamp":1664902500},{"price":"586.92590028841432295388","timestamp":1664902200},{"price":"587.45079665181303219187","timestamp":1664901900},{"price":"587.09667283968464424475","timestamp":1664901600},{"price":"586.98627144443193443972","timestamp":1664901300},{"price":"587.20182251045128738684","timestamp":1664901000},{"price":"587.86934618234788853399","timestamp":1664900700},{"price":"588.39389250309549088218","timestamp":1664900400},{"price":"587.80104705891181514939","timestamp":1664900100},{"price":"586.5042508503046641794","timestamp":1664899800},{"price":"587.22039105648666190609","timestamp":1664899500},{"price":"588.01721410470643197868","timestamp":1664899200},{"price":"587.66277176208679284317","timestamp":1664898900},{"price":"586.98953266538808929335","timestamp":1664898600},{"price":"587.31602237341270425671","timestamp":1664898300},{"price":"586.77488339802223674666","timestamp":1664898000},{"price":"586.52114663457121905349","timestamp":1664897700},{"price":"586.1268143531542221755","timestamp":1664897400},{"price":"586.28987445875679506523","timestamp":1664897100},{"price":"585.87827867206761225435","timestamp":1664896800},{"price":"587.31086386633947909967","timestamp":1664896500},{"price":"588.82303714365498558304","timestamp":1664896200},{"price":"587.12126345447303912452","timestamp":1664895900},{"price":"586.1354685399227757953","timestamp":1664895600},{"price":"586.8876860700147090815","timestamp":1664895300},{"price":"588.80267546430993143926","timestamp":1664895000},{"price":"588.11880861765251071947","timestamp":1664894700},{"price":"587.25614048109145793065","timestamp":1664894400},{"price":"587.88870829417558533274","timestamp":1664894100},{"price":"586.57065717850384212995","timestamp":1664893800},{"price":"586.05529241277267819961","timestamp":1664893500},{"price":"587.25130241024992312886","timestamp":1664893200},{"price":"588.2541382029828334195","timestamp":1664892900},{"price":"588.51946486974610858627","timestamp":1664892600},{"price":"588.03737515121015291855","timestamp":1664892300},{"price":"589.01465840992057361004","timestamp":1664892000},{"price":"590.35228169398138775265","timestamp":1664891700},{"price":"590.31240607753775858324","timestamp":1664891400},{"price":"590.39974781709558214961","timestamp":1664891100},{"price":"591.07793377091301866411","timestamp":1664890800},{"price":"590.62300529849371728821","timestamp":1664890500},{"price":"591.35211944157547363436","timestamp":1664890200},{"price":"591.66759430598273019259","timestamp":1664889900},{"price":"591.47767840232535829203","timestamp":1664889600},{"price":"592.49038160138403227933","timestamp":1664889300},{"price":"592.12110509526569516938","timestamp":1664889000},{"price":"592.39114380871437961053","timestamp":1664888700},{"price":"591.76311591670863662053","timestamp":1664888400},{"price":"591.96949552145894319497","timestamp":1664888100},{"price":"592.58843341170371094722","timestamp":1664887800},{"price":"592.85551222204116130261","timestamp":1664887500},{"price":"593.18116420063227208447","timestamp":1664887200},{"price":"592.87775912791567293163","timestamp":1664886900},{"price":"592.70953428377157907067","timestamp":1664886600},{"price":"593.32631724103266104084","timestamp":1664886300},{"price":"593.4475100692582470218","timestamp":1664886000},{"price":"592.7256388988666956135","timestamp":1664885700},{"price":"591.54861228172087813134","timestamp":1664885400},{"price":"591.67142220133389212633","timestamp":1664885100},{"price":"591.9802674606389987608","timestamp":1664884800},{"price":"592.80450255016863243603","timestamp":1664884500},{"price":"593.58818112074369728553","timestamp":1664884200},{"price":"594.10658954040693276895","timestamp":1664883900},{"price":"593.19404018976414146055","timestamp":1664883600},{"price":"593.39559758345456449827","timestamp":1664883300},{"price":"593.83251465574826587795","timestamp":1664883000},{"price":"593.89400824789025359234","timestamp":1664882700},{"price":"593.81654793588103641335","timestamp":1664882400},{"price":"593.42346153385659880367","timestamp":1664882100},{"price":"593.58797909267376871716","timestamp":1664881800},{"price":"593.71337539655305679791","timestamp":1664881500},{"price":"593.5597809722157575574","timestamp":1664881200},{"price":"593.62199459028242230755","timestamp":1664880900},{"price":"594.27110954542419540931","timestamp":1664880600},{"price":"594.08832473277681559715","timestamp":1664880300},{"price":"594.06213845670189358684","timestamp":1664880000},{"price":"594.0645643385405918824","timestamp":1664879700},{"price":"594.83919511879718075513","timestamp":1664879400},{"price":"594.38286430092722168055","timestamp":1664879100},{"price":"593.82925866640060477759","timestamp":1664878800},{"price":"593.76241382569130583421","timestamp":1664878500},{"price":"594.53760245944524907057","timestamp":1664878200},{"price":"594.80301870839496784249","timestamp":1664877900},{"price":"594.28847935456434714415","timestamp":1664877600},{"price":"593.41630805190813880517","timestamp":1664877300},{"price":"594.60650201516729712431","timestamp":1664877000},{"price":"594.64994506072548915648","timestamp":1664876700},{"price":"595.0834799309562314954","timestamp":1664876400},{"price":"593.95484907152247574045","timestamp":1664876100},{"price":"593.77008941197799147258","timestamp":1664875800},{"price":"592.96622075426677563237","timestamp":1664875500},{"price":"592.54505125442597977857","timestamp":1664875200},{"price":"593.75886621078890285523","timestamp":1664874900},{"price":"594.00350883886611631573","timestamp":1664874600},{"price":"594.10273592241883518896","timestamp":1664874300},{"price":"593.24479778808656709296","timestamp":1664874000},{"price":"593.87426556909076064304","timestamp":1664873700},{"price":"594.53536625733779142496","timestamp":1664873400},{"price":"595.62816955167465604683","timestamp":1664873100},{"price":"595.33346120223893150292","timestamp":1664872800},{"price":"594.98530457514196251724","timestamp":1664872500},{"price":"595.08254942910356814203","timestamp":1664872200},{"price":"594.03851992702250536706","timestamp":1664871900},{"price":"595.06746754791007785836","timestamp":1664871600},{"price":"594.70802310817888414418","timestamp":1664871300},{"price":"592.88140428869383457564","timestamp":1664871000}]}}
  //正式環境接入的api
  // const {data, isFetching} = useGetCoinDetailsQuery(coinId, timePeriod)
  // const { data: coinHistory, isFetching } = useGetCoinHistoryQuery(coinId, timePeriod)
  // if (isFetching) return "loading"
  const time = ["3h", "24h", "7d", "30d", "1m", "1y", "3y", "5y"];
  const cryptoDetails = data?.data?.coin;
  console.log(JSON.stringify(coinHistory))


  // console.log(JSON.stringify(data))
  const stats = [
    //詳細資訊：1:37:19 45
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails.rank, icon: <NumberOutlined /> },
    {
      title: "24h volume",
      value: `$ ${
        cryptoDetails["24hVolume"] && millify(cryptoDetails["24hVolume"])
      }`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "MarketCap",
      value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-height(daily avg)",
      value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails.numberOfMarkets, icon: <FundOutlined/> },
    { title: 'Number Of Exchange', value: cryptoDetails.numberOfExchanges, icon: <MoneyCollectOutlined/> },
    { title: 'Approved Supply', value: cryptoDetails.supply.confirmed ? <CheckCircleOutlined/> : <StopOutlined/>, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: millify(cryptoDetails.supply.total), icon: <ExclamationCircleOutlined/> },
    { title: 'Circulating Supply', value: millify(cryptoDetails.supply.circulating), icon: <ExclamationCircleOutlined /> }
  ]

  return (
    <div>
      {/* CryptoDetail{coinId} */}
      <Col className="coin-detail-container">
        <Col className="coin-heading-container">
          <Title level={2} className="coin-name" style={{ color: "#1890ff" }}>
            {cryptoDetails?.name} {cryptoDetails?.slug} price
          </Title>
          <p>
            {cryptoDetails?.name} live price in US dollars View value
            statistics, market cap and supply.
          </p>
          <hr />
        </Col>
        <Select
          defaultValue="7d"
          className="select-timePeriod"
          placeholder="select time period"
          onChange={(value) => setTimePeriod(value)}
        >
          {time.map((option) => (
            <Option value={option}>{option}</Option>
          ))}
        </Select>
        <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails.price)} coinName={cryptoDetails.name} />
        <Col className="stats-container">
          <Col className="coin-value-statistics">
            <Col className="coin-value-statistics-heading">
              <Title level={3} className="coin-details-heading">
                {cryptoDetails.name} Value Statistics
              </Title>
              <p>An overview showing the stats of {cryptoDetails.name}</p>
            </Col>
            {stats.map(({ icon, title, value }) => (
              <Col className="coin-stats">
                <Col className="coin-stats-name">
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className="coin-stats-value">{value}</Text>
              </Col>
            ))}
          </Col>
          {/* second  1:45:07*/} 
          <Col className="other-stats-info">
            <Col className="coin-value-statistics-heading">
              <Title level={3} className="coin-details-heading">
                {cryptoDetails.name} other-stats-info
              </Title>
              <p>An overview showing the stats of {cryptoDetails.name}</p>
            </Col>
            {genericStats.map(({ icon, title, value }) => (
              <Col className="coin-stats">
                <Col className="coin-stats-name">
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className="coin-stats-value">{value}</Text>
              </Col>
            ))}
          </Col>

          {/* third */}
          <Col className="coin-desc-link">
            <Row className="coin-desc">
              <Title level={3} className="coin-details-heading">
                What is {cryptoDetails.name}
              </Title>
              {HTMLReactParser(cryptoDetails.description)}
            </Row>
            <Col className="coin-link">
              <Title level={3} className="coin-details-heading">
                {cryptoDetails.name} Links
              </Title>
              {cryptoDetails.links.map((link) => (
                <Row className="coin-link" key={link.name}>
                  <Title level={5} className="link-name">
                    {link.type}
                  </Title>
                  <a href={link.url} target="_blank" className="link-url">
                    {link.name}
                  </a>
                </Row>
              ))}
            </Col>
          </Col>
        </Col>
      </Col>
    </div>
  );
};

export default CryptoDetail;
