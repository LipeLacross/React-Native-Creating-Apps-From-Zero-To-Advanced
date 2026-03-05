import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import * as Notifications from 'expo-notifications'

// Configurar como as notificações são exibidas quando o app está em foreground
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App(){
  const [statusNotification, setStatusNotification] = useState(true);
  const [notificationIds, setNotificationIds] = useState<string[]>([]);

  useEffect(() => {
    async function getPermission(){
      const { status } = await Notifications.requestPermissionsAsync();
      if(status === 'granted'){
        console.log("Permissão para notificações concedida")
        setStatusNotification(true);
      }else{
        console.log("Usuário negou a permissão!")
        setStatusNotification(false);
      }
    }

    getPermission();
  }, [])

  // Listener para notificações quando app está em foreground
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      console.log("Notificação recebida (foreground):", notification);
    });

    return () => {
      subscription.remove();
    };
  }, [])

  // Listener para quando usuário toca na notificação
  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      console.log("Usuário tocou na notificação:", response.notification.request.content);
    });

    return () => {
      subscription.remove();
    };
  }, [])

  async function handleNotificate(){
    if(!statusNotification){
      console.log("Permissão de notificação não concedida");
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Estudar Programação!",
        body: "Lembrete para estudar React Native amanhã!",
        sound: 'default',
        badge: 1,
      },
      trigger: null, // null significa imediato
    })

    console.log("Notificação enviada!");
  }

  async function handleScheduleNotification(){
    if(!statusNotification){
      return;
    }

    // Agendar para 1 minuto a frente
    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Lembrete Estudo",
        body: "Estudar JavaScript às 15:30",
        sound: 'default',
        badge: 1,
      },
      trigger: {
        seconds: 60,
      },
    })

    setNotificationIds([...notificationIds, notificationId])
    console.log("Notificação agendada:", notificationId)
  }

  function handleListNotifications(){
    console.log("IDs das notificações agendadas:", notificationIds)
    if(notificationIds.length === 0){
      console.log("Nenhuma notificação agendada")
    }
  }

  async function handleCancelNotification(){
    if(notificationIds.length === 0){
      console.log("Nenhuma notificação para cancelar")
      return;
    }

    const lastId = notificationIds[notificationIds.length - 1];
    await Notifications.cancelScheduledNotificationAsync(lastId)
    setNotificationIds(notificationIds.filter(id => id !== lastId))
    console.log("Notificação cancelada com sucesso!")
  }

  async function handleScheduleRecurringNotification(){
    if(!statusNotification){
      return;
    }

    // Agendar para se repetir diariamente (86400 segundos = 1 dia)
    // Nota: Expo não suporta notificações mensais/semanais direto
    // Para semanal, usamos 7 * 24 * 60 * 60 = 604800 segundos
    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Lembrete Semanal",
        body: "Não esqueça de revisar seus estudos de React Native!",
        sound: 'default',
        badge: 1,
      },
      trigger: {
        seconds: 7 * 24 * 60 * 60, // 7 dias em segundos
        repeats: true,
      },
    })

    setNotificationIds([...notificationIds, notificationId])
    console.log("Notificação recorrente (semanal) agendada:", notificationId)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Notificações App</Text>

      <Button
        title="ENVIAR NOTIFICAÇÃO"
        onPress={handleNotificate}
        color="#007AFF"
      />

      <Button
        title="AGENDAR NOTIFICAÇÃO"
        onPress={handleScheduleNotification}
        color="#007AFF"
      />

      <Button
        title="LISTAR NOTIFICAÇÕES"
        onPress={handleListNotifications}
        color="#007AFF"
      />

      <Button
        title="CANCELAR NOTIFICAÇÃO"
        onPress={handleCancelNotification}
        color="#007AFF"
      />

      <Button
        title="AGENDAR SEMANAL"
        onPress={handleScheduleRecurringNotification}
        color="#007AFF"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  }
})