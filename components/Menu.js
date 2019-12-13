// import * as React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { Button, Paragraph, Menu, Divider, Provider } from 'react-native-paper';


// export default class MenuView extends React.Component {
//     state = {
//         visible: false,
//     };

//     _openMenu = () => this.setState({ visible: true });

//     _closeMenu = () => this.setState({ visible: false });

//     render() {
//         return (
//             <Provider>
//                 <View
//                     style={{
//                         paddingTop: 50,
//                         height: '100%',
//                         flexDirection: 'row'
//                     }}>
//                     <Menu
//                         style={{
//                             height: '100%',
//                             width: '80%',
//                         }}
//                         visible={this.state.visible}
//                         onDismiss={this._closeMenu}
//                         anchor={
//                             <Button onPress={this._openMenu}>Show menu</Button>
//                         }
//                     >
//                         <Menu.Item onPress={() => { }} title="Account" />
//                         <Menu.Item onPress={() => { }} title="Driver's Guide" />
//                         <Divider />
//                         <Menu.Item onPress={() => { }} title="FAQ" />
//                         <Menu.Item onPress={() => { }} title="Support" />
//                     </Menu>
//                 </View>
//             </Provider>
//         );
//     }
// }