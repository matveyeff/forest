import "./modules/example";

document.addEventListener('DOMContentLoaded', () => {
	const ymaps	=	window.ymaps || {};
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
						center: [59.896228, 30.424272900000005],
						zoom: 10
				}, {
						searchControlProvider: 'yandex#search'
				}),
	
				// Создаём макет содержимого.
				MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
						'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
				),
	
				myPlacemark1 = new ymaps.Placemark(myMap.getCenter(), {
						hintContent: 'Собственный значок метки',
						balloonContent: 'Мы находимся здесь',
				}, {
						// Опции.
						// Необходимо указать данный тип макета.
						iconLayout: 'default#image',
						// Своё изображение иконки метки.
						iconImageHref: './icons/map-marker.svg',
						// Размеры метки.
						iconImageSize: [50, 60],
						// Смещение левого верхнего угла иконки относительно
						// её "ножки" (точки привязки).
						iconImageOffset: [-5, -38]
				}),
	
				myPlacemark2 = new ymaps.Placemark([59.976402, 30.290290], {
						hintContent: 'Собственный значок метки с контентом',
						balloonContent: 'И здесь мы тоже есть',
						iconContent: ''
				}, {
						// Опции.
						// Необходимо указать данный тип макета.
						iconLayout: 'default#imageWithContent',
						// Своё изображение иконки метки.
						iconImageHref: './icons/map-marker.svg',
						// Размеры метки.
						iconImageSize: [48, 48],
						// Смещение левого верхнего угла иконки относительно
						// её "ножки" (точки привязки).
						iconImageOffset: [-24, -24],
						// Смещение слоя с содержимым относительно слоя с картинкой.
						iconContentOffset: [15, 15],
						// Макет содержимого.
						iconContentLayout: MyIconContentLayout
				});   
	
				myPlacemark3 = new ymaps.Placemark([59.872253, 30.316383], {
						hintContent: 'Собственный значок метки с контентом',
						balloonContent: 'И здесь',
						iconContent: ''
				}, {
						// Опции.
						// Необходимо указать данный тип макета.
						iconLayout: 'default#imageWithContent',
						// Своё изображение иконки метки.
						iconImageHref: './icons/map-marker.svg',
						// Размеры метки.
						iconImageSize: [48, 48],
						// Смещение левого верхнего угла иконки относительно
						// её "ножки" (точки привязки).
						iconImageOffset: [-24, -24],
						// Смещение слоя с содержимым относительно слоя с картинкой.
						iconContentOffset: [15, 15],
						// Макет содержимого.
						iconContentLayout: MyIconContentLayout
				});  
				
				myPlacemark4 = new ymaps.Placemark([59.84963070000001, 30.0357573], {
						hintContent: 'Собственный значок метки с контентом',
						balloonContent: 'И здесь',
						iconContent: ''
				}, {
						// Опции.
						// Необходимо указать данный тип макета.
						iconLayout: 'default#imageWithContent',
						// Своё изображение иконки метки.
						iconImageHref: './icons/map-marker.svg',
						// Размеры метки.
						iconImageSize: [48, 48],
						// Смещение левого верхнего угла иконки относительно
						// её "ножки" (точки привязки).
						iconImageOffset: [-24, -24],
						// Смещение слоя с содержимым относительно слоя с картинкой.
						iconContentOffset: [15, 15],
						// Макет содержимого.
						iconContentLayout: MyIconContentLayout
				}); 
	
		myMap.geoObjects
				.add(myPlacemark1)
				.add(myPlacemark2) 
				.add(myPlacemark3) 
				.add(myPlacemark4);
		
				myMap.behaviors.disable('scrollZoom');     
	});
})

