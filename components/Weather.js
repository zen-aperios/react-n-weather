import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/WeatherConditions';

const Weather = ({ weather, temperature, location, description}) => {
  return (
    <View style={styles.chiefContainer}>
      
      <View style={[styles.weatherContainer,
        { backgroundColor: weatherConditions[weather].color_1 }
      ]}>
          <View style={styles.locationContainer}>
            <Text style={[styles.location,
              { color: weatherConditions[weather].surface_color }
            ]}>
              {location}
            </Text>
          </View>
          
          <View style={styles.headerContainer}>
            <MaterialCommunityIcons
              size={72}
              name={weatherConditions[weather].icon}
              color={weatherConditions[weather].surface_color }
    
            />
            <Text style={[styles.tempText,
              { color: weatherConditions[weather].surface_color }
            ]}>
              {temperature}˚
            </Text>
          </View>
        </View>
        
        <View style={[styles.bodyContainer,
          { backgroundColor: weatherConditions[weather].color_2 }
        ]}>
          <Text style={[styles.title,
              { color: weatherConditions[weather].surface_color }
          ]}>
              {weatherConditions[weather].title}: 
               {description}
          </Text>
          <Text style={[styles.quote,
              { color: weatherConditions[weather].surface_color }
          ]}>
            {weatherConditions[weather].quote}
          </Text>
        </View>

    </View>

  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string
};

const styles = StyleSheet.create({
  chiefContainer: {
    flex: 1
  },
  weatherContainer: {
    flex: 2,
    paddingBottom: 30
  },
  locationContainer: {
    alignItems: 'center',
    marginBottom: 30
  },
  location: {
    alignItems: 'center',
    fontSize: 26,
    color: '#fff',
    marginTop: 30
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignContent: 'flex-start'
  },
  tempText: {
    alignItems: 'center',
    fontSize: 72,
    color: '#fff'
  },


  bodyContainer: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 25,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    paddingTop: 25,
    fontWeight: 'bold'
  },
  quote: {
    fontSize: 65,
    color: '#fff',
    paddingTop: 25,
    fontWeight: 'bold'
  }


});

export default Weather;
