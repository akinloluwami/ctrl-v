import { StyleSheet, Text, View, Platform, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../utils/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { logout } from "../api/auth/UserAuth";
import { getLinks, getTexts } from "../api/data/data";
import LinkDisplay from "../components/LinkDisplay";

export default Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [deviceToken, setDeviceToken] = useState("");
  const [JWT, setJWT] = useState("");
  const [texts, setTexts] = useState([]);
  const [links, setLinks] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getDeviceToken = async () => {
      const token = await AsyncStorage.getItem("deviceToken");
      setDeviceToken(token);
    };
    getDeviceToken();
  }),
    [deviceToken];

  useEffect(() => {
    const getJWT = async () => {
      const token = await AsyncStorage.getItem("token");
      setJWT(token);
    };
    getJWT();
  }),
    [JWT];

  const handleLogout = async () => {
    setIsLoading(true);
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("deviceToken");
    const response = await logout(deviceToken);
    if (response.status === 200) {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("deviceToken");
      setIsLoading(false);
      setTimeout(() => {
        navigation.navigate("Auth", { screen: "Login" });
      }),
        1000;
    } else {
      setIsLoading(false);
      console.log("Error @handleLogout", response.data);
    }
  };

  const getTextsData = async () => {
    const response = await getTexts(JWT, deviceToken);

    if (response.status === 200) {
      setTexts(response.data.texts);
      console.log(response.data);
    } else {
      console.log(response.data.error);
    }
  };
  const getLinksData = async () => {
    const response = await getLinks(JWT, deviceToken);
    console.log(response);
    if (response.status === 200) {
      setLinks(response.data.links);
      console.log(response.data);
    } else {
      console.log(response.data.error);
    }
  };

  // useEffect(() => {
  //   getTextsData();
  //   getLinksData();
  // }, []);

  // useEffect(() => {
  //   setData([...links, ...texts]);
  // }, [links, texts]);

  const linksData = [
    {
      link: "https://biglobe.ne.jp/metus/sapien/ut.jpg?in=porttitor&sapien=lorem&iaculis=id&congue=ligula&vivamus=suspendisse&metus=ornare",
    },
    {
      link: "https://dot.gov/in/faucibus/orci.js?rutrum=massa&neque=tempor&aenean=convallis&auctor=nulla&gravida=neque&sem=libero&praesent=convallis&id=eget&massa=eleifend&id=luctus&nisl=ultricies&venenatis=eu&lacinia=nibh&aenean=quisque&sit=id&amet=justo&justo=sit&morbi=amet&ut=sapien&odio=dignissim&cras=vestibulum&mi=vestibulum&pede=ante&malesuada=ipsum&in=primis&imperdiet=in&et=faucibus&commodo=orci&vulputate=luctus&justo=et&in=ultrices&blandit=posuere&ultrices=cubilia&enim=curae&lorem=nulla&ipsum=dapibus&dolor=dolor&sit=vel&amet=est&consectetuer=donec&adipiscing=odio&elit=justo&proin=sollicitudin&interdum=ut&mauris=suscipit&non=a&ligula=feugiat&pellentesque=et&ultrices=eros&phasellus=vestibulum&id=ac&sapien=est&in=lacinia&sapien=nisi&iaculis=venenatis&congue=tristique&vivamus=fusce&metus=congue&arcu=diam&adipiscing=id&molestie=ornare",
    },
    {
      link: "http://statcounter.com/ut.json?rutrum=faucibus&at=orci&lorem=luctus&integer=et&tincidunt=ultrices&ante=posuere&vel=cubilia&ipsum=curae&praesent=mauris&blandit=viverra&lacinia=diam&erat=vitae&vestibulum=quam&sed=suspendisse&magna=potenti&at=nullam&nunc=porttitor&commodo=lacus&placerat=at&praesent=turpis&blandit=donec&nam=posuere&nulla=metus&integer=vitae&pede=ipsum&justo=aliquam&lacinia=non&eget=mauris&tincidunt=morbi&eget=non&tempus=lectus&vel=aliquam&pede=sit&morbi=amet&porttitor=diam&lorem=in&id=magna&ligula=bibendum&suspendisse=imperdiet&ornare=nullam&consequat=orci&lectus=pede&in=venenatis&est=non&risus=sodales&auctor=sed&sed=tincidunt&tristique=eu&in=felis",
    },
    {
      link: "https://stanford.edu/turpis/donec/posuere/metus/vitae/ipsum.json?amet=pulvinar&sapien=sed&dignissim=nisl&vestibulum=nunc&vestibulum=rhoncus&ante=dui&ipsum=vel&primis=sem&in=sed&faucibus=sagittis&orci=nam&luctus=congue&et=risus&ultrices=semper&posuere=porta&cubilia=volutpat&curae=quam&nulla=pede&dapibus=lobortis&dolor=ligula&vel=sit&est=amet&donec=eleifend&odio=pede&justo=libero&sollicitudin=quis&ut=orci&suscipit=nullam&a=molestie&feugiat=nibh&et=in&eros=lectus&vestibulum=pellentesque&ac=at&est=nulla&lacinia=suspendisse&nisi=potenti&venenatis=cras&tristique=in&fusce=purus&congue=eu&diam=magna&id=vulputate&ornare=luctus&imperdiet=cum&sapien=sociis&urna=natoque&pretium=penatibus&nisl=et&ut=magnis&volutpat=dis&sapien=parturient&arcu=montes&sed=nascetur&augue=ridiculus&aliquam=mus&erat=vivamus&volutpat=vestibulum&in=sagittis&congue=sapien&etiam=cum&justo=sociis&etiam=natoque",
    },
    {
      link: "https://examiner.com/turpis/donec/posuere/metus/vitae.json?justo=dapibus&maecenas=augue&rhoncus=vel&aliquam=accumsan&lacus=tellus&morbi=nisi&quis=eu&tortor=orci&id=mauris&nulla=lacinia&ultrices=sapien",
    },
    {
      link: "https://earthlink.net/sit/amet/turpis.aspx?nisl=duis&nunc=mattis&rhoncus=egestas&dui=metus&vel=aenean&sem=fermentum&sed=donec&sagittis=ut&nam=mauris&congue=eget&risus=massa&semper=tempor&porta=convallis&volutpat=nulla&quam=neque&pede=libero&lobortis=convallis&ligula=eget&sit=eleifend&amet=luctus&eleifend=ultricies&pede=eu&libero=nibh&quis=quisque&orci=id&nullam=justo&molestie=sit&nibh=amet&in=sapien&lectus=dignissim&pellentesque=vestibulum&at=vestibulum&nulla=ante&suspendisse=ipsum&potenti=primis&cras=in&in=faucibus&purus=orci&eu=luctus&magna=et&vulputate=ultrices&luctus=posuere&cum=cubilia&sociis=curae&natoque=nulla&penatibus=dapibus&et=dolor&magnis=vel&dis=est&parturient=donec&montes=odio&nascetur=justo&ridiculus=sollicitudin&mus=ut",
    },
    {
      link: "https://about.com/duis/bibendum/felis.html?vitae=orci&mattis=luctus&nibh=et&ligula=ultrices&nec=posuere&sem=cubilia&duis=curae&aliquam=donec&convallis=pharetra&nunc=magna&proin=vestibulum&at=aliquet&turpis=ultrices&a=erat&pede=tortor&posuere=sollicitudin&nonummy=mi&integer=sit&non=amet&velit=lobortis&donec=sapien&diam=sapien&neque=non&vestibulum=mi&eget=integer&vulputate=ac&ut=neque&ultrices=duis&vel=bibendum&augue=morbi&vestibulum=non&ante=quam&ipsum=nec&primis=dui&in=luctus&faucibus=rutrum&orci=nulla&luctus=tellus&et=in&ultrices=sagittis&posuere=dui&cubilia=vel&curae=nisl&donec=duis&pharetra=ac&magna=nibh&vestibulum=fusce&aliquet=lacus&ultrices=purus&erat=aliquet",
    },
    {
      link: "http://mayoclinic.com/potenti/nullam/porttitor/lacus/at/turpis/donec.html?vehicula=sed&consequat=magna&morbi=at&a=nunc&ipsum=commodo&integer=placerat&a=praesent&nibh=blandit&in=nam&quis=nulla&justo=integer&maecenas=pede&rhoncus=justo&aliquam=lacinia&lacus=eget&morbi=tincidunt&quis=eget&tortor=tempus&id=vel&nulla=pede&ultrices=morbi&aliquet=porttitor&maecenas=lorem&leo=id&odio=ligula&condimentum=suspendisse&id=ornare&luctus=consequat&nec=lectus&molestie=in&sed=est&justo=risus&pellentesque=auctor&viverra=sed&pede=tristique&ac=in&diam=tempus&cras=sit&pellentesque=amet&volutpat=sem&dui=fusce&maecenas=consequat&tristique=nulla&est=nisl&et=nunc&tempus=nisl&semper=duis&est=bibendum&quam=felis&pharetra=sed&magna=interdum&ac=venenatis&consequat=turpis&metus=enim&sapien=blandit&ut=mi&nunc=in&vestibulum=porttitor&ante=pede&ipsum=justo&primis=eu&in=massa&faucibus=donec&orci=dapibus&luctus=duis&et=at&ultrices=velit&posuere=eu&cubilia=est&curae=congue&mauris=elementum&viverra=in&diam=hac&vitae=habitasse&quam=platea&suspendisse=dictumst&potenti=morbi&nullam=vestibulum&porttitor=velit&lacus=id&at=pretium&turpis=iaculis&donec=diam&posuere=erat&metus=fermentum&vitae=justo&ipsum=nec&aliquam=condimentum&non=neque&mauris=sapien",
    },
    {
      link: "http://elegantthemes.com/pretium/iaculis/diam/erat/fermentum/justo.jpg?phasellus=eleifend&sit=quam&amet=a&erat=odio&nulla=in&tempus=hac&vivamus=habitasse&in=platea&felis=dictumst&eu=maecenas&sapien=ut&cursus=massa&vestibulum=quis&proin=augue&eu=luctus&mi=tincidunt&nulla=nulla&ac=mollis&enim=molestie&in=lorem&tempor=quisque&turpis=ut&nec=erat&euismod=curabitur&scelerisque=gravida&quam=nisi&turpis=at&adipiscing=nibh&lorem=in&vitae=hac&mattis=habitasse&nibh=platea",
    },
    {
      link: "https://va.gov/condimentum/neque/sapien.json?fusce=fermentum&congue=donec&diam=ut&id=mauris&ornare=eget&imperdiet=massa&sapien=tempor&urna=convallis&pretium=nulla&nisl=neque&ut=libero&volutpat=convallis&sapien=eget&arcu=eleifend&sed=luctus&augue=ultricies&aliquam=eu&erat=nibh&volutpat=quisque&in=id&congue=justo&etiam=sit&justo=amet&etiam=sapien&pretium=dignissim&iaculis=vestibulum&justo=vestibulum&in=ante&hac=ipsum&habitasse=primis&platea=in&dictumst=faucibus&etiam=orci&faucibus=luctus&cursus=et&urna=ultrices&ut=posuere&tellus=cubilia&nulla=curae&ut=nulla&erat=dapibus&id=dolor&mauris=vel&vulputate=est&elementum=donec&nullam=odio&varius=justo&nulla=sollicitudin&facilisi=ut&cras=suscipit&non=a&velit=feugiat&nec=et&nisi=eros&vulputate=vestibulum&nonummy=ac&maecenas=est&tincidunt=lacinia&lacus=nisi&at=venenatis&velit=tristique&vivamus=fusce&vel=congue&nulla=diam&eget=id&eros=ornare&elementum=imperdiet&pellentesque=sapien&quisque=urna&porta=pretium&volutpat=nisl&erat=ut&quisque=volutpat&erat=sapien&eros=arcu&viverra=sed&eget=augue&congue=aliquam&eget=erat&semper=volutpat&rutrum=in&nulla=congue&nunc=etiam&purus=justo&phasellus=etiam&in=pretium&felis=iaculis&donec=justo&semper=in",
    },
    {
      link: "http://issuu.com/iaculis/justo/in/hac/habitasse/platea/dictumst.json?in=ultrices&lectus=posuere&pellentesque=cubilia&at=curae&nulla=duis&suspendisse=faucibus&potenti=accumsan&cras=odio&in=curabitur&purus=convallis&eu=duis&magna=consequat&vulputate=dui&luctus=nec&cum=nisi&sociis=volutpat&natoque=eleifend&penatibus=donec&et=ut&magnis=dolor&dis=morbi&parturient=vel&montes=lectus&nascetur=in&ridiculus=quam",
    },
    {
      link: "http://seesaa.net/suspendisse/accumsan.jsp?ultrices=placerat&erat=praesent&tortor=blandit&sollicitudin=nam&mi=nulla&sit=integer&amet=pede&lobortis=justo&sapien=lacinia&sapien=eget&non=tincidunt&mi=eget&integer=tempus&ac=vel&neque=pede&duis=morbi&bibendum=porttitor&morbi=lorem&non=id&quam=ligula&nec=suspendisse&dui=ornare&luctus=consequat&rutrum=lectus&nulla=in&tellus=est&in=risus&sagittis=auctor&dui=sed&vel=tristique&nisl=in&duis=tempus&ac=sit&nibh=amet&fusce=sem&lacus=fusce&purus=consequat&aliquet=nulla&at=nisl&feugiat=nunc&non=nisl&pretium=duis&quis=bibendum&lectus=felis&suspendisse=sed&potenti=interdum&in=venenatis&eleifend=turpis&quam=enim&a=blandit&odio=mi&in=in&hac=porttitor&habitasse=pede&platea=justo&dictumst=eu&maecenas=massa&ut=donec&massa=dapibus&quis=duis&augue=at&luctus=velit",
    },
    {
      link: "https://histats.com/aliquam.html?amet=aliquet&cursus=at&id=feugiat&turpis=non&integer=pretium&aliquet=quis&massa=lectus&id=suspendisse&lobortis=potenti&convallis=in&tortor=eleifend&risus=quam&dapibus=a&augue=odio&vel=in",
    },
    {
      link: "http://trellian.com/consequat/lectus/in/est/risus.jsp?erat=dapibus&tortor=dolor&sollicitudin=vel&mi=est&sit=donec&amet=odio&lobortis=justo&sapien=sollicitudin&sapien=ut&non=suscipit&mi=a&integer=feugiat&ac=et&neque=eros&duis=vestibulum&bibendum=ac&morbi=est&non=lacinia&quam=nisi&nec=venenatis&dui=tristique&luctus=fusce&rutrum=congue&nulla=diam&tellus=id&in=ornare&sagittis=imperdiet&dui=sapien&vel=urna&nisl=pretium&duis=nisl&ac=ut&nibh=volutpat&fusce=sapien",
    },
    {
      link: "http://discovery.com/phasellus/sit/amet.html?lacus=lacinia&morbi=erat&quis=vestibulum&tortor=sed&id=magna&nulla=at&ultrices=nunc&aliquet=commodo&maecenas=placerat&leo=praesent&odio=blandit&condimentum=nam&id=nulla&luctus=integer&nec=pede&molestie=justo&sed=lacinia&justo=eget&pellentesque=tincidunt&viverra=eget&pede=tempus&ac=vel&diam=pede&cras=morbi&pellentesque=porttitor&volutpat=lorem&dui=id&maecenas=ligula&tristique=suspendisse&est=ornare&et=consequat&tempus=lectus&semper=in&est=est&quam=risus&pharetra=auctor&magna=sed&ac=tristique&consequat=in&metus=tempus&sapien=sit&ut=amet&nunc=sem&vestibulum=fusce&ante=consequat&ipsum=nulla&primis=nisl&in=nunc&faucibus=nisl&orci=duis&luctus=bibendum",
    },
    {
      link: "https://tinypic.com/eleifend/donec/ut/dolor/morbi/vel.html?magnis=in&dis=felis&parturient=donec&montes=semper&nascetur=sapien&ridiculus=a&mus=libero&vivamus=nam&vestibulum=dui&sagittis=proin&sapien=leo&cum=odio&sociis=porttitor&natoque=id&penatibus=consequat&et=in&magnis=consequat&dis=ut&parturient=nulla&montes=sed&nascetur=accumsan&ridiculus=felis&mus=ut&etiam=at&vel=dolor&augue=quis&vestibulum=odio&rutrum=consequat&rutrum=varius&neque=integer&aenean=ac&auctor=leo&gravida=pellentesque&sem=ultrices&praesent=mattis&id=odio&massa=donec&id=vitae&nisl=nisi&venenatis=nam&lacinia=ultrices&aenean=libero&sit=non&amet=mattis&justo=pulvinar&morbi=nulla&ut=pede&odio=ullamcorper&cras=augue&mi=a&pede=suscipit&malesuada=nulla&in=elit&imperdiet=ac&et=nulla&commodo=sed&vulputate=vel&justo=enim&in=sit&blandit=amet&ultrices=nunc&enim=viverra&lorem=dapibus&ipsum=nulla&dolor=suscipit&sit=ligula&amet=in&consectetuer=lacus&adipiscing=curabitur&elit=at&proin=ipsum&interdum=ac&mauris=tellus&non=semper&ligula=interdum&pellentesque=mauris&ultrices=ullamcorper&phasellus=purus&id=sit&sapien=amet&in=nulla&sapien=quisque&iaculis=arcu&congue=libero&vivamus=rutrum&metus=ac&arcu=lobortis&adipiscing=vel",
    },
    {
      link: "https://upenn.edu/sit/amet/nunc/viverra/dapibus.jpg?lorem=congue&quisque=elementum&ut=in&erat=hac&curabitur=habitasse&gravida=platea&nisi=dictumst&at=morbi&nibh=vestibulum&in=velit&hac=id&habitasse=pretium&platea=iaculis&dictumst=diam&aliquam=erat&augue=fermentum&quam=justo&sollicitudin=nec&vitae=condimentum&consectetuer=neque&eget=sapien&rutrum=placerat&at=ante&lorem=nulla&integer=justo&tincidunt=aliquam&ante=quis&vel=turpis&ipsum=eget&praesent=elit&blandit=sodales&lacinia=scelerisque&erat=mauris&vestibulum=sit&sed=amet&magna=eros&at=suspendisse&nunc=accumsan&commodo=tortor&placerat=quis&praesent=turpis&blandit=sed&nam=ante&nulla=vivamus&integer=tortor&pede=duis&justo=mattis&lacinia=egestas&eget=metus&tincidunt=aenean&eget=fermentum&tempus=donec&vel=ut&pede=mauris&morbi=eget&porttitor=massa&lorem=tempor&id=convallis&ligula=nulla&suspendisse=neque&ornare=libero&consequat=convallis&lectus=eget&in=eleifend&est=luctus&risus=ultricies&auctor=eu&sed=nibh",
    },
    {
      link: "https://t.co/arcu/adipiscing/molestie.jsp?ut=dolor&suscipit=sit&a=amet&feugiat=consectetuer&et=adipiscing&eros=elit&vestibulum=proin&ac=risus&est=praesent&lacinia=lectus&nisi=vestibulum&venenatis=quam&tristique=sapien&fusce=varius&congue=ut&diam=blandit&id=non&ornare=interdum&imperdiet=in&sapien=ante&urna=vestibulum&pretium=ante&nisl=ipsum&ut=primis&volutpat=in&sapien=faucibus&arcu=orci&sed=luctus&augue=et&aliquam=ultrices&erat=posuere&volutpat=cubilia&in=curae&congue=duis&etiam=faucibus&justo=accumsan&etiam=odio&pretium=curabitur&iaculis=convallis&justo=duis",
    },
    {
      link: "https://parallels.com/natoque/penatibus.jpg?adipiscing=sem&elit=mauris&proin=laoreet&interdum=ut&mauris=rhoncus&non=aliquet&ligula=pulvinar&pellentesque=sed&ultrices=nisl&phasellus=nunc&id=rhoncus&sapien=dui&in=vel&sapien=sem&iaculis=sed&congue=sagittis&vivamus=nam&metus=congue&arcu=risus&adipiscing=semper&molestie=porta&hendrerit=volutpat&at=quam&vulputate=pede&vitae=lobortis&nisl=ligula&aenean=sit&lectus=amet&pellentesque=eleifend&eget=pede&nunc=libero&donec=quis&quis=orci&orci=nullam&eget=molestie&orci=nibh&vehicula=in&condimentum=lectus&curabitur=pellentesque&in=at&libero=nulla&ut=suspendisse&massa=potenti&volutpat=cras&convallis=in&morbi=purus&odio=eu&odio=magna&elementum=vulputate&eu=luctus&interdum=cum&eu=sociis&tincidunt=natoque&in=penatibus&leo=et&maecenas=magnis&pulvinar=dis&lobortis=parturient&est=montes&phasellus=nascetur&sit=ridiculus&amet=mus&erat=vivamus&nulla=vestibulum&tempus=sagittis&vivamus=sapien&in=cum&felis=sociis&eu=natoque&sapien=penatibus&cursus=et&vestibulum=magnis&proin=dis&eu=parturient&mi=montes&nulla=nascetur&ac=ridiculus&enim=mus&in=etiam&tempor=vel&turpis=augue&nec=vestibulum&euismod=rutrum&scelerisque=rutrum&quam=neque&turpis=aenean&adipiscing=auctor&lorem=gravida&vitae=sem&mattis=praesent&nibh=id&ligula=massa",
    },
    {
      link: "http://europa.eu/tempus.jpg?imperdiet=morbi&sapien=non&urna=quam&pretium=nec&nisl=dui&ut=luctus&volutpat=rutrum&sapien=nulla&arcu=tellus&sed=in&augue=sagittis&aliquam=dui&erat=vel&volutpat=nisl&in=duis&congue=ac&etiam=nibh&justo=fusce&etiam=lacus&pretium=purus&iaculis=aliquet&justo=at",
    },
    {
      link: "http://telegraph.co.uk/ipsum/primis.aspx?massa=diam&volutpat=id&convallis=ornare&morbi=imperdiet&odio=sapien&odio=urna&elementum=pretium&eu=nisl&interdum=ut&eu=volutpat&tincidunt=sapien&in=arcu&leo=sed&maecenas=augue&pulvinar=aliquam&lobortis=erat&est=volutpat&phasellus=in&sit=congue&amet=etiam&erat=justo&nulla=etiam&tempus=pretium&vivamus=iaculis&in=justo&felis=in&eu=hac&sapien=habitasse&cursus=platea&vestibulum=dictumst&proin=etiam&eu=faucibus",
    },
    {
      link: "http://wufoo.com/phasellus.js?et=luctus&eros=tincidunt&vestibulum=nulla&ac=mollis&est=molestie&lacinia=lorem&nisi=quisque&venenatis=ut&tristique=erat&fusce=curabitur&congue=gravida&diam=nisi&id=at&ornare=nibh&imperdiet=in&sapien=hac&urna=habitasse&pretium=platea&nisl=dictumst&ut=aliquam&volutpat=augue&sapien=quam&arcu=sollicitudin&sed=vitae&augue=consectetuer&aliquam=eget&erat=rutrum&volutpat=at&in=lorem&congue=integer&etiam=tincidunt&justo=ante&etiam=vel&pretium=ipsum&iaculis=praesent&justo=blandit&in=lacinia&hac=erat&habitasse=vestibulum&platea=sed&dictumst=magna&etiam=at&faucibus=nunc&cursus=commodo&urna=placerat&ut=praesent&tellus=blandit&nulla=nam&ut=nulla&erat=integer&id=pede&mauris=justo&vulputate=lacinia&elementum=eget&nullam=tincidunt&varius=eget&nulla=tempus&facilisi=vel&cras=pede&non=morbi&velit=porttitor&nec=lorem&nisi=id&vulputate=ligula&nonummy=suspendisse&maecenas=ornare&tincidunt=consequat&lacus=lectus&at=in&velit=est&vivamus=risus&vel=auctor&nulla=sed&eget=tristique&eros=in&elementum=tempus&pellentesque=sit",
    },
    {
      link: "http://netscape.com/ut/dolor/morbi/vel.png?mauris=nonummy&non=maecenas&ligula=tincidunt&pellentesque=lacus&ultrices=at&phasellus=velit&id=vivamus&sapien=vel&in=nulla&sapien=eget&iaculis=eros&congue=elementum&vivamus=pellentesque&metus=quisque&arcu=porta&adipiscing=volutpat&molestie=erat&hendrerit=quisque&at=erat&vulputate=eros&vitae=viverra&nisl=eget&aenean=congue&lectus=eget&pellentesque=semper&eget=rutrum&nunc=nulla&donec=nunc&quis=purus&orci=phasellus&eget=in&orci=felis&vehicula=donec&condimentum=semper&curabitur=sapien&in=a&libero=libero&ut=nam&massa=dui&volutpat=proin&convallis=leo&morbi=odio&odio=porttitor&odio=id&elementum=consequat&eu=in&interdum=consequat&eu=ut&tincidunt=nulla&in=sed&leo=accumsan&maecenas=felis&pulvinar=ut&lobortis=at&est=dolor&phasellus=quis&sit=odio&amet=consequat&erat=varius&nulla=integer&tempus=ac&vivamus=leo&in=pellentesque&felis=ultrices&eu=mattis&sapien=odio&cursus=donec&vestibulum=vitae&proin=nisi&eu=nam&mi=ultrices&nulla=libero&ac=non&enim=mattis&in=pulvinar&tempor=nulla&turpis=pede&nec=ullamcorper&euismod=augue&scelerisque=a&quam=suscipit&turpis=nulla&adipiscing=elit&lorem=ac&vitae=nulla&mattis=sed&nibh=vel&ligula=enim",
    },
    {
      link: "http://va.gov/faucibus/orci/luctus/et/ultrices/posuere/cubilia.js?tortor=maecenas&duis=pulvinar&mattis=lobortis&egestas=est&metus=phasellus&aenean=sit&fermentum=amet&donec=erat&ut=nulla&mauris=tempus&eget=vivamus&massa=in&tempor=felis&convallis=eu&nulla=sapien&neque=cursus&libero=vestibulum&convallis=proin&eget=eu&eleifend=mi&luctus=nulla&ultricies=ac&eu=enim&nibh=in&quisque=tempor&id=turpis&justo=nec&sit=euismod&amet=scelerisque&sapien=quam&dignissim=turpis&vestibulum=adipiscing&vestibulum=lorem&ante=vitae&ipsum=mattis&primis=nibh&in=ligula&faucibus=nec&orci=sem&luctus=duis&et=aliquam&ultrices=convallis&posuere=nunc&cubilia=proin&curae=at&nulla=turpis&dapibus=a&dolor=pede&vel=posuere&est=nonummy&donec=integer&odio=non&justo=velit&sollicitudin=donec&ut=diam&suscipit=neque&a=vestibulum&feugiat=eget&et=vulputate&eros=ut&vestibulum=ultrices&ac=vel&est=augue&lacinia=vestibulum&nisi=ante&venenatis=ipsum&tristique=primis",
    },
    {
      link: "http://macromedia.com/id/lobortis/convallis/tortor/risus.aspx?sollicitudin=aliquet&ut=massa&suscipit=id&a=lobortis&feugiat=convallis&et=tortor&eros=risus&vestibulum=dapibus&ac=augue&est=vel&lacinia=accumsan&nisi=tellus&venenatis=nisi&tristique=eu&fusce=orci&congue=mauris&diam=lacinia&id=sapien&ornare=quis&imperdiet=libero&sapien=nullam&urna=sit&pretium=amet&nisl=turpis&ut=elementum&volutpat=ligula&sapien=vehicula&arcu=consequat&sed=morbi&augue=a&aliquam=ipsum&erat=integer&volutpat=a&in=nibh&congue=in&etiam=quis&justo=justo&etiam=maecenas&pretium=rhoncus&iaculis=aliquam",
    },
    {
      link: "https://earthlink.net/mi/pede/malesuada/in.jpg?morbi=augue&non=vel&quam=accumsan&nec=tellus&dui=nisi&luctus=eu&rutrum=orci&nulla=mauris&tellus=lacinia&in=sapien&sagittis=quis&dui=libero&vel=nullam&nisl=sit&duis=amet&ac=turpis&nibh=elementum&fusce=ligula&lacus=vehicula&purus=consequat&aliquet=morbi&at=a&feugiat=ipsum&non=integer&pretium=a&quis=nibh&lectus=in&suspendisse=quis&potenti=justo&in=maecenas&eleifend=rhoncus&quam=aliquam&a=lacus&odio=morbi&in=quis&hac=tortor&habitasse=id&platea=nulla&dictumst=ultrices&maecenas=aliquet&ut=maecenas&massa=leo&quis=odio&augue=condimentum&luctus=id&tincidunt=luctus&nulla=nec&mollis=molestie&molestie=sed&lorem=justo&quisque=pellentesque&ut=viverra&erat=pede&curabitur=ac&gravida=diam&nisi=cras&at=pellentesque&nibh=volutpat&in=dui&hac=maecenas&habitasse=tristique&platea=est&dictumst=et&aliquam=tempus&augue=semper&quam=est&sollicitudin=quam&vitae=pharetra&consectetuer=magna&eget=ac&rutrum=consequat&at=metus&lorem=sapien",
    },
    {
      link: "https://google.ca/pellentesque/viverra/pede/ac/diam.json?hac=nam&habitasse=nulla&platea=integer&dictumst=pede&etiam=justo&faucibus=lacinia&cursus=eget&urna=tincidunt&ut=eget&tellus=tempus&nulla=vel&ut=pede&erat=morbi&id=porttitor&mauris=lorem&vulputate=id&elementum=ligula&nullam=suspendisse&varius=ornare&nulla=consequat&facilisi=lectus&cras=in&non=est&velit=risus&nec=auctor&nisi=sed&vulputate=tristique&nonummy=in&maecenas=tempus&tincidunt=sit&lacus=amet&at=sem&velit=fusce&vivamus=consequat&vel=nulla&nulla=nisl&eget=nunc&eros=nisl&elementum=duis&pellentesque=bibendum&quisque=felis&porta=sed&volutpat=interdum&erat=venenatis&quisque=turpis&erat=enim&eros=blandit&viverra=mi&eget=in&congue=porttitor&eget=pede&semper=justo&rutrum=eu&nulla=massa&nunc=donec&purus=dapibus&phasellus=duis&in=at&felis=velit&donec=eu&semper=est&sapien=congue&a=elementum&libero=in&nam=hac&dui=habitasse",
    },
    {
      link: "https://prlog.org/aliquam/sit.xml?aliquet=platea&at=dictumst&feugiat=morbi&non=vestibulum&pretium=velit&quis=id&lectus=pretium&suspendisse=iaculis&potenti=diam&in=erat&eleifend=fermentum&quam=justo&a=nec&odio=condimentum&in=neque&hac=sapien&habitasse=placerat&platea=ante&dictumst=nulla&maecenas=justo&ut=aliquam&massa=quis&quis=turpis&augue=eget&luctus=elit&tincidunt=sodales&nulla=scelerisque&mollis=mauris&molestie=sit&lorem=amet&quisque=eros&ut=suspendisse&erat=accumsan&curabitur=tortor&gravida=quis&nisi=turpis&at=sed&nibh=ante&in=vivamus&hac=tortor&habitasse=duis&platea=mattis&dictumst=egestas&aliquam=metus&augue=aenean&quam=fermentum&sollicitudin=donec&vitae=ut&consectetuer=mauris&eget=eget&rutrum=massa&at=tempor&lorem=convallis&integer=nulla&tincidunt=neque&ante=libero&vel=convallis&ipsum=eget&praesent=eleifend&blandit=luctus&lacinia=ultricies&erat=eu&vestibulum=nibh&sed=quisque&magna=id&at=justo",
    },
    {
      link: "http://timesonline.co.uk/sapien/ut/nunc/vestibulum.jpg?odio=consectetuer&curabitur=adipiscing&convallis=elit&duis=proin&consequat=risus&dui=praesent&nec=lectus&nisi=vestibulum&volutpat=quam&eleifend=sapien&donec=varius&ut=ut&dolor=blandit&morbi=non&vel=interdum&lectus=in&in=ante&quam=vestibulum&fringilla=ante&rhoncus=ipsum&mauris=primis&enim=in&leo=faucibus&rhoncus=orci&sed=luctus&vestibulum=et&sit=ultrices&amet=posuere&cursus=cubilia&id=curae&turpis=duis&integer=faucibus&aliquet=accumsan&massa=odio&id=curabitur&lobortis=convallis&convallis=duis&tortor=consequat&risus=dui&dapibus=nec&augue=nisi&vel=volutpat&accumsan=eleifend&tellus=donec&nisi=ut&eu=dolor&orci=morbi&mauris=vel&lacinia=lectus&sapien=in&quis=quam&libero=fringilla&nullam=rhoncus&sit=mauris&amet=enim&turpis=leo&elementum=rhoncus&ligula=sed",
    },
    {
      link: "https://sogou.com/ultrices/vel/augue/vestibulum.js?dui=id&nec=pretium&nisi=iaculis&volutpat=diam&eleifend=erat&donec=fermentum&ut=justo&dolor=nec&morbi=condimentum&vel=neque&lectus=sapien&in=placerat&quam=ante&fringilla=nulla&rhoncus=justo&mauris=aliquam&enim=quis&leo=turpis&rhoncus=eget&sed=elit&vestibulum=sodales&sit=scelerisque&amet=mauris&cursus=sit&id=amet&turpis=eros&integer=suspendisse&aliquet=accumsan&massa=tortor&id=quis&lobortis=turpis&convallis=sed&tortor=ante&risus=vivamus&dapibus=tortor&augue=duis&vel=mattis&accumsan=egestas&tellus=metus&nisi=aenean&eu=fermentum&orci=donec&mauris=ut&lacinia=mauris&sapien=eget&quis=massa&libero=tempor&nullam=convallis&sit=nulla&amet=neque&turpis=libero&elementum=convallis&ligula=eget&vehicula=eleifend&consequat=luctus&morbi=ultricies&a=eu&ipsum=nibh&integer=quisque&a=id&nibh=justo&in=sit&quis=amet&justo=sapien&maecenas=dignissim&rhoncus=vestibulum&aliquam=vestibulum&lacus=ante&morbi=ipsum&quis=primis&tortor=in&id=faucibus",
    },
    {
      link: "http://odnoklassniki.ru/duis/aliquam/convallis/nunc.jpg?nec=in&nisi=congue&vulputate=etiam&nonummy=justo&maecenas=etiam&tincidunt=pretium&lacus=iaculis&at=justo&velit=in&vivamus=hac&vel=habitasse&nulla=platea&eget=dictumst&eros=etiam&elementum=faucibus&pellentesque=cursus&quisque=urna&porta=ut&volutpat=tellus&erat=nulla&quisque=ut&erat=erat&eros=id&viverra=mauris&eget=vulputate&congue=elementum&eget=nullam&semper=varius&rutrum=nulla",
    },
    {
      link: "https://amazon.co.jp/purus/phasellus/in/felis/donec.json?et=a&ultrices=libero&posuere=nam&cubilia=dui&curae=proin&donec=leo&pharetra=odio&magna=porttitor&vestibulum=id&aliquet=consequat&ultrices=in&erat=consequat&tortor=ut&sollicitudin=nulla&mi=sed&sit=accumsan&amet=felis&lobortis=ut&sapien=at&sapien=dolor&non=quis&mi=odio&integer=consequat&ac=varius&neque=integer&duis=ac&bibendum=leo&morbi=pellentesque&non=ultrices&quam=mattis&nec=odio&dui=donec&luctus=vitae&rutrum=nisi&nulla=nam&tellus=ultrices&in=libero&sagittis=non&dui=mattis&vel=pulvinar&nisl=nulla",
    },
    {
      link: "http://jalbum.net/nonummy.aspx?consequat=sapien&lectus=a&in=libero&est=nam&risus=dui&auctor=proin&sed=leo&tristique=odio&in=porttitor&tempus=id&sit=consequat&amet=in&sem=consequat&fusce=ut&consequat=nulla&nulla=sed&nisl=accumsan&nunc=felis&nisl=ut&duis=at",
    },
    {
      link: "http://lycos.com/dui/luctus/rutrum/nulla.json?orci=suscipit&mauris=ligula&lacinia=in&sapien=lacus&quis=curabitur&libero=at&nullam=ipsum&sit=ac&amet=tellus&turpis=semper&elementum=interdum&ligula=mauris&vehicula=ullamcorper&consequat=purus",
    },
    {
      link: "https://ibm.com/ut.xml?risus=pede&auctor=justo&sed=eu&tristique=massa&in=donec&tempus=dapibus&sit=duis&amet=at&sem=velit&fusce=eu&consequat=est&nulla=congue&nisl=elementum&nunc=in&nisl=hac&duis=habitasse&bibendum=platea&felis=dictumst&sed=morbi&interdum=vestibulum&venenatis=velit&turpis=id&enim=pretium&blandit=iaculis&mi=diam&in=erat&porttitor=fermentum&pede=justo&justo=nec&eu=condimentum&massa=neque&donec=sapien&dapibus=placerat&duis=ante&at=nulla&velit=justo&eu=aliquam&est=quis&congue=turpis&elementum=eget&in=elit&hac=sodales&habitasse=scelerisque&platea=mauris&dictumst=sit&morbi=amet&vestibulum=eros&velit=suspendisse&id=accumsan&pretium=tortor&iaculis=quis&diam=turpis&erat=sed&fermentum=ante&justo=vivamus&nec=tortor&condimentum=duis&neque=mattis&sapien=egestas&placerat=metus&ante=aenean&nulla=fermentum&justo=donec&aliquam=ut&quis=mauris&turpis=eget&eget=massa&elit=tempor&sodales=convallis&scelerisque=nulla&mauris=neque&sit=libero&amet=convallis&eros=eget&suspendisse=eleifend&accumsan=luctus&tortor=ultricies&quis=eu&turpis=nibh",
    },
    {
      link: "https://opera.com/accumsan/tortor/quis/turpis/sed.json?neque=feugiat&libero=non&convallis=pretium&eget=quis&eleifend=lectus&luctus=suspendisse&ultricies=potenti&eu=in&nibh=eleifend&quisque=quam&id=a&justo=odio&sit=in&amet=hac&sapien=habitasse&dignissim=platea&vestibulum=dictumst&vestibulum=maecenas&ante=ut&ipsum=massa&primis=quis&in=augue&faucibus=luctus&orci=tincidunt&luctus=nulla&et=mollis&ultrices=molestie&posuere=lorem&cubilia=quisque&curae=ut&nulla=erat&dapibus=curabitur&dolor=gravida&vel=nisi&est=at&donec=nibh&odio=in&justo=hac&sollicitudin=habitasse&ut=platea&suscipit=dictumst&a=aliquam&feugiat=augue&et=quam&eros=sollicitudin&vestibulum=vitae&ac=consectetuer&est=eget&lacinia=rutrum&nisi=at&venenatis=lorem&tristique=integer&fusce=tincidunt&congue=ante&diam=vel&id=ipsum&ornare=praesent&imperdiet=blandit&sapien=lacinia&urna=erat&pretium=vestibulum&nisl=sed&ut=magna&volutpat=at&sapien=nunc&arcu=commodo&sed=placerat&augue=praesent&aliquam=blandit&erat=nam&volutpat=nulla&in=integer&congue=pede&etiam=justo&justo=lacinia&etiam=eget&pretium=tincidunt&iaculis=eget&justo=tempus&in=vel&hac=pede&habitasse=morbi&platea=porttitor&dictumst=lorem&etiam=id&faucibus=ligula&cursus=suspendisse&urna=ornare&ut=consequat&tellus=lectus&nulla=in&ut=est",
    },
    {
      link: "https://pbs.org/platea/dictumst/maecenas/ut.png?velit=metus&donec=sapien&diam=ut&neque=nunc&vestibulum=vestibulum&eget=ante&vulputate=ipsum&ut=primis",
    },
    {
      link: "http://aboutads.info/interdum/mauris.jsp?augue=in&luctus=leo&tincidunt=maecenas&nulla=pulvinar&mollis=lobortis&molestie=est&lorem=phasellus&quisque=sit&ut=amet&erat=erat&curabitur=nulla&gravida=tempus&nisi=vivamus&at=in&nibh=felis&in=eu",
    },
    {
      link: "http://t.co/condimentum/id/luctus/nec/molestie/sed/justo.html?in=potenti&eleifend=nullam&quam=porttitor&a=lacus&odio=at&in=turpis&hac=donec&habitasse=posuere&platea=metus&dictumst=vitae&maecenas=ipsum&ut=aliquam&massa=non&quis=mauris&augue=morbi&luctus=non&tincidunt=lectus&nulla=aliquam&mollis=sit&molestie=amet&lorem=diam&quisque=in&ut=magna&erat=bibendum&curabitur=imperdiet&gravida=nullam&nisi=orci&at=pede&nibh=venenatis&in=non&hac=sodales&habitasse=sed&platea=tincidunt&dictumst=eu&aliquam=felis&augue=fusce&quam=posuere&sollicitudin=felis&vitae=sed&consectetuer=lacus&eget=morbi&rutrum=sem&at=mauris&lorem=laoreet&integer=ut&tincidunt=rhoncus&ante=aliquet&vel=pulvinar&ipsum=sed&praesent=nisl&blandit=nunc&lacinia=rhoncus&erat=dui&vestibulum=vel&sed=sem&magna=sed&at=sagittis&nunc=nam&commodo=congue&placerat=risus&praesent=semper&blandit=porta&nam=volutpat&nulla=quam&integer=pede&pede=lobortis&justo=ligula&lacinia=sit&eget=amet&tincidunt=eleifend&eget=pede",
    },
    {
      link: "https://shutterfly.com/nulla.jpg?adipiscing=rutrum&elit=nulla&proin=tellus&interdum=in&mauris=sagittis&non=dui&ligula=vel&pellentesque=nisl&ultrices=duis&phasellus=ac&id=nibh&sapien=fusce&in=lacus&sapien=purus&iaculis=aliquet&congue=at&vivamus=feugiat&metus=non&arcu=pretium&adipiscing=quis&molestie=lectus&hendrerit=suspendisse&at=potenti&vulputate=in&vitae=eleifend&nisl=quam&aenean=a&lectus=odio&pellentesque=in&eget=hac&nunc=habitasse&donec=platea&quis=dictumst&orci=maecenas&eget=ut&orci=massa",
    },
    {
      link: "https://infoseek.co.jp/pretium.json?aliquam=nisl&augue=nunc&quam=rhoncus&sollicitudin=dui&vitae=vel&consectetuer=sem&eget=sed&rutrum=sagittis&at=nam&lorem=congue&integer=risus&tincidunt=semper&ante=porta&vel=volutpat&ipsum=quam&praesent=pede&blandit=lobortis&lacinia=ligula&erat=sit&vestibulum=amet&sed=eleifend&magna=pede&at=libero&nunc=quis&commodo=orci&placerat=nullam&praesent=molestie&blandit=nibh&nam=in&nulla=lectus&integer=pellentesque&pede=at&justo=nulla&lacinia=suspendisse&eget=potenti&tincidunt=cras&eget=in&tempus=purus&vel=eu&pede=magna&morbi=vulputate&porttitor=luctus&lorem=cum&id=sociis&ligula=natoque&suspendisse=penatibus&ornare=et&consequat=magnis&lectus=dis&in=parturient&est=montes&risus=nascetur&auctor=ridiculus&sed=mus&tristique=vivamus&in=vestibulum&tempus=sagittis&sit=sapien",
    },
    {
      link: "http://privacy.gov.au/eget/orci/vehicula/condimentum/curabitur/in/libero.png?lorem=eleifend&vitae=pede&mattis=libero&nibh=quis&ligula=orci&nec=nullam&sem=molestie&duis=nibh&aliquam=in&convallis=lectus&nunc=pellentesque&proin=at&at=nulla&turpis=suspendisse&a=potenti&pede=cras&posuere=in&nonummy=purus&integer=eu&non=magna&velit=vulputate&donec=luctus&diam=cum&neque=sociis&vestibulum=natoque&eget=penatibus&vulputate=et&ut=magnis&ultrices=dis&vel=parturient&augue=montes&vestibulum=nascetur&ante=ridiculus&ipsum=mus&primis=vivamus&in=vestibulum&faucibus=sagittis&orci=sapien&luctus=cum&et=sociis&ultrices=natoque&posuere=penatibus&cubilia=et&curae=magnis&donec=dis&pharetra=parturient&magna=montes&vestibulum=nascetur&aliquet=ridiculus&ultrices=mus&erat=etiam&tortor=vel&sollicitudin=augue&mi=vestibulum&sit=rutrum&amet=rutrum&lobortis=neque&sapien=aenean&sapien=auctor&non=gravida&mi=sem&integer=praesent&ac=id&neque=massa&duis=id&bibendum=nisl&morbi=venenatis&non=lacinia&quam=aenean&nec=sit&dui=amet&luctus=justo&rutrum=morbi&nulla=ut&tellus=odio&in=cras&sagittis=mi&dui=pede&vel=malesuada&nisl=in&duis=imperdiet&ac=et&nibh=commodo&fusce=vulputate&lacus=justo",
    },
    {
      link: "http://vkontakte.ru/ipsum/integer/a/nibh.png?at=porttitor&feugiat=pede&non=justo&pretium=eu&quis=massa&lectus=donec&suspendisse=dapibus&potenti=duis&in=at&eleifend=velit&quam=eu&a=est&odio=congue&in=elementum&hac=in&habitasse=hac&platea=habitasse&dictumst=platea&maecenas=dictumst&ut=morbi&massa=vestibulum&quis=velit&augue=id&luctus=pretium&tincidunt=iaculis&nulla=diam&mollis=erat&molestie=fermentum&lorem=justo&quisque=nec&ut=condimentum&erat=neque&curabitur=sapien&gravida=placerat&nisi=ante&at=nulla&nibh=justo&in=aliquam&hac=quis&habitasse=turpis&platea=eget",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {linksData.map((link, i) => (
          <LinkDisplay key={i} link={link.link} />
        ))}
        {/* {data
        ?.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((d, index) => {
          if (d.type == "link") {
            return <LinkDisplay link={d.link} />;
          } else {
            return <Text>Hellooooo</Text>;
          }
        })} */}
        {/* <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
        <Text style={styles.text}>
          {isLoading ? "Logging out..." : "Logout"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("logging...");
          getLinksData();
          // getTextsData();
        }}
      >
        <Text style={styles.text}>Break?</Text>
      </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 50 : 0,
    backgroundColor: colors.background,
    marginHorizontal: 20,
    width: "100%",
  },
  button: {
    marginTop: 20,
    backgroundColor: colors.accent,
    alignItems: "center",
    color: colors.text,
    padding: 10,
    borderRadius: 5,
    width: 150,
  },
  text: {
    color: colors.text,
    fontSize: 18,
  },
});
