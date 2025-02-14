import React, { useState, useRef } from "react";
import {
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "./styles";
import { Screens, PublicStackParamList } from "../../../routes/types";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "MEET YOUR COACH,\nSTART YOUR JOURNEY",
    image: require("../../../assets/images/step1.png"),
  },
  {
    id: "2",
    title: "CREATE A WORKOUT PLAN\nTO STAY FIT",
    image: require("../../../assets/images/step2.png"),
  },
  {
    id: "3",
    title: "ACTION IS THE\nKEY TO ALL SUCCESS",
    image: require("../../../assets/images/step1.png"),
  },
];

export function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<PublicStackParamList>>();

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / width;
    setCurrentIndex(Math.round(index));
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      navigation.navigate(Screens.Welcome);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>

      {currentIndex === slides.length - 1 && (
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Start Now</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
