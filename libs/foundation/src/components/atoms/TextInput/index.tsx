import React from 'react';
import { Control, Controller, FieldValues, RegisterOptions } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import {
  TextInput as MaterialTextInput,
  TextInputProps as MaterialTextInputProps,
  HelperText as MaterialHelperText,
} from 'react-native-paper';

type TextInputProps = {
  name: string;
  fullWidth?: boolean;
  rules:
    | Omit<
        RegisterOptions<FieldValues, string>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
  control: Control<FieldValues> | undefined;
  placeholder?: string;
} & MaterialTextInputProps;

const TextInput: React.FC<TextInputProps> = ({ name, control, rules, placeholder, fullWidth }) => {
  return (
    <View style={[styles.container, fullWidth ? styles.fullWidth : undefined]}>
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          const onChangeHandler = (text: string) => {
            onChange(text);
            // additional actions
          };
          return (
            <>
              <MaterialTextInput
                value={value}
                maxLength={100}
                mode={'outlined'}
                selectionColor={'#000'}
                style={styles.textInput}
                placeholder={placeholder}
                outlineColor={error ? 'red' : 'transparent'}
                onChangeText={onChange}
                activeOutlineColor={'transparent'}
              />
              {error && <MaterialHelperText type={'error'}>{error.message}</MaterialHelperText>}
            </>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  fullWidth: {
    width: '100%',
  },
  textInput: {
    /* text input classes */
    borderRadius: 4,
  },
});

export default TextInput;
