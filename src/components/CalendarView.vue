<template>
  <div class="calendar">
    <div class="controls">
      <button @click="prevMonth">←</button>
      <div>{{ monthName }} {{ currentYear }}</div>
      <button @click="nextMonth">→</button>

    </div>
    <div class="days-of-week">
      <div v-for="dayKey in daysOfWeek" :key="dayKey" class="day-of-week">
        {{ $t(`calendar.daysOfWeek.${dayKey}`) }}
      </div>
    </div>

    <div class="days-grid">
      <div v-for="day in daysOfMonth" :key="day.dateString" class="day" :class="{ 'selected': isSelected(day) }" @click="() => selectDay(day)">
        {{ day.day }}
      </div>
    </div>


    <div class="selected-date" v-if="selectedDate && selectedDate.value !== null">
      {{ $t('calendar.selectedDate') }}: {{ currentSelectedDate }}
    </div>


  </div>
</template>



<script>
import { ref, computed } from 'vue';
import { daysOfWeekKeys } from "@/global.js";
import {useI18n} from "vue-i18n";

export default {
  props: {
    initialDate: String
  },
  setup(props) {
    const { t } = useI18n();

    const initialDate = props.initialDate ? new Date(props.initialDate) : new Date();
    const currentDate = ref(initialDate);
    const currentMonth = ref(initialDate.getMonth());
    const currentYear = ref(initialDate.getFullYear());

    const monthName = computed(() => {
      return t(`calendar.months.${currentMonth.value}`);
    });


    const daysOfWeek = [
      daysOfWeekKeys.Sun,
      daysOfWeekKeys.Mon,
      daysOfWeekKeys.Tue,
      daysOfWeekKeys.Wed,
      daysOfWeekKeys.Thu,
      daysOfWeekKeys.Fri,
      daysOfWeekKeys.Sat,
    ];

    const daysOfMonth = computed(() => {
      const days = [];
      const firstDayOfMonth = new Date(currentYear.value, currentMonth.value, 1);
      const lastDayOfMonth = new Date(currentYear.value, currentMonth.value + 1, 0);
      const daysInMonth = lastDayOfMonth.getDate();
      const firstDayOfWeek = firstDayOfMonth.getDay();

      for (let i = 0; i < firstDayOfWeek; i++) {
        days.push({ day: null, dateString: '', isCurrentMonth: false });
      }

      for (let i = 1; i <= daysInMonth; i++) {
        const dayDate = new Date(currentYear.value, currentMonth.value, i);
        days.push({ day: dayDate.getDate(), dateString: dayDate.toISOString(), isCurrentMonth: true });
      }

      return days;
    });

    function nextMonth() {
      const nextMonthDate = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
      currentDate.value = nextMonthDate;
      currentMonth.value = nextMonthDate.getMonth();
      currentYear.value = nextMonthDate.getFullYear();
    }

    function prevMonth() {
      const prevMonthDate = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
      currentDate.value = prevMonthDate;
      currentMonth.value = prevMonthDate.getMonth();
      currentYear.value = prevMonthDate.getFullYear();
    }

    const selectedDate = ref(null);
    const currentSelectedDate = computed(() => {
      const date = selectedDate.value;
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    });


    function selectDay(day) {
      if (!day.isCurrentMonth) return;
      selectedDate.value = new Date(currentYear.value, currentMonth.value, day.day );
    }

    function isSelected(day) {
      return selectedDate.value && selectedDate.value.toISOString() === day.dateString;
    }


    return { currentMonth, currentYear, monthName, daysOfWeek, daysOfMonth, nextMonth, prevMonth, selectDay , selectedDate , isSelected, currentSelectedDate };
  },
};
</script>


<style>
.calendar {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  padding: 20px;
  min-width: 400px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.controls {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  margin-bottom: 20px;
}

.controls button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.controls button:hover {
  background-color: #0056b3;
}

.days-of-week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  margin-bottom: 10px;
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  width: 100%;
  min-height: 275px;
}

.day, .day-of-week {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  min-width: 30px;
  background-color: #ffffff;
  border-radius: 4px;
}

.day {
  cursor: pointer;
  transition: transform 0.2s;
}

.day:hover {
  transform: scale(1.1);
}

.selected {
  border: 2px solid #007bff;
}

</style>