var Common = {
	init: function() {;
        Common.menu();
        Common.main(Common.data);
        Common.popup(Common.data);
        
        
	},
    data: function() {
        const data = {
                            item1: {
                                fontSize: 48,
                                adress: 'freshnews.zt.ua',
                                name: 'freshnews.zt.ua',
                                nameMain: 'Новостной сайт',
                                info: 'Верстка и насадка сайта на движок, полный адаптив и темы',
                                color: '',
                                list:[
                                    {
                                        'adress':'freshnews.zt.ua',
                                        'name':'freshnews.zt.ua'
                                    }]
                            },
                            item2: {
                                fontSize: 48,
                                adress: 'main.html',
                                name: 'doglyad',
                                nameMain: 'Услуги для каждой собаки, doglyad',
                                info: 'разработка сайта по уходу за животными, личный кабинет, заказы, переписка - полный набор',
                                color: '',
                                
                                list:[
                                    {
                                        'adress':'main.html',
                                        'name':'index.html'
                                    },
                                    {
                                        'adress':'h.html',
                                        'name':'h.html'
                                    },
                                    {
                                        'adress':'help_article.html',
                                        'name':'Центр помощи'
                                    },
                                    {
                                        'adress':'help_cont.html',
                                        'name':'help cont.html'
                                    },
                                    {
                                        'adress':'help_list.html',
                                        'name':'help list.html'
                                    },
                                    {
                                        'adress':'help_main.html',
                                        'name':'help main.html'
                                    },
                                    {
                                        'adress':'login_1.html',
                                        'name':'login 1.html'
                                    },
                                    {
                                        'adress':'login_2.html',
                                        'name':'login 2.html'
                                    },
                                    {
                                        'adress':'login_3.html',
                                        'name':'login 3.html'
                                    },
                                    {
                                        'adress':'page_1.html',
                                        'name':'page 1.html'
                                    },
                                    {
                                        'adress':'page_2.html',
                                        'name':'page 2.html'
                                    },
                                    {
                                        'adress':'profile_client_0.html',
                                        'name':'profile client_0.html'
                                    },
                                    {
                                        'adress':'profile_client_1.html',
                                        'name':'profile client 1.html'
                                    },
                                    {
                                        'adress':'profile_dogsitter_10.html',
                                        'name':'profile dogsitter_10.html'
                                    },
                                    {
                                        'adress':'profile_dogsitter_11.html',
                                        'name':'profile dogsitter 11.html'
                                    },
                                    {
                                        'adress':'profile_dogsitter_12.html',
                                        'name':'profile dogsitter 12.html'
                                    },
                                    {
                                        'adress':'profile_dogsitter_3.html',
                                        'name':'profile dogsitter 3.html'
                                    },
                                    {
                                        'adress':'profile_dogsitter_4.html',
                                        'name':'profile dogsitter 4.html'
                                    },
                                    {
                                        'adress':'profile_dogsitter_5.html',
                                        'name':'profile dogsitter 5.html'
                                    },
                                    {
                                        'adress':'profile_dogsitter_6.html',
                                        'name':'profile dogsitter 6.html'
                                    },
                                    {
                                        'adress':'profile_dogsitter_7.html',
                                        'name':'profile dogsitter 7.html'
                                    },
                                    {
                                        'adress':'profile_dogsitter_8.html',
                                        'name':'profile dogsitter 8.html'
                                    },
                                    {
                                        'adress':'profile_dogsitter_9.html',
                                        'name':'profile dogsitter 9.html'
                                    },
                                    {
                                        'adress':'profile_dogsitter_calendar.html',
                                        'name':'profile dogsitter calendar.html'
                                    },
                                    {
                                        'adress':'profile_dogsitter_payment.html',
                                        'name':'profile dogsitter payment.html'
                                    },
                                    {
                                        'adress':'profile_dogsitter_phone_number.html',
                                        'name':'profile dogsitter phone number.html'
                                    },
                                    {
                                        'adress':'profile_info.html',
                                        'name':'profile info.html'
                                    },
                                    {
                                        'adress':'registration_1.html',
                                        'name':'registration 1.html'
                                    },
                                    {
                                        'adress':'search.html',
                                        'name':'search.html'
                                    },      
                                    
                                ]
                            }, 
                            item3:{
                                fontSize: 60,
                                adress: 'unit.ru',
                                name: 'unit.ru',
                                nameMain: 'Интернет магазин unit',
                                color: '',
                                info: 'Интернет магазин, широкий дизайн, адаптив, из особенностей, у каждого товара уникальная страница (мучался долго)',
                                list:[
                                    {
                                        'adress':'unit.ru',
                                        'name':'Главная'
                                    },
//                                    {
//                                        'adress':'unit.ru/buy/',
//                                        'name':'Где купить'
//                                    },
//                                    {
//                                        'adress':'unit.ru/service/',
//                                        'name':'Сервисные центры'
//                                    },
//                                    {
//                                        'adress':'unit.ru/production/chayniki/chaynik-elektricheskiy-unit-uek-276-stal-matovyy-1-7l-2000vt/',
//                                        'name':'Страница товара'
//                                    },
                                    
                                ]
                            },
                            item4:{
                                fontSize: 40,
                                adress: 'index_.html',
                                name: 'bixter',
                                nameMain: 'Bixter Work',
                                info: 'Интернет магазин, широкий дизайн, адаптив, из особенностей, у каждого товара уникальная страница (мучался долго)',
                                color: '',
                                list:[
                                    {
                                        'adress':'index_.html',
                                        'name':'Главная'
                                    },
                                    {
                                        'adress':'blog.html',
                                        'name':'Блог'
                                    },
                                    {
                                        'adress':'blog_page.html',
                                        'name':'Статья блога'
                                    },
                                    {
                                        'adress':'page.html',
                                        'name':'Анкета'
                                    },
                                    {
                                        'adress':'se.html',
                                        'name':'Результаты поиска'
                                    },
                                    ]
                            },
                            item5:{
                                fontSize: 40,
                                adress: 'index_.html',
                                name: 'assa',
                                nameMain: 'Видавництво ASSA',
                                info: 'Інтернет магазин, адаптив<br>',
                                color: '',
                                list:[
                                    {
                                        'adress':'index_.html',
                                        'name':'Главная'
                                    },
                                    {
                                        'adress':'card.html',
                                        'name':'Картка товара'
                                    },
                                    {
                                        'adress':'cart.html',
                                        'name':'Корзина'
                                    },
                                    {
                                        'adress':'catalog.html',
                                        'name':'Каталог товарів'
                                    },
                                    {
                                        'adress':'news.html',
                                        'name':'Новини'
                                    },
                                    {
                                        'adress':'page.html',
                                        'name':'Стаття'
                                    },
                                    ]
                            },
                            item6:{
                                fontSize: 40,
                                adress: 'index_.html',
                                name: 'cupon',
                                nameMain: 'агрегатор скидок',
                                info: 'Адаптивная верстка',
                                color: '',
                                list:[
                                    {
                                        'adress':'index_.html',
                                        'name':'Главная'
                                    },
                                    {
                                        'adress':'404.html',
                                        'name':'404'
                                    },
                                    {
                                        'adress':'allshops.html',
                                        'name':'Все магазины'
                                    },
                                    {
                                        'adress':'blog.html',
                                        'name':'Блог'
                                    },
                                    {
                                        'adress':'blog_page.html',
                                        'name':'Статья'
                                    },
                                    {
                                        'adress':'police.html',
                                        'name':'Политика'
                                    },
                                    {
                                        'adress':'kupon.html',
                                        'name':'Категория'
                                    },
                                    {
                                        'adress':'contacts.html',
                                        'name':'Контакты'
                                    },
                                    {
                                        'adress':'category_page.html',
                                        'name':'Категории'
                                    },
                                    
                                    ]
                            },
                            item7:{
                                fontSize: 40,
                                adress: '01_Grafik_rabot.html',
                                name: 'digital_admin',
                                nameMain: 'digital admin',
                                info: 'Адаптивная верстка кабинета управления школой',
                                color: '',
                                list:[
                                    {
                                        'adress':'01_Grafik_rabot.html',
                                        'name':'Главная'
                                    },
                                    {
                                        'adress':'02_Grafik_rabot_pravka.html',
                                        'name':'График обучения'
                                    },
                                    {
                                        'adress':'03_Programma_obucheniya.html',
                                        'name':'Программа обучения'
                                    },
                                    {
                                        'adress':'04_Grafik_rabot_dobavit.html',
                                        'name':'Добавление графика работ'
                                    },
                                    {
                                        'adress':'05_Dobavit_uch_st_1.html',
                                        'name':'Добавление учащегося'
                                    },
                                    {
                                        'adress':'06_Dobavit_uch_st_2.html',
                                        'name':'Добавление учащегося шаг 2'
                                    },
                                    {
                                        'adress':'07_Uch.html',
                                        'name':'Ученик'
                                    },
                                    {
                                        'adress':'08_Spisok_uch.html',
                                        'name':'Список учеников'
                                    },
                                    {
                                        'adress':'09_Otredactirovat_uch_st_1.html',
                                        'name':'Редактирование ученика'
                                    },
                                    {
                                        'adress':'10_Programma_obucheniya_dobavit.html',
                                        'name':'Программа обучения'
                                    },
                                    {
                                        'adress':'10_Programma_obucheniya_redactirovat.html',
                                        'name':'Программа обучения, редактирование'
                                    },
                                    {
                                        'adress':'11_Dobavit_uch_st_3.html',
                                        'name':'Добавление ученика 3'
                                    },
                                    {
                                        'adress':'12_Kolichestvo_mest.html',
                                        'name':'Количество мест'
                                    },
                                    {
                                        'adress':'13_Otredaktirovat_uch_st_2.html',
                                        'name':'Редактирование ученика 2'
                                    },
                                    {
                                        'adress':'14_Tabelirovanie_st_1.html',
                                        'name':'Табелирование'
                                    },
                                    {
                                        'adress':'15_Tabelirovanie_st_2.html',
                                        'name':'Табелирование загрузка'
                                    },
                                    {
                                        'adress':'17_Tabelirovanie_st_3.html',
                                        'name':'Табелирование 3'
                                    },
                                    {
                                        'adress':'18_Dobavit_uch_st_4.html',
                                        'name':'Добавление ученика 4'
                                    },
                                    {
                                        'adress':'19_login.html',
                                        'name':'Логин'
                                    },
                                    
                                    ]
                            },
                            item8:{
                                fontSize: 40,
                                adress: '/',
                                name: 'deadWeak',
                                nameMain: 'deadWeak',
                                info: 'Лендинг компании, адаптив, cервис для кроссаудита творческой и интеллектуальной работы',
                                color: '',
                                list:[
                                    {
                                        'adress':'/',
                                        'name':'Главная'
                                    },
                                    
                                    
                                    ]
                            },
                            item9:{
                                fontSize: 40,
                                adress: 'Главная.html',
                                name: 'dnorka',
                                nameMain: 'Дмитрий Норка',
                                info: 'Портал "Экспертные продажи ТРЕНИНГИ ПО ПРОДАЖАМ ДМИТРИЯ НОРКА"',
                                color: '',
                                list:[
                                    {
                                        'adress':'Главная.html',
                                        'name':'Главная'
                                    },
                                    {
                                        'adress':'Календарь%20тренингов.html',
                                        'name':'Календарь тренингов'
                                    },
                                    {
                                        'adress':'Карточка%20события.html',
                                        'name':'Карточка события'
                                    },
                                    {
                                        'adress':'Карточка%20тренера.html',
                                        'name':'Карточка тренера'
                                    },
                                    {
                                        'adress':'Карточка%20тренинга.html',
                                        'name':'Карточка тренинга'
                                    },
                                    {
                                        'adress':'Конкретная%20новость.html',
                                        'name':'Новость'
                                    },
                                    {
                                        'adress':'Контакты.html',
                                        'name':'Контакты'
                                    },
                                    {
                                        'adress':'Новости.html',
                                        'name':'Новости'
                                    },
                                    {
                                        'adress':'О%20школе.html',
                                        'name':'О школе'
                                    },
                                    {
                                        'adress':'Отзыв%20Андрея%20Андрущенко.html',
                                        'name':'Отзыв'
                                    },
                                    {
                                        'adress':'Отзывы.html',
                                        'name':'Отзывы'
                                    },
                                    {
                                        'adress':'Подписка.html',
                                        'name':'Подписка'
                                    },
                                    {
                                        'adress':'Публикации.html',
                                        'name':'Публикации'
                                    },
                                    {
                                        'adress':'Расписание.html',
                                        'name':'Расписание'
                                    },
                                    {
                                        'adress':'Спасибо%20за%20заявку.html',
                                        'name':'Спасибо за заявку'
                                    },
                                    {
                                        'adress':'Стать%20тренером%20школы%20(франшиза).html',
                                        'name':'Стать тренером школы (франшиза)'
                                    },
                                    {
                                        'adress':'Тренеры.html',
                                        'name':'Тренеры'
                                    },
                                    {
                                        'adress':'Тренинги.html',
                                        'name':'Тренинги'
                                    },
                                    {
                                        'adress':'Форма%20заказа%20корпоративного%20обучения.html',
                                        'name':'Форма заказа корпоративного обучения'
                                    },
                                    {
                                        'adress':'Форма%20найти%20обучение%20для%20себя.html',
                                        'name':'Форма найти обучение для себя'
                                    },
                                    {
                                        'adress':'форма%20вопроса%20(стандартная%20форма).html',
                                        'name':'форма вопроса (стандартная форма)'
                                    },
                                    
                                    
                                    ]
                            },
                            item10:{
                                fontSize: 40,
                                adress: 'index_.html',
                                name: 'doors',
                                nameMain: 'Планета дверей',
                                info: 'Магазин, адаптив',
                                color: '',
                                list:[
                                    {
                                        'adress':'index_.html',
                                        'name':'Главная'
                                    },
                                    {
                                        'adress':'action.html',
                                        'name':'Акции'
                                    },
                                    {
                                        'adress':'card.html',
                                        'name':'Карточка товара'
                                    },
                                    {
                                        'adress':'card2.html',
                                        'name':'Карточка товара 2'
                                    },
                                    {
                                        'adress':'cart.html',
                                        'name':'Корзина'
                                    },
                                    {
                                        'adress':'catalog.html',
                                        'name':'Каталог'
                                    },
                                    {
                                        'adress':'new_action.html',
                                        'name':'Новая акция'
                                    },
                                    {
                                        'adress':'map.html',
                                        'name':'Контакты'
                                    },
                                    {
                                        'adress':'category.html',
                                        'name':'Категории'
                                    },
                                    {
                                        'adress':'catalog2.html',
                                        'name':'Каталог 2'
                                    },
                                    {
                                        'adress':'services.html',
                                        'name':'Услуги'
                                    },
                                    {
                                        'adress':'services_call.html',
                                        'name':'Вызов замерщика'
                                    },
                                    {
                                        'adress':'services_delivery.html',
                                        'name':'Доставка'
                                    },
                                    {
                                        'adress':'services_installation.html',
                                        'name':'Прайс'
                                    },
                                    
                                    
                                    ]
                            },
                            item11:{
                                fontSize: 40,
                                adress: 'dashboardMini.html',
                                name: 'bootme',
                                nameMain: 'boot up me',
                                info: 'Редизайн сервиса прокачки инстграмм акаунтов',
                                color: '',
                                list:[
                                    {
                                        'adress':'dashboardMini.html',
                                        'name':'Дашборд мини'
                                    },
                                    {
                                        'adress':'tools.html',
                                        'name':'Тулзы'
                                    },
                                    {
                                        'adress':'specSearch.html',
                                        'name':'Расширенный поиск'
                                    },
                                    {
                                        'adress':'dashboard.html',
                                        'name':'Дашборд'
                                    },
                                    {
                                        'adress':'restore_pass_send.html',
                                        'name':'Напоминание пароля'
                                    },
                                    {
                                        'adress':'login.html',
                                        'name':'Логин'
                                    },
                                    
                                    
                                    
                                    ]
                            },
                            
                        }
        return data
    },

    menu: function() {
        $('.nav_a').on('click',function(e){
            e.preventDefault();
            $([document.documentElement, document.body]).animate({
                scrollTop: $("."+$(this).data('a')).offset().top
            }, 500);
        })
    },
    main: function(func) {
        
        var data = func();

        function resize() {
            let text = $('.portfolio-list_a');
            for (let i=0; i<text.length; i++) {
                let string = text[i].innerHTML.trim(); // Получаем текст строки
                string = string.replace(/<[^>]+>/g,''); // Удаляем из нее все теги
                text[i].style.fontSize = (text[i].offsetWidth / string.length * 1.4).toFixed() + "px"; // Устанавливаем размер шрифта, в зависимости от ширины строки и кол-ва букв 
                text[i].innerHTML = string.replace(/(.)/g, '<span style="min-width: '+ (text[i].offsetWidth / string.length / 1.4).toFixed() +'px">$1</span>'); // Добавляем к буквам тег span для выравнивания
            }
        }
        window.addEventListener("resize", resize);
        resize();
        
//        $.fn.preload = function() {
//            this.each(function(){
//                $('<img/>')[0].src = this;
//            });
//        }
//
//
//
//        $(['images/list/advokat-dyachkov.ru.jpg',
//            'images/list/amsterdam-seeds.nl.jpg',
//            'images/list/art-rc.ru.jpg',
//            'images/list/cigaronne.com.jpg',
//            'images/list/de-vivre.com.jpg',
//            'images/list/doglyad.com.jpg',
//            'images/list/equiptrade24.ru.jpg',
//            'images/list/freshnews.zt.ua.jpg',
//            'images/list/kr-tv.ru.jpg',
//            'images/list/neomid-ukraine.com.jpg',
//            'images/list/senso-rf.ru.jpg',
//            'images/list/shkolakos.ru.jpg',
//            'images/list/sirotin-k.ru.jpg',
//            'images/list/skilla3d.ru.jpg',
//            'images/list/trinfico.com.jpg',
//            'images/list/unit.ru.jpg',
//            'images/list/usadbadivnomorskoe.ru.jpg',
//            'images/list/util-euro.ru.jpg',
//            'images/list/velles.ru.jpg',
//            'images/list/vseomuzhskom.ru.jpg',
//            'images/list/weektrade.ru.jpg',
//            'images/list/witology.com.jpg',]).preload();
        
        
        $('.portfolio-list_a').on('click',function(e){
            e.preventDefault();
            
            //remove active el
            $('.portfolio-list_a').removeClass('active');
            
            //active el
            $(this).addClass('active');
            
            
            var parentDiv = $(this),
                item = $('.portfolio-list_a.active').data('item'),
                text = data[item].name;
            
            
            //position
            
            if($('.portfolio-list').height() - parentDiv.position().top < 270) {
                
                $('.portfolio-img_block').css('margin-top', $('.portfolio-list').height() - 270)
                
            }else {
                $('.portfolio-img_block').css('margin-top', parentDiv.position().top)
                
            }
            
            //color line
            //$('.portfolio-list_line').css({'top': parentDiv.position().top + (parentDiv.height() / 2), 'left': parentDiv.width() + 10})
            
            //image + text + href
            
            $('.portfolio-img_block img').attr('src','images/list/' + text + '.jpg')
            
            if(parentDiv.data('noadress') != true) {
                
                $('.portfolio-img-a').text(text).attr('href','http://'+text) 
                
            }else {
                
                $('.portfolio-img-a').text('').attr('href','#');
                
            }
            
            
        })  
        
    },
    popup: function(func) {
    
        var data = func()
        var view = 'desktop';
        
        
        //console.log(data.item2.list)
        
        function leftMenu(key) {
            $('.index_list').html('')
            $('.popup-head').html(data[key].nameMain);
            $('.popup-subhead').html(data[key].info);
            
            if($('.portfolio-list_a.active').data('noadress') != true) {
                
               data[key].list.forEach(function(item, i, arr) {

                    $('.index_list').append('<li class="index_li"><a href="https://'+data[key].name+'/'+item.adress+'">'+item.name+'</a></li>');

                });
                
            }else {
                
                data[key].list.forEach(function(item, i, arr) {

                    $('.index_list').append('<li class="index_li"><a href="https://o1egbro.github.io/'+data[key].name+'/'+item.adress+'">'+item.name+'</a></li>');

                });
            }
            
            $('.index_li:first-child').addClass('active')
        }
        
        
        function checkSize() {
            
            if($('.popup-block__in').width() >= $('.popup-block').width()) {
                $('.popup-block__in').css('transform','scale('+ $('.popup-block').width() / $('.popup-block__in').width() +')')
            }
            
            if($('.popup-block__in').height() >= $('.popup-block').height()) {
                $('.popup-block__in').css('transform','scale('+ $('.popup-block').height() / ($('.popup-block__in').height() + 80) +')')
            }
            
            if($('.popup-block__in').width() / $('.popup-block').width() >= $('.popup-block__in').height() / $('.popup-block').height()) {
                $('.popup-block__in').css('transform','scale('+ $('.popup-block').width() / $('.popup-block__in').width() +')')
            }
        }
        
        function addSize() {
            
            $('body').removeClass(view)
            view =  $('.popup_menu_a.active').html().trim();
            $('body').addClass(view)
            
            
            switch (view) {
              case "desktop":
                $('.popup-block__in').removeAttr('class').addClass('popup-block__in desktop');
                    checkSize()
                break;
              case "tablet":
                $('.popup-block__in').removeAttr('class').addClass('popup-block__in tablet');
                    checkSize()
                break;
              case "mobile":
                $('.popup-block__in').removeAttr('class').addClass('popup-block__in mobile');
                    checkSize()
                break;
              default:
                console.log("default");
            }
           
        }
        
        
        $('.popup_menu_a').on('click',function(){
            $('.popup_menu_a').removeClass('active');
            $(this).addClass('active');
            addSize()
        })
        
        
            $( window ).resize(function() {
                if($('body').hasClass('popupOpenTrue')) {
                    checkSize()
                };
            })
        
        
        
        $('.openPopup').on('click',function(e){
            
            e.preventDefault();
            
            $('.popup-block').addClass('load');
            
            var item = $('.portfolio-list_a.active').data('item'),
                oleg = 'o1egbro.github.io/'

                $('body').addClass('popupOpenTrue '+ view)
                $('.popup').show();
                checkSize();
                leftMenu(item);
            
            if($('.portfolio-list_a.active').data('noadress') != true) {
                
                $('.popup-block__in .openPopup').remove();
                $('.popup').addClass('noAdress');
                $('.popup-frame').after($('.openPopup').clone().attr('href','https://'+data[item].name))
                
                $('.popup-frame').attr('src',' ');
                $('.popup_adress a').html('https://'+data[item].name).attr('href','https://'+data[item].name)
                
            }else {
               
                $('.popup').removeClass('noAdress');
                $('.popup-block__in .openPopup').remove();
                
                $('.popup-frame').attr('src','https://'+oleg+data[item].name+'/'+data[item].adress);
                $('.popup_adress a').html('https://'+oleg+data[item].name).attr('href','https://o1egbro.github.io/'+data[item].name).parent('div').prepend('github pages - ')
                
                //TEMP
                $('.popup_adress').append('<br>github code - <a target="_blank" href="https://github.com/O1egBro/'+data[item].name+'">https://github.com/O1egBro/'+data[item].name+'</a>')
            }
            addSize()

        });
        
        //close popup
        $('.popup__close').on('click',function(e){
            e.preventDefault();
            $('body').removeClass('popupOpenTrue ' + view)
            $('.popup').hide();
            
            $('.popup-frame').attr('src',' ');
            $('.popup-frame ~ img').remove();
            
            
        });
        
        //load iframe & change list active el
        $(document).on('click','.index_li',function(e){
            e.preventDefault();
            
            $('.popup-frame').attr('src',$(e.target).attr('href'));
            
            $('.popup-block').addClass('load');
            
            $('.index_li').removeClass('active');
            $(this).addClass('active')
            
        });
        
        
        //frame load
        document.querySelector('iframe').onload = iframeOnload;
        function iframeOnload () {
            $('.popup-block').removeClass('load');
        }
        
        
    }
};

$(function() {
	Common.init();
});