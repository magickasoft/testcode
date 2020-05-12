import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import I18n from 'react-native-i18n';
import {
  ButtonAction,
  IconVector,
  ContainerWithFilter,
  Container,
  Tab,
} from '../../components';
import styles, { colors, scalingUtils } from '../../styles';
import { Listings, Citizens, Fans } from './containers';
import { HeaderProfileSelector } from '../../containers';

import s from './style';
import { scalePressed } from '../../utils/animation';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';

const routes = [{
  key: '0',
  title: I18n.t('listings'),
}, {
  key: '1',
  title: I18n.t('citizens'),
}, {
  key: '2',
  title: I18n.t('favs'),
}];

const icons = {
  filter: {
    type: 'Feather',
    name: 'filter',
    size: scalingUtils.scale(19),
    color: colors.backgroundPrimary,
  },
  map: {
    type: 'Entypo',
    name: 'map',
    size: scalingUtils.scale(19),
    color: colors.backgroundPrimary,
  },
};

const IconScale = scalePressed(IconVector);

const RoomsList = ({
  viewRef,
  onChangeViewRef,
  isVisibleFilter,
  onToggleVisibleFilter,
  onGoToMap,
  onPressLeft,
  onPressRight,
  filters,
  ...props
}) => (
  <ContainerWithFilter
    isVisibleFilter={isVisibleFilter}
    onChangeVisibleFilter={onToggleVisibleFilter}
    filters={filters}
    onSuccess={() => null}
  >
    <Container style={styles.fillAll}>
      <View
        style={[styles.fillAll, { backgroundColor: colors.transparent }]}
        ref={onChangeViewRef}
      >
        <HeaderProfileSelector
          profiles
          title={I18n.t('rooms_&_bnb')}
          backButton
          containerStyle={s.withoutBorder}
        >
          <View style={s.buttonsContainer}>
            <IconScale
              onPress={onToggleVisibleFilter}
              containerStyle={s.containerStyleIcon}
              {...icons.filter}
            />
            <IconScale
              onPress={onGoToMap}
              containerStyle={s.containerStyleIcon}
              {...icons.map}
            />
          </View>
        </HeaderProfileSelector>
        <Tab
          styleContainerTopBottom={s.tabBar}
          routes={routes}
        >
          <Listings num={1} {...props} />
          <Citizens num={2} {...props} />
          <Fans num={3} {...props} />
        </Tab>
      </View>
      <ButtonAction viewRef={viewRef} />
    </Container>
  </ContainerWithFilter>
);

RoomsList.propTypes = {
  viewRef: T.object,
  navigator: T.object,
  isVisibleFilter: T.bool,
  onChangeViewRef: T.func,
  onToggleVisibleFilter: T.func,
  onGoToMap: T.func,
  onPressLeft: T.func,
  onPressRight: T.func,
  filters: T.object,
};

export default createScreen(RoomsList, screens.RoomsList);
