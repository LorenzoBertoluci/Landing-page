document.addEventListener('DOMContentLoaded', function () {
	const buttons = document.querySelectorAll('[data-tab-button]');
	const questions = document.querySelectorAll('[data-faq-question]');

	const heroSection = document.querySelectorAll('.hero');
	const alturaHero = heroSection.clientHeight;

	window.addEventListener('scroll', function() {
		const posAtual = window.scrollY;

		if( posAtual < alturaHero){
			OcultaElementosDoHeader();
		} else {
			ExibeElementosDoHeader();
		}

	})
	
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function(botao) {
			const tabAlvo = botao.target.dataset.tabButton;
			const tab = document.querySelector(`[data-tab-id=${tabAlvo}]`);
			escondeTodasAbas() ;
			tab.classList.add('shows__list--is-active');
			removeBotaoAtivo();
			botao.target.classList.add('shows__tabs__button--is-active');
		})
	}

	for (let i = 0; i < questions.length; i++) {
		questions[i].addEventListener('click', abreOuFechaResposta);
	}
})

function OcultaElementosDoHeader(){
	const header = document.querySelector('header');
	header.classList.add('header--is-hidden');
}
function ExibeElementosDoHeader(){
	const header = document.querySelector('header');
	header.classList.remove('header--is-hidden');
}
function abreOuFechaResposta(elemento) {
	const classe = 'faq__question___item--is-open';
	const elementoPai = elemento.target.parentNode;

	elementoPai.classList.toggle(classe);

}

function removeBotaoAtivo() {
	const buttons = document.querySelectorAll('[data-tab-button]');

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove('shows__tabs__button--is-active');
	}
}
function escondeTodasAbas() {
	const tabsContainer = document.querySelectorAll('[data-tab-id]');

	for (let i = 0; i < tabsContainer.length; i++) {
		tabsContainer[i].classList.remove('shows__list--is-active');
	}
}

