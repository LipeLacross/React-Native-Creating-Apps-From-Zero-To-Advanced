import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
  type FlatListProps,
} from 'react-native';

import Header from '../../components/Header';
import { Background, Area, Title } from './styles';

import api from '../../services/api';
import { format } from 'date-fns';

import { useIsFocused } from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItem';
import HistoricoList from '../../components/HistoricoList';
import CalendarModal from '../../components/CalendarModal';

import Icon from 'react-native-vector-icons/MaterialIcons';
import type { BalanceData, MovementData } from '../../types/finance';

function BalanceFlatList(props: FlatListProps<BalanceData>) {
  return <FlatList {...props} />;
}

function MovementFlatList(props: FlatListProps<MovementData>) {
  return <FlatList {...props} />;
}

export default function Home() {
  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState<BalanceData[]>([]);
  const [movements, setMovements] = useState<MovementData[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      let date = new Date(dateMovements);
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
      let dateFormated = format(onlyDate, 'dd/MM/yyyy');

      const receives = await api.get('/receives', {
        params: {
          date: dateFormated,
        },
      });

      const balance = await api.get('/balance', {
        params: {
          date: dateFormated,
        },
      });

      if (isActive) {
        setMovements(receives.data);
        setListBalance(balance.data);
      }
    }

    getMovements();

    return () => {
      isActive = false;
    };
  }, [isFocused, dateMovements]);

  async function handleDelete(id: string) {
    try {
      await api.delete('/receives/delete', {
        params: {
          item_id: id,
        },
      });

      setDateMovements(new Date());
    } catch (err) {
      console.log(err);
    }
  }

  function filterDateMovements(dateSelected: Date) {
    // console.log(dateSelected);
    setDateMovements(dateSelected);
  }

  return (
    <Background>
      <Header title="Minhas movimentações" />

      <BalanceFlatList
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: BalanceData) => item.tag}
        renderItem={({ item }: { item: BalanceData }) => (
          <BalanceItem data={item} />
        )}
        style={styles.balanceList}
      />

      <Area>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="event" color="#121212" size={30} />
        </TouchableOpacity>
        <Title>Ultimas movimentações</Title>
      </Area>

      <MovementFlatList
        data={movements}
        keyExtractor={(item: MovementData) => item.id}
        renderItem={({ item }: { item: MovementData }) => (
          <HistoricoList data={item} deleteItem={handleDelete} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        style={styles.movementList}
      />

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <CalendarModal
          setVisible={() => setModalVisible(false)}
          handleFilter={filterDateMovements}
        />
      </Modal>
    </Background>
  );
}

const styles = StyleSheet.create({
  balanceList: {
    maxHeight: 190,
  },
  movementList: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  listContent: {
    paddingBottom: 20,
  },
});
