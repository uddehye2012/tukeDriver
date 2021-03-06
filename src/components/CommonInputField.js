import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {w, h, fs} from '../config/index';
import {colors} from '../constants';
const CommonInputField = props => {
  const {
    placeholder,
    value,
    onChangeText,
    maxLength,
    keyboardType,
    onFocus,
    warning = false,
    warningTitle = '',
    secureTextEntry ,
    ...remainingProps
    
  } = props;
  return (
    <View>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={styles.inputField}
        keyboardType={keyboardType}
        selectionColor={colors.hex_f66820}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        maxLength ={maxLength}
        onFocus = {onFocus}
        {...remainingProps}
      />
          {warning ? <Text style={styles.textWarning}>{warningTitle}</Text> : null}
    </View>
  );
};

export default CommonInputField;

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: colors.hex_f2f2f2,
    height: h(6),
    width:w(90),
    alignSelf: 'center',
    paddingLeft:w(4)
  },
  textWarning: {color: 'red',  marginLeft: w(5)},
});
