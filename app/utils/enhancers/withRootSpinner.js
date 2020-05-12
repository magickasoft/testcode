import { branch, compose, nest, renderComponent } from 'recompose';
import R from 'ramda';

import { RootSpinner, Container } from '../../components';

export default (
  callback = R.prop('isLoading')
) => compose(
  branch(
    callback,
    renderComponent(nest(Container, RootSpinner))
  ),
);


// import React from 'react';
// import { StyleSheet } from 'react-native';
// import R from 'ramda';
//
// import { RootSpinner, Container } from '../../components';
//
// const s = StyleSheet.create({
//   spinner: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     right: 0,
//     left: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
//
// export default (callBack = R.prop('isLoading')) => Component => props => (
//   <Container>
//     <Component {...props} />
//     {callBack(props) && (
//       <Container style={s.spinner}>
//         <RootSpinner />
//       </Container>
//     )}
//   </Container>
// );
