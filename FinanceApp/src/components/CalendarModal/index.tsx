import React, { useState } from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import {
  Container,
  ButtonFilterText,
  ModalContent,
  ButtonFilter,
} from './styles';

import { Calendar, LocaleConfig, DateData } from 'react-native-calendars';
import { ptBR } from './localeCalendar';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

type CalendarModalProps = {
  setVisible: () => void;
  handleFilter: (date: Date) => void;
};

export default function CalendarModal({
  setVisible,
  handleFilter,
}: CalendarModalProps) {
  const [dateNow, setDateNow] = useState(new Date());
  const [markeddates, setMarkedDates] = useState({});

  function handleOnDayPress(date: DateData) {
    //console.log(date.dateString);
    setDateNow(new Date(date.dateString));

    let markedDay: any = {};

    markedDay[date.dateString] = {
      selected: true,
      selectedColor: '#3b3dbf',
      textColor: '#FFF',
    };

    setMarkedDates(markedDay);
  }

  function handleFilterDate() {
    handleFilter(dateNow);
    setVisible();
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={styles.emptyView} />
      </TouchableWithoutFeedback>

      <ModalContent>
        <Calendar
          onDayPress={handleOnDayPress}
          markedDates={markeddates}
          enableSwipeMonths={true}
          theme={{
            todayTextColor: '#FF0000',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#FFF',
          }}
        />

        <ButtonFilter onPress={handleFilterDate}>
          <ButtonFilterText>Filtrar</ButtonFilterText>
        </ButtonFilter>
      </ModalContent>
    </Container>
  );
}

const styles = StyleSheet.create({
  emptyView: {
    flex: 1,
  },
});
