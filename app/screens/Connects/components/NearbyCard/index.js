/* eslint-disable */
/**
 * @flow
 */
import React from 'react'
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
  Animated
} from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { IconVector, Text } from '../../../../components'
import { colors } from '../../../../styles';

const { width } = Dimensions.get('window')
const ANIMATION_DURATION = 500
const CARD_HEIGHT = 300

/*
 * We use flow type to validate the Props of the component
 */
type Props = {
  // Whether to autofocus the first field
  list: String,
  onStartChat: Function,
  onLike: Function,
  onClose: Function,
  item: { id: number, uri: string }
}

class NearbyCard extends React.Component<Props> {
  _animated = new Animated.Value(0);

  componentDidMount () {
    Animated.timing(this._animated, {
      toValue: 1,
      duration: ANIMATION_DURATION
    }).start()
  }

  removeCard = () => {
    const { list, onClose, item: { id } } = this.props

    Animated.timing(this._animated, {
      toValue: 0,
      duration: ANIMATION_DURATION
    }).start(() => onClose(id, list))
  }

  render () {
    const {
      onLike,
      onStartChat,
      item: {
        uri
      }
    } = this.props

    let height = {
      height: this._animated.interpolate({
        inputRange: [0, 1],
        outputRange: [0, CARD_HEIGHT],
        extrapolate: 'clamp'
      })
    }

    let margin = {
      margin: this._animated.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 10],
        extrapolate: 'clamp'
      })
    }

    // animated background doesn't work as expected because of external uri
    return (
      <Animated.View style={[height, margin]}>
        <ImageBackground style={styles.container} source={{ uri }}>
          <View style={styles.header}>
            <View>
              <Text style={styles.text}>For the first time</Text>
              <Text style={styles.time}>1 day ago</Text>
            </View>
            <TouchableOpacity onPress={this.removeCard}>
              <IconVector active name={'close'} style={styles.closeIcon} />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.name}>John Smith, <Text style={styles.age}>27</Text></Text>
            <Text style={styles.position}>CFO at Alpari Capital</Text>

            <View style={styles.buttons}>
              <TouchableOpacity style={[styles.button, styles.border]} onPress={onLike}>
                <IconVector active name={'heart'} style={styles.likeIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={onStartChat}>
                <IconVector active name={'wechat'} style={styles.chatIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </Animated.View>
    )
  }
}

// const mapStateToProps = state => ({
//   // ui: state.get('ui')
// })

export default compose(
  connect(null, null/* mapStateToProps, uiActions */)
  // graphql(CreateEventMutation, { name: 'createEvent' }),
  // reduxForm({ form: 'Event' })
)(NearbyCard)


const BUTTON_BACKGROUND_DISABLED_COLOR = '#cccccc';
const LIST_ARROW_ICON_COLOR  = '#999999';
const TOAST_WARNING_BACKGROUND_COLOR = '#f0ad4e';
const BORDER_COLOR_DARK = '#999';

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 10,
    height: CARD_HEIGHT,
    marginVertical: 3,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: BUTTON_BACKGROUND_DISABLED_COLOR,
    justifyContent: 'space-between',
    // borderWidth: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
    backgroundColor: colors.transparent,
  },
  time: {
    fontSize: 14,
    color: colors.white,
    backgroundColor: colors.transparent,
  },
  closeIcon: {
    fontSize: 20,
    color: LIST_ARROW_ICON_COLOR,
    backgroundColor: colors.transparent,
    // paddingBottom: 30,
    // paddingLeft: 30
  },
  name: {
    fontSize: 23,
    fontWeight: '500',
    color: colors.white,
    paddingHorizontal: 10,
    backgroundColor: colors.transparent,
  },
  age: {
    fontSize: 23,
    fontWeight: '500',
    color: colors.white,
    backgroundColor: colors.transparent,
  },
  position: {
    fontSize: 16,
    // fontWeight: '500',
    paddingHorizontal: 10,
    color: colors.white,
    backgroundColor: colors.transparent,
    marginBottom: 10
  },

  buttons: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 25,
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  border: {
    borderRightWidth: 1,
    borderRightColor: BORDER_COLOR_DARK
  },
  likeIcon: {
    fontSize: 25,
    color: colors.error,
  },
  chatIcon: {
    fontSize: 25,
    color: TOAST_WARNING_BACKGROUND_COLOR
  }
})
