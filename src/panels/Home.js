import React from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import { 
  Separator, 
  Placeholder, 
  Button, 
  PanelHeaderButton, 
  PanelHeaderBack, 
  Panel, 
  Card, 
  CardGrid, 
  PanelHeader, 
  Group, 
  Div, 
  View, 
  Snackbar,
  ModalRoot,
  ModalPage,
  ModalPageHeader,
  FormLayout,
  FormLayoutGroup,
  Select,
  Input,
  FormStatus,
  ConfigProvider
   } from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import {IS_PLATFORM_ANDROID, IS_PLATFORM_IOS} from '@vkontakte/vkui/dist/es6/lib/platform';

import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import MoneyOut from '@vkontakte/icons/dist/28/money_request_outline';
import Brain from '@vkontakte/icons/dist/28/brain_outline';
import MoneySend from '@vkontakte/icons/dist/28/money_send_outline';
import Gridsquare from '@vkontakte/icons/dist/28/grid_square_outline';
import InfoOut from '@vkontakte/icons/dist/28/info_outline';
import SendIcon from '@vkontakte/icons/dist/24/send';
import Icon16CheckCircle from '@vkontakte/icons/dist/16/check_circle';
import Icon24DismissSubstract from '@vkontakte/icons/dist/24/dismiss_substract';
import Icon28MoonOutline from '@vkontakte/icons/dist/28/moon_outline';

import balancepic from '../img/balance.png';
import dollarpic from '../img/dollar.png';

import './home.css'




const data_of_captcha = {
            "captcha_id1": { "result_of_captcha": "fziv", "photo_id": "https://sun1-89.userapi.com/I9JfP_TeY1S-r6rahtWVobQVE6GTqc6HzjwtAw/H1vRpPN-UiA.jpg" },
            "captcha_id2": { "result_of_captcha": "km1y", "photo_id": "https://sun1-90.userapi.com/uEkJCMnJzJQRgR6AIBTKqTc-2RyyDqOyBuAC5w/L2jCkJ1sTQQ.jpg" },        
            "captcha_id3": { "result_of_captcha": "mu7x", "photo_id": "https://sun1-26.userapi.com/jVIZdskD9ToI7xwvNrBdmBYIs70r4fLykHTdTg/ELQjVwT4glk.jpg" },
            "captcha_id4": { "result_of_captcha": "n9zp", "photo_id": "https://sun1-19.userapi.com/9R0gXbqe8ycHzpDg16-63ii38_U0h0W33R6UsQ/Rz-uE6GWVHM.jpg" },
            "captcha_id5": { "result_of_captcha": "tkwc", "photo_id": "https://sun1-99.userapi.com/0uwor3BrpPsdH2ShmY7SNUktcHx3XaAw9HxM2g/xFuEtxXLXaQ.jpg" },         
            "captcha_id6": { "result_of_captcha": "pzij", "photo_id": "https://sun1-99.userapi.com/Haz9HhjYe1gf0GawGK2fgfqpU7NPBOUKZKVytw/Z9pw4liVlso.jpg" },        
            "captcha_id7": { "result_of_captcha": "qlaa", "photo_id": "https://sun1-24.userapi.com/GK68zEYijVv3oCQo6n_KsSlmlDOXB6GHyhVCcA/YsWRHC2AXPI.jpg" },
            "captcha_id8": { "result_of_captcha": "mn4u", "photo_id": "https://sun1-90.userapi.com/8PyGqvhPL06Z4w5kbyhE9FT3VJeuhVdMWIpnFw/N4xW9eoxCik.jpg" },
            "captcha_id9": { "result_of_captcha": "h5kp", "photo_id": "https://sun1-83.userapi.com/pbT0wwMlBlJU78UKOvf-CuQOzuXFLR5FvSiISQ/vLsvdXLAhQQ.jpg" },
            "captcha_id10": { "result_of_captcha": "8d3p", "photo_id": "https://sun1-83.userapi.com/pbT0wwMlBlJU78UKOvf-CuQOzuXFLR5FvSiISQ/vLsvdXLAhQQ.jpg" },
            "captcha_id11": { "result_of_captcha": "mbga", "photo_id": "https://sun1-94.userapi.com/WqiUGDuQyGQnrXjWCHvx1wFAm4gcwnTMrV0CLw/GFBHBHTFR1A.jpg" },         
            "captcha_id12": { "result_of_captcha": "kdmc", "photo_id": "https://sun1-20.userapi.com/C5yTObAgRbPAkS4vRFzeflgavdF4uGnc4em4RA/xkvrTduR9SU.jpg" },         
            "captcha_id13": { "result_of_captcha": "vgrr", "photo_id": "https://sun1-98.userapi.com/y_PKORBOf2deJcunzYsKSkfsg2u1Eoe_L5bjwA/tF1llnSHI5M.jpg" },
            "captcha_id14": { "result_of_captcha": "mltr", "photo_id": "https://sun1-30.userapi.com/uKnsPLn1pYCK9Bmbkpyu6xKvmYC44R-WcaiD9w/ceCn2DwQDec.jpg"},
           "captcha_id15": {  "result_of_captcha": "sr1z",  "photo_id": "https://sun1-92.userapi.com/FyKUtXKM4B1wkvbcn3JLG1yKjKpwxbJF5Mph1g/Xlj7wtB4dSc.jpg" },   
         "captcha_id16": {  "result_of_captcha": "kpvv",    "photo_id": "https://sun1-20.userapi.com/lwS_dzfOSEIi-NbyN353Sa5TwIsaKvQxgQWx3g/4efjr8IaTlc.jpg"    },
              "captcha_id17": {    "result_of_captcha": "e4lg",    "photo_id": "https://sun1-18.userapi.com/U9JIt3A_BKddcmEJXDm9j9mD8Ru2n8Tc1ubdyA/HFVFK4LHgsI.jpg" },  
            "captcha_id18": {    "result_of_captcha": "1h3z",    "photo_id": "https://sun1-99.userapi.com/V7JZgquRSY_Ni0SzmNVtsYH2R9bEWgv_RBto6A/WIyzjLAyWh8.jpg" },  
            "captcha_id19": {    "result_of_captcha": "e1g1",    "photo_id": "https://sun1-28.userapi.com/6RkAyLVfXOzOaq7wpC9SUksoX91uymVICiqdrg/C_A-8tUt5sM.jpg" },  
           "captcha_id20": {    "result_of_captcha": "ia8l",    "photo_id": "https://sun1-29.userapi.com/WXGdLSbxcjbDscTHtbW_hEnyEl_WHOOMYX8fWA/EMtkzYdxf7E.jpg" },  
            "captcha_id21": {    "result_of_captcha": "stnn",    "photo_id": "https://sun1-90.userapi.com/a1s_xi-3ZaiN-PXmi46FNiUiUuQlR6vSeTVvLQ/zCIl82E4b7g.jpg" },  
            "captcha_id22": {    "result_of_captcha": "fjts",    "photo_id": "https://sun1-85.userapi.com/p9Co4wb_-QJHdeAK5tQfJrETtNCP4XtLOQOclg/2u7ObbsCYPk.jpg" },  
            "captcha_id23": {    "result_of_captcha": "mx1v",    "photo_id": "https://sun1-14.userapi.com/sZXPXFg_ESbNT8ABlx9Xxhywd114Agr5vqH62w/Si5ng1sYRr8.jpg" },     
              "captcha_id24": {    "result_of_captcha": "vfzn",    "photo_id": "https://sun1-86.userapi.com/pS2V5jUm1BsZ5RJ-_i8xlZw_D5gue_JDDzcb5g/TVavEgtmiV4.jpg" },   
               "captcha_id25": {    "result_of_captcha": "iexp",  "photo_id": "https://sun1-99.userapi.com/T58o5x0A8TXPOF2eX5UTzqEIDwlYBdIyoss16A/0XASWmra0aE.jpg" },  
                    "captcha_id26": {   "result_of_captcha": "xgu3",    "photo_id": "https://sun1-95.userapi.com/Xx7jxH4hgQfx2udHBseMiyHEUN1Dzmi0XzB9gA/4tJ74Rr0bq4.jpg"   },   
                     "captcha_id27": {    "result_of_captcha": "sc3c",    "photo_id": "https://sun1-93.userapi.com/oVyuEfkfMNeAACDYqHe69nL-qh1Pvmq6i_VVJw/Q9wSKI2OK4Y.jpg" },  
            "captcha_id28": {    "result_of_captcha": "vvye",    "photo_id": "https://sun1-14.userapi.com/gnCg70G0iu4dOBcR1jEUQKcF5bB-AwvCojBhdA/fbDOqlH0IDc.jpg" },  
            "captcha_id29": {    "result_of_captcha": "etmn",    "photo_id": "https://sun1-93.userapi.com/rWE_yDXOB4oPQfaq78vzNgZ8G4dUhBctFOcL5Q/3K7Dgk3CxOs.jpg" },  
            "captcha_id30": {    "result_of_captcha": "wkyk",    "photo_id": "https://sun1-92.userapi.com/WWyEj8QTyMU6BXMV0ilL8OaKJ5sclJ0xZnN4kQ/42g3aY3AQCk.jpg" },  
            "captcha_id31": {    "result_of_captcha": "9grj",    "photo_id": "https://sun1-19.userapi.com/YPhJEdQ_fu2qIy5SyIGFiXUe_UGkngCI3a4vhA/lcuEI0yOcmY.jpg" },  
           "captcha_id32": {    "result_of_captcha": "zfuw",    "photo_id": "https://sun1-20.userapi.com/2luBarhbYgcYvL3ga2V2LbLq9Q3MvjVCobHxcA/KGf73i9jkMY.jpg" },  
            "captcha_id33": {    "result_of_captcha": "bd2e",    "photo_id": "https://sun1-95.userapi.com/mOLGW57R0q6Zio6sbGVeNnRouj4HhgOCfV3gXg/uYbPLv3DmEA.jpg" },    
               "captcha_id34": {  "result_of_captcha": "deb6",    "photo_id": "https://sun1-99.userapi.com/jSo0zmIRWVEJrGRmM6M1pLUcz9mUddP2oAhlDw/ColNytlAiu4.jpg" },  
            "captcha_id35": {    "result_of_captcha": "8ahu",    "photo_id": "https://sun1-28.userapi.com/RH4fiKMLdnE-TI_2RxdB6cl1F_Hr-NLQN7hXIQ/_Y8-WowSrzU.jpg" },
              "captcha_id36": {    "result_of_captcha": "1bvt","photo_id": "https://sun1-93.userapi.com/P5YSgU4T-W40wT0rMBkDXDEX0abPMWO7RJQ-RA/CE-ISy04t-Q.jpg" },   
               "captcha_id37": { "result_of_captcha": "r14v",    "photo_id": "https://sun1-47.userapi.com/hbgxX7I8Rq2XZQbI40J1msTwkxMYqfM-HiTu1Q/s7HWWD6tqUU.jpg" },
              "captcha_id38": {    "result_of_captcha": "wk1j",    "photo_id": "https://sun1-16.userapi.com/ZZcUQ-ceP-FS6iOpZu6iKHRp3W5H6hw4Z3l-Pg/CAKMxt5SyiY.jpg" },
              "captcha_id39": {    "result_of_captcha": "ceka",    "photo_id": "https://sun1-20.userapi.com/gzv2SBZdFmlnCnCscLh8KxdfUpGzXYOlD9dc6A/hDfKp8hUThA.jpg" },  
            "captcha_id40": {    "result_of_captcha": "j4yc",    "photo_id": "https://sun1-27.userapi.com/tUir7GtiTWQ8gfcH2iIIa4HhMjKA7nnKvBWV3w/GBDc9blNeIc.jpg" },  
            "captcha_id41": {    "result_of_captcha": "cmrm",    "photo_id": "https://sun1-96.userapi.com/OgeZl9VRTCCAoOKgraBX4WrLB_boipngKDkN8A/W9qpDZaRC0g.jpg" },
              "captcha_id42": {    "result_of_captcha": "jb4f",    "photo_id": "https://sun1-97.userapi.com/6Wb4GCELNQntp7ZcH9RbmS4ViHVxi8svf9yIEg/-yg4fBUcHWY.jpg" },
              "captcha_id43": {    "result_of_captcha": "jnht",    "photo_id": "https://sun1-91.userapi.com/zX3BbumitP2jcdNdA5nqvBDllF3vnxfSgstPYw/Kjqfop7sAnA.jpg" },
              "captcha_id44": {    "result_of_captcha": "65fw",    "photo_id": "https://sun1-21.userapi.com/C9Y3veiJ_6g4OvHhmzgLpHrmySpcv1ptBNaq_Q/S1ZXK0C4pv8.jpg" },
              "captcha_id45": {    "result_of_captcha": "vfca",    "photo_id": "https://sun1-17.userapi.com/2BQKe7oQCPWOGyLmKdMS42fXWn8yagBMXElJPA/FVyBvL3TgYk.jpg" },
              "captcha_id46": {    "result_of_captcha": "1yrr",    "photo_id": "https://sun1-88.userapi.com/-9aqJN2lhv9owjEd6HWh3FElMUC2qsfqmAflKQ/mv7GeM-w8jg.jpg" },
              "captcha_id47": {    "result_of_captcha": "la3l",    "photo_id": "https://sun1-84.userapi.com/TpSBSrOlWVrvM3_rJLTBAhaK1ZHagKXYBJZ5SQ/YRBnGsfIugU.jpg" },
              "captcha_id48": {    "result_of_captcha": "cfbl",    "photo_id": "https://sun1-87.userapi.com/4kxFGWoXI9m95pBhke7M9g10Z90MKMCmCxL7nQ/aOjRFrLE5Ng.jpg" },
             "captcha_id49":  {    "result_of_captcha": "e7gk",    "photo_id": "https://sun1-97.userapi.com/XGaUZ2HtT3tAcM-wxn7odXCUkZpBGzPOX8sLqw/0LjTuozPOs4.jpg" },
              "captcha_id50": {    "result_of_captcha": "mhyo",    "photo_id": "https://sun1-18.userapi.com/pKwwTcfYY9N7BIn1n-l1VwB1ywS8s64mu6AU4g/khp5Vi0sFQo.jpg" },
              "captcha_id51": {    "result_of_captcha": "n926",    "photo_id": "https://sun1-89.userapi.com/fW22t6Uf0aUic7kft2yzREtqLD8IVyiGY482eA/1QFgWxtMWEc.jpg" },    
               "captcha_id52": {    "result_of_captcha": "78fs",  "photo_id": "https://sun1-99.userapi.com/Isc-uwH1q1u8xllGieU5tZAwZI6hPQnOmjHlRA/yRb3q235gYY.jpg" },
               "captcha_id53": {    "result_of_captcha": "nxne",    "photo_id": "https://sun1-94.userapi.com/qAFJSGQwtNQL5iRK_UY8AKjElWVJgI2hxYULGA/hUdGoobWHlA.jpg" },  
               "captcha_id54": {    "result_of_captcha": "guhp",    "photo_id": "https://sun1-20.userapi.com/GiGVlVUmDT0dpCGkX8VbeC7JtUSttCJ3xw3t7w/So9FCILjzOQ.jpg" },
               "captcha_id55": {    "result_of_captcha": "p1l1",    "photo_id": "https://sun1-26.userapi.com/Ma4FjqOyWqJd9EAxYPsT4oeidrTsW9iDHPRs4A/knUC7LMUOk0.jpg" },
               "captcha_id56": {    "result_of_captcha": "xfid",    "photo_id": "https://sun1-26.userapi.com/7IjdjES13OyRBcvQVAObsz8bKr3HoAa0uyaHTg/4ncXu-o5UcE.jpg" },
               "captcha_id57": {    "result_of_captcha": "8s57",    "photo_id": "https://sun1-97.userapi.com/SureXd-YaeCWvFNe2lUhTEfNXEnzari4waNfXQ/juy2i9d-jWU.jpg" },
               "captcha_id58": {    "result_of_captcha": "pv91",    "photo_id": "https://sun1-18.userapi.com/c1Q5BBW7yhZVwEeGNCBEPJcTIsqxdZn7BFcZ4w/y9Dm4DQyhvw.jpg" },
               "captcha_id59":  {    "result_of_captcha": "shye",    "photo_id": "https://sun1-29.userapi.com/n4mhVP0GDSYIqRUsoNgBzdHzGvNodrISPelivg/wrKG9yG59ak.jpg" },
               "captcha_id60": {    "result_of_captcha": "eflt",    "photo_id": "https://sun1-25.userapi.com/I-tj0L82n9afcyGjbCEWICnKCSGi2VE1OJkAZQ/7fUnC7zSs48.jpg" },
               "captcha_id61": {    "result_of_captcha": "6e9a",    "photo_id": "https://sun1-24.userapi.com/2YTgRp4zzwxVtG5wQ8nQbrVb-YSILp1jwEavRg/bmdBojtV5wo.jpg" },
               "captcha_id62": {    "result_of_captcha": "77mn",    "photo_id": "https://sun1-16.userapi.com/5DWXoIKunpGQ41dxOcgiN__dnfOAOlYn-a9hUA/Z2CjFg-nMnE.jpg" },
               "captcha_id63": {    "result_of_captcha": "t8l7",    "photo_id": "https://sun1-14.userapi.com/Y7LLpsZVXB6zQ2WHRnN4C83APOvf3cve2CIGlQ/Ii8AVaHlVq8.jpg" },
               "captcha_id64": {    "result_of_captcha": "ezyi",    "photo_id": "https://sun1-14.userapi.com/YlxhW8DYXfjEGd0twcp2VqNIfoR7j036AsuAig/0E5ca-QS3vY.jpg" },
               "captcha_id65":  {    "result_of_captcha": "byfn",    "photo_id": "https://sun1-89.userapi.com/Tz3Fdv_KCncwByplt_YK0jxpzVFAoj_7qjlSVw/Xy-8k1UchyM.jpg" },
               "captcha_id66":  {    "result_of_captcha": "guug",    "photo_id": "https://sun1-23.userapi.com/IV1-EAea3YPE6rksLcC81pXKFpOBEP87tthhwA/9ECtXd5YKQE.jpg" },
               "captcha_id67":  {    "result_of_captcha": "m7hi",    "photo_id": "https://sun1-21.userapi.com/8D32-YnXLExM1gXTv6QF49Fd_Lx2DYcIS3xxSQ/VTTgdoHX1Ys.jpg" },  
               "captcha_id68":  {    "result_of_captcha": "velj",    "photo_id": "https://sun1-83.userapi.com/Rah-OyllZQLmLuxvmUgYdF1RUIkCC2ty1ObtHw/b5x3zuB6054.jpg" },
               "captcha_id69":  {    "result_of_captcha": "ywpg",    "photo_id": "https://sun1-90.userapi.com/8iiR7hBWJEQDj3w5TSy9iW89zAyOfeWks1pl5g/6lOxkSMKIas.jpg" },
               "captcha_id70":  {    "result_of_captcha": "iz6w",    "photo_id": "https://sun1-95.userapi.com/l7cHmNma0r8xlQ9rZ5lK9mHjuUmdDuCbQEp5Zw/vKboYtLAAuk.jpg" },
               "captcha_id71": {    "result_of_captcha": "hvvj",    "photo_id": "https://sun1-23.userapi.com/6bYvX80ciaIXnnjBSA69F4CrZPW2KgSNNFp_TQ/h7LcskhYTmY.jpg" },  
               "captcha_id72": {    "result_of_captcha": "7ra8",    "photo_id": "https://sun1-30.userapi.com/U9LAmfUbMpTMzl4JNdtdwXjbftmY38OpuiwvEg/Xq-VdwClq2o.jpg" },  
               "captcha_id73": {    "result_of_captcha": "a5c5",    "photo_id": "https://sun1-29.userapi.com/4Uod3rExHGiubP1xg7NAJYvjfssw25vlh0tLfQ/ZzvX-CUzF8g.jpg" },
               "captcha_id74": {    "result_of_captcha": "i13d",    "photo_id": "https://sun1-24.userapi.com/VD3IHqljiRKNKmA0f68nrnO3zT0B9vN8A3TCkg/g5WaTjQhhoE.jpg" }} 

const MODAL_PAGE_FILTERS = 'filters';
const MODAL_PAGE_FILTERS_SECOND = 'filters_second';
const MODAL_PAGE_FILTERS_THIRD = 'filters_third';

const WindowWidth = window.innerWidth
const WindowHeight = window.innerHeight

class Home extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activePanel: 'main',
      activeModal: null,
      modalHistory: [],
      activeView: 'main',
      snackbar: null,
      avatar: undefined,
      rub_balance: 0,
      dollar_balance: 0,
      captcha_result: '',
      captcha_url: null,
      fetchedUser: null,
      data: null,
      captcha_res: '',
      captcha_reslower: '',
      captcha_num: 1,
      captcha_result: '',
      captcha_url: null,
      vivoderror: null,
      vivodbutton: null,
      vivodtext: null,
      scheme: 'bright_light', // Будет по умолчанию.
      lights: ['bright_light', 'client_light']
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.trueCaptcha = this.trueCaptcha.bind(this);
    this.falseCaptcha = this.falseCaptcha.bind(this);
    this.proverkabalance = this.proverkabalance.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onStoryChange = this.onStoryChange.bind(this);


    this.modalBack = () => {
      this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
    };

  }


  setActiveModal(activeModal) {
    activeModal = activeModal || null;
    let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];

    if (activeModal === null) {
      modalHistory = [];
    } else if (modalHistory.indexOf(activeModal) !== -1) {
      modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
    } else {
      modalHistory.push(activeModal);
    }

    this.setState({
      activeModal,
      modalHistory
    });
  };

  onStoryChange (e) {
    this.setState({ activeStory: e.currentTarget.dataset.story })
  }

  onChange (e) {
    // this.setState({ captcha_res: this.s })
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }



  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  handleChange (event) {
    this.setState({captcha_res: event.target.value});
    this.setState({captcha_reslower: event.target.value.toLowerCase()}); 
  }

  camelCase( scheme, needChange = false ) {
    let isLight = this.state.lights.includes( scheme );
          
    if( needChange ) {
        isLight = !isLight;
    }
    this.setState({ scheme: isLight ? 'bright_light' : 'space_gray' });

    bridge.send('VKWebAppSetViewSettings', {
         'status_bar_style': isLight ? 'dark' : 'light',
         'action_bar_color': isLight ? '#ffffff' : '#191919'
    });
  }

  handleSubmit (event) {
    if (this.state.captcha_reslower === this.state.captcha_result) {
      bridge.send("VKWebAppJoinGroup", { "group_id": 197462530 });
      bridge.send("VKWebAppAllowMessagesFromGroup", { "group_id": 197462530 })
      this.trueCaptcha();
      this.addbalanceforcaptcha();
      this.setState({captcha_res: ''}); 
      this.setState({captcha_reslower: ''}); 
      var capcthidgen = `captcha_id${this.getRandomInt(1, 74)}`;
      this.setState({ captcha_result: data_of_captcha[capcthidgen].result_of_captcha, captcha_url:  data_of_captcha[capcthidgen].photo_id });
      
      } //cовпало
    else { //не совпало
      bridge.send("VKWebAppJoinGroup", { "group_id": 197462530 }); 
      bridge.send("VKWebAppAllowMessagesFromGroup", { "group_id": 197462530 })
      this.falseCaptcha();
      this.setState({captcha_res: ''}); 
      this.setState({captcha_reslower: ''}); 
      var capcthidgen = `captcha_id${this.getRandomInt(1, 74)}`;
      this.setState({ captcha_result: data_of_captcha[capcthidgen].result_of_captcha, captcha_url:  data_of_captcha[capcthidgen].photo_id });
      }
    event.preventDefault();
  }

  // generate_captchaid(min, max) {
  //   return `data_of_captcha.captcha_id${this.getRandomInt(min, max)}.result_of_captcha`
  // }

  addbalanceforcaptcha () {
    bridge.send("VKWebAppGetUserInfo", {}).then(async r => {
    fetch('https://captcha-app.ru/main/addBalance?uid=' + r.id, {
        method: 'get',
        mode: 'cors',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    })    
    .then((response) => response.json())
    .then((response) => { 
        this.setState({ rub_balance: response.rub_balance})
    })
    .catch((err) => {
      })
  });
  }

  proverkabalance () {
    bridge.send("VKWebAppGetUserInfo", {}).then(async r => {
    fetch('https://captcha-app.ru/main/TrytoCash?uid=' + r.id, {
        method: 'get',
        mode: 'cors',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    })    
    .then((resp) => resp.json())
    .then((resp) => { 
        if (Number(resp.rub_balance) <= 1000) {
          
          
            this.setState({ vivoderror:
          <FormStatus style={{marginLeft: 12, marginRight:12}} header="Ошибка" mode="error">
           <div style={{display: 'flex'}}> Минимальный вывод - 1000 <img width={WindowWidth*0.04} height={WindowWidth*0.04} style={{marginLeft: 6}} src={balancepic} alt="balancepic"/> </div>
          </FormStatus>
    });
        }
        else
        {
          if (Number(resp.dollar_balance) <= 49) {
            this.setState({ vivodtext: <div style={{ marginLeft: 12, marginBottom: 24 }}>
             ❓ Несколько причин, почему нужно пополнять баланс перед выводом:
<br /><br />
1. «Абуз» реферальной системы.
<br /><br />
Все платёжные реквизиты шифруются и записываются в базу данных, каждый кто привёл друга получает 25% от его пополнения. Если человек зарегистрирует мультиаккаунт и пополнит баланс на 100 рублей, то один человек получит 125 рублей. Это первая причина.
<br /><br />
2. Лимит на вывод.
<br /><br />
В боте установлено ограничение на вывод (за 1 день можно вывести не более 15.000 рублей), однако с помощью мультиаккаунтов его можно обойти.
<br /><br />
3. Мультиаккаунты
<br /><br />
Один человек может решать с двух аккаунтов капчи и зарабатывать в два больше, тем самым снижая статистику уникальных пользователей. Это негативно влияет на оплату за 1 капчу.
</div> });
              this.setState({ vivodbutton: <Button size="xl" mode="commerce" href="https://vk.cc/axuUyV" >Пополнить</Button>  });
              this.setState({ vivoderror:
          <FormStatus style={{marginLeft: 12, marginRight:12}} header="Ошибка" mode="error">
           <div style={{display: 'flex'}}> Для вывода необходимо - 49 <img width={WindowWidth*0.04} height={WindowWidth*0.04} style={{marginLeft: 6}} src={dollarpic} alt="dollarpic"/></div>
          </FormStatus>
    });
          }
          else {
            this.setState({ vivodtext: <div style={{ marginLeft: 12, marginBottom: 24 }}>
             ❓ Несколько причин, почему нужно пополнять баланс перед выводом:
<br /><br />
1. «Абуз» реферальной системы.
<br /><br />
Все платёжные реквизиты шифруются и записываются в базу данных, каждый кто привёл друга получает 25% от его пополнения. Если человек зарегистрирует мультиаккаунт и пополнит баланс на 100 рублей, то один человек получит 125 рублей. Это первая причина.
<br /><br />
2. Лимит на вывод.
<br /><br />
В боте установлено ограничение на вывод (за 1 день можно вывести не более 15.000 рублей), однако с помощью мультиаккаунтов его можно обойти.
<br /><br />
3. Мультиаккаунты
<br /><br />
Один человек может решать с двух аккаунтов капчи и зарабатывать в два больше, тем самым снижая статистику уникальных пользователей. Это негативно влияет на оплату за 1 капчу.
</div> });
            this.setState({ vivodbutton: <Button size="xl" mode="commerce" href="https://vk.cc/axuUyV" >Пополнить</Button>  });
            this.setState({ vivoderror:
          <FormStatus style={{marginLeft: 12, marginRight:12}} header="Ошибка" mode="error">
           <div style={{display: 'flex'}}> Для вывода необходимо - {Number(resp.dollar_balance)+34} <img width={WindowWidth*0.04} height={WindowWidth*0.04} style={{marginLeft: 6}} src={dollarpic} alt="dollarpic"/></div>
          </FormStatus>
    });
          }
        }
        
    })
    .catch((err) => {
      })
  });
  }

  trueCaptcha () {
    if (this.state.snackbar) return;
    this.setState({ snackbar:
      <Snackbar
        layout="vertical"
        duratin={500}
        onClose={() => this.setState({ snackbar: null })} 
        before={<Avatar size={24} ><Icon16CheckCircle fill="#30ff00" width={26} height={26} /></Avatar>}
      >
        Вы верно ввели капчу. Спасибо!
      </Snackbar>
    });
  }

  falseCaptcha () {
    if (this.state.snackbar) return;
    this.setState({ snackbar:
      <Snackbar
        layout="vertical"
        duratin={500}
        onClose={() => this.setState({ snackbar: null })} 
        before={<Avatar size={24} ><Icon24DismissSubstract fill="#FF1400" width={26} height={26} /></Avatar>}
      >
        Вы неверно ввели капчу. Старайтесь совершать как можно меньше ошибок
      </Snackbar>
    });
  }


  componentDidMount() {

    bridge.send("VKWebAppGetUserInfo", {}).then(async r => {
        fetch('https://captcha-app.ru/main/getInfo?uid=' + r.id, {
            method: 'get',
            mode: 'cors',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        })    
        .then((response) => response.json())
        .then((response) => { 
           
            this.setState({ rub_balance: response.rub_balance, dollar_balance: response.dollar_balance})
        })
        .catch((err) => {
           })

  })
    var capcthidgen = `captcha_id${this.getRandomInt(1, 74)}`
    this.setState({ captcha_result: data_of_captcha[capcthidgen].result_of_captcha, captcha_url:  data_of_captcha[capcthidgen].photo_id });
    bridge.send("VKWebAppJoinGroup", { "group_id": 197462530 });
    bridge.subscribe(({ detail: { type, data }}) => {
    if ( type === 'VKWebAppUpdateConfig' ) { // Получаем тему клиента.
      this.camelCase( data.scheme )
    }
    
  })
  }

  render () {
      const modal = (

      <ModalRoot
        activeModal={this.state.activeModal}
        onClose={this.modalBack}
      >            
        <ModalPage
          id={MODAL_PAGE_FILTERS}
          onClose={this.modalBack}
          header={
            <ModalPageHeader 
              left={IS_PLATFORM_ANDROID && <PanelHeaderButton onClick={this.modalBack}><Icon24Cancel /></PanelHeaderButton>}
              right={<PanelHeaderButton onClick={this.modalBack}>{IS_PLATFORM_IOS ? <Icon24Cancel /> : <Icon24Done />}</PanelHeaderButton>}
            >
              Как это работает?
            </ModalPageHeader>
          }
        >
        <Separator style={{ margin: '12px 0' }} />
          <FormLayout>
            <FormLayoutGroup  style={{ marginLeft: 12, marginBottom: 24}}>
              Вы часто встречали, что на каком-либо сайте у вас появляется капча (просьба ввести код с картинки), думаю да. 
<br /><br />
              Ботам различных крупных компаний (Google, Amazon, TikTok, Skype и тд.) приходится получать различную информацию с сайтов для корректной работы своих сервисов, но т.к. на серверах стоит проверка от роботов, то он не может решить капчу самостоятельно. 
<br /><br />
              Поэтому они дают возможность решать капчу людям и платят за это деньги.
<br /><br />
              У нас в чат-боте вы всегда можете увидеть число компаний в сети, которые присылают капчу в данную секунду для решения.
<br /><br />
              Наш бот подключен к общему пулу капч, получая их от компаний напрямую. 
<br /><br />
              В интернете много подобных проектов, но у нас максимальный уровень оплаты за 1 капчу.
<br /><br />
              В чём наша выгода? - мы открыто говорим, что забираем 20% с вашей прибыли, но это наименьший процент среди таких проектов, как наш. Наши конкуренты берут от 50% до 90% от вашей прибыли.
            </FormLayoutGroup>
          </FormLayout>
        </ModalPage>
       
       
        <ModalPage
          id={MODAL_PAGE_FILTERS_SECOND}
          onClose={this.modalBack}
          header={
            <ModalPageHeader 
              left={IS_PLATFORM_ANDROID && <PanelHeaderButton onClick={this.modalBack}><Icon24Cancel /></PanelHeaderButton>}
              right={<PanelHeaderButton onClick={this.modalBack}>{IS_PLATFORM_IOS ? <Icon24Cancel /> : <Icon24Done />}</PanelHeaderButton>}
            >
              Вывод
            </ModalPageHeader>
          }
        >




        <Separator style={{ margin: '12px 0' }} />
          
          <FormLayout>
            <FormLayoutGroup  >
              {this.state.vivoderror}
             <Select top="Выберите платежную систему" placeholder="Выберите платежную систему">
              <option value="q">QIWI</option>
              <option value="y">Яндекс.Деньги</option>
              <option value="b">Бансковская Картка</option>
              <option value="w">WebMoney</option>
              <option value="v">VkPay</option>
             </Select>
             <Input type="cashdata"  placeholder="Платежные данные" />
             <Input type="moneydata"  value="1000" />
             {this.state.vivodbutton}
             <Button onClick={this.proverkabalance} size="xl" mode="commerce" style={{marginTop: 12}} >Создать заявку</Button> {this.state.vivodtext} <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
             
            </FormLayoutGroup>
          </FormLayout>
        </ModalPage>

        <ModalPage
          id={MODAL_PAGE_FILTERS_THIRD}
          onClose={this.modalBack}
          header={
            <ModalPageHeader 
              left={IS_PLATFORM_ANDROID && <PanelHeaderButton onClick={this.modalBack}><Icon24Cancel /></PanelHeaderButton>}
              right={<PanelHeaderButton onClick={this.modalBack}>{IS_PLATFORM_IOS ? <Icon24Cancel /> : <Icon24Done />}</PanelHeaderButton>}
            >
              Пополнение
            </ModalPageHeader>
          }
        >
        <Separator style={{ margin: '12px 0' }} />
          <FormLayout>
            <FormLayoutGroup  >
             <Button size="xl" mode="commerce" href="https://vk.cc/axuUyV" >Пополнить</Button> 
             <div style={{ marginLeft: 12, marginBottom: 24 }}>
             ❓ Несколько причин, почему нужно пополнять баланс перед выводом:
<br /><br />
1. «Абуз» реферальной системы.
<br /><br />
Все платёжные реквизиты шифруются и записываются в базу данных, каждый кто привёл друга получает 25% от его пополнения. Если человек зарегистрирует мультиаккаунт и пополнит баланс на 100 рублей, то один человек получит 125 рублей. Это первая причина.
<br /><br />
2. Лимит на вывод.
<br /><br />
В боте установлено ограничение на вывод (за 1 день можно вывести не более 15.000 рублей), однако с помощью мультиаккаунтов его можно обойти.
<br /><br />
3. Мультиаккаунты
<br /><br />
Один человек может решать с двух аккаунтов капчи и зарабатывать в два больше, тем самым снижая статистику уникальных пользователей. Это негативно влияет на оплату за 1 капчу.
</div>
            </FormLayoutGroup>
          </FormLayout>
        </ModalPage>
        </ModalRoot>);
    
    
    return (
      <ConfigProvider isWebView={true} scheme={this.state.scheme}> 
      <View id="main" modal={modal} activePanel={this.state.activePanel}>
  <Panel id="main" separator={false} >

<PanelHeader 
left={<PanelHeaderButton onClick={() => this.camelCase( this.state.scheme, true )}><Icon28MoonOutline /></PanelHeaderButton>}
 separator={true}
                      
                    >
                        Anti Captcha
                    </PanelHeader>
                     <Placeholder>
                        <Div style={{ marginTop: -WindowWidth*0.13, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                            <p><span className="ur_balance">ВАШ БАЛАНС</span></p> 
                                             <div style={{display: 'flex'}}>   <img width={WindowWidth*0.1} height={WindowWidth*0.1} src={balancepic} alt="balancepic"/>  <h1 style={{marginTop: WindowWidth*0.024}} className="white_rub_balance">  {this.state.rub_balance} ₽ </h1> </div>
                                             <div style={{display: 'flex'}}>   <img width={WindowWidth*0.05} height={WindowWidth*0.05} src={dollarpic} alt="dollarpic"/> <p style={{marginTop: -WindowWidth*0.005, marginLeft: WindowWidth*0.015}} className="dollar_balance">   {this.state.dollar_balance}     </p> </div>
                        </Div> </Placeholder>
                        <CardGrid style={{ marginTop: -WindowWidth*0.16 }}>
                            <Card size='s' mode="shadow" style={{backgroundImage: 'linear-gradient(0deg, #e88368 0%, #f0a77a 100%)' }}>
                                <div disabled role='button' className="center-content Tappable Tappable--ios SimpleCell SimpleCell--ios Tappable--inactive" onClick={() => this.setActiveModal(MODAL_PAGE_FILTERS_SECOND)}>
                                    <div className="SimpleCell__main">
                                        <div className='SimpleCell__children'>
                                          
                                            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                              <MoneyOut width={WindowWidth*0.15} height={WindowWidth*0.15} style={{color: 'white'}}/>
                                               <span  className="text_menu"> Вывод </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <Card size='s' mode="shadow" style={{backgroundImage: 'linear-gradient(0deg, #5290ee 0%, #77abf7 100%)' }}>
                                <div disabled role='button' className="center-content Tappable Tappable--ios SimpleCell SimpleCell--ios Tappable--inactive" onClick={() => this.setState({ activePanel: 'captcha' })}>
                                    <div className="SimpleCell__main">
                                        <div className='SimpleCell__children'>
                                        
                                            <div  style={{display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                            <Brain width={WindowWidth*0.15} height={WindowWidth*0.15} style={{color: 'white'}}/>
                                               <span className="text_menu">  Заработать </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <Card size='s' mode="shadow" style={{backgroundImage: 'linear-gradient(0deg, #d656a0 0%, #e771aa 100%)' }}>
                                <div disabled role='button' className="center-content Tappable Tappable--ios SimpleCell SimpleCell--ios Tappable--inactive" onClick={() => this.setActiveModal(MODAL_PAGE_FILTERS_THIRD)}>
                                    <div className="SimpleCell__main">
                                        <div className='SimpleCell__children'>
                                          
                                            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                            <MoneySend width={WindowWidth*0.15} height={WindowWidth*0.15} style={{color: 'white'}}/>
                                                <span className="text_menu"> Пополнить</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </CardGrid>
                    
                    <Group>
                        <CardGrid style={{ marginTop: -WindowWidth*0.16 }}>
                          
                            <Card size='m' mode="shadow" style={{backgroundImage: 'linear-gradient(90deg, #ee84ad 0%, #ee7e94 100%)' }}  >
                                <div role='button' className="center-content Tappable Tappable--ios SimpleCell SimpleCell--ios Tappable--inactive" >

                                    <div className="SimpleCell__main">
                                    <a className="text_menu" href="https://vk.cc/axuTJO">
                                        <div className='SimpleCell__children' >
                                            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                              <Gridsquare width={WindowWidth*0.15} height={WindowWidth*0.15} style={{color: 'white'}}/>
                                              <span className="text_menu">Выводы</span>
                                            </div>
                                        </div>
                                        </a>
                                    </div>

                                </div>
                            </Card>
                            
                            <Card size='m' mode="shadow" style={{backgroundImage: 'linear-gradient(90deg, #ee84ad 0%, #ee7e94 100%)' }}>
                                <div disabled role='button' className="center-content Tappable Tappable--ios SimpleCell SimpleCell--ios Tappable--inactive" onClick={() => this.setActiveModal(MODAL_PAGE_FILTERS)}>
                                    <div className="SimpleCell__main">
                                        <div className='SimpleCell__children'>
                                        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                            <InfoOut width={WindowWidth*0.15} height={WindowWidth*0.15} style={{color: 'white'}}/>
                                            <span className="text_menu">Как это работает?</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </CardGrid>

                    
                    {this.state.snackbar}
          </Group>
  </Panel>
  <Panel id="captcha" separator={false} >
<PanelHeader separator={true} left={<PanelHeaderBack onClick={() => this.setState({ activePanel: 'main' })} 
                      
                    />}>
                        Заработать
                    </PanelHeader>
                     <Placeholder>
                        <Div style={{ marginTop: -WindowWidth*0.13, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                            <p><span className="ur_balance">ВАШ БАЛАНС</span></p> 
                                             <div style={{display: 'flex'}}>       <img width={WindowWidth*0.1} height={WindowWidth*0.1} src={balancepic} alt="balancepic"/>  <h1 style={{marginTop: WindowWidth*0.024}} className="white_rub_balance">  {this.state.rub_balance} ₽ </h1> </div>
                                             <div style={{display: 'flex'}}>   <img width={WindowWidth*0.05} height={WindowWidth*0.05} src={dollarpic} alt="dollarpic"/> <p style={{marginTop: -WindowWidth*0.005, marginLeft: WindowWidth*0.015}} className="dollar_balance">   {this.state.dollar_balance}     </p> </div>
                        </Div> </Placeholder>
                        
                           <Card size='m' mode="shadow" style={{marginTop: -52, marginLeft: WindowWidth*0.25, width: WindowWidth*0.5, height: WindowWidth*0.25,backgroundImage: `url(${this.state.captcha_url})`, backgroundPosition: 'middle', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}  >
                                <div className="center-content Tappable Tappable--ios SimpleCell SimpleCell--ios Tappable--inactive" >

                                    <div className="SimpleCell__main">
                                    
                                        <div className='SimpleCell__children' >
                                            
                                        </div>
                                        
                                    </div>

                                </div>
                            </Card>
                            <div style={{ marginTop: 12, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row"}}>
                            <Input type="text" style={{height: WindowWidth*0.1}} value={this.state.captcha_res} onChange={this.handleChange} />
                            <Button onClick={this.handleSubmit} style={{marginLeft: 12}} size="l" className='buttonrating_size' mode="commerce"  style={{marginLeft: 8}}><SendIcon style={{marginTop: -WindowWidth*0.008}} width={WindowWidth*0.07} height={WindowWidth*0.07}/></Button> 
                           </div>
                           {this.state.snackbar}
                            </Panel>
</View>
</ConfigProvider>
    )
  }
}



export default Home;

