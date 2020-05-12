import React from 'react';
import T from 'prop-types';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';
import I18n from 'react-native-i18n';
import { Text, Separator, Icon } from '@components';
import { ResetIcon } from '../../assets/svgs';
import { colors } from '../../styles';
import s from './styles';

const FilterDrawer = ({
  children,
  onReload,
  onClose,
  title = I18n.t('spots_filter.title')
}) => (
  <SafeAreaView style={s.contentContainer}>
    <View style={s.titleContainer}>
      <View style={s.buttons}>
        {onClose && (
          <TouchableOpacity onPress={onClose}>
            <Icon name="close" size={26} color="#373737" />
          </TouchableOpacity>
        )}
      </View>
      <Text
        type="titleNavBar"
        color={colors.textPrimary}
      >
        {title}
      </Text>
      <View style={s.buttons}>
        {onReload && (
          <TouchableOpacity onPress={onReload}>
            <ResetIcon />
          </TouchableOpacity>
        )}
      </View>
    </View>
    <Separator />
    <ScrollView>
      <TouchableHighlight>
        <TouchableWithoutFeedback>
          <View>
            {children}
          </View>
        </TouchableWithoutFeedback>
      </TouchableHighlight>
    </ScrollView>
  </SafeAreaView>
);

FilterDrawer.propTypes = {
  children: T.node,
  onClose: T.func,
  onReload: T.func,
  title: T.oneOfType([T.func, T.string])
};

export default FilterDrawer;
