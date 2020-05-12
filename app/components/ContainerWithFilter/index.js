import React from 'react';
import T from 'prop-types';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import Filter from '../Filter';
import { colors, dimensions } from '../../styles';

const ViewScreen = ({
  drawerRef,
  onSuccess,
  filters,
  children,
  ...props
}) => (
  <DrawerLayout
    ref={drawerRef}
    drawerWidth={dimensions.windowWidth * 0.9}
    drawerPosition={DrawerLayout.positions.Right}
    drawerType="front"
    drawerBackgroundColor={colors.backgroundSecondary}
    drawerLockMode="locked-closed"
    renderNavigationView={() => (
      <Filter
        onSuccess={onSuccess}
        filters={filters}
      />
    )}
    {...props}
  >
    {children}
  </DrawerLayout>
);

ViewScreen.propTypes = {
  children: T.node,
  drawerRef: T.func,
  filters: T.object,
  onSuccess: T.func
};

export default ViewScreen;
