import news1 from '../../assets/news/aleya.jpg';
import news2 from '../../assets/news/thomb.jpg';
import news3 from '../../assets/news/kula.jpg';
import news4 from '../../assets/news/newparking.jpg';
import news5 from '../../assets/news/bluezone.jpg';
import moment from 'moment';

let publishDate = moment().format('MMMM Do YYYY, h:mm:ss a');
 
export const news = [
  {
    id: 'n0',
    title: 'Престоят в „Зоната за кратковременно платено паркиране“ става неограничен',
    summary: 'Престоят в „Зоната за кратковременно платено паркиране“ става неограничен. Решението бе взето днес на заседание на Общински съвет – Поморие, с оглед на летния туристически сезон и препоръките, получени от жители и гости на града.',
    image: 'https://www.pomorie.bg/new/wp-content/uploads/2023/06/357626813_9882201435153968_1002631873238750085_n-1800x600.jpg',
    date: publishDate,
    author: 'Община Поморие',
    source: 'https://www.pomorie.bg/80008/prestoyat-v-vzonata-za-kratkovremenno-plateno-parkiranev-stava-neogranitchen/',
  },
  {
    id: 'n1',
    title: "Крайбрежна алея „П. К. Яворов“ ще бъде с нов по-приветлив облик",
    summary: 'Крайбрежна алея „П. К. Яворов“ ще бъде с нов по-приветлив облик. Дейностите по благоустройство започнаха и се изпълняват със средства по Програмата за морско дело и рибарство 2014-2020. ',
    image: news1,
    date: publishDate,
    author: "Община Поморие",
    source: 'https://www.pomorie.bg/77872/kraybrezhna-aleya-p-k-yavorov-shte-bade-s-nov-po-privetliv-oblik/',
  },
  {
    id: 'n2',
    title: "Нова светлинно-звукова система привлича вниманието към Тракийската куполна гробница",
    summary: 'Внедряването на нова светлинно-звукова система в Тракийската куполна гробница има за цел да привлече вниманието на още повече посетители към уникалния по рода си архитектурен обект в Поморие.',
    image: news2,
    date: publishDate,
    author: "Община Поморие",
    source: 'https://www.pomorie.bg/78056/nova-svetlinno-zvukova-sistema-privlitcha-vnimanieto-kam-trakiyskata-kupolna-grobnitsa/'
  },
  {
    id: 'n3',
    title: "Музей на рибарския поминък вдъхна нов живот на рушащата се Водна кула в Поморие",
    summary: 'Опасната стара сграда на някогашната Водна кула в Поморие вече е превърната в красив Музей на рибарския поминък.',
    image: news3,
    date: publishDate,
    author: "Община Поморие",
    source: 'https://www.pomorie.bg/78128/muzey-na-ribarskiya-pominak-vdahna-nov-zhivot-na-rushashtata-se-vodna-kula-v-pomorie/'
  },
  {
    id: 'n4',
    title: "Стартира работата по дългоочаквания паркинг в района на Софарма",
    image: news4,
    date: publishDate,
    author: "Община Поморие",
    source: 'https://www.pomorie.bg/77326/startira-rabotata-po-dalgootchakvaniya-parking-v-rayona-na-sofarma/',
  },
  {
    id: 'n5',
    title: 'Започва поставянето на нови пътни знаци и хоризонтална маркировка в кв. „Малко солено езеро“ – гр. Поморие',
    image: news5,
    date: publishDate,
    author: 'Община Поморие',
    source: 'https://www.pomorie.bg/78790/zapotchva-postavyaneto-na-novi-patni-znatsi-i-horizontalna-markirovka-v-kv-vmalko-soleno-ezerov-gr-pomorie/',
  },
];
