import { NewsActions, NewsActionTypes } from "./actions";

export interface ArticleType {
  title: string;
  text: string;
  createdAt: Date;
  verified: boolean;
  createdBy: string | null;
}

export interface NewsStateType {
  allNews: Array<ArticleType>;
}

const initialState: NewsStateType = {
  allNews: [
    {
      title: "Ограбление Луны по-китайски",
      text:
        "Пока американские и российские политики спорят о праве собственности на Луну, Китай уже приступил к её присвоению. Сегодня стартует автоматическая межпланетная станция Chang'e 5, которая должна до конца года доставить на Землю до 2 кг лунного грунта.",
      createdAt: new Date("October 6, 2000 06:34:00"),
      verified: true,
      createdBy: "user",
    },
    {
      title: "Языки, которые почти стали CSS",
      text:
        "Когда в 1991 году Тим Бернерс-Ли объявил о создании HTML, способов стилизации страниц не существовало. Способ рендеринга тегов HTML определялся браузером и на него значительно влияли пользовательские настройки.",
      createdAt: new Date("December 17, 1995 03:24:00"),
      verified: false,
      createdBy: "user",
    },
    {
      title:
        "В России сохраняются проблемы с доступностью сайтов, но никто их не замечает",
      text:
        "Из-за блокировок Роскомнадзора большое количество ресурсов, находящихся на Amazon CloudFront и Akamai, периодически становятся кратковременно недоступны. Проблема вызвана частой сменой (ротацией) IP-адресов на доменах, использующих эти сервисы, а также балансировками на основе геопризнака и EDNS Client Subnet: периодически DNS-серверы ресурсов выдают клиентам адреса, внесённые в Реестр запрещенных сайтов. Неосведомлённому человеку сложно определить причину проблемы, так как через минуту всё, как правило, снова работает (но через какое-то время опять перестаёт).",
      createdAt: new Date("January 15, 2003 03:24:00"),
      verified: true,
      createdBy: "user",
    },
    {
      title: "Кунг-фу стиля Linux: наблюдение за файлами",
      text:
        "Linux или Unix приятно отличаются от многих других операционных систем тем, что Linux-программы часто выдают сообщения, которые записываются в какой-нибудь журнал. А многие команды даже можно настроить так, чтобы они генерировали бы больше сообщений, чем обычно.",
      createdAt: new Date("July 5, 2010 03:24:00"),
      verified: false,
      createdBy: "user",
    },
    {
      title: "Кибатлон 2020: российские киборги начинают и выигрывают",
      text:
        "Неделю назад в Москве прошло второе международное состязание киборгов — Cybathlon 2020. Первое состоялось в 2016 году в Цюрихе. Помните, мы рассказывали, как это было? В этот раз Россия предстала настоящей высокотехнологичной сборной и показала крутой результат!",
      createdAt: new Date("June 20, 2019 03:24:00"),
      verified: false,
      createdBy: "user",
    },
  ],
};

export const newsReducer = (state = initialState, action: NewsActions): NewsStateType => {
  switch (action.type) {
    case NewsActionTypes.ADD_ARTICLE: {
      return {
        allNews: [...state.allNews, action.payload],
      };
    }
    case NewsActionTypes.VERIFY_ARTICLE: {
      return {
        allNews: state.allNews.map((article) => {
          if (article.createdAt === action.payload.createdAt) {
            article.verified = true;
          }
          return article;
        }),
      };
    }
    case NewsActionTypes.DELETE_ARTICLE: {
      return {
        allNews: state.allNews.filter((article) =>
          article.createdAt !== action.payload.createdAt ? true : false
        ),
      };
    }

    default: {
      return state;
    }
  }
};
