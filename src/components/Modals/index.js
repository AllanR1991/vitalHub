import { KeyboardAvoidingView, Modal, Platform, Text, View } from "react-native"
import { Container, ContainerMargin, ContainerScrollView } from "../Conatainer"
import { Description, TextLabel, TextLabelBlack, TextQuickSandRegular, Title } from "../Texts/style"
import { ButtonDefault, ButtonSelectGreen } from "../Buttons"
import { LinkUnderlineDefault } from "../Links"
import * as Notifications from 'expo-notifications'
import { ImageUser } from "../Images/style"
import { InputGreen } from "../Inputs/styled"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


Notifications.requestPermissionsAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  })
})

export const ModalCancel = ({
  showModalCancel,
  consultSelect,
  data,
  setShowModalCancel
}) => {

  const handleCallNotifications = async () => {
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== 'granted') {
      alert('Você não habilitou, receber notificação no app.');
      return;
    }

    // const token = await Notifications.getExpoPushTokenAsync();
    // console.log(token)

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Consulta cancelada',
        body: 'Consulta com o Dr. Allan foi cancelada, favor reagendar.'
      },
      trigger: null
    })
  }

  return (

    <Modal
      transparent={true}
      visible={showModalCancel}
      statusBarTranslucent={true}
      onRequestClose={() => setShowModalCancel(false)}
    >
      <Container
        $justContent="center"
        $bgColor="rgba(0,0,0,0.3)"
      >
        <ContainerMargin
          $width="90%"
          $height="310px"
          $borderRadius={10}
          $bgColor="#FFF"
        //$pd="28px 30px"
        >
          <Title>
            Cancelar consulta
          </Title>
          <ContainerMargin $width="80%" $mt={15}>
            <Description>
              Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?
            </Description>
          </ContainerMargin>

          <ContainerMargin $mt={30} $gap={30} $width="80%">
            <ButtonDefault textButton="Confirmar" onPress={() => {
              handleCallNotifications()
              setShowModalCancel(false)
              // const index = data.findIndex(paciente => paciente.id === consultSelect.id);
              // if (index !== -1){
              //   data[index].statusConsult = 'Canceladas'
              // }
            }} />

            <LinkUnderlineDefault onPress={() => {
              setShowModalCancel(false)
            }}>
              Cancelar
            </LinkUnderlineDefault>
          </ContainerMargin>

        </ContainerMargin>
      </Container>
    </Modal>

  )
}

export const ModalMedicalRecord = ({
  navigation,
  consultSelect,
  setShowModalMedicalRecord,
  showModalMedicalRecord,
}) => {

  return (
    <Modal
      transparent={true}
      visible={showModalMedicalRecord}
      statusBarTranslucent={true}
      onRequestClose={() => { setShowModalMedicalRecord(false) }}
    >
      <Container
        $justContent="center"
        $bgColor="rgba(0,0,0,0.3)"
      >
        <ContainerMargin
          $width="90%"
          $borderRadius={10}
          $bgColor="#FFF"
        >
          <ContainerMargin $mt={30}>
            <ImageUser source={consultSelect.photo !== undefined ? { uri: consultSelect.photo } : require('../../assets/images/NotImage.svg')} $width="90%" $height="181px" />
          </ContainerMargin>
          <ContainerMargin $mt={20} $width="100%">
            <Title>
              {consultSelect.name}
            </Title>
          </ContainerMargin>
          <ContainerMargin $width="80%" $mt={18} $fd="row" $justContent="space-around">
            <TextQuickSandRegular>
              {consultSelect.age}
            </TextQuickSandRegular>
            <TextQuickSandRegular>
              {consultSelect.email}
            </TextQuickSandRegular>
          </ContainerMargin>

          <ContainerMargin $mt={30} $mb={20} $gap={30} $width="80%">
            <ButtonDefault textButton="Inserir prontuário" onPress={() => {
              setShowModalMedicalRecord(false)
              navigation.navigate('MedicalRecord', consultSelect);
            }} />

            <LinkUnderlineDefault onPress={() => {
              setShowModalMedicalRecord(false)
            }}>
              Cancelar
            </LinkUnderlineDefault>
          </ContainerMargin>

        </ContainerMargin>
      </Container>
    </Modal>
  )
}

export const ModalScheduleAppointment = ({
  setShowModalScheduleAppointment,
  showModalScheduleAppointment
}) => {
  return (
    <Modal
      transparent={true}
      visible={showModalScheduleAppointment}
      statusBarTranslucent={true}
      onRequestClose={() => { setShowModalScheduleAppointment(false) }}
      propagateSwipe={true}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
        // extraScrollHeight={100}
        showsVerticalScrollIndicator={false}
      >

        <Container
          $width='100%'
          $bgColor="rgba(0,0,0,0.3)"
          $justContent="flex-end"
        >

          <ContainerMargin
            $width="100%"
            $bgColor="#FFF"

            style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          >

            <ContainerMargin $mt={30}>
              <Title>Agendar consulta</Title>
            </ContainerMargin>

            <ContainerMargin $mt={17} $width="80%" $alingItens="flex-start">
              <TextLabelBlack>Qual o nível da consulta</TextLabelBlack>

              <ContainerMargin $fd="row" $justContent="space-between" $mt={10} $width="100%">
                <ButtonSelectGreen texto={'Rotina'} />
                <ButtonSelectGreen texto={'Exame'} />
                <ButtonSelectGreen texto={'Urgência'} />
              </ContainerMargin>
            </ContainerMargin>

            <ContainerMargin $width="80%" $mt={20} $alingItens="flex-start">
              <TextLabelBlack>Informe a localização desejada</TextLabelBlack>
              <InputGreen placeholder="Informe a localização"></InputGreen>
            </ContainerMargin>

            

            <ContainerMargin $mt={143} $mb={35} $gap={30} $width="80%">
              <ButtonDefault textButton="Inserir prontuário" />

              <LinkUnderlineDefault
                onPress={()=> setShowModalScheduleAppointment(false)}
              >
                Cancelar
              </LinkUnderlineDefault>
            </ContainerMargin>
          </ContainerMargin>
        </Container>
      </KeyboardAwareScrollView>
    </Modal>

  )
}
