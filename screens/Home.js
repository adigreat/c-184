import React,{Component} from "react"

import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity,Platform, StatusBar,Image} from "react-native"
import{RFValue} from "react-native-responsive-fontsize"
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
    }
    render( ){
        return(
            <View style={StyleSheet.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.headingContainer}>
                    <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                    <Text style={styles.titleText1}>FR</Text><Text style={styles.titleText2}>APP</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                         <Text style={styles.subheading1}>Try Out</Text>
                         <Text style={styles.subheading2}> Cool Frames</Text> </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={{flex:0.5}}></View>
                    <Text style={styles.contentText}>Experience the virtual experience of trying out different frames from our wide collection on your mobile phone before making any purchase, just how you would in an offline store!</Text>
                </View>
                <View style={{flexDirection:"row",flex:0.25}}>
                    <View style={{flex:0.5}}>
                        <Image source={require("../assets/Frapp-03.png")} styles={{height:64,width:160}} />
                    </View>
                    <View style={{flexDirection:"row",flex:0.25}}>
                    <View style={{flex:0.5}}>
                        <Image source={require("../assets/Frapp-09.png")} styles={{height:64,width:160}} />
                    </View>
                </View>
                <View style={{flexDirection:"row",flex:0.25}}>
                    <View style={{flex:0.5}}>
                        <Image source={require("../assets/Frapp-02.png")} styles={{height:64,width:160}} />
                    </View>
                    <View style={{flexDirection:"row",flex:0.25}}>
                    <View style={{flex:0.5}}>
                        <Image source={require("../assets/Frapp-08.png")} styles={{height:64,width:160}} />
                    </View>
                </View>
                </View>
                <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}> 
                <View style={styles.button}>
                     <Text style={styles.buttonText}>Try Now!</Text> </View> </TouchableOpacity>
                </View>
            </View>
            </View>
        )
    }
    }