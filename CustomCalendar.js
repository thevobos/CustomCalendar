import React, {useState} from "react";
import { Platform, Text,View, Modal, TouchableNativeFeedback } from "react-native";
import RNDateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";

const CustomCalendar = (props) => {

    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());

    React.useEffect(()=>{

        setShow(props.visible);

    },[props.visible])

    if(Platform.OS === 'ios'){
        return(
            <Modal
                animationType="slide"
                transparent={true}
                visible={show}
                onRequestClose={() => {
                    props.onClose(false);
                }}>
                <View style={{width:"100%", height:"100%",  backgroundColor:"rgba(0,0,0,0.47)", position:"relative"}} >
                    <View style={{width:"100%", minHeight: 330, backgroundColor:"white", position:"absolute", bottom:0, borderTopLeftRadius: 35, borderTopRightRadius: 35}}>
                        <View style={{paddingLeft:20, paddingRight:20, paddingTop:20 }}>
                            <RNDateTimePicker
                                themeVariant="light"
                                value={date}
                                locale="tr-TR"
                                mode={"date"}
                                display="spinner"
                                onChange={(event, selectedDate)=>{
                                    const currentDate = selectedDate || date;
                                    setDate(currentDate);
                                    props.onChange(moment(currentDate).format("MM/DD/YYYY"));
                                }}
                            />
                        </View>
                        <View style={{ marginTop:20, width:"100%", height:50, justifyContent:"center", alignItems:"center" }}>
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple('transparent')} onPress={()=>{
                                props.onClose(false)
                            }}>
                                <View style={{ width:"90%", height:50, backgroundColor:"#f4f6f7", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
                                    <Text style={{fontSize:15}}>KAPAT</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }else{
        return(<View>
            {
                show &&
                <RNDateTimePicker
                    themeVariant="light"
                    value={date}
                    locale="tr-TR"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={(event, selectedDate)=>{
                        const currentDate = selectedDate || date;
                        setDate(currentDate);
                        props.onChange(moment(currentDate).format("MM/DD/YYYY"));
                        props.onClose(false);
                    }}
                />
            }
        </View>);
    }

}

export default CustomCalendar;
