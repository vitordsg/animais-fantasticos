import ScrollSuave from './modules/scroll-suave.js';
import initiationAnimacaoScroll from './modules/scroll-animacao.js';
import initiationAccordionList from './modules/accordion.js';
import initiationNavTab from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu.mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import iniFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initiationAnimacaoScroll();
initiationAccordionList();
initiationNavTab();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
iniFetchAnimais();
initFetchBitcoin();
