import React, { PureComponent, Fragment } from 'react';
import Config from 'react-native-config';
import { ScrollView, View, Text, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { withProps } from 'recompose';
import T from 'prop-types';
import I18n from 'react-native-i18n';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import CalendarEvents from 'react-native-calendar-events';
import Toast from 'react-native-root-toast';
import Highlighter from 'react-native-highlight-words';
import { CalendarList } from 'react-native-calendars';
import FastImage from 'react-native-fast-image';
import { date } from '@utils/helpers';
import { eventsOperations } from '@modules/events';
import {
  Input,
  Button,
  CustomHeader,
  BackBtn,
  Container,
  PickerSelect,
  Touchable,
  Modal,
  KeyboardAvoidingWrapper,
  Icon,
  CopilotStep, OptionsModal
} from '@components';
import { screens, eventCategories, places, postEventStatus } from '@constants';
import { createScreen } from '@navigation';
import { getCalendarTheme, markedDatesTheme } from './utils';

const TextInput = withProps({
  autoCapitalize: 'none',
  type: 'auth'
})(Input);

class CreateEditEvent extends PureComponent {
  static propTypes = {
    address: T.string,
    calendars: T.array,
    category: T.number,
    data: T.object,
    description: T.string,
    displayCopilot: T.bool,
    eventDate: T.oneOfType([T.instanceOf(Date), T.string]),
    eventTime: T.string,
    getRef: T.func,
    image: T.string,
    isEdit: T.bool,
    isOptionsModalVisible: T.bool,
    isReadyToSubmit: T.bool,
    isVisibleAddressModal: T.bool,
    isVisibleTimePicker: T.bool,
    location: T.object,
    navigator: T.object,
    onChangeAddress: T.func,
    onChangeCategory: T.func,
    onChangeDescription: T.func,
    onChangeEventDate: T.func,
    onChangeEventTime: T.func,
    onChangeLocation: T.func,
    onChangeSearch: T.func,
    onChangeTitle: T.func,
    onChangeUtcOffset: T.func,
    onDeleteEvent: T.func,
    openPhotoUploader: T.any,
    predefinePlaces: T.array,
    search: T.string,
    setCalendars: T.func,
    setIdRef: T.func,
    theme: T.object,
    title: T.string,
    toggleVisibleAddressModal: T.func,
    toggleVisibleOptionsModal: T.func,
    toggleVisibleTimePicker: T.func,
    utcOffset: T.number
  };

  static defaultProps = {};


  // eslint-disable-next-line class-methods-use-this
  get addTime() {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    const oneDay = 1000 * 60 * 60 * 24;
    return offset > 0 ? oneDay : 0;
  }

  saveEvent = (calendarId = undefined) => {
    const { title, address, description, eventDate, eventTime, utcOffset } = this.props;
    // const eDate = date.toFormat(new Date(Number(eventDate) + this.addTime));
    const timezoneOffsetOfEvent = date.timezoneOffsetOfEvent({ date: eventDate, time: eventTime, utcOffset });

    return CalendarEvents.saveEvent(title, {
      calendarId,
      title,
      startDate: timezoneOffsetOfEvent,
      endDate: timezoneOffsetOfEvent,
      notes: description,
      description,
      location: address
    });
  };

  sendToCalendar = async (data) => {
    const { calendars, navigator } = this.props;
    try {
      const res = await CalendarEvents.authorizeEventStore();
      if (res === 'authorized') {
        const currentCalendar = calendars.find((o) => (o.title === data || o.title === data[0]));
        Toast.show('Added to Calendar!', {
          duration: Toast.durations.SHORT,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 1500
        });
        await this.saveEvent(currentCalendar?.id);
      }
      navigator.pop();
    } catch (e) {
      //
    }
  };

  toggleVisibleOptionsModal = async () => {
    const { setCalendars, toggleVisibleOptionsModal } = this.props;
    try {
      const res = await CalendarEvents.authorizeEventStore();
      if (res === 'authorized') {
        const calendars = await CalendarEvents.findCalendars();
        const data = calendars
          .map((o) => ({
            icon: 'calendarRange',
            label: o.title,
            title: o.title,
            chevronHide: true,
            onPress: () => this.sendToCalendar(o.title),
            id: o.id
          }));
        await setCalendars(data);
        toggleVisibleOptionsModal();
      }
    } catch (e) {
      //
    }
  };

  onSubmit = async (fromBack = false) => {
    const {
      isReadyToSubmit,
      isEdit,
      category,
      title,
      description,
      utcOffset,
      address,
      location,
      eventDate,
      eventTime,
      data,
      navigator,
      ...props
    } = this.props;
    const isReady = ((!fromBack && isReadyToSubmit) || isEdit);
    const status = isReady ? postEventStatus.ACTIVE : postEventStatus.IS_DRAFT;
    const input = {
      category_id: category,
      status,
      title,
      description,
      utc_offset: utcOffset,
      address,
      ...(location ? {
        place_location: {
          lng: location.longitude || location.lng,
          lat: location.latitude || location.lat
        }
      } : {}),
      ...(isReadyToSubmit
        ? {
          event_date: date.toFormat(new Date(Number(eventDate) + this.addTime)),
          event_time: eventTime
        }
        : {}
      )
    };
    await eventsOperations.updateEvent({
      mutate: props.updateEvent,
      variables: {
        id: props.eventId || data.id,
        input
      }
    });
    Keyboard.dismiss();
    if (isReadyToSubmit) {
      Alert.alert('', 'Would you like to add the event to your calendar ?', [
        { text: 'Discard', onPress: () => navigator.pop() },
        { text: 'Yes, add!', onPress: () => this.toggleVisibleOptionsModal() }
      ]);
    }
  };

  render() {
    const {
      isEdit,
      onChangeTitle,
      title,
      image,
      description,
      onChangeDescription,
      isReadyToSubmit,
      getRef,
      setIdRef,
      theme: { s, colors },
      category,
      onChangeCategory,
      onChangeEventDate,
      eventDate,
      onChangeEventTime,
      isVisibleTimePicker,
      toggleVisibleTimePicker,
      eventTime,
      address,
      onChangeAddress,
      onChangeLocation,
      isVisibleAddressModal,
      toggleVisibleAddressModal,
      search,
      onChangeSearch,
      predefinePlaces,
      onDeleteEvent,
      openPhotoUploader,
      onChangeUtcOffset,
      displayCopilot,
      isOptionsModalVisible,
      calendars,
      toggleVisibleOptionsModal,
      navigator
    } = this.props;
    const now = new Date();
    const offset = now.getTimezoneOffset();
    const [hours, minutes, seconds] = eventTime.split(':');
    const time = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), hours, minutes, seconds);
    const eTime = eventTime ? date.toFormat(time, date.time) : '';

    const predefinedAddresses = predefinePlaces.map((o) => ({
      description: { main_text: o.title, secondary_text: o.address, utc_offset: o?.utc_offset },
      geometry: { location: o.location }
    }));

    const handleDayPress = (day) => {
      onChangeEventDate(day.timestamp.toString());
    };
    const markedDates = eventDate
      // eslint-disable-next-line max-len
      ? { [`${date.toFormat(new Date(Number(eventDate) + (offset * 1000 * 60)))}`]: markedDatesTheme({ s, colors }) }
      : {};
    const headerTitle = isEdit ? I18n.t('events.label.edit') : I18n.t('events.label.create');
    const handlePress = () => {
      if (!isEdit) {
        this.onSubmit(true);
      }
    };
    const isReady = isReadyToSubmit && !isOptionsModalVisible;
    return (
      <Container style={s.container}>
        <OptionsModal
          isVisible={isOptionsModalVisible}
          options={calendars}
          onClose={() => {
            toggleVisibleOptionsModal();
            navigator.pop();
          }}
        />
        <CustomHeader
          leftComponent={<BackBtn handlePress={handlePress} />}
          centerComponent={{ text: title.length > 0 ? title : headerTitle }}
          rightComponent={!isEdit && (
            <Icon
              style={s.icon}
              name="remove"
              size={30}
              onPress={onDeleteEvent}
              color={colors.black}
            />
          )}
        />
        <ScrollView>
          <View style={s.head}>
            {image && (
              <FastImage
                source={{ uri: image, priority: FastImage.priority.high }}
                style={s.image}
              />
            )}
            {!image && (
              <View style={s.inner}>
                <CopilotStep
                  stepProps={displayCopilot && {
                    text: I18n.t('copilot.addPhoto'),
                    order: 1,
                    name: 'addPhoto'
                  }}
                >
                  <TouchableOpacity style={s.camera} onPress={openPhotoUploader}>
                    <Icon
                      style={s.icon}
                      name="addCart"
                      size={30}
                      color={colors.white}
                    />
                    <Text style={s.cameraText}>ADD PHOTO</Text>
                  </TouchableOpacity>
                </CopilotStep>
              </View>
            )}
            {image && (
              <View style={s.right}>
                <TouchableOpacity style={s.edit} onPress={openPhotoUploader}>
                  <Icon
                    style={s.icon}
                    name="edit"
                    size={21}
                    color={colors.black}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={s.wrapper}>
            <Touchable onPress={toggleVisibleAddressModal}>
              <View pointerEvents="box-only">
                <TextInput
                  containerStyle={s.containerInput}
                  secondContainerStyle={s.secondContainerInput}
                  label={`${I18n.t('events.label.address')}:`}
                  id="address"
                  placeholder={I18n.t('events.label.address')}
                  value={address}
                />
              </View>
            </Touchable>
            <PickerSelect
              label={`${I18n.t('events.label.category')}:`}
              placeholder={{}}
              items={eventCategories}
              onValueChange={onChangeCategory}
              value={category}
            />
            <TextInput
              containerStyle={s.containerInput}
              secondContainerStyle={s.secondContainerInput}
              label={`${I18n.t('events.label.title')}:`}
              id="title"
              placeholder={I18n.t('events.label.title')}
              onChangeText={onChangeTitle}
              value={title}
              authFocus
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => getRef('description').focus()}
            />
            <TextInput
              containerStyle={s.containerInput}
              label={`${I18n.t('events.label.description')}:`}
              id="description"
              placeholder={I18n.t('events.label.description')}
              onChangeText={onChangeDescription}
              value={description}
              inputRef={setIdRef}
              multiline
              style={s.textArea}
              secondContainerStyle={s.containerTextArea}
            />
            <Touchable onPress={toggleVisibleTimePicker}>
              <View pointerEvents="box-only">
                <TextInput
                  containerStyle={s.containerInput}
                  secondContainerStyle={s.secondContainerInput}
                  editable={false}
                  id={I18n.t('events.label.time')}
                  label={`${I18n.t('events.label.time')}:`}
                  placeholder={I18n.t('events.label.time')}
                  placeholderStyle={s.labelStyle}
                  value={eTime}
                  returnKeyType="done"
                  inputRef={setIdRef}
                  onSubmitEditing={() => isReady && this.onSubmit(false)}
                />
              </View>
            </Touchable>
            <DateTimePicker
              mode="time"
              isVisible={isVisibleTimePicker}
              onConfirm={(value) => {
                onChangeEventTime(date.toFormat(value, 'HH:mm:ss'));
                toggleVisibleTimePicker();
              }}
              onCancel={toggleVisibleTimePicker}
            />
          </View>
          <CalendarList
            theme={getCalendarTheme({ s, colors })}
            markingType="period"
            scrollEnabled
            pagingEnabled
            horizontal
            firstDay={1}
            pastScrollRange={12}
            futureScrollRange={12}
            current={date.toFormat(eventDate ? new Date(Number(eventDate)) : new Date())}
            markedDates={markedDates}
            minDate={date.toFormat(new Date())}
            onDayPress={handleDayPress}
          />
        </ScrollView>
        <Modal
          isVisible={isVisibleAddressModal}
          onClose={toggleVisibleAddressModal}
          contentStyles={s.modalContent}
          type="fullScreen"
        >
          <KeyboardAvoidingWrapper style={s.flex} keyboardVerticalOffset={20}>
            <GooglePlacesAutocomplete
              textInputProps={{ onChangeText: onChangeSearch }}
              placeholder="Search"
              minLength={2}
              autoFocus
              returnKeyType="search"
              keyboardAppearance="light"
              listViewDisplayed="auto"
              fetchDetails
              renderRow={(rowData) => {
                const data = rowData.structured_formatting || rowData.description;
                return (
                  <View style={s.rowData}>
                    {data
                      ? (
                        <Fragment>
                          <Highlighter
                            autoEscape
                            highlightStyle={s.highlightStyle}
                            searchWords={[search]}
                            textToHighlight={data.main_text}
                          />
                          <Text style={s.secondary} ellipsizeMode="tail" numberOfLines={1}>
                            {data.secondary_text}
                          </Text>
                        </Fragment>
                      )
                      : (
                        <Text style={s.main} ellipsizeMode="tail" numberOfLines={1}>
                          {rowData.formatted_address || rowData.name}
                        </Text>
                      )}
                  </View>
                );
              }}
              onPress={(data, details = null) => {
                const {
                  formatted_address: fAddress,
                  geometry,
                  name,
                  description: dName,
                  utc_offset: utcOffset
                } = details;
                const line = fAddress ? `${name}, ${fAddress}` : `${dName.main_text}, ${dName.secondary_text}`;
                onChangeAddress(line);
                onChangeLocation(geometry?.location);
                onChangeUtcOffset(utcOffset || dName?.utc_offset);
                toggleVisibleAddressModal();
              }}
              getDefaultValue={() => address}
              query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: Config.DIRECTION_API_KEY,
                language: date.getDateLocale(),
                types: places.types
              }}
              styles={{
                textInputContainer: s.textInputContainer,
                textInput: s.textInput,
                row: s.row
              }}
              currentLocation={false}
              nearbyPlacesAPI="GooglePlacesSearch" // GoogleReverseGeocoding or GooglePlacesSearch
              GooglePlacesSearchQuery={{
                // GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                rankby: 'distance',
                type: places.types
              }}
              GooglePlacesDetailsQuery={{
                // GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                fields: ['formatted_address', 'address_component', 'geometry']
              }}
              predefinedPlaces={predefinedAddresses}
              debounce={500}
            />
          </KeyboardAvoidingWrapper>
        </Modal>
        <Button
          title={isEdit ? I18n.t('events.button.save') : I18n.t('events.button.create')}
          titleStyle={s.button}
          containerStyle={s.containerButton}
          containerDisabled={s.disabled}
          onPress={() => this.onSubmit(false)}
          disabled={!isReady}
        />
      </Container>
    );
  }
}

export default createScreen(CreateEditEvent, screens.CreateEditEvent);
