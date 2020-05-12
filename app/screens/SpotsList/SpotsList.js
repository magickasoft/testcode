import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import I18n from 'react-native-i18n';
import { scalePressed } from '@utils/animation';
import {
  StatusBar,
  ButtonAction,
  Icon,
  Search,
  Container,
  Tab,
  CopilotStep,
  Modal,
  Filter,
  AddBusinessModal
} from '@components';
import styles, { scalingUtils, dimensions } from '@styles';
import { screens } from '@constants';
import { createScreen } from '@navigation';
import { NearbyBusinesses, MyReviews } from './containers';

const getIcons = (theme) => ({
  filter: {
    name: 'filterActive',
    size: scalingUtils.scale(18),
    color: theme.colors.activePrimary
  },
  map: {
    name: 'room',
    size: scalingUtils.scale(24),
    color: theme.colors.activePrimary
  },
  plus: {
    name: 'plus',
    color: 'white',
    size: dimensions.verticalIndent * 2.5
  }
});

const ViewScale = scalePressed(View);

const rightButtons = (theme, onPressRight, onPressLeft, icons, displayCopilot) => (
  <View style={theme.s.buttonsContainer}>
    <CopilotStep
      stepProps={displayCopilot && {
        text: I18n.t('copilot.places_filter'),
        order: 1,
        name: 'filter'
      }}
    >
      <ViewScale onPress={onPressLeft} style={theme.s.containerStyleIcon}>
        <Icon {...icons.filter} />
      </ViewScale>
    </CopilotStep>
    <CopilotStep
      stepProps={displayCopilot && {
        text: I18n.t('copilot.map_button'),
        order: 2,
        name: 'map'
      }}
    >
      <ViewScale onPress={onPressRight} style={theme.s.containerStyleIcon}>
        <Icon {...icons.map} />
      </ViewScale>
    </CopilotStep>
  </View>
);

const SpotsList = ({
  onGoToMap,
  search,
  onChangeSearch,
  filters,
  initFilters,
  onChangeFilters,
  // refs
  viewRef,
  onChangeViewRef,
  onContactAdmins,
  onSuggestAFeature,
  onGoToAddBusiness,
  theme: { s, colors },
  animation: {
    tabBarsOpacity,
    headerTranslateY,
    onScroll,
    onScrollEndDrag
  },
  displayCopilot,
  isVisibleFilterModal,
  toggleVisibleFilterModal,
  isVisibleModal,
  toggleVisibleModal
}) => {
  const routes = [{
    title: I18n.t('nearby_businesses').toUpperCase()
  }, {
    title: I18n.t('my_reviews').toUpperCase(),
    copilot: displayCopilot && {
      text: I18n.t('copilot.reviews_list'),
      order: 4,
      name: 'reviews'
    }
  }];
  const icons = getIcons({ s, colors });

  return (
    <Container style={styles.fillAll}>
      <View
        style={[styles.fillAll, { backgroundColor: colors.transparent }]}
        ref={onChangeViewRef}
      >
        <AddBusinessModal
          isVisible={isVisibleModal}
          onClose={toggleVisibleModal}
          onPress={onGoToAddBusiness}
        />
        <Modal
          withoutHeader
          isVisible={isVisibleFilterModal}
          onClose={toggleVisibleFilterModal}
          contentStyles={s.modalContent}
          type="fullScreen"
        >
          <Filter
            onClose={toggleVisibleFilterModal}
            onSuccess={onChangeFilters}
            filters={filters}
            initFilters={initFilters}
          />
        </Modal>
        <StatusBar backgroundColor={colors.statusBar} />
        <Tab
          routes={routes}
          styleContainerTopBottom={[s.tabBar, headerTranslateY]}
          styleContainerRightLeft={tabBarsOpacity}
          right={rightButtons({ s, colors }, onGoToMap, toggleVisibleFilterModal, icons, displayCopilot)}
          styleContainerPager={s.pager}
          bottom={
            <CopilotStep
              stepProps={displayCopilot && {
                text: I18n.t('copilot.search_places'),
                order: 3,
                name: 'search'
              }}
            >
              <Search
                containerStyle={s.containerSearch}
                onChangeText={onChangeSearch}
              />
            </CopilotStep>
          }
        >
          <NearbyBusinesses
            onScroll={onScroll}
            onScrollEndDrag={onScrollEndDrag}
            search={search}
            filters={filters}
          />
          <MyReviews
            onScroll={onScroll}
            onScrollEndDrag={onScrollEndDrag}
            search={search}
          />
        </Tab>
      </View>
      <ButtonAction
        buttons={[{
          title: I18n.t('spots.add_a_business'),
          icon: icons.plus,
          onPress: toggleVisibleModal
          // TODO change to modal call
        }, {
          title: I18n.t('spots.contact_admins'),
          icon: icons.plus,
          onPress: onContactAdmins
        }, {
          title: I18n.t('spots.suggest_a_feature'),
          icon: icons.plus,
          onPress: onSuggestAFeature
        }, {
          title: I18n.t('spots.coming_soon'),
          icon: icons.plus,
          onPress: () => {}
        }, {
          title: I18n.t('spots.coming_soon'),
          icon: icons.plus,
          onPress: () => {}
        }, {
          title: I18n.t('spots.coming_soon'),
          icon: icons.plus,
          onPress: () => {}
        }]}
        buttonColor={colors.activePrimary}
        viewRef={viewRef}
      />
    </Container>
  );
};
SpotsList.propTypes = {
  animation: T.shape({
    headerTranslateY: T.oneOfType([T.object, T.array]),
    onScroll: T.object,
    onScrollEndDrag: T.object,
    tabBarsOpacity: T.oneOfType([T.object, T.array])
  }),
  displayCopilot: T.bool,
  filters: T.object,
  initFilters: T.object,
  isVisibleFilterModal: T.bool,
  isVisibleModal: T.bool,
  onChangeFilters: T.func,
  onChangeSearch: T.func,
  onChangeViewRef: T.func,
  onContactAdmins: T.func,
  onGoToAddBusiness: T.func,
  onGoToMap: T.func,
  onSuggestAFeature: T.func,
  search: T.string,
  theme: T.object,
  toggleVisibleFilterModal: T.func,
  toggleVisibleModal: T.func,
  viewRef: T.object
};

export default createScreen(SpotsList, screens.SpotsList);
