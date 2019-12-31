import React from 'react';
import {withNavigation} from 'react-navigation';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, Image} from 'react-native';
import {Container, GoBack} from './styles';

import logo from '~/assets/logo-header.png';

const Header = ({navigation, isGoBack, page}) => {
  return (
    <Container>
      {isGoBack ? (
        <GoBack
          onPress={() => {
            navigation.navigate(page);
          }}>
          <Icon name="chevron-left" size={30} color="#ee4e62" />
        </GoBack>
      ) : (
        <View />
      )}
      <Image source={logo} resizeMode="contain" />
    </Container>
  );
};

Header.propTypes = {
  isGoBack: PropTypes.bool,
  page: PropTypes.string,
};

Header.defaultProps = {
  isGoBack: false,
  page: '',
};

export default withNavigation(Header);
