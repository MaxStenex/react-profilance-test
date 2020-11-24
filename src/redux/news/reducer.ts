export interface ArticleType {
  id: number;
  title: string;
  text: string;
  createdAt: string;
}

export interface NewsStateType {
  allNews: Array<ArticleType>;
}

const initialState: NewsStateType = {
  allNews: [
    {
      id: 1,
      title: "Ограбление Луны по-китайски",
      text:
        "Пока американские и российские политики спорят о праве собственности на Луну, Китай уже приступил к её присвоению. Сегодня стартует автоматическая межпланетная станция Chang'e 5, которая должна до конца года доставить на Землю до 2 кг лунного грунта.",
      createdAt: new Date().toUTCString(),
    },
    {
      id: 2,
      title: "Языки, которые почти стали CSS",
      text:
        "Когда в 1991 году Тим Бернерс-Ли объявил о создании HTML, способов стилизации страниц не существовало. Способ рендеринга тегов HTML определялся браузером и на него значительно влияли пользовательские настройки.",
      createdAt: new Date().toUTCString(),
    },
  ],
};

export const newsReducer = (state = initialState, action: any): NewsStateType => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
