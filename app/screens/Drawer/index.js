/* eslint-disable */
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { connect } from 'react-redux'
import { compose } from 'recompose'

import { colors } from '../../styles';
import screensConfig from '../../navigation/screenConfig';
import screens from '../../constants/screens';
import { Text } from '../../components';

class Drawer extends React.Component {
  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      side: 'left'
    })
  }

  render () {
    const currentUser = null;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {currentUser ? currentUser.email : 'Not logged-in'}
        </Text>
      </View>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

Drawer.options = screensConfig[screens.Drawer];

export default compose(
  connect(mapStateToProps)
)(Drawer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundColor,
  },
  text: {
    color:colors.textPrimary,
  }
})
