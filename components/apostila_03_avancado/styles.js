import { cloneElement } from 'react';
import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    backgroundColor: '#F5F5F5', 
    padding: 8, 
  }, 
  paragraph: {
    margin: 24, 
    fontSize: 26, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#9E9E9E', 
  }, 
  button: {
    backgroundColor: '#9E9E9E', 
    height: 70,     
    justifyContent: 'center',     
  }, 
  textButton: {
    fontSize: 50, 
    color: '#fff', 
    textAlign: 'center', 
  }, 
  counter: {
    borderWidth: 4, 
    borderColor: '#9E9E9E', 
    padding: 8,  
    paddingHorizontal: 60, 
    marginTop: 8, 
    justifyContent: 'center',
  }, 
  textCounter: {
    fontSize: 32, 
    color: '#424242', 
    textAlign: 'center',    
    fontWeight: 'bold', 
    padding: 8, 
  }, 
  horizontal: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignContent: 'center', 
    margin: 10, 
    padding: 10
  }, 
  botaoSinal: {
    width: 80, 
    marginHorizontal: 27 
  }
});

export default styles;