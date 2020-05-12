import React, { PureComponent, Fragment } from 'react';
import T from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import CalendarEvents from 'react-native-calendar-events';
import I18n from 'react-native-i18n';
import Animated from 'react-native-reanimated';
import Toast from 'react-native-root-toast';
import { date } from '@utils/helpers';
import {
  BackgroundSlider,
  Container,
  Header,
  Icon,
  Map,
  Divider,
  Badge,
  FlatList,
  AnimatedTitle,
  OptionsModal
} from '@components';
import { screens, eventStatus, eventCategories, parallax } from '@constants';
import { createScreen } from '@navigation';
import { Group, Line, Button } from './components';

const PLACEHOLDER_PLACE = 'https://rusintegrator.ru/wp-content/themes/nevia/images/shop-01.jpg';

const renderStatus = (props, index) => <Button key={index} {...props} />;

const renderLine = (props, index) => <Line key={index} {...props} />;

const renderGroup = (props, index) => <Group key={index} {...props} />;


class Event extends PureComponent {
  static propTypes = {
    animation: T.shape({
      animatedButton: T.object,
      animatedTitle: T.object,
      colorHeader: T.object,
      colorTitle: T.object,
      onScroll: T.object,
      opacityImage: T.object,
      opacityTitle: T.object,
      opacityTitleSecond: T.object,
      scaleImage: T.object
    }),
    calendars: T.array,
    data: T.object,
    isMyEvent: T.bool,
    isOptionsModalVisible: T.bool,
    loading: T.object,
    onChangeEventGoingStatus: T.func,
    onChangeViewRef: T.func,
    onDeleteEvent: T.func,
    onGoToMapEvents: T.func,
    onGoToProfile: T.func,
    onOpenEditEvent: T.func,
    setCalendars: T.func,
    setFlatListRef: T.func,
    theme: T.object,
    toggleVisibleOptionsModal: T.func
  };

  static defaultProps = {};

  saveEvent = (calendarId = undefined) => {
    const {
      data: { title, address, description, event_date: eDate, event_time: eTime, utc_offset: utcOffset }
    } = this.props;
    const timezoneOffsetOfEvent = date.timezoneOffsetOfEvent({ date: eDate, time: eTime, utcOffset });

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
    const { calendars } = this.props;
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

  render() {
    const {
      animation: { onScroll, opacityTitle, opacityTitleSecond, opacityImage, scaleImage, colorTitle, colorHeader },
      data,
      theme: { colors, s },
      isMyEvent,
      onOpenEditEvent,
      onDeleteEvent,
      onChangeEventGoingStatus,
      onGoToProfile,
      onGoToMapEvents,
      onChangeViewRef,
      setFlatListRef,
      loading,
      isOptionsModalVisible,
      toggleVisibleOptionsModal,
      calendars
    } = this.props;

    const {
      category_id: catId,
      myVisitStatus,
      place_location: pLocation,
      image = PLACEHOLDER_PLACE,
      event_time: eventTime,
      event_date: eventDate,
      address,
      people,
      profile
    } = data;
    const userProfile = (o) => ({ ...o.profile, onPress: onGoToProfile });
    const category = eventCategories.find((o) => o.value === catId);
    const currentStatus = eventStatus({ isAction: false }).find((o) => o.value === myVisitStatus);
    const prepareStatuses = eventStatus().map((o) => o.value).some((v) => v === myVisitStatus)
      ? eventStatus().filter((o) => o.value !== myVisitStatus)
      : eventStatus().filter((o) => o.value !== 3);

    const now = new Date();
    const [hours, minutes, seconds] = eventTime ? eventTime.split(':') : [];
    const time = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), hours, minutes, seconds);
    const eTime = eventTime ? date.toFormat(time, date.time) : '';
    const eDate = eventDate ? `${date.toFormatMessageFuture(Number(eventDate))}, ` : '';

    const items = [
      { label: `${eDate}${eTime}`, name: 'clock', isLoading: loading.data },
      { label: address, name: 'pin', isLoading: loading.data }
    ].filter((e) => !!e.label);
    const groups = [
      {
        color: 'green',
        label: I18n.t('events.label.attendees'),
        people: people?.filter((o) => o.value === 10).map(userProfile)
      },
      {
        label: I18n.t('events.label.maybe'),
        people: people?.filter((o) => o.value === 5).map(userProfile)
      },
      {
        label: I18n.t('events.label.organizer'),
        people: [{ ...profile, onPress: onGoToProfile }]
      }
    ];
    const statuses = prepareStatuses.map((o) => ({ ...o, onPress: onChangeEventGoingStatus(o.value) }));

    return (
      <Container>
        <View style={s.root} ref={onChangeViewRef}>
          <OptionsModal
            isVisible={isOptionsModalVisible}
            options={calendars}
            onClose={toggleVisibleOptionsModal}
          />
          <Header
            rounded
            backgroundColor={colorHeader}
            statusBarColor={colorHeader}
            color={colors.black}
            colorTitle={colors.white}
            titleStyle={{ opacity: opacityTitleSecond }}
            title={data?.title}
            drawUnderNavBar
            shadow={false}
            absolute
            rightComponent={
              <View style={s.row}>
                <TouchableOpacity
                  style={s.icon}
                  onPress={this.toggleVisibleOptionsModal}
                >
                  <Icon
                    style={{ left: 2 }}
                    name="calendar"
                    size={20}
                    color={colors.black}
                  />
                </TouchableOpacity>
                {isMyEvent && (
                  <Fragment>
                    <TouchableOpacity
                      style={s.icon}
                      onPress={onOpenEditEvent}
                    >
                      <Icon
                        style={{ left: 2 }}
                        name="edit"
                        size={21}
                        color={colors.black}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={s.icon}
                      onPress={onDeleteEvent}
                    >
                      <Icon
                        name="remove"
                        size={24}
                        color={colors.black}
                      />
                    </TouchableOpacity>
                  </Fragment>
                )}
              </View>
            }
          />
          <FlatList
            flatListRef={setFlatListRef}
            onScroll={onScroll}
            ItemSeparatorComponent={null}
            ListHeaderComponent={
              <View style={s.eventContent}>
                <View style={s.backgroundSlider}>
                  <View>
                    <BackgroundSlider
                      height={parallax.BACKGROUND_IMAGE_HEIGHT}
                      uris={[image]}
                      containerStyle={{ opacity: opacityTitle }}
                      imageStyle={[s.image, { opacity: opacityImage }]}
                      carouselStyle={{ transform: [{ scale: scaleImage }] }}
                    />
                    {category && (
                      <Badge
                        style={s.categoryBadge}
                        textStyle={s.badgeText}
                        value={category.label}
                      />
                    )}
                    {currentStatus && (
                      <Badge
                        style={s.statusBadge}
                        textStyle={s.badgeText}
                        value={currentStatus.label}
                      />
                    )}
                  </View>
                  <Animated.View style={[s.content, { opacity: opacityTitle }]}>
                    <AnimatedTitle
                      isLoading={loading.data}
                      title={data?.title}
                      titleStyle={{ ...s.title, color: colorTitle }}
                    />
                    <Divider />
                    <AnimatedTitle
                      isLoading={loading.data}
                      title={data?.description}
                      titleStyle={{ ...s.description, color: colorTitle }}
                    />
                  </Animated.View>
                </View>
                <View style={s.content}>
                  <View style={s.btns}>
                    {statuses.map(renderStatus)}
                  </View>
                  <Divider />
                  {items.map(renderLine)}
                  <Divider />
                  {groups.map(renderGroup)}
                  <Divider />
                </View>
                <Map
                  type="min"
                  data={[{
                    id: 0,
                    location: pLocation,
                    title: data?.title,
                    description: address
                  }]}
                  height={parallax.TABS_HEIGHT}
                  initialRegion={pLocation}
                  onPress={onGoToMapEvents}
                  isLoading={loading.data}
                />
              </View>
            }
          />
        </View>
      </Container>
    );
  }
}

export default createScreen(Event, screens.Event);
