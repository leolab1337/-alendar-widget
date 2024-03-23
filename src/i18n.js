import { createI18n } from 'vue-i18n';
import {daysOfWeekKeys} from "@/global.js";

const messages = {
    en: {
        message: {
            hello: 'hello workhands!',
        },
        calendar: {
            daysOfWeek: {
                    [daysOfWeekKeys.Mon]: "Mon",
                    [daysOfWeekKeys.Tue]: "Tue",
                    [daysOfWeekKeys.Wed]: "Wed",
                    [daysOfWeekKeys.Thu]: "Thu",
                    [daysOfWeekKeys.Fri]: "Fri",
                    [daysOfWeekKeys.Sat]: "Sat",
                    [daysOfWeekKeys.Sun]: "Sun",
            },
            months: [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ],
            prevMonth : "Previous month",
            nextMonth: "Next month",
            selectedDate: "Selected date"
        }
    },
    ru: {
        message: {
            hello: 'привет рабочие руки!',
        },
        calendar: {
            daysOfWeek: {
                [daysOfWeekKeys.Mon]: "Пн",
                [daysOfWeekKeys.Tue]: "Вт",
                [daysOfWeekKeys.Wed]: "Ср",
                [daysOfWeekKeys.Thu]: "Чт",
                [daysOfWeekKeys.Fri]: "Пт",
                [daysOfWeekKeys.Sat]: "Сб",
                [daysOfWeekKeys.Sun]: "Вс",
            },
            months: [
                "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
            ],
            prevMonth : "Предыдущий месяц",
            nextMonth: "Следующий месяц",
            selectedDate: "Выбранная дата"
        }
    }
};

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages,
});

export default i18n;
