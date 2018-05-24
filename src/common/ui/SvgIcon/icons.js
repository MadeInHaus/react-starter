const icons = {
    github:
        '<svg viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fill-rule="evenodd" d="M16.608.455C7.614.455.32 7.748.32 16.745c0 7.197 4.667 13.302 11.14 15.456.815.15 1.112-.353 1.112-.785 0-.386-.014-1.411-.022-2.77-4.531.984-5.487-2.184-5.487-2.184-.741-1.882-1.809-2.383-1.809-2.383-1.479-1.01.112-.99.112-.99 1.635.115 2.495 1.679 2.495 1.679 1.453 2.489 3.813 1.77 4.741 1.353.148-1.052.569-1.77 1.034-2.177-3.617-.411-7.42-1.809-7.42-8.051 0-1.778.635-3.233 1.677-4.371-.168-.412-.727-2.069.16-4.311 0 0 1.367-.438 4.479 1.67a15.602 15.602 0 0 1 4.078-.549 15.62 15.62 0 0 1 4.078.549c3.11-2.108 4.475-1.67 4.475-1.67.889 2.242.33 3.899.163 4.311C26.37 12.66 27 14.115 27 15.893c0 6.258-3.809 7.635-7.437 8.038.584.503 1.105 1.497 1.105 3.017 0 2.177-.02 3.934-.02 4.468 0 .436.294.943 1.12.784 6.468-2.159 11.131-8.26 11.131-15.455 0-8.997-7.294-16.29-16.291-16.29" /></svg>',
    facebook:
        '<svg viewBox="0 0 64 64"><path fill="currentColor" d="M36.4625053,60H25.9625034V32h-7v-9.625h7v-5.6000004C25.9625053,8.7250004,28.0625057,4,37.3375053,4h7.6999969v9.625 h-4.8999977c-3.6749992,0-3.8500023,1.4000006-3.8500023,3.8500004V22.375h8.75l-0.875,9.625h-7.6999969V60z" /></svg>',
    instagram:
        '<svg viewBox="0 0 64 64"><path fill="currentColor" d="M58.02191,21.27509c-0.1781-2.67126-0.53424-4.63013-1.24658-6.23291c-0.71234-1.78082-1.60272-3.20544-3.0274-4.63013 c-1.42462-1.42468-2.8493-2.31506-4.63013-3.0274c-1.60272-0.71234-3.56165-1.06848-6.23285-1.24658 c-2.8493-0.17804-3.73975-0.17804-10.68494-0.17804s-7.83563,0-10.68494,0.17804c-2.6712,0.1781-4.63013,0.53424-6.23285,1.24658 c-1.78082,0.71234-3.20551,1.60272-4.63013,3.0274c-1.42468,1.42468-2.31512,2.8493-3.0274,4.63013 c-0.71234,1.60278-1.06854,3.56165-1.24658,6.23291c-0.1781,2.6712-0.1781,3.56165-0.1781,10.68494s0,7.83557,0.1781,10.68494 c0.17804,2.6712,0.53424,4.63013,1.24658,6.23285c0.71228,1.78082,1.60272,3.20544,3.02734,4.63013 c1.42468,1.42468,2.84937,2.31506,4.63019,3.0274c1.60272,0.71234,3.56165,1.06848,6.23285,1.24658 c2.6712,0.17804,3.56165,0.17804,10.68494,0.17804s7.83563,0,10.68494-0.17804c2.6712-0.1781,4.63013-0.53424,6.23285-1.24658 c1.78082-0.71234,3.20551-1.60272,4.63013-3.0274c1.42468-1.42468,2.31506-2.8493,3.0274-4.63013 c0.71234-1.60272,1.06848-3.56165,1.24658-6.23285c0.1781-2.67126,0.1781-3.56165,0.1781-10.68494 S58.20001,24.12439,58.02191,21.27509z M53.39178,42.46686c-0.1781,2.49316-0.53424,3.91779-0.89044,4.80823 c-0.53424,1.24658-1.06848,2.13696-1.95886,3.0274c-0.89044,0.89038-1.78082,1.42462-3.0274,1.95886 c-0.89044,0.3562-2.31506,0.71234-4.80823,0.89044c-2.67126,0.17804-3.56165,0.17804-10.50684,0.17804s-7.65753,0-10.50684-0.1781 c-2.49316-0.17804-3.91785-0.53424-4.80823-0.89038c-1.24658-0.53424-2.13696-1.06848-3.0274-1.95886 c-0.89038-0.89044-1.42468-1.78082-1.95892-3.0274c-0.35614-0.89044-0.71228-2.31506-0.89038-4.80823 c-0.1781-2.67126-0.1781-3.56165-0.1781-10.50684c0-6.94525,0-7.65759,0.1781-10.5069 c0.1781-2.4931,0.53424-3.91779,0.89038-4.80823c0.53424-1.24652,1.06854-2.13696,1.95892-3.02734 c0.89044-0.89044,1.78082-1.42468,3.0274-1.95892c0.89038-0.3562,2.31506-0.71234,4.80823-0.89044 c2.8493-0.17804,3.56165-0.17804,10.50684-0.17804s7.65753,0,10.50684,0.1781c2.49316,0.17804,3.91779,0.53424,4.80823,0.89038 c1.24658,0.53424,2.13696,1.06848,3.0274,1.95892c0.89038,0.89038,1.42462,1.78082,1.95892,3.0274 c0.35614,0.89038,0.71228,2.31506,0.89038,4.80817c0.1781,2.67126,0.1781,3.56165,0.1781,10.5069 C53.56989,38.90521,53.56989,39.61755,53.39178,42.46686z" /><path fill="currentColor" d="M32.20001,18.60382c-7.30139,0-13.1781,5.87671-13.1781,13.1781s5.87671,13.1781,13.1781,13.1781 c7.30133,0,13.1781-5.87671,13.1781-13.1781S39.50134,18.60382,32.20001,18.60382z M32.20001,40.32983 c-4.80823,0-8.54791-3.91779-8.54791-8.54791s3.91779-8.54797,8.54791-8.54797s8.54791,3.91785,8.54791,8.54797 S37.00824,40.32983,32.20001,40.32983z" /><path fill="currentColor" d="M46.09039,15.04218c-1.60272,0-3.0274,1.42468-3.0274,3.0274s1.24658,3.0274,3.0274,3.0274 c1.60278,0,3.0274-1.24658,3.0274-3.0274S47.69318,14.86414,46.09039,15.04218z" /></svg>',
    linkedin:
        '<svg viewBox="0 0 64 64"><path fill="currentColor" d="M48.1717491,7.9984102H15.9741688c-4.363224,0-7.9741678,3.6109438-7.9741678,7.9741678v31.9012089 c0,4.5136795,3.6109438,8.1246223,7.9741678,8.1246223h32.0471268c4.363224,0,7.9741707-3.6109428,7.9741707-7.9741669V15.972578 C56.145916,11.609354,52.5349731,7.9984102,48.1717491,7.9984102z M22.6329365,48.0150032h-7.1671524V26.21492h7.1671524V48.0150032 z M19.0493584,23.2286072L19.0493584,23.2286072c-2.5383644,0-4.0315218-1.6424732-4.0315218-3.7328911 s1.6424723-3.732892,4.0315218-3.732892c2.5383663,0,4.0315228,1.6424723,4.0315228,3.732892 C23.2301979,21.5861359,21.5877247,23.2286072,19.0493584,23.2286072z M48.763176,48.0150032h-7.1671524V36.3683853 c0-2.9863129-1.0452118-4.9274178-3.7328911-4.9274178c-1.9411049,0-3.1356316,1.3438416-3.7328911,2.6876831 c-0.1493187,0.4479446-0.2986336,1.0452118-0.2986336,1.79179V48.015007h-7.1671524c0,0,0.1493168-19.7096653,0-21.8000851 h7.1671524v3.1356297c0.8958931-1.4931583,2.6876793-3.5835762,6.5698891-3.5835762 c4.7780991,0,8.3616753,3.1356297,8.3616753,9.8548355L48.763176,48.0150032L48.763176,48.0150032z" /></svg>',
    twitter:
        '<svg viewBox="0 0 64 64"><path fill="currentColor" d="M58,15.8769531c-1.939846,0.8125-3.889843,1.4624996-6.1546898,1.625 c2.264843-1.3000011,3.889843-3.4023438,4.702343-5.8296881c-2.1023445,1.3000011-4.3773422,2.1023445-6.8046875,2.5898438 c-1.7773438-2.1023436-4.7023392-3.4023438-7.6171875-3.4023438c-5.8296852,0-10.6945305,4.7023439-10.6945305,10.6945333 c0,0.8125,0.1625023,1.625,0.3250008,2.4273415c-8.9070301-0.4874992-16.686718-4.702343-22.028904-11.1820297 c-0.9750004,1.625-1.4625006,3.4023438-1.4625006,5.342186c0,3.7273445,1.9398441,6.9671879,4.7023439,8.907032 c-1.7773438,0-3.4023438-0.4875011-4.8648434-1.3000011v0.1625004c0,5.1796875,3.7273436,9.3945312,8.5820303,10.3695335 c-0.9749994,0.1624985-1.7773428,0.3250008-2.7523432,0.3250008c-0.6499996,0-1.3000002,0-1.9398432-0.1625023 c1.3000002,4.2148438,5.342186,7.2921867,9.8820305,7.454689c-3.5648422,2.9148445-8.2570305,4.5398445-13.2843742,4.5398445 c-0.8125,0-1.7773438,0-2.5898438-0.1625023c4.702343,3.077343,10.3695316,4.8648453,16.3617191,4.8648453 c19.6015606,0,30.2960911-16.1992188,30.2960911-30.296093c0-0.4875011,0-0.9750004,0-1.3000011 C54.7601585,19.7566395,56.547657,17.9792976,58,15.8769531z" data-reactid="573" /></svg>',
};

export default icons;