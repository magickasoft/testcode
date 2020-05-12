import React from 'react';
import T from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import I18n from 'react-native-i18n';
import Slider from '../Slider';
import Switch from '../Switch';
import Separator from '../Separator';
import Text from '../Text';
import Button from '../Button';
import FilterContainer from '../FilterContainer';
import { dimensions } from '../../styles';
import style from './styles';
import { withTheme } from '../../utils/enhancers';
import { places } from '../../utils/helpers';
import { filter } from '../../constants';

const SLIDER_WIDTH = dimensions.windowWidth * 0.75;

// eslint-disable-next-line
const Label = ({ containerStyle, s, ...props }) => (
  <View style={[s.label, containerStyle]}>
    <Text type="name" {...props} />
  </View>
);

// eslint-disable-next-line
const RadioButton = ({ colors, s, isActive, containerStyle, titleStyle, ...props}) => (
  <Button
    type="filter"
    containerStyle={[
      s.radioButton,
      isActive && s.radioButtonActive,
      containerStyle
    ]}
    titleStyle={[s.titleStyleRadioButton, titleStyle]}
    color={isActive ? colors.white : colors.activePrimary}
    {...props}
  />
);

const Filter = ({
  // list,
  onReload,
  onClose,
  formData: {
    sortBy,
    // ownership,
    offersDeals,
    rewardsProgram,
    // virtualBusiness,
    // category1,
    // category2,
    freelancerFriendly,
    maxDistance,
    category
  },
  sendForm,
  updateFormData,
  updateFormDataWithVibration,
  // formErrors,
  theme: {
    s,
    colors
  }
}) => {
  const sortParams = [{
    name: I18n.t('spots_filter.sort_distance'),
    enum: filter.sortBy.CLOSEST
  }, {
    name: I18n.t('spots_filter.sort_rating'),
    enum: filter.sortBy.RATING
  }, {
    name: I18n.t('spots_filter.sort_reviews'),
    enum: filter.sortBy.REVIEWS_COUNT
  }];

  const switchers = [{
    title: I18n.t('spots_filter.freelancer'),
    value: freelancerFriendly,
    onValueChange: updateFormDataWithVibration('freelancerFriendly', !freelancerFriendly)
  }, {
    title: I18n.t('spots_filter.offers'),
    value: offersDeals,
    onValueChange: updateFormDataWithVibration('offersDeals', !offersDeals)
  }, {
    title: I18n.t('spots_filter.rewards'),
    value: rewardsProgram,
    onValueChange: updateFormDataWithVibration('rewardsProgram', !rewardsProgram)
  }];

  return (
    <FilterContainer
      onReload={onReload}
      onClose={onClose}
    >
      <View style={s.filterContainer}>
        <Label s={s}>{I18n.t('spots_filter.sort_by')}</Label>
        <View style={s.sortBy}>
          {sortParams.map((el) => (
            <RadioButton
              s={s}
              colors={colors}
              key={el.enum}
              containerStyle={s.sortByItem}
              title={el.name}
              isActive={sortBy === el.enum}
              titleStyle={s.sortByTitle}
              onPress={updateFormData('sortBy', el.enum)}
            />))}
        </View>
      </View>
      <Separator />
      <View style={s.filterContainer}>
        <Label s={s}>{I18n.t('spots_filter.category')}</Label>
        <View style={[s.radioButtonContainer, s.category]}>
          {places.getCategoriesList().map((item, i) => {
            const isActive = category.includes(i + 1);

            return (
              <RadioButton
                s={s}
                colors={colors}
                containerStyle={s.margin}
                key={item}
                title={item}
                isActive={isActive}
                onPress={
                  isActive
                    ? updateFormData('category', category.filter((el) => el !== i + 1))
                    : updateFormData('category', [...category, i + 1])
                }
              />);
          })}
        </View>
      </View>
      <Separator />
      <View style={s.filterContainer}>
        <Label s={s}>{I18n.t('spots_filter.highlight')}</Label>
        {switchers.map(({ title, ...el }) => (
          <View key={title} style={s.switcher}>
            <Text type="name" style={s.highlightText}>{title}</Text>
            <Switch {...el} />
          </View>
        ))}
      </View>
      <Separator />
      <View style={s.filterContainer}>
        <Label s={s} containerStyle={s.distanceLabelContainer}>{I18n.t('spots_filter.distance')}</Label>
        <Slider
          initialValues={[maxDistance]}
          sliderLength={SLIDER_WIDTH}
          onValuesChange={(v) => {
            updateFormData('maxDistance', v[0])();
          }}
          min={filter.distance.min}
          max={filter.distance.max}
          step={1}
          allowOverlap
          snapped
          selectedStyle={s.slider}
          markerStyle={s.sliderMarker}
          showCurrentValueOne={(value) => {
            if (value === 500) {
              return I18n.t('spots_filter.all_distance');
            }

            return value;
          }}
        />
      </View>
      <TouchableOpacity onPress={sendForm}>
        <View style={s.applyButton}>
          <Text style={s.applyButtonText}>
            {I18n.t('spots_filter.apply_filter')}
          </Text>
        </View>
      </TouchableOpacity>
    </FilterContainer>
  );
};

Filter.propTypes = {
  // list: T.array,
  formData: T.shape({
    category: T.array,
    freelancerFriendly: T.bool,
    maxDistance: T.number,
    offersDeals: T.bool,
    rewardsProgram: T.bool,
    sortBy: T.string
  }),
  onClose: T.func,
  onReload: T.func,
  sendForm: T.func,
  theme: T.object,
  updateFormData: T.func,
  updateFormDataWithVibration: T.func
  // formErrors: T.object,
};

export default withTheme(style)(Filter);
