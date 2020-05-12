import React, { Fragment } from 'react';
import Config from 'react-native-config';
import { View, Text } from 'react-native';
import { withProps } from 'recompose';
import T from 'prop-types';
import CountryPicker from 'react-native-country-picker-modal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Highlighter from 'react-native-highlight-words';
import { date } from '@utils/helpers';
import {
  Input,
  Container,
  CustomHeader,
  BackBtn,
  Modal,
  KeyboardAvoidingWrapper,
  Touchable
} from '@components';
import { screens, places } from '@constants';
import { createScreen } from '@navigation';

const TextInput = withProps({
  autoCapitalize: 'none',
  type: 'auth'
})(Input);

const AddBusiness = ({
  theme: { s, colors },
  onChangeName,
  name,
  onSubmit,
  country,
  setRefCountryPicker,
  isReadyToSubmit,
  changeCountry,
  getRef,
  setIdRef,
  onChangeAddress,
  address,
  onChangeEmail,
  email,
  isVisibleAddressModal,
  toggleVisibleAddressModal,
  search,
  onChangeSearch,
  onChangeLocation,
  onChangeUtcOffset,
  onChangeWhyUs,
  whyUs
}) => (
  <Container>
    <CustomHeader
      leftComponent={<BackBtn />}
      backgroundColor={colors.backgroundPrimary}
      centerComponent={{ text: 'ADD BUSINESS' }}
      rightComponent={{
        icon: 'check', color: '#000', onPress: onSubmit
      }}
    />
    <KeyboardAwareScrollView style={s.container}>
      <CountryPicker
        ref={setRefCountryPicker}
        closeable
        style={s.countryPicker}
        onChange={changeCountry}
        cca2={country.cca2}
        translation="eng"
      >
        <View pointerEvents="box-only">
          <TextInput
            editable={false}
            id="country"
            placeholder="Country"
            value={country.name}
            returnKeyType="next"
            inputRef={setIdRef}
          />
          <View style={s.countryPicker}>
            {CountryPicker.renderFlag(country.cca2)}
          </View>
        </View>
      </CountryPicker>
      <Touchable onPress={toggleVisibleAddressModal}>
        <View pointerEvents="box-only">
          <TextInput
            id="address"
            placeholder="Address"
            value={address}
          />
        </View>
      </Touchable>
      <TextInput
        id="name"
        placeholder="Name"
        autoComplete="name"
        onChangeText={onChangeName}
        value={name}
        authFocus
        returnKeyType="next"
        blurOnSubmit={false}
        inputRef={setIdRef}
        onSubmitEditing={() => getRef('email').focus()}
      />
      <TextInput
        id="email"
        keyboardType="email-address"
        placeholder="Email"
        onChangeText={onChangeEmail}
        value={email}
        autoComplete="email"
        returnKeyType="next"
        inputRef={setIdRef}
        onSubmitEditing={() => getRef('whyUs').focus()}
      />
      <TextInput
        id="whyUs"
        placeholder="Why do you want us to add this location?"
        onChangeText={onChangeWhyUs}
        value={whyUs}
        authFocus
        returnKeyType="done"
        inputRef={setIdRef}
        onSubmitEditing={() => isReadyToSubmit && onSubmit()}
      />
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
              onChangeUtcOffset(utcOffset);
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
            debounce={500}
          />
        </KeyboardAvoidingWrapper>
      </Modal>
    </KeyboardAwareScrollView>
  </Container>
);

AddBusiness.propTypes = {
  address: T.string,
  changeCountry: T.func,
  country: T.object,
  email: T.string,
  getRef: T.func,
  isReadyToSubmit: T.bool,
  isVisibleAddressModal: T.bool,
  name: T.string,
  onChangeAddress: T.func,
  onChangeEmail: T.func,
  onChangeLocation: T.func,
  onChangeName: T.func,
  onChangeSearch: T.func,
  onChangeUtcOffset: T.func,
  onChangeWhyUs: T.func,
  onSubmit: T.func,
  search: T.string,
  setIdRef: T.func,
  setRefCountryPicker: T.func,
  theme: T.object,
  toggleVisibleAddressModal: T.func,
  whyUs: T.string
};

export default createScreen(AddBusiness, screens.AddBusiness);
