import React, { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import { Header, ImageCard } from './components'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  const [data, setData] = useState('')
  const IMAGEDATA = {
    image: 'https://forums.realax.ru/saveimages/2021/04/22/tcuhzs1dhesfeutserzsxwrn.jpg',
    name: 'Hello World'
  }
  const fetchData = async () => {
    try {
      const response = await fetch('https://s3.eu-central-1.wasabisys.com/ghashtag/RNForKids/00-Init/data.json')
      const json = await response.json()
      setData(json)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <NavigationContainer>
      <FlatList
        ListHeaderComponent={<Header title="STAR GATE" />}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        numColumns={2}
        data={data}
        renderItem={({ item }) => <ImageCard data={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </NavigationContainer>
  )
}

export default App
