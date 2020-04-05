import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#d4d5d6',
    margin: 10,
    padding: 8,
    color: 'tomato',
    borderRadius: 8,
    fontSize: 18,
    fontWeight: '500',
  },
  inputFocused: {
    width: 350,
    height: 55,
    backgroundColor: '#d4d5d6',
    margin: 10,
    padding: 8,
    color: 'tomato',
    borderColor: 'tomato',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
